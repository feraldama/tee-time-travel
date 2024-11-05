'use client'
import CheckInput from './CheckInput'

const LoginForm: React.FC = () => {
  return (
    <section className='flex items-center justify-center min-h-screen mb-20 top-20'>
      <div className='w-full max-w-md p-8 bg-white'>
        <div className='flex justify-left mb-8'>
          <span className='text-left font-roboto text-2xl text-[30px]'>
            <span className='font-medium'>Iniciá sesión o</span>
            <div className='block'>
              <span className='text-tuiu-green-300 font-bold'>registrate</span>
            </div>
          </span>
        </div>

        <div className='space-y-6'>
          <form>
            <div className='mb-4'>
              <label htmlFor='email' className='block text-sm font-medium text-gray-700 text-[16px] font-roboto'>
                Ingresá tu correo electrónico
              </label>
              <input
                id='email'
                name='email'
                type='email'
                required
                placeholder='juan.villalba@gmail.com'
                className='mt-1 block w-full max-w-[365px] h-[64px] px-3 py-2 border border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:ring-tuiu-green-300 focus:border-tuiu-green-300 sm:text-sm font-roboto font-normal text-[16px] text-gray-700'
                aria-label='Ingresa tu correo electrónico'
                autoFocus
              />
            </div>
            <div className='mb-4'>
              <label htmlFor='password' className='block text-sm font-medium text-gray-700 text-[16px] font-roboto'>
                Ingresá tu contraseña
              </label>
              <input
                id='password'
                name='password'
                type='password'
                required
                placeholder='*************'
                className='mt-1 block w-full max-w-[365px] h-[64px] px-3 py-2 border border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:ring-tuiu-green-300 focus:border-tuiu-green-300 sm:text-sm font-roboto font-normal text-[16px] text-gray-700'
                aria-label='Ingresa tu contraseña'
              />
            </div>
            <div className='flex items-center mb-4'>
              <div className='flex items-center space-x-2 col-span-1 md:col-span-2'>
                <CheckInput name='remember-me' label='Recordar mis datos' />
              </div>
            </div>
            <div className='flex flex-col items-center space-y-4'>
              <button
                type='submit'
                className='w-full max-w-[365px] h-[64px] flex justify-center items-center border font-roboto font-normal border-transparent rounded-2xl shadow-sm text-white bg-tuiu-green-300 hover:bg-tuiu-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-tuiu-green-300 text-[18px]'
              >
                Iniciar sesión
              </button>
              <div className='text-center font-medium font-roboto'>O</div>
              <button
                type='button'
                className='w-full max-w-[365px] h-[64px] bg-tuiu-green-100 text-tuiu-green-300 font-roboto font-normal flex justify-center items-center border border-transparent rounded-2xl shadow-sm text-sm hover:bg-tuiu-green-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-tuiu-green-300 text-[18px]'
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
  )
}

export default LoginForm
