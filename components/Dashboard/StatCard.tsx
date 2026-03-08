import { LucideProps } from "lucide-react"
import { ForwardRefExoticComponent } from "react";

type TStatCardProps = {
    color: string;
    category: string;
    amount: number;
    icon: ForwardRefExoticComponent<Omit<LucideProps, "ref">>
}

const StatCard = ({ color, category, amount, icon: Icon }: TStatCardProps) => {
    return (
        <div className='bg-white p-4 rounded-[20px] border border-gray-200 h-25 flex gap-3'>
            <div style={{backgroundColor: color}} className={`h-10 w-10 flex items-center justify-center rounded-[10px] text-white`}>
                <Icon />
            </div>
            <div className='mb-5 flex-1'>
                <p className='text-xs uppercase mb-1'>{category}</p>
                <h3 className='text-2xl font-semibold'>&#8358;{amount.toLocaleString()}</h3>
            </div>
        </div>
    )
}

export default StatCard