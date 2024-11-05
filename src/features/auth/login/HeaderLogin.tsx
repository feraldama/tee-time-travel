import { CloseIcon } from '@/components/icons'
import Link from 'next/link'
import React from 'react'

const HeaderLogin: React.FC = () => {
  return (
    <header className='top-0 left-0 w-full bg-white flex flex-wrap items-center justify-between z-1000 max-w-screen-2xl'>
      <div className='text-[24px] font-roboto text-tuiu-green-300 font-semibold'>Acceder</div>
      <Link href='/landing'>
        <CloseIcon />
      </Link>
    </header>
  )
}

export default HeaderLogin
