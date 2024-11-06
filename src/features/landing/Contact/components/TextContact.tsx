import { OrgullosamenteParaguayoImage } from '@/components/icons'

const TextContact: React.FC = () => {
  return (
    <section className='flex-1 flex flex-col items-center xl:items-start'>
      <header>
        <h1 className='font-roboto font-bold text-4xl md:text-[51px] text-tuiu-green-300 text-left'>Contáctanos</h1>
      </header>
      <p className='max-w-80 text-base md:text-3xl font-normal font-roboto text-black mt-6 xl:mt-10 text-left text-balance'>
        Envíanos tus consultas o sugerencias y te responderemos en la brevedad posible
      </p>
      {/* <div className='relative w-full h-48 mt-8 xl:mt-12 hidden xl:block'>
        <div className='absolute bottom-4 left-1 top-48 w-24 h-auto z-10 bg-white'>
          <OrgullosamenteParaguayoImage />
        </div>
      </div> */}
    </section>
  )
}

export default TextContact
