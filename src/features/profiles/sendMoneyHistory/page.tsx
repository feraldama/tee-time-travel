'use client'

import React from 'react'
import { ArrowLeftIcon } from '@/components/icons'
import Search from './components/search'
import Transfers from './components/transfers'

type MySendsPage = {
  title: string
}

export default function MySendsPage({ title }: MySendsPage) {
  return (
    <main className='font-roboto'>
      <div className='p-4 bg-white border-tuiu-gray-300 rounded-xl w-full max-w-xl mx-auto md:border'>
        <div className='flex items-center justify-between border-gray-200 border-b-2 pb-3 md:border-0 md:pb-0 mb-4'>
          <div className='flex items-center gap-3'>
            <ArrowLeftIcon />
            <h1 className='text-xl text-tuiu-green-300'>{title}</h1>
          </div>
        </div>
        <Search />
        <Transfers />
      </div>
    </main>
  )
}
