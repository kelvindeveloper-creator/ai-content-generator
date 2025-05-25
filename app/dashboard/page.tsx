"use client"

import React, { use, useState } from 'react'
import SearchSection from './_components/SearchSection'
import TemplateListSection from './_components/TemplateListSection'

function Dashboard() {

  const [userSearchInput,setUserSearchInput]=useState<string>()
  return (
    <div>
      {/* Search Section*/}
      <SearchSection onSearchInput={(value:string)=>setUserSearchInput(value)} />

      {/* Templte Section */}
      <TemplateListSection userSearchInput={userSearchInput}/>
    </div>
  )
}

export default Dashboard