import React from 'react'
import BalanceCard from '../Shared/BalanceCard'
import StatCard from '../Shared/StatCard'
import { Car, Hamburger, ShoppingCart, TvMinimalPlay } from 'lucide-react'

type TStatsProps = {
    income: number;
    expenses: number;
    categoryExpenses: Record<string, number>;
}

const DashboardStats = ({ income, expenses, categoryExpenses }: TStatsProps) => {
    return (
        <div className='grid grid-cols-1 min-[900px]:grid-cols-10 max-[900px]:gap-x-0 gap-3'>
            <BalanceCard income={income} expenses={expenses} />
            
            <div className='col-span-6 grid grid-cols-2 gap-2 min-[500px]:gap-3'>
                <StatCard color='#6DD385' name='Food Expenses' amount={categoryExpenses['Food'] ?? 0} icon={Hamburger} />
                <StatCard color='#2868FF' name='Transportation Expenses' amount={categoryExpenses['Transport'] ?? 0} icon={Car} />
                <StatCard color='#FAC25F' name='Entertainment Expenses' amount={categoryExpenses['Entertainment'] ?? 0} icon={TvMinimalPlay} />
                <StatCard color='#8C78E7' name='Shopping Expenses' amount={categoryExpenses['Shopping'] ?? 0} icon={ShoppingCart} />
            </div>
        </div>
    )
}

export default DashboardStats