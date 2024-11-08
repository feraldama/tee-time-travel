import { CurrencyExchange } from '@/components/icons'
import Image from 'next/image'
import image1 from '/public/assets/images/services.png'
import checkIcon from '/public/assets/icons/check.svg'

export default function HowItWorks() {
  const services = [
    {
      title: 'Viajes de golf personalizados',
      description:
        'Diseñamos paquetes a medida según las preferencias de cada cliente. Desde viajes cortos a destinos locales hasta escapadas internacionales a los campos más prestigiosos del mundo.',
      icon: '🛫' // Puedes reemplazar estos iconos con tus propios componentes si los tienes
    },
    {
      title: 'Torneos y eventos',
      description:
        'Organizamos torneos de golf en destinos exclusivos, así como eventos privados para grupos y empresas, garantizando una experiencia premium.',
      icon: '🏌️'
    },
    {
      title: 'Reservas de tee times y traslados',
      description:
        'Nos encargamos de todo lo necesario para que el cliente solo se preocupe de disfrutar, desde las reservas de campos hasta los traslados entre destinos.',
      icon: '🚌'
    },
    {
      title: 'Experiencias complementarias',
      description:
        'Ofrecemos paquetes que combinan golf con actividades adicionales, como tours culturales, gastronómicos, o de bienestar (spa, yoga, etc.).',
      icon: '🏖️'
    }
  ]

  return (
    <section className='w-full py-12'>
      <div className='container mx-auto px-4'>
        {/* Sección de imagen y descripción */}
        <div className='flex flex-col lg:flex-row items-center mb-12'>
          <div className='w-full lg:w-1/2 rounded-lg overflow-hidden'>
            <Image src={image1} alt='Golf image' className='w-full h-auto' />
          </div>
          <div className='w-full lg:w-1/2 lg:pl-8 mt-8 lg:mt-0 text-tuiu-green-300'>
            <ul className='space-y-2 mb-6'>
              <li className='flex items-center'>
                <Image src={checkIcon} alt='Logo' style={{ marginRight: '6px' }} />
                Para los amantes del golf
              </li>
              <li className='flex items-center'>
                <Image src={checkIcon} alt='Logo' style={{ marginRight: '6px' }} />
                Para los que les gusta las cosas fáciles
              </li>
              <li className='flex items-center'>
                <Image src={checkIcon} alt='Logo' style={{ marginRight: '6px' }} />
                Para los que les gusta la Exclusividad
              </li>
            </ul>
            <p className='text-xl md:text-xl font-roboto md:font-inter font-normal mb-5'>
              En Tee Time Travel, creemos que cada partida de golf merece un escenario único. Nos dedicamos a crear
              experiencias de viaje exclusivas para golfistas apasionados, donde el swing se combina con paisajes
              espectaculares y campos de clase mundial. ¡Permítenos llevar tu juego a los destinos más sorprendentes!
            </p>
            <button className='bg-green-200 text-green-800 px-6 py-2 rounded-lg hover:bg-green-300'>
              Explora nuestros destinos
            </button>
          </div>
        </div>

        {/* Sección de servicios */}
        <h2 className='text-2xl font-bold text-center text-tuiu-green-300 mb-8'>Nuestros servicios</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6'>
          {services.map((service, index) => (
            <div key={index} className='bg-white rounded-lg border-2 border-tuiu-green-300 p-6 flex'>
              <div className='text-3xl mr-4'>{service.icon}</div>
              <div>
                <h3 className='text-xl font-bold text-tuiu-green-300 mb-2'>{service.title}</h3>
                <p className='text-tuiu-green-300'>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
