import Image from 'next/image'
import { UenoBankImage } from '@/components/icons'
import shippingWithdrawal from '/public/assets/images/shipping-withdrawal.png'

const ShippingWithdrawal: React.FC = () => {
  return (
    <section className='container mx-auto px-4 my-20 max-w-7xl'>
      <div className='flex flex-col md:flex-row justify-between items-start'>
        <article className='flex-1 flex flex-col mt-10 md:mt-0 max-w-xl mx-auto md:mx-0'>
          <header className='mb-6 text-left'>
            <h2 className='font-bold text-[32px] max-w-56 xl:max-w-96 sm:text-5xl text-tuiu-green-300 text-pretty'>
              Retiro de envío en Paraguay
            </h2>
          </header>

          <div className='md:hidden mb-6'>
            <Image
              src={shippingWithdrawal}
              alt='Ueno app mostrando el proceso de retiro de envío'
              width={350}
              height={350}
              className='w-full h-auto max-w-[350px] mx-auto'
            />
          </div>

          <p className='text-2xl md:text-3xl mb-4 font-normal max-w-96 text-left text-pretty'>
            Tus envíos se acreditan en una cuenta de
          </p>

          <div className='my-5 flex justify-start'>
            <UenoBankImage />
          </div>

          <p className='max-w-96 text-2xl md:text-4xl sm:text-balance mb-4 font-medium sm:font-bold font-roboto text-left'>
            y si no tenés cuenta, te podés crear una sin salir de tu casa
          </p>

          <footer className='max-w-96 text-base sm:text-2xl text-gray-700 mt-4 text-left text-balance'>
            *El dinero queda resguardado en el banco hasta su retiro.
          </footer>
        </article>

        <div className='hidden md:block flex-1 mt-0'>
          <Image
            src={shippingWithdrawal}
            alt='Ueno app mostrando el proceso de retiro de envío'
            width={600}
            height={600}
            className='w-full h-auto max-w-[600px] mx-auto'
          />
        </div>
      </div>
    </section>
  )
}

export default ShippingWithdrawal
