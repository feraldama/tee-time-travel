import React from 'react'
import {
  ComodoImage,
  ITTI,
  UPAY,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  WhatsAppIcon,
  PCI
} from '../../../components/icons'
const Footer: React.FC = () => {
  return (
    <section className='bg-tuiu-green-300 text-white py-16'>
      <div className='max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='mx-4 sm:mx-8 md:mx-16 lg:mx-32'>
          <div className='flex flex-row justify-between gap-4'>
            <div className='flex flex-col gap-4'>
              <span className='font-extrabold text-lg sm:text-xl md:text-2xl lg:text-[34.83px]'>Empresa</span>
              <span className='cursor-pointer text-xs sm:text-sm md:text-base lg:text-[21.77px]'>Blog</span>
              <span className='cursor-pointer text-xs sm:text-sm md:text-base lg:text-[21.77px]'>Prensa</span>
              <span className='cursor-pointer text-xs sm:text-sm md:text-base lg:text-[21.77px]'>Nosotros</span>
              <span className='cursor-pointer text-xs sm:text-sm md:text-base lg:text-[21.77px]'>
                Preguntas Frecuentes
              </span>
              <span className='cursor-pointer text-xs sm:text-sm md:text-base lg:text-[21.77px]'>
                Política de Privacidad
              </span>
              <span className='cursor-pointer text-xs sm:text-sm md:text-base lg:text-[21.77px]'>
                Términos y Condiciones
              </span>
            </div>
            <div className='flex flex-col gap-4'>
              <span className='font-bold text-lg sm:text-xl md:text-2xl lg:text-[34.83px]'>Producto</span>
              <span className='cursor-pointer text-xs sm:text-sm md:text-base lg:text-[21.77px]'>Referir amigos</span>
              <span className='cursor-pointer text-xs sm:text-sm md:text-base lg:text-[21.77px]'>Iniciar Sesión</span>
              <span className='cursor-pointer text-xs sm:text-sm md:text-base lg:text-[21.77px]'>Registrarse</span>
              <span className='cursor-pointer text-xs sm:text-sm md:text-base lg:text-[21.77px]'>Socios</span>
            </div>
            <div className='flex flex-col gap-8'>
              <span className='font-bold text-lg sm:text-xl md:text-2xl lg:text-[34.83px]'>Ayuda</span>
              <span className='flex flex-row items-center gap-2'>
                <WhatsAppIcon className='w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12' />
                <span className='text-xs sm:text-sm md:text-base lg:text-[21.77px] w-[110px]'>Atención al Cliente</span>
              </span>
              <span className='font-bold text-lg sm:text-xl md:text-2xl lg:text-[34.83px]'>Seguinos</span>
              <span className='flex justify-center gap-6 sm:gap-8 md:gap-10'>
                <FacebookIcon className='w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8' />
                <InstagramIcon className='w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8' />
                <TwitterIcon className='w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8' />
              </span>
            </div>
          </div>

          <div className='mt-[91px] border-b-[2.18px] border-white opacity-20'></div>

          <div className='flex flex-row justify-between gap-4 mt-10'>
            <div className='flex flex-col'>
              <span className='text-xs sm:text-sm md:text-base lg:text-[21.77px] my-1'>
                Paseo La Galería, Torre 3, Piso 11
              </span>
              <span className='text-xs sm:text-sm md:text-base lg:text-[21.77px] my-1'>Asunción - Paraguay</span>
              <span className='text-xs sm:text-sm md:text-base lg:text-[21.77px] my-1'>info@tuiu.co</span>
              <span className='text-xs sm:text-sm md:text-base lg:text-[21.77px] my-1'>Tel: + 595 981231234</span>
            </div>
            <div className='flex flex-col items-end'>
              <span className='text-xs sm:text-sm md:text-base lg:text-[21.77px]'>Aliados</span>
              <div className='flex flex-wrap justify-end items-center gap-2 sm:gap-3 md:gap-4 pt-3'>
                <UPAY className='w-16 h-6 sm:w-20 sm:h-8 md:w-24 md:h-10 lg:w-28 lg:h-12' />
                <ITTI className='w-12 h-6 sm:w-16 sm:h-8 md:w-20 md:h-10 lg:w-24 lg:h-12' />
                <PCI className='w-16 h-6 sm:w-20 sm:h-8 md:w-24 md:h-10 lg:w-28 lg:h-12' />
                <ComodoImage className='w-16 h-6 sm:w-20 sm:h-8 md:w-24 md:h-10 lg:w-28 lg:h-12' />
              </div>
            </div>
          </div>
          <div className='mt-[91px] border-b-[2.18px] border-white opacity-20'></div>
          <span className='text-xs sm:text-sm md:text-base text-center justify-center flex lg:text-[21.77px] my-1'>
            © 2024 Todos los derechos reservados
          </span>
        </div>
      </div>
    </section>
  )
}

export default Footer
