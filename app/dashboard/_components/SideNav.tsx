'use client'

import { FileClock, Home, Settings, WalletCards } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import UsageTrack from './UsageTrack'

function SideNav() {
    const MenuList = [
        { name: 'Home', icon: Home, path: '/dashboard' },
        { name: 'History', icon: FileClock, path: '/dashboard/history' },
        { name: 'Billing', icon: WalletCards, path: '/dashboard/billing' },
        { name: 'Setting', icon: Settings, path: '/dashboard/settings' },
    ]

    const pathname = usePathname()

    return (
        <div className='h-screen relative p-5 shadow-sm border bg-white'>
            <div className='flex justify-center '>
                <Image src={'/logo.svg'} alt='logo' width={100} height={100} />
            </div>
            <hr className='my-6 border' />
            <div className='mt-3'>
                {MenuList.map((menu, index) => (
                    <Link key={index} href={menu.path}>
                        <div
                            className={`flex gap-2 mb-2 p-3 hover:bg-purple-500 hover:text-white rounded-lg cursor-pointer items-center
                                ${pathname === menu.path ? 'bg-purple-500 text-white' : ''}
                            `}
                        >
                            <menu.icon className='h-6 w-6' />
                            <h2 className='text-lg'>{menu.name}</h2>
                        </div>
                    </Link>
                ))}
            </div>
            <div className='absolute bottom-10 left-0 w-full'>
                <UsageTrack />
            </div>
        </div>
    )
}

export default SideNav
