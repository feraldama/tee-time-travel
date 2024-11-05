import React, { useRef, useState, ReactNode } from 'react'
import HeaderLogin from './HeaderLogin'
import CheckInput from './CheckInput'

const Modal: React.FC<{ isOpen: boolean; onClose: () => void; children: ReactNode }> = ({
  isOpen,
  onClose,
  children
}) => {
  if (!isOpen) return null

  return (
    <div className='inset-0 flex items-center justify-center'>
      <div className='relative w-full'>
        <div className='w-full max-w-[1280px] mx-auto px-4 pt-6'>
          <HeaderLogin />
          {/* <button onClick={onClose} className='absolute top-2 right-2 text-gray-500 hover:text-gray-700'>
            Cerrar
          </button> */}
          {children}
        </div>
      </div>
    </div>
  )
}

// Componente LoginFormModal
export const LoginFormModal: React.FC = () => {
  const emailInputRef = useRef<HTMLInputElement>(null)
  const [isModalOpen, setIsModalOpen] = useState(true) // Se abre el modal por defecto

  return (
    <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
      <section className='flex justify-center min-h-screen mb-20 top-28 p-2 sm:p-6 w-full max-w-[640px] mx-auto'>
        <div className='w-full bg-white'>
          <div className='flex justify-left mb-8'>
            <span className='text-left mt-10 font-roboto text-2xl text-[30px]'>
              <span className='font-medium'>Iniciá sesión y </span>
              <span className='text-tuiu-green-300 font-bold'>empezá a enviar dinero en 3</span>
              <div className='block'>
                <span className='text-tuiu-green-300 font-bold'>simples pasos</span>
              </div>
            </span>
          </div>

          <div className='space-y-6'>
            <form>
              <div className='mb-4'>
                <label htmlFor='email' className='block text-sm font-roboto font-medium text-gray-700 text-[16px]'>
                  Ingresá tu correo electrónico
                </label>
                <div className='flex'>
                  <input
                    id='email'
                    name='email'
                    type='email'
                    required
                    placeholder='juan.villalba@gmail.com'
                    className='autofocus flex-grow sm:text-xl sm:p-4 lg:p-5 mt-1 block w-full h-[64px] sm:w-3/4 px-6 py-2 border border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:ring-tuiu-green-300 focus:border-tuiu-green-300 font-roboto font-normal text-gray-700'
                    aria-label='Ingresa tu correo electrónico'
                    ref={emailInputRef}
                    autoFocus
                  />
                </div>
              </div>
              <div className='mb-4'>
                <label htmlFor='password' className='block text-sm font-roboto font-medium text-gray-700 text-[16px]'>
                  Ingresá tu contraseña
                </label>
                <div className='flex'>
                  <input
                    id='password'
                    name='password'
                    type='password'
                    required
                    placeholder='*************'
                    className='flex-grow mt-1 sm:text-xl sm:p-4 lg:p-5 block w-full h-[64px] sm:w-3/4 px-6 py-2 border border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:ring-tuiu-green-300 focus:border-tuiu-green-300 font-roboto font-normal text-gray-700'
                    aria-label='Ingresa tu contraseña'
                  />
                </div>
              </div>
              <div className='flex items-center mb-4'>
                <div className='flex items-center space-x-2 col-span-1 md:col-span-2'>
                  <CheckInput name='remember-me' label='Recordar mis datos' />
                </div>
              </div>
              <div className='flex flex-col items-center space-y-4'>
                <button
                  type='submit'
                  className='w-full h-[64px] flex justify-center items-center border font-roboto font-normal border-transparent rounded-2xl shadow-sm text-white bg-tuiu-green-300 hover:bg-tuiu-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-tuiu-green-300 text-[18px]'
                >
                  Iniciar sesión
                </button>
                <div className='text-center font-medium font-roboto text-[16px]'>O</div>
                <button
                  type='button'
                  // className='flex-grow mt-1 sm:text-xl sm:p-4 lg:p-5 block w-full h-[64px] sm:w-3/4 px-6 py-2 border border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:ring-tuiu-green-300 focus:border-tuiu-green-300 font-roboto font-medium'
                  className='flex-grow w-full h-[64px] px-6 bg-tuiu-green-100 text-tuiu-green-300 font-roboto font-normal flex justify-center items-center border border-transparent rounded-2xl shadow-sm text-sm hover:bg-tuiu-green-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-tuiu-green-300 text-[18px]'
                >
                  Registrate
                </button>
                <a href='#' className='text-tuiu-green-300 text-xs font-roboto underline font-normal text-[16px]'>
                  Olvidé mi contraseña
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Modal>
  )
}
