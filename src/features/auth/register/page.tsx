'use client'

import { Footer, HeaderComponent } from '@/features/landing'
import RegisterForm from './RegisterForm'

const RegisterView = () => {
  return (
    <>
      <header>
        <HeaderComponent />
      </header>
      <RegisterForm />
      <section>
        <Footer />
      </section>
    </>
  )
}

export default RegisterView
