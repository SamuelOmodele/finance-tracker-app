/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import SetFinanceDataModal from "@/components/Modals/SetFinanceDataModal";
import LoadingSpinner from "@/components/Shared/LoadingSpinner";
import { Button } from "@/components/ui/button";
import { Transaction } from "@/lib/types";
import React, { createContext, useContext, useEffect, useState } from "react";

type FinanceData = {
    name: string;
    monthlyIncome: number;
};

type FinanceContextType = {
    financeData: FinanceData | null;
    transactions: Transaction[];
    totalExpenses: number;
    categoryExpenses: Record<string, number>;
    setFinanceData: (data: FinanceData) => void;
    addTransaction: (transaction: Omit<Transaction, "id">) => void;
    budgetLimit: number;
    editBudgetLimit: (value: number) => void;
    clearData: () => void;
};

const FinanceContext = createContext<FinanceContextType | null>(null);

export const FinanceProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [financeData, setFinanceDataState] = useState<FinanceData | null>(null);
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [budgetLimit, setBudgetLimit] = useState<number>(0);
    const [openModal, setOpenModal] = useState(false)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedFinance = localStorage.getItem("financeData");
        const storedTransactions = localStorage.getItem("transactions");
        const storedBudgetLimit = localStorage.getItem("budgetLimit");

        if (!storedFinance) {
            setOpenModal(true);
            setLoading(false);
            return;
        }
        if (storedFinance) {
            setFinanceDataState(JSON.parse(storedFinance));
        }

        if (storedTransactions) {
            setTransactions(JSON.parse(storedTransactions));
        }

        if(storedBudgetLimit){
            setBudgetLimit(Number(storedBudgetLimit));
        }

        setLoading(false);
    }, []);

    const setFinanceData = (data: FinanceData) => {
        localStorage.setItem("financeData", JSON.stringify(data));
        setFinanceDataState(data);
    };

    const addTransaction = (transaction: Omit<Transaction, "id">) => {
        const newId = transactions.length > 0
            ? Math.max(...transactions.map(t => t.id)) + 1
            : 1;

        const newTransaction: Transaction = {
            ...transaction,
            id: newId,
        };

        const updatedTransactions = [...transactions, newTransaction];

        setTransactions(updatedTransactions);

        localStorage.setItem("transactions", JSON.stringify(updatedTransactions));
    };

    const totalExpenses = transactions.reduce(
        (sum, transaction) => sum + transaction.amount,
        0
    );

    const categoryExpenses = transactions.reduce<Record<string, number>>(
        (acc, transaction) => {
            const category = transaction.category;

            if (!acc[category]) {
                acc[category] = 0;
            }

            acc[category] += transaction.amount;

            return acc;
        },
        {}
    );

    const editBudgetLimit = (value: number) => {
        setBudgetLimit(value);
        localStorage.setItem("budgetLimit", String(value));
    }

    const clearData = () => {
        localStorage.removeItem("financeData");
        localStorage.removeItem("transactions");

        setFinanceDataState(null);
        setTransactions([]);

        setOpenModal(true);
    };

    return (
        <FinanceContext.Provider
            value={{
                financeData,
                transactions,
                totalExpenses,
                categoryExpenses,
                setFinanceData,
                addTransaction,
                budgetLimit,
                editBudgetLimit,
                clearData,
            }}
        >
            <SetFinanceDataModal
                openModal={openModal}
                setOpenModal={setOpenModal}
            />
            {loading ?
                <div className="font-poppins w-full h-dvh flex items-center justify-center">
                    <LoadingSpinner />
                </div>
                :
                financeData ?
                    children
                    :
                    <div className="w-full h-dvh flex items-center justify-center">
                        <Button onClick={() => setOpenModal(true)} className='font-poppins rounded-[5px] px-5 py-2.5 h-10 text-sm bg-[#2868FF] text-white cursor-pointer hover:bg-[#2868FF]/70 duration-200'>
                            Get Started
                        </Button>
                    </div>
            }
        </FinanceContext.Provider>
    );
};

export const useFinance = () => {
    const context = useContext(FinanceContext);

    if (!context) {
        throw new Error("useFinance must be used inside FinanceProvider");
    }

    return context;
};