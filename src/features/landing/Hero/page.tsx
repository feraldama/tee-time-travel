import Cover from '@/features/landing/Hero/Cover'
import SendMoney from '@/features/landing/Hero/SendMoney'

const Hero: React.FC = () => {
  return (
    <div className='container mx-auto px-4 md:px-20 min-h-screen flex flex-col xl:flex-row mt-10 w-full mb-20 xl:mb-0'>
      <Cover />
      <SendMoney />
    </div>
  )
}

export default Hero
