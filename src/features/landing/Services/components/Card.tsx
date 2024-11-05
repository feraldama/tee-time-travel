type CardProps = {
  description: string
  icon: React.ReactNode
}

const Card: React.FC<CardProps> = ({ description, icon }) => {
  return (
    <div className='bg-tuiu-green-100 p-4 rounded-2xl flex flex-col gap-2 sm:w-[335px] sm:h-[210px] w-[185px] h-[145px]'>
      <div className='mb-2 sm:mb-4'>{icon}</div>
      <div className='text-base sm:text-2xl font-normal'>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Card
