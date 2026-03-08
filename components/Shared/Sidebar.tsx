'use client'
import { sidebarData } from "@/lib/data"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Sidebar = () => {

    const pathname = usePathname();

    return (
        <div className='w-75 bg-white border-r border-gray-200'>
            <div className="h-20 border-b border-gray-200 flex items-center px-5">
                <h3 className="text-[#2868FF] text-xl font-poppins font-semibold">FinanceTrack</h3>
            </div>
            <div className="px-5 mt-5 font-poppins space-y-2">
                {sidebarData.map((menu) => {
                    const isActive = pathname === menu.path;
                    return (
                        <Link key={menu.id} className={`flex items-center gap-2 text-sm p-3 rounded-[10px] ${isActive ? 'bg-[#E6F4FF] text-[#2868FF]' : 'text-[#242424] hover:text-[#2868FF]'} font-medium duration-200`} href={menu.path}> <menu.icon size={18} /> {menu.name} </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default Sidebar