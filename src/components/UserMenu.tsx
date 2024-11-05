import React from 'react'
import Link from 'next/link'
import { ArrowDownIcon, PersonAvatarBlackIcon, PersonAvatarIcon, PersonPlusIcon, HelpIcon } from './icons'

interface UserMenuProps {
  loginButtonStyle: React.CSSProperties
  toggleMenu: () => void
  menuOpen: boolean
}

const UserMenu: React.FC<UserMenuProps> = ({ toggleMenu, menuOpen }) => {
  return (
    <div className='ml-auto flex items-center'>
      <button
        onClick={toggleMenu}
        className='hidden xl:flex items-center space-x-2 px-4 py-2 rounded-3xl border border-green-500 text-green-500 hover:bg-tuiu-green-200 focus:outline-none'
        aria-expanded={menuOpen}
        aria-controls='user-menu'
      >
        <ArrowDownIcon />
        <span className='text-sm'>Ingresar</span>
        <PersonAvatarIcon />
      </button>
      <button
        onClick={toggleMenu}
        className='xl:hidden flex items-center p-2 text-green-500 hover:bg-tuiu-green-200 focus:outline-none'
        aria-expanded={menuOpen}
        aria-controls='user-menu'
      >
        <PersonAvatarIcon />
      </button>
      {menuOpen && (
        <div
          id='user-menu'
          className='absolute right-0 mt-44 w-48 bg-gray-100 border border-gray-300 rounded-lg shadow-lg z-10'
        >
          <Link href='/login' className='flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-200'>
            <PersonAvatarBlackIcon />
            <span>Iniciar sesión</span>
          </Link>
          <Link
            href='/register'
            className='flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-200'
          >
            <PersonPlusIcon />
            <span>Registrarse</span>
          </Link>
          <Link href='/help' className='flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-200'>
            <HelpIcon />
            <span>Ayuda</span>
          </Link>
        </div>
      )}
    </div>
  )
}

export default UserMenu
