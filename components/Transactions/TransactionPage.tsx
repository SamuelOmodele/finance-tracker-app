'use client'
import TransactionHistoryTable from '@/components/Transactions/TransactionHistoryTable'
import TransactionStats from '@/components/Transactions/TransactionStats'
import { Input } from '@/components/ui/input'
import { useFinance } from '@/providers/FinanceDataProvider'
import { ListFilter, Search } from 'lucide-react'
import { useState } from 'react'

const TransactionPage = () => {

    const { transactions, categoryExpenses } = useFinance();
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("")

    // --- filter based on search term and category filter ---
    const filteredTransactions = transactions.filter((transaction) => {
        const matchesSearch =
            transaction.description.toLowerCase().includes(search.toLowerCase())

        const matchesCategory =
            category === "" || transaction.category === category

        return matchesSearch && matchesCategory
    })

    return (
        <div className='font-poppins'>
            <TransactionStats categoryExpenses={categoryExpenses} />

            {/* --- TRANSACTION TABLE CONTAINER --- */}
            <div className="mt-2 min-[500px]:mt-5 bg-white border border-gray-200 rounded-[15px] p-3.5 min-[500px]:p-5">
                <div className='flex flex-col min-[500px]:flex-row items-start min-[500px]:items-center justify-between gap-3 mt-1 mb-4 '>
                    <div className='w-full'>
                        <h1 className="text-xl font-semibold">Transaction History</h1>
                        <p className="text-[14px] text-[#888] font-light">Track your transaction activities</p>
                    </div>
                    <div className="w-full flex flex-col min-[500px]:flex-row items-center space-x-0 min-[500px]:space-x-3 space-y-1.5 min-[500px]:space-y-0">
                        <div className="relative flex items-center w-full min-[500px]:w-75">
                            <Search
                                className="absolute text-[#646262] font-medium ml-3"
                                size={16}
                            />
                            <Input
                                type="text"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="pl-9 shadow-none rounded-[14px] h-11 w-full"
                                placeholder="Search by description"
                            />
                        </div>
                        <div className='flex items-center gap-2 border border-[#545454] rounded-[18px] text-sm text-[#545454] px-3 py-2.5 w-full min-[500px]:w-fit'>

                            <ListFilter size={18} />

                            <select
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                className="bg-transparent outline-none w-full"
                            >
                                <option value="">All</option>
                                <option value="Food">Food</option>
                                <option value="Transport">Transport</option>
                                <option value="Entertainment">Entertainment</option>
                                <option value="Shopping">Shopping</option>
                            </select>

                        </div>
                    </div>
                </div>
                <TransactionHistoryTable data={filteredTransactions} />
            </div>
        </div>
    )
}

export default TransactionPage