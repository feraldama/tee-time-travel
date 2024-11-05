import React from 'react'
import { ArrowLeftIcon } from '@/components/icons'
import BeneficiariesList from './components/beneficiariesList'
import NoBeneficiaries from './components/noBeneficiaries'
import SearchAdd from './components/searchAdd'

type BeneficiariesPageProps = {
  title: string
}

export default function BeneficiariesPage({ title }: BeneficiariesPageProps) {
  return (
    <main className='font-roboto'>
      <div className='p-4 bg-white border-tuiu-gray-300 rounded-xl w-full max-w-xl mx-auto md:border'>
        <div className='flex items-center justify-between border-gray-200 border-b-2 pb-3 md:border-0 md:pb-0'>
          <div className='flex items-center gap-3'>
            <ArrowLeftIcon />
            <h1 className='text-xl text-tuiu-green-300'>{title}</h1>
          </div>
        </div>

        <SearchAdd />
        <BeneficiariesList />
        <NoBeneficiaries />
      </div>
    </main>
  )
}
