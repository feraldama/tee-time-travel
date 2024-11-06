import React from 'react'
import { House, PaperPlane, Building, Clock, Shield, MoneyWallet } from '@/components/icons'

const services = [
  { icon: <House className='w-8 h-8 sm:w-12 sm:h-12' />, description: 'Envío directo, sin\nmoverte de tu casa' },
  {
    icon: <PaperPlane className='w-8 h-8 sm:w-12 sm:h-12' />,
    description: 'Envía al instante con tarjeta\nde crédito o débito'
  },
  { icon: <Building className='w-8 h-8 sm:w-12 sm:h-12' />, description: 'Bancarización del\ndestinatario' },
  { icon: <Clock className='w-8 h-8 sm:w-12 sm:h-12' />, description: 'Disponible las 24 hs los\n7 días de la semana' },
  { icon: <Shield className='w-8 h-8 sm:w-12 sm:h-12' />, description: 'Seguridad en tus\nenvíos y datos' },
  {
    icon: <MoneyWallet className='w-8 h-8 sm:w-12 sm:h-12' />,
    description: 'Gestioná tu dinero. Envía dinero\na tu cuenta en Paraguay'
  }
]

const ServiceCard: React.FC<{ icon: React.ReactNode; description: string }> = ({ icon, description }) => (
  <div className='p-4 rounded-2xl flex flex-col justify-between border border-gray-200 w-full h-full min-h-[145px] sm:min-h-[210px]'>
    <div className='mb-2 sm:mb-4'>{icon}</div>
    <p className='text-sm sm:text-2xl font-medium whitespace-pre-line'>{description}</p>
  </div>
)

export default function Services() {
  return (
    <section className='px-4 pt-12 lg:px-8 lg:h-screen' aria-labelledby='benefits-title'>
      <h2
        id='benefits-title'
        className='text-3xl sm:text-5xl text-tuiu-green-300 font-bold font-inter text-center mb-8'
      >
        Beneficios
      </h2>
      <div className='flex justify-center'>
        <div className='grid font-normal font-roboto gap-4 sm:gap-6 lg:gap-8 grid-cols-2 lg:grid-cols-3 max-w-screen-xl w-full mt-10 mb-20 text-balance'>
          {services.map((service, index) => (
            <ServiceCard key={index} icon={service.icon} description={service.description} />
          ))}
        </div>
      </div>
    </section>
  )
}
