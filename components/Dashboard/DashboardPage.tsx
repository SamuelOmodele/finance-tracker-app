'use client'
import DashboardStats from "./DashboardStats"
import TransactionHistoryTable from "../Transactions/TransactionHistoryTable"
import { useFinance } from "@/providers/FinanceDataProvider"

const DashboardPage = () => {

    const { financeData, totalExpenses, categoryExpenses, transactions } = useFinance()

    return (
        <div className="w-full">
            <h1 className="font-semibold text-xl mb-4">Good evening, {financeData?.name}</h1>

            {/* --- BALANCE CARD AND STATS SECTION --- */}
            <DashboardStats categoryExpenses={categoryExpenses} income={financeData?.monthlyIncome || 0} expenses={totalExpenses} />

            {/* --- TRANSACTION HISTORY --- */}
            <div className="w-full overflow-x-auto">
                <div className="w-full mt-5 bg-white border border-gray-200 rounded-[15px] p-3.5 min-[500px]:p-5">
                    <h1 className="text-xl font-semibold">Transaction History</h1>
                    <p className="text-[14px] text-[#888] mt-1 mb-4">Track your transaction activities</p>

                    <TransactionHistoryTable mode="FEW" data={transactions} />

                </div>
            </div>
        </div>
    )
}

export default DashboardPage