'use client'

import { FileClock, Home, Settings, WalletCards, Menu as MenuIcon, X as CloseIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import UsageTrack from './UsageTrack'

function SideNav() {
    const MenuList = [
        { name: 'Home', icon: Home, path: '/dashboard' },
        { name: 'History', icon: FileClock, path: '/dashboard/history' },
        { name: 'Billing', icon: WalletCards, path: '/dashboard/billing' },
        { name: 'Setting', icon: Settings, path: '/dashboard/settings' },
    ]

    const pathname = usePathname()
    const [mobileOpen, setMobileOpen] = useState(false)

    // Render menu items
    const menuItems = (
        <div className='mt-3'>
            {MenuList.map((menu, index) => (
                <Link key={index} href={menu.path} onClick={() => setMobileOpen(false)}>
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
    )

    return (
        <>
            {/* Desktop SideNav */}
            <div className="hidden md:flex h-screen relative p-5 shadow-sm border bg-white min-w-[220px] flex-col">
                <div className='flex justify-center'>
                    <Image src={'/logo.svg'} alt='logo' width={110} height={110} />
                </div>
                <hr className='my-6 border' />
                {menuItems}
                <div className='absolute bottom-10 left-0 w-full'>
                    <UsageTrack />
                </div>
            </div>

            {/* Mobile TopBar + Drawer */}
            <div className="md:hidden flex items-center justify-between p-4 shadow-sm border-b bg-white sticky top-0 z-40">
                <button
                    aria-label="Open menu"
                    onClick={() => setMobileOpen(true)}
                    className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
                >
                    <MenuIcon className="h-7 w-7" />
                </button>
                <Image src={'/logo.svg'} alt='logo' width={50} height={50} />
            </div>
            {/* Mobile Drawer */}
            {mobileOpen && (
                <div className="fixed inset-0 z-50 bg-black/40 flex">
                    <div className="w-64 bg-white h-full p-5 shadow-lg relative flex flex-col">
                        <button
                            aria-label="Close menu"
                            onClick={() => setMobileOpen(false)}
                            className="absolute top-4 right-4 p-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
                        >
                            <CloseIcon className="h-6 w-6" />
                        </button>
                        <div className='flex justify-center mb-4'>
                            <Image src={'/logo.svg'} alt='logo' width={80} height={80} />
                        </div>
                        <hr className='my-4 border' />
                        {menuItems}
                        <div className='mt-auto'>
                            <UsageTrack />
                        </div>
                    </div>
                    {/* Click outside to close */}
                    <div className="flex-1" onClick={() => setMobileOpen(false)} />
                </div>
            )}
        </>
    )
}

export default SideNav
