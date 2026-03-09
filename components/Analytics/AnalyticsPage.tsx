'use client'
import { categories, CATEGORY_BG_COLORS } from "@/lib/data"
import { useFinance } from "@/providers/FinanceDataProvider";
import AnalyticsPieChart from "./PieChart";
import AnalyticsBarChart from "./BarChart";

const AnalyticsPage = () => {

    const { categoryExpenses } = useFinance();

    const monthlyData = categories.map((c) => ({ category: c, amount: categoryExpenses[c] ?? 0 }))
    const pieChartData = categories.map((c) => ({ name: c, value: categoryExpenses[c] ?? 0 }))

    return (
        <div className="font-poppins">
            <h1 className="font-semibold text-xl mb-4">Your spending analytics</h1>

            <div className="grid gird-cols-1 min-[768px]:grid-cols-2 items-stretch gap-3">

                {/* --- PIE CHART --- */}
                <div className="bg-white p-5 rounded-[20px] border border-gray-200">
                    <AnalyticsPieChart data={pieChartData} />
                </div>

                {/* --- BAR CHART --- */}
                <div className="bg-white p-5 rounded-[20px] overflow-x-auto border border-gray-200">
                    <AnalyticsBarChart data={monthlyData} />
                </div>

                {/* --- EXPENSES BREAKDOWN --- */}
                <div className="col-span-full space-y-2 bg-white p-5 rounded-[20px] border border-gray-200">
                    {monthlyData.map((item, index) => (
                        <div key={index} className="font-poppins flex flex-col min-[550px]:flex-row items-start min-[550px]:items-center max-[550px]:gap-1 mb-3 justify-between text-[13px]">
                            <div className="flex items-center">
                                <div className="w-3 h-3 rounded-full mr-3" style={{ backgroundColor: CATEGORY_BG_COLORS[item.category] }} />
                                <span className="text-gray-700">{item.category}</span>
                            </div>
                            <span className="font-medium text-gray-700">
                                {(() => {
                                    const total = monthlyData.reduce((sum, item) => sum + item.amount, 0);
                                    if (total === 0) return '0.0';
                                    return <>You have spent &#8358;{`${item.amount.toLocaleString()} (${((item.amount / total) * 100).toFixed(1)}%)`} on {item.category}</>
                                })()}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AnalyticsPage