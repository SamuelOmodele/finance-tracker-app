import { ArrowDown, ArrowUp, CreditCard } from 'lucide-react'


type TStatsProps = {
    income: number;
    expenses: number;
}

const BalanceCard = ({ income, expenses }: TStatsProps) => {
    return (
        
        <div className='relative bg-[#2868FF] overflow-hidden col-span-4 p-6 rounded-[20px] text-white h-53 flex flex-col justify-between'>
            {/* --- BALANCE --- */}
            <div className='mb-5'>
                <p className='text-xs uppercase mb-1'>Balance</p>
                <h3 className='text-2xl font-bold'>&#8358;{(income - expenses).toLocaleString()}</h3>
            </div>
            <CreditCard className='absolute top-6 right-6 z-20' />

            {/* --- DIVIDING LINE --- */}
            <div className='z-20 -left-1.5 top-1/2 absolute w-[calc(100%+12px)] flex items-center justify-between'>
                <div className='h-3 w-3 rounded-full bg-white' />
                <div className='flex-1 border-t border-white border-dashed' />
                <div className='h-3 w-3 rounded-full bg-white' />
            </div>

            {/* --- INCOME AND EXPENSES SECTION --- */}
            <div className='flex items-center justify-between'>
                <div className='z-20'>
                    <div className='text-xs uppercase mb-1 flex items-center gap-2'>
                        <div className='bg-white/20 h-6 w-6 flex items-center justify-center rounded-full'>
                            <ArrowDown size={16} />
                        </div>
                        Income
                    </div>
                    <h3 className='text-2xl font-bold'>&#8358;{income.toLocaleString()}</h3>
                </div>
                <div className='z-20'>
                    <div className='text-xs uppercase mb-1 flex items-center gap-2'>
                        <div className='bg-white/20 h-6 w-6 flex items-center justify-center rounded-full'>
                            <ArrowUp size={16} />
                        </div>
                        Expenses
                    </div>
                    <h3 className='text-2xl font-bold'>&#8358;{expenses.toLocaleString()}</h3>
                </div>
            </div>

            {/* --- CIRCULAR DESIGNS IN THE CARD BACKGROUND --- */}
            <div className='z-10 w-90 h-90 rounded-full absolute bg-[#1582DD] top-4/10 left-5/10' />
            <div className='z-10 w-40 h-40 rounded-full absolute bg-[#1582DD] bottom-9/10 left-5/10 -translate-x-1/2' />
        </div>
    )
}

export default BalanceCard