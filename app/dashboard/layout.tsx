import Navbar from '@/components/Shared/Navbar'
import Sidebar from '@/components/Shared/Sidebar'
import React, { ReactNode } from 'react'

const DashboardLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className='w-full h-dvh overflow-y-hidden flex bg-[#F4F8FB]'>
            <Sidebar />
            <div className='flex-1'>
                <Navbar />
                <div className='p-5 h-[calc(100dvh-80px)] overflow-y-auto'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout