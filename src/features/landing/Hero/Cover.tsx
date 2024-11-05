import Image from 'next/image'

const Cover: React.FC = () => {
  return (
    <>
      <div className='flex-1 flex xl:flex-col items-center xl:items-start justify-stretch'>
        <div className='relative w-full max-w-[400px]'>
          <Image src='/layout/images/cover.svg' width={413} height={553.26} alt='cover' priority />
        </div>
        <p className='items-end text-[32px] xl:text-6xl font-medium mt-4 max-w-[413px] xl:ax-w-[11px]'>
          <span className='font-bold text-tuiu-green-300'>¡Envía dinero a Paraguay </span> en simples pasos!
        </p>
      </div>
    </>
  )
}

export default Cover
