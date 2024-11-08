import Image from 'next/image'
import europeImage from '/public/assets/images/europe.jpeg'
import asiaPacificImage from '/public/assets/images/asia.jpeg'
import northAmericaImage from '/public/assets/images/northamerica.jpeg'
import caribbeanImage from '/public/assets/images/caribe.jpeg'

export default function Destinations() {
  const destinations = [
    {
      title: 'Europa',
      description:
        'Explora los campos legendarios de Escocia, Irlanda, España, y Portugal, donde la historia del golf se fusiona con la belleza de los paisajes.',
      image: europeImage
    },
    {
      title: 'Norteamérica',
      description:
        'Descubre los impresionantes campos de golf en Estados Unidos y Canadá, desde Pebble Beach en California hasta los verdes valles de Vancouver.',
      image: northAmericaImage
    },
    {
      title: 'Caribe y Centroamérica',
      description:
        'Relájate y disfruta del golf con vistas paradisíacas en destinos como República Dominicana, México y Costa Rica.',
      image: caribbeanImage
    },
    {
      title: 'Asia y Pacífico',
      description:
        'Vive experiencias exóticas jugando en campos únicos de Tailandia, Nueva Zelanda, Australia y Japón.',
      image: asiaPacificImage
    }
  ]

  return (
    <section className='w-full py-16 bg-tuiu-gray-50'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl font-bold text-center text-tuiu-green-300 mb-8'>Nuestros destinos</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:mx-8'>
          {destinations.map((destination, index) => (
            <div key={index} className='bg-white rounded-lg shadow overflow-hidden'>
              <div className='relative w-full h-48'>
                <Image src={destination.image} alt={destination.title} layout='fill' objectFit='cover' />
              </div>
              <div className='p-4 bg-tuiu-green-300 text-white'>
                <h3 className='text-xl font-semibold mb-2'>{destination.title}</h3>
                <p className='text-sm'>{destination.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
