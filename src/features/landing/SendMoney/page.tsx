import Image from 'next/image'
import sendMoney from '/public/assets/images/send-money.png'

export default function SendMoney() {
  return (
    <div className='relative w-full h-screen'>
      <Image src={sendMoney} alt='Send Money Image' fill style={{ objectFit: 'cover' }} className='w-full h-full' />
      <div className='absolute inset-0 flex items-center justify-center'>
        <div className='px-5 py-7 xl:px-10 xl:py-20 text-center bg-[#222222] bg-opacity-40 rounded-xl backdrop-blur-sm text-balance'>
          <p className='font-bold font-roboto text-white text-[32px] md:text-5xl lg:text-6xl leading-tight'>
            ¡Enviá dinero al <br /> instante, de celular a <br /> celular!
          </p>
        </div>
      </div>
    </div>
  )
}