import { useState } from 'react'

export default function Checkbox() {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <label className='flex items-center space-x-3 cursor-pointer'>
      <div className='relative'>
        <input type='checkbox' className='sr-only' checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
        <div
          className={`w-8 h-8 bg-tuiu-green-100 border rounded-md flex items-center justify-center ${
            isChecked ? 'bg-tuiu-green-300 border-border-tuiu-green-300' : 'border-tuiu-green-300 rounded-[10px]'
          }`}
        >
          {isChecked && (
            <svg className='w-4 h-4 text-white fill-current' viewBox='0 0 20 20'>
              <path d='M0 11l2-2 5 5L18 3l2 2L7 18z' />
            </svg>
          )}
        </div>
      </div>
      <span className='text-gray-700 font-medium'>Guardar datos</span>
    </label>
  )
}
