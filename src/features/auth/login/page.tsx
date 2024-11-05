'use client'

import { Footer, HeaderComponent } from '@/features/landing'
import LoginForm from './loginForm'
import { LoginFormModal } from './loginFormModal'

const LoginView = () => {
  return (
    <>
      {/* Mostrar HeaderComponent solo en pantallas grandes */}
      <div className='hidden lg:block'>
        <HeaderComponent />
      </div>

      {/* Mostrar LoginFormModal solo en pantallas pequeñas */}
      <div className='block lg:hidden'>
        <LoginFormModal />
      </div>

      {/* Mostrar LoginForm solo en pantallas grandes */}
      <div className='hidden lg:block'>
        <LoginForm />
      </div>

      {/* Mostrar Footer solo en pantallas grandes */}
      <section className='hidden lg:block'>
        <Footer />
      </section>
    </>
  )
}

export default LoginView
