import React from 'react'
import { SearchIcon } from '@/components/icons'

export default function Search() {
  return (
    <div className='relative mb-6'>
      <div className='relative flex-grow'>
        <input
          type='text'
          placeholder='Buscar'
          className='w-full px-4 py-2 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-300 bg-tuiu-blue-50 placeholder-tuiu-green-300 text-tuiu-green-300 pr-10'
        />
        <div className='absolute inset-y-0 right-3 flex items-center pointer-events-none'>
          <SearchIcon />
        </div>
      </div>
    </div>
  )
}
