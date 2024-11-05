import React from 'react'
import { DotsHorizontalIcon } from '@/components/icons'

type Beneficiary = {
  id: number
  name: string
  initial: string
}

const beneficiaries: Beneficiary[] = [
  { id: 1, name: 'Ariel Gonzalez', initial: 'A' },
  { id: 2, name: 'Arnold Ledesma', initial: 'A' },
  { id: 3, name: 'Atanacio Gutierrez', initial: 'A' },
  { id: 4, name: 'Luis Quevedo', initial: 'B' },
  { id: 5, name: 'Luis Quevedo', initial: 'B' }
]

export default function BeneficiariesList() {
  const groupedBeneficiaries = beneficiaries.reduce((acc, beneficiary) => {
    const initial = beneficiary.initial
    if (!acc[initial]) acc[initial] = []
    acc[initial].push(beneficiary)
    return acc
  }, {} as Record<string, Beneficiary[]>)

  return (
    <div className='mt-6 bg-tuiu-green-100 py-px'>
      {Object.keys(groupedBeneficiaries).map(initial => (
        <div key={initial}>
          <div className='py px-4 bg-tuiu-green-300 text-white font-semibold text-lg'>{initial}</div>
          <ul className='bg-tuiu-green-100'>
            {groupedBeneficiaries[initial].map(beneficiary => (
              <li
                key={beneficiary.id}
                className='flex items-center justify-between px-4 py-2 m-2 bg-white rounded-lg shadow-sm'
              >
                <div>
                  <p className='text-tuiu-gray-400 text-[7px]'>Nombre del destinatario</p>
                  <p className='font-normal'>{beneficiary.name}</p>
                </div>
                <button>
                  {' '}
                  <DotsHorizontalIcon />
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
