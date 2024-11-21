import AccountTable from '@/components/admin/AccountTable'
import Button from '@/components/global/Button'
import Dropdown from '@/components/global/Dropdown'
import Title from '@/components/global/Title'
import React from 'react'
import { BiPlus } from 'react-icons/bi'

export default function page() {
  return (
    <div className='p-4 flex flex-col gap-2 pt-0'>
      <div className="z-30 flex items-center justify-between relative">
        <Title title="All Accounts" />
        <div className="flex gap-6">
          <Button title='Create Account' icon={<BiPlus size={20} className=''/>} />
          <Dropdown />
        </div>
      </div>
      <AccountTable />
    </div>
  )
}
