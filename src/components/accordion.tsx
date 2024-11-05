'use client'
import React, { useState } from 'react'
import { DropdownCurrency } from '@/components/icons'

interface AccordionItem {
  question: string
  answer: string
}

interface AccordionProps {
  items: AccordionItem[]
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className='space-y-4 max-w-[889px]'>
      {items.map((item, index) => (
        <div key={index} className='rounded-[30px] overflow-hidden'>
          <button
            onClick={() => handleToggle(index)}
            className='flex items-center w-full px-6 py-4 text-left text-tuiu-green-300 focus:outline-none bg-tuiu-green-100 justify-between'
            aria-expanded={openIndex === index}
            aria-controls={`accordion-content-${index}`}
          >
            <h3 className='text-xl sm:text-2xl font-normal leading-tight'>{item.question}</h3>
            <DropdownCurrency className='ml-1 sm:ml-2 h-2 w-2 sm:h-3 sm:w-3' />
          </button>
          <div
            id={`accordion-content-${index}`}
            className={`overflow-hidden transition-all duration-300 bg-tuiu-green-100 ease-in-out ${
              openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <p className='p-6 text-gray-600 text-lg sm:text-xl'>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Accordion
