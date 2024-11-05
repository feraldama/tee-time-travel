import React from 'react'
import { SearchIcon, PersonPlusIcon } from '@/components/icons'

export default function SearchAdd() {
  return (
    <>
      {/* Dekstop */}
      <div className='hidden md:flex flex-col md:flex-row items-center mt-4 gap-2'>
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
        <button className='flex-grow px-4 py-2 text-tuiu-green-300 border border-tuiu-green-300 rounded-2xl flex items-center justify-center gap-2'>
          Agregar destinatario <PersonPlusIcon />
        </button>
      </div>
      {/* Mobile */}
      <div className='flex flex-col md:hidden items-center mt-4 gap-2'>
        <div className='relative w-full'>
          <input
            type='text'
            placeholder='Buscar'
            className='w-full px-4 py-2 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-300 bg-tuiu-blue-50 placeholder-tuiu-green-300 text-tuiu-green-300 pr-10'
          />
          <div className='absolute inset-y-0 right-3 flex items-center pointer-events-none'>
            <SearchIcon />
          </div>
        </div>
        <button className='w-full md:w-auto px-4 py-2 text-tuiu-green-300 border border-tuiu-green-300 rounded-2xl flex items-center justify-center gap-2'>
          Agregar destinatario <PersonPlusIcon />
        </button>
      </div>
    </>
  )
}
