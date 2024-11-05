import { CurrencyExchange } from '@/components/icons'

export default function HowItWorks() {
  const steps = [
    'Ingresá el monto a enviar',
    'Agregá los datos de beneficiario',
    'Te aparecerá un resumen antes de enviar a modo de confirmar los datos',
    'Realizá el envío con tu tarjeta de crédito o débito'
  ]

  return (
    <section className='w-full py-16 bg-tuiu-green-100 rounded-3xl'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col md:flex-row items-stretch justify-between'>
          <div className='w-full md:w-1/2 order-1 md:order-1 flex flex-col items-center justify-center'>
            <h2 className='text-5xl font-bold text-tuiu-green-300 mb-8 text-center hidden md:block'>¿Cómo funciona?</h2>
            <div className='md:px-8 hidden md:block py-2'>
              <CurrencyExchange className='w-full h-auto md:max-w-sm' />
            </div>
          </div>
          <div className='w-full md:w-1/2 order-2 md:order-2 flex flex-col mt-8 md:mt-0'>
            <h2 className='text-[32px] font-bold text-tuiu-green-300 mb-8 text-center md:hidden'>¿Cómo funciona?</h2>
            <div className='relative flex-grow'>
              <div className='absolute left-5 xl:left-7 md:left-7 top-0 h-full w-1.5 bg-white' aria-hidden='true'></div>
              <ul className='relative'>
                {steps.map((step, index) => (
                  <li key={index} className='mb-8'>
                    <div className='flex items-center'>
                      <div className='z-10 flex items-center justify-center w-12 h-12 xl:w-16 xl:h-16 rounded-full bg-white flex-shrink-0'>
                        <span className='text-tuiu-green-300 font-black text-3xl xl:text-[34px]'>{index + 1}</span>
                      </div>
                      <p className='ml-6 text-lg md:text-3xl font-roboto md:font-inter font-normal'>{step}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <p className='text-5xl font-bold text-balance text-tuiu-green-300 mt-8 hidden md:block'>
              ¡LISTO y tu dinero llega a Paraguay!
            </p>
          </div>
        </div>
        <p className='text-4xl font-bold text-balance text-tuiu-green-300 mt-8 text-center md:hidden'>
          ¡LISTO y tu dinero llega a Paraguay!
        </p>
        <div className='mt-8 md:hidden flex justify-center py-2'>
          <CurrencyExchange className='w-full xl:max-w-[213px] max-w-36 h-auto' />
        </div>
      </div>
    </section>
  )
}
