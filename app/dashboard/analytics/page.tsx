import SpendingPieChart from "@/components/Dashboard/PieChart";
import { expenseData } from "@/lib/data"

const COLORS = [
    "#6DD385",
    "#2868FF",
    "#FAC25F",
    "#8C78E7",
];


const Page = () => {
    return (
        <div className="grid grid-cols-2 items-center gap-3">
            <div className="bg-white p-5 rounded-[20px] border border-gray-200">
                <h3 className="text-lg font-medium">Expenses</h3>
                <SpendingPieChart data={expenseData} />
                <div className="mt-4 space-y-2">
                    {expenseData.map((item, index) => (
                        <div key={index} className="font-poppins flex items-center justify-between text-[13px]">
                            <div className="flex items-center">
                                <div
                                    className="w-3 h-3 rounded-full mr-3"
                                    style={{ backgroundColor: COLORS[index] }}
                                />
                                <span className="text-gray-700">{item.name}</span>
                            </div>
                            <span className="font-medium text-gray-900">
                                {(() => {
                                    const total = expenseData.reduce((sum, item) => sum + item.value, 0);
                                    if (total === 0) return '0.0';
                                    return <>&#8358;{`${item.value.toLocaleString()} (${((item.value / total) * 100).toFixed(1)}%)`}</>
                                })()}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-white p-5 rounded-[20px] border border-gray-200">
                <h3 className="text-lg font-medium">Expenses</h3>
                <SpendingPieChart data={expenseData} />
            </div>
        </div>
    )
}

export default Page