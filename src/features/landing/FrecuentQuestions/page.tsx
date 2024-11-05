import React from 'react'
import Accordion from '@components/accordion'

const FAQ_ITEMS = [
  {
    question: '¿Hay límites en envíos?',
    answer: 'No hay límites en montos de envíos.'
  },
  {
    question: '¿Cómo retira un envío el receptor?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    question: '¿Es Seguro?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }
]

const FrequentQuestions: React.FC = () => {
  return (
    <section className='py-12 sm:py-16 md:py-20 lg:py-24'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl '>
        <h1 className='text-4xl xl:text-5xl text-center font-bold font-roboto text-tuiu-green-300 mb-6 sm:mb-8 md:mb-10 lg:mb-12'>
          Preguntas Frecuentes
        </h1>
        <div className='font-roboto justify-center flex'>
          <Accordion items={FAQ_ITEMS} />
        </div>
      </div>
    </section>
  )
}

export default FrequentQuestions
