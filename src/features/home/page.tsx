'use client'
import SendMoney from '@/features/landing/Hero/SendMoney'
import { HeaderComponent, Footer } from '@/features/landing'
import Resume from './Resume'
export default function Home() {
  return (
    <>
      <header>
        <HeaderComponent />
      </header>
      <div className='w-full max-w-3xl mx-auto overflow-hidden'>
        <h1 className='text-[32px] xl:text-4xl font-medium mt-10 text-center mx-auto'>
          <span className='font-bold text-tuiu-green-300'>¡Envía dinero a Paraguay </span> en simples pasos!
        </h1>
        <div className='p-6 flex'>
          <div className='flex-1 space-y-8'>
            <SendMoney />
            <Resume />
            <button className='w-full p-3 sm:p-4 lg:p-5 text-white bg-tuiu-green-300 hover:bg-tuiu-green-400 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-2xl text-lg sm:text-xl lg:text-2xl text-center'>
              Enviar dinero
            </button>
          </div>
        </div>
      </div>
      <section id='footer'>
        <Footer />
      </section>
    </>
  )
}
