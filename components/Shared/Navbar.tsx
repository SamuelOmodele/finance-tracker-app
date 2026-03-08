import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-white w-full h-20 border-b border-gray-200 flex items-center justify-between px-5 font-poppins'>
      <div>
        <h3 className='font-bold text-xl '>Dashboard</h3>
        <p className='text-sm text-[#333]'>Manage your finance flow and track expenses</p>
      </div>
      <button className='px-4 py-2.5 text-sm bg-[#2868FF] text-white rounded-[10px] cursor-pointer hover:bg-[#2868FF]/70 duration-200'>Add Transaction</button>
    </div>
  )
}

export default Navbar