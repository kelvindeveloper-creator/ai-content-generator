import { UserButton } from '@clerk/nextjs'
import { Search } from 'lucide-react'
import React from 'react'

function Header() {
  return (
    <div className='p-5 bg-white shadow-sm border-b-2 flex justify-between items-center'>
    <div className='flex gap-2 items-center p-2 border rounded-md
    max-w-lg bg-white '>
      <Search/>
      <input type="text" placeholder='Search...' className='border-2 border-gray-300 rounded-lg p-2' />

    </div>
    <div className='flex gap-5 items-center'>
      <h2 className='bg-purple-500 rounded-full text-xs text-white px-2'>
        🚀Upgrade today! For $9.99/Month</h2>
        <UserButton/>
    </div>
    </div>
    
  )
}

export default Header
