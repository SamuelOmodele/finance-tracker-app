'use client'
import { sidebarData } from "@/lib/data"
import { LogOut, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog"
import { Button } from "../ui/button"
import { useFinance } from "@/providers/FinanceDataProvider"
import { useSidebar } from "@/providers/SidebarProvider"
import { useEffect } from "react"

const Sidebar = () => {

    const pathname = usePathname();
    const { clearData } = useFinance();
    const { isOpen: isSidebarOpen, setIsOpen } = useSidebar();

    useEffect(() => {
        setIsOpen(false);
    }, [pathname, setIsOpen])

    return (
        <div className={`max-[1200px]:fixed w-75 h-dvh z-30 ${isSidebarOpen ? 'left-0' : '-left-75'} duration-300 bg-white border-r border-gray-200`}>
            <div className="relative h-20 border-b border-gray-200 flex gap-2 items-center px-5">
                <div className="h-10 w-10 rounded-[6px] font-semibold bg-[#2868FF] flex items-center justify-center text-white">
                    FTr
                </div>
                <h3 className="text-[#2868FF] text-xl font-poppins font-semibold">FinanceTrack</h3>
                <X onClick={() => setIsOpen(false)} size={20} className="absolute top-4 right-4 text-[#2868FF] cursor-pointer min-[1200px]:hidden" />
            </div>
            <div className="px-5 mt-5 font-poppins space-y-2">
                {sidebarData.map((menu) => {
                    const isActive = pathname === menu.path;
                    return (
                        <Link key={menu.id} className={`flex items-center gap-2 text-sm p-3 rounded-[10px] ${isActive ? 'bg-[#E6F4FF] text-[#2868FF]' : 'text-[#242424] hover:text-[#2868FF]'} font-medium duration-200`} href={menu.path}> <menu.icon size={18} /> {menu.name} </Link>
                    )
                })}

                <Dialog>
                    <DialogTrigger asChild>
                        <Link className={`flex items-center gap-2 text-sm p-3 rounded-[10px] text-[#F83D2C] hover:text-[#F83D2C]/70 font-medium duration-200`} href={''}> <LogOut size={16} /> Clear Data </Link>
                    </DialogTrigger>
                    <DialogContent className="font-poppins w-[95%] max-w-125!">
                        <DialogHeader>
                            <DialogTitle className="text-lg font-bold">Clear Data</DialogTitle>
                            <DialogDescription className="text-sm text-[#353535]">
                                This action will clear all of your data on this platform.
                            </DialogDescription>
                        </DialogHeader>
                        <DialogFooter>
                            <DialogClose asChild>
                                <Button variant="outline">Cancel</Button>
                            </DialogClose>
                            <Button onClick={clearData} variant="destructive">
                                Clear Data
                            </Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    )
}

export default Sidebar