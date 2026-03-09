import Navbar from '@/components/Shared/Navbar'
import Sidebar from '@/components/Shared/Sidebar'
import React, { ReactNode } from 'react'

const DashboardLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className='font-poppins w-full h-dvh overflow-y-hidden grid grid-cols-1 min-[1200px]:grid-cols-[300px_auto] bg-[#F4F8FB]'>
            <Sidebar />
            <div className='w-full'>
                <Navbar />
                <div className='w-full p-3 min-[500px]:p-5 h-[calc(100dvh-70px)] min-[500px]:h-[calc(100dvh-80px)] overflow-y-auto'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout