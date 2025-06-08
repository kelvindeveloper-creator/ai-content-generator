"use client"

import React, { useState } from 'react'
import SideNav from './_components/SideNav';
import Header from './_components/Header';
import { TotalTokensContext } from '../(context)/TotalTokensContext';
import { UpdateCreditUsageContext } from '../(context)/UpdateCreditUsageContext';

function layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const [totalTokens, setTotalTokens] = useState<Number>(0);
    const [updateCreditUsage, setUpdateCreditUsage] = useState<any>();

  return (
    <TotalTokensContext.Provider value={{ totalTokens, setTotalTokens }}>
      <UpdateCreditUsageContext.Provider value={{ updateCreditUsage, setUpdateCreditUsage }}>
        {/* Mobile TopBar with Hamburger Menu */}
        <div className="md:hidden sticky top-0 z-50 bg-white">
          <SideNav />
        </div>
        <div className='bg-slate-100 min-h-screen flex'>
          {/* Desktop SideNav */}
          <div className='md:w-64 hidden md:block fixed'>
            <SideNav />
          </div>
          {/* Main Content */}
          <div className='flex-1 md:ml-64 flex flex-col'>
            <Header />
            {/* Place your Google Ads or main content here */}
            <main className="flex-1 p-2 md:p-6">
              {children}
            </main>
          </div>
        </div>
      </UpdateCreditUsageContext.Provider>
    </TotalTokensContext.Provider>
  )
}

export default layout
