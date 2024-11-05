import { CheckedIcon } from '@/components/icons'
import Link from 'next/link'
import React, { useState } from 'react'

interface CheckInputProps {
  name: string
  label: string
}

const CheckInput: React.FC<CheckInputProps> = ({ name, label }) => {
  const [checked, setChecked] = useState(false)

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked)
  }

  return (
    <div className='flex items-center space-x-2 col-span-2 relative'>
      {/* Checkbox */}
      <input
        id={name}
        name={name}
        type='checkbox'
        checked={checked}
        onChange={handleCheckboxChange}
        className='h-8 w-8 appearance-none bg-tuiu-green-100 border-gray-300 rounded-md focus:ring-tuiu-green-300 checked:bg-tuiu-green-300'
      />

      {/* Icono de check */}
      <span
        className={`absolute -left-2 top-1/2 transform -translate-y-1/2 flex items-center justify-center w-8 h-8 pointer-events-none ${
          checked ? 'visible' : 'invisible'
        }`}
      >
        <CheckedIcon />
      </span>

      {/* Label */}
      <label className='text-[16px] font-regular font-roboto cursor-pointer ml-10'>
        {label.includes('Términos y Condiciones') ? (
          <>
            Acepto los{' '}
            <span className='underline text-tuiu-green-300'>
              <Link href=''>Términos y condiciones</Link>
            </span>
          </>
        ) : (
          label
        )}
      </label>
    </div>
  )
}

export default CheckInput
