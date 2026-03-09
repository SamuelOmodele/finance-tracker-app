'use client'
import { useState } from 'react'
import AddTransactionModal from '../Modals/AddTransactionModal'
import { Button } from '../ui/button';
import { Menu } from 'lucide-react';
import { useSidebar } from '@/providers/SidebarProvider';

const Navbar = () => {

  const [openModal, setOpenModal] = useState(false);

  const { setIsOpen } = useSidebar();

  const openTransactionModal = () => {
    setOpenModal(true);
  }

  return (
    <div className='bg-white w-full h-17.5 min-[500px]:h-20 border-b border-gray-200 flex items-center justify-between px-3 min-[500px]:px-5 font-poppins'>
      <div className='flex items-center gap-3'>
        <Menu onClick={() => setIsOpen(true)} className='block min-[1200px]:hidden' size={22} />
        <div>
          <h3 className='font-bold text-xl '>Dashboard</h3>
          <p className='text-sm text-[#333] hidden min-[1200px]:block'>Monitor your spending and manage your finances</p>
        </div>
      </div>
      <Button onClick={openTransactionModal} className='px-4 py-2.5 h-10 text-sm bg-[#2868FF] text-white rounded-[10px] cursor-pointer hover:bg-[#2868FF]/70 duration-200'>
        Add Transaction
      </Button>

      <AddTransactionModal
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
    </div>
  )
}

export default Navbar