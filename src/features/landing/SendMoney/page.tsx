import Image from 'next/image'
import sendMoney from '/public/assets/images/cancha.jpg'

export default function SendMoney() {
  return (
    <div className='relative w-full h-screen'>
      <Image
        src={sendMoney}
        alt='Send Money Image'
        fill
        style={{ objectFit: 'cover' }}
        className='w-full h-full' //rounded-3xl
      />
      <div className='absolute inset-0 flex items-center justify-center'>
        <div className='px-5 py-7 xl:px-10 xl:py-20 text-center bg-[#222222] bg-opacity-40 rounded-xl backdrop-blur-sm text-balance'>
          <p className='font-bold font-roboto text-white text-[32px] md:text-5xl lg:text-5xl leading-tight mb-3'>
            ¡Bienvenidos a Travel Time Tee!
          </p>
          <p className='font-roboto text-white text-[20px] md:text-2xl lg:text-3xl leading-tight mb-3'>
            {/* Disfruta de tu pasión en los mejores campos de golf del mundo, con experiencias diseñadas a tu medida.{' '} */}
            Para amantes del golf.
          </p>
          <p className='font-roboto text-white text-[20px] md:text-2xl lg:text-3xl leading-tight mb-3'>
            Para los que les gusta disfrutar y las cosas fáciles.
          </p>
          <p className='font-roboto text-white text-[20px] md:text-2xl lg:text-3xl leading-tight'>
            Para los que les gusta la EXCLUSIVIDAD.
          </p>
        </div>
      </div>
    </div>
  )
}
