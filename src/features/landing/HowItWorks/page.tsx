import image1 from '/public/assets/images/mision1.jpeg'
import image2 from '/public/assets/images/mision2.jpeg'
import image3 from '/public/assets/images/mision3.jpeg'
import image4 from '/public/assets/images/mision4.jpeg'
import Image from 'next/image'

export default function HowItWorks() {
  const steps = [
    <>
      <strong>Viajes de golf personalizados:</strong>
      <span className='block mt-2'>
        Diseñamos paquetes a medida según las preferencias de cada cliente. Desde viajes cortos a destinos locales hasta
        escapadas internacionales a los campos más prestigiosos del mundo.
      </span>
    </>,
    <>
      <strong>Torneos y eventos:</strong>
      <span className='block mt-2'>
        Organizamos torneos de golf en destinos exclusivos, así como eventos privados para grupos y empresas,
        garantizando una experiencia premium.
      </span>
    </>,
    <>
      <strong>Reservas de tee times y traslados:</strong>
      <span className='block mt-2'>
        Nos encargamos de todo lo necesario para que el cliente solo se preocupe de disfrutar, desde las reservas de
        campos hasta los traslados entre destinos.
      </span>
    </>,
    <>
      <strong>Experiencias complementarias: </strong>
      <span className='block mt-2'>
        Ofrecemos paquetes que combinan golf con actividades adicionales, como tours culturales, gastronómicos, o de
        bienestar (spa, yoga, etc.).
      </span>
    </>
  ]

  return (
    <section className='w-full py-12 lg:p-16 bg-tuiu-gray-50'>
      <div className='container mx-auto px-4'>
        <div className='flex-row items-stretch justify-between'>
          <div className='w-full text-tuiu-green-300'>
            <h2 className='text-2xl font-bold mb-3'>¿Quiénes somos?</h2>
            <p className='text-xl md:text-xl font-roboto md:font-inter font-normal mb-5'>
              Time tee Travel es una agencia de viajes dedicada a los apasionados del golf. Ofrecemos experiencias
              personalizadas para jugadores de todos los niveles, con la oportunidad de disfrutar de los mejores campos
              de golf en destinos espectaculares alrededor del mundo.
            </p>
          </div>
          <div className='w-full text-tuiu-green-300'>
            <h2 className='text-2xl font-bold mb-3'>Nuestra misión</h2>
            <p className='text-xl md:text-xl font-roboto md:font-inter font-normal'>
              Proporcionar a los amantes del golf experiencias de viaje inolvidables, combinando la práctica de su
              deporte favorito con el descubrimiento de paisajes increíbles, alojamientos de lujo, y una atención al
              detalle sin igual.
            </p>
          </div>
        </div>

        {/* Sección de imágenes */}
        <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8'>
          <div className='rounded-lg overflow-hidden'>
            {/* <Image src={image1} alt='Golf image 1' layout='responsive' objectFit='cover' /> */}
            <Image src={image1} alt='Golf image 1' style={{ height: '100%' }} />
          </div>
          <div className='rounded-lg overflow-hidden'>
            <Image src={image2} alt='Golf image 2' style={{ height: '100%' }} />
          </div>
          <div className='rounded-lg overflow-hidden'>
            <Image src={image3} alt='Golf image 3' style={{ height: '100%' }} />
          </div>
          <div className='rounded-lg overflow-hidden'>
            <Image src={image4} alt='Golf image 4' style={{ height: '100%' }} />
          </div>
        </div>
      </div>
    </section>
  )
}
