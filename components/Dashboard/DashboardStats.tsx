import React from 'react'
import BalanceCard from './BalanceCard'
import StatCard from './StatCard'
import { Car, Hamburger, ShoppingCart, TvMinimalPlay } from 'lucide-react'

const DashboardStats = () => {
    return (
        <div className='grid grid-cols-10 gap-3'>
            <BalanceCard />
            <div className='col-span-6 grid grid-cols-2 gap-3'>
                <StatCard color='#6DD385' category='Food' amount={10000} icon={Hamburger}/>
                <StatCard color='#2868FF' category='Transportation' amount={5000} icon={Car} />
                <StatCard color='#FAC25F' category='Entertainment' amount={2000} icon={TvMinimalPlay} />
                <StatCard color='#8C78E7' category='Shopping' amount={6000} icon={ShoppingCart} />
            </div>
        </div>
    )
}

export default DashboardStats