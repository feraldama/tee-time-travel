import TextContact from './components/TextContact'
import FormContact from './components/FormContact'

const Contact: React.FC = () => {
  return (
    <div className='px-4 sm:px-8 lg:px-16 xl:px-40 py-8 sm:py-12 lg:py-20 flex flex-col xl:flex-row gap-12 lg:h-screen bg-tuiu-green-100'>
      <TextContact />
      <FormContact />
    </div>
  )
}

export default Contact
