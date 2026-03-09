'use client'
import BalanceCard from "@/components/Shared/BalanceCard"
import StatCard from "@/components/Shared/StatCard";
import EditBudgetModal from "@/components/Modals/EditBudgetModal";
import { Button } from "@/components/ui/button";
import { useFinance } from "@/providers/FinanceDataProvider"
import { CircleDollarSign, Info, Pen } from "lucide-react";
import { useState } from "react";

const BudgetPage = () => {

    const { financeData, totalExpenses, budgetLimit } = useFinance();

    const percentUsed = budgetLimit > 0 ? (totalExpenses / budgetLimit) * 100 : 0;

    const [openModal, setOpenModal] = useState(false);

    return (
        <div className='font-poppins'>
            <div className="flex items-center justify-between mb-4">
                <h1 className="font-semibold text-xl">Your Budget</h1>
                <Button onClick={() => setOpenModal(true)} className="mt-auto h-10 rounded-[20px] text-xs cursor-pointer space-x-1 bg-[#2868FF] text-white px-4">
                    Edit Budget Limit
                    <Pen size={12} />
                </Button>
            </div>
            
            <div className='grid grid-cols-1 min-[900px]:grid-cols-10 max-[900px]:gap-x-0 gap-3'>
                <BalanceCard income={financeData?.monthlyIncome ?? 0} expenses={totalExpenses} />
                
                <div className='col-span-6 grid grid-cols-2 gap-3'>
                    <StatCard color='#6DD385' name='Budget limit' amount={budgetLimit} icon={CircleDollarSign} />
                    <StatCard color='#2868FF' name='Remaining' amount={budgetLimit - totalExpenses} icon={Info} />

                    <div className='col-span-full bg-white p-4 rounded-[20px] border border-gray-200 h-25 flex flex-col gap-3'>
                        <p className='text-xs uppercase mb-1'>Budget Progress</p>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className={`h-2 rounded-full ${percentUsed > 100 ? "bg-red-500" : "bg-green-500"}`}
                                style={{ width: `${Math.min(percentUsed, 100)}%` }}
                            />
                        </div>
                        <p className="text-xs font-medium">{percentUsed <= 100 ? `Under-budget (${percentUsed}% of budget used)` : 'Budget Exceeded'}</p>
                    </div>
                </div>
            </div>

            <EditBudgetModal
                openModal={openModal}
                setOpenModal={setOpenModal}
            />
        </div>
    )
}

export default BudgetPage