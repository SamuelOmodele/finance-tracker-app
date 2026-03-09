import React from 'react'
import StatCard from '../Shared/StatCard'
import { Car, Hamburger, ShoppingCart, TvMinimalPlay } from 'lucide-react'

type TStatsProps = {
    categoryExpenses: Record<string, number>;
}

const TransactionStats = ({ categoryExpenses }: TStatsProps) => {
    return (
        <div className='grid grid-cols-2 min-[500px]:grid-cols-4 gap-1 min-[500px]:gap-3'>
            <StatCard color='#6DD385' name='Food' amount={categoryExpenses['Food'] ?? 0} icon={Hamburger} />
            <StatCard color='#2868FF' name='Transportation' amount={categoryExpenses['Transport'] ?? 0} icon={Car} />
            <StatCard color='#FAC25F' name='Entertainment' amount={categoryExpenses['Entertainment'] ?? 0} icon={TvMinimalPlay} />
            <StatCard color='#8C78E7' name='Shopping' amount={categoryExpenses['Shopping'] ?? 0} icon={ShoppingCart} />
        </div>
    )
}

export default TransactionStats