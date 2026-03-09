import { LucideProps } from "lucide-react"
import { ForwardRefExoticComponent } from "react";

type TStatCardProps = {
    color: string;
    name: string;
    amount: number;
    icon: ForwardRefExoticComponent<Omit<LucideProps, "ref">>
}

const StatCard = ({ color, name, amount, icon: Icon }: TStatCardProps) => {
    return (
        <div className='bg-white p-2 min-[500px]:p-4 rounded-[20px] border border-gray-200 h-25 flex gap-3'>
            <div style={{backgroundColor: color}} className={`h-10 w-10 flex items-center justify-center rounded-[10px] text-white`}>
                <Icon />
            </div>
            <div className='mb-5 flex-1'>
                <p className='text-[10px] min-[500px]:text-xs uppercase mb-1'>{name}</p>
                <h3 className='text-lg min-[500px]:text-2xl font-semibold'>&#8358;{amount.toLocaleString()}</h3>
            </div>
        </div>
    )
}

export default StatCard