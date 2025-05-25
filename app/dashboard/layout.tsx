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
    const [totalTokens, setTotalTokens]=useState<Number>(0);
    const [updateCreditUsage, setUpdateCreditUsage]=useState<any>();


  return (
    <TotalTokensContext.Provider value={{totalTokens, setTotalTokens}}>
    <UpdateCreditUsageContext.Provider value={{updateCreditUsage, setUpdateCreditUsage}}>  
    <div className='bg-slate-100 h-screen'>
        <div className='md:w-64 hidden md:block fixed'>
            <SideNav/>
        </div>
        <div className='md:ml-64'>
          <Header/>
        {children}</div>
        </div>
        </UpdateCreditUsageContext.Provider>
        </TotalTokensContext.Provider>
  )
}

export default layout