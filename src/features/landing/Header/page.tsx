import { useState, useCallback } from 'react'
import Link from 'next/link'
import { TuiuLogo, PersonIcon, TeeTimeLogo } from '@/components/icons'

const navLinks = [
  { href: '#send-money', text: 'Bienvenido' },
  { href: '#how-it-works', text: 'Quienes somos' },
  { href: '#benefits', text: 'Nuestros servicios' },
  { href: '#destination', text: 'Nuestros destinos' },
  { href: '#contact-us', text: 'Contáctanos' }
]

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean
  children: React.ReactNode
}

const NavLinks = () => (
  <ul className='flex flex-col xl:flex-row xl:space-x-8 text-right'>
    {navLinks.map(({ href, text }) => (
      <li key={href}>
        <Link
          href={href}
          className='block p-2 transition-colors duration-200 hover:text-gray-400 focus:outline-none rounded'
        >
          {text}
        </Link>
      </li>
    ))}
  </ul>
)

const Button: React.FC<ButtonProps> = ({ primary = false, children, ...props }) => (
  <button
    type='button'
    className={`py-2 px-4 font-medium rounded-xl text-base transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-tuiu-green-300 ${
      primary
        ? 'text-white bg-tuiu-green-300 hover:bg-tuiu-green-400 mr-4 xl:mr-0'
        : 'text-tuiu-200 bg-white hover:bg-gray-100'
    }`}
    {...props}
  >
    {children}
  </button>
)

const HeaderComponent: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  const toggleMenu = useCallback(() => setMenuOpen(prev => !prev), [])

  return (
    <nav className='bg-tuiu-green-500 text-tuiu-gray-100 font-roboto font-medium text-base'>
      <div className='container mx-auto px-4 md:px-8 lg:px-20 max-w-screen-2xl py-4'>
        <div className='flex flex-wrap items-center justify-between'>
          <div className='flex items-center w-full xl:w-auto justify-between xl:justify-start'>
            <div className='flex-grow flex justify-center xl:justify-start'>
              <div className='w-48'>
                <a href='/'>
                  <TeeTimeLogo />
                </a>
              </div>
            </div>
            <button
              onClick={toggleMenu}
              className='p-2 xl:hidden focus:outline-none focus:ring-2 focus:ring-tuiu-green-300 rounded'
              aria-expanded={menuOpen}
              aria-controls='mobile-menu'
              aria-label='Alternar menú de navegación'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
            {/* <div className='xl:hidden'>
              <div className='w-[42px] h-[42px] bg-tuiu-green-300 rounded-full flex items-center justify-center'>
                <Link href='/login'>
                  <PersonIcon className='w-6 h-6 text-white' />
                </Link>
              </div>
            </div> */}
          </div>

          <div className='hidden xl:flex xl:items-center xl:space-x-8'>
            <NavLinks />
          </div>

          {/* <div className='hidden xl:flex xl:space-x-3'>
            <Link href='/register'>
              <Button primary>Registrarse</Button>
            </Link>
            <Link href='/login'>
              <Button>Iniciá sesión</Button>
            </Link>
          </div> */}
        </div>
      </div>

      {menuOpen && (
        <div id='mobile-menu' className='px-4 md:px-8 lg:px-20 xl:hidden'>
          <NavLinks />
        </div>
      )}
    </nav>
  )
}

export default HeaderComponent
