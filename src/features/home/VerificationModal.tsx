'use client'

import { useState, useEffect } from 'react'

export default function VerificationModal() {
  const [code, setCode] = useState(['', '', '', '', ''])
  const [timeLeft, setTimeLeft] = useState(5)
  const [isOpen, setIsOpen] = useState(true)

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
      return () => clearTimeout(timer)
    }
  }, [timeLeft])

  const handleCodeChange = (index: number, value: string) => {
    if (value.length <= 1) {
      const newCode = [...code]
      newCode[index] = value
      setCode(newCode)
      if (value && index < 4) {
        document.getElementById(`code-${index + 1}`)?.focus()
      }
    }
  }

  const handleResendCode = () => {
    setTimeLeft(5)
    setCode(['', '', '', '', ''])
  }

  if (!isOpen) return null

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4'>
      <div className='bg-white rounded-lg shadow-xl w-full max-w-md'>
        <div className='p-6'>
          <div className='flex justify-between items-center mb-4'>
            <h2 className='text-2xl font-semibold text-[#3498db]'>Verificación</h2>
            <button onClick={() => setIsOpen(false)} className='text-gray-500 hover:text-gray-700'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
              </svg>
            </button>
          </div>
          <p className='text-gray-600 mb-6'>
            Te enviamos un código de a tu número de celular y correo electrónico registrado
          </p>
          <div className='mb-6'>
            <p className='text-[#3498db] mb-2'>Código de verificación</p>
            <div className='flex justify-between'>
              {code.map((digit, index) => (
                <input
                  key={index}
                  id={`code-${index}`}
                  type='text'
                  maxLength={1}
                  className='w-12 h-12 border border-gray-300 rounded-lg text-center text-2xl focus:outline-none focus:border-[#3498db]'
                  value={digit}
                  onChange={e => handleCodeChange(index, e.target.value)}
                />
              ))}
            </div>
          </div>
          <div className='mb-6'>
            <p className='text-gray-600 mb-2'>Tiempo restante</p>
            <div className='bg-gray-200 rounded-full h-2 mb-2'>
              <div className='bg-[#3498db] h-2 rounded-full' style={{ width: `${(timeLeft / 5) * 100}%` }}></div>
            </div>
            <p className='text-center font-semibold'>{timeLeft.toString().padStart(2, '0')}</p>
          </div>
          <button onClick={handleResendCode} className='text-[#3498db] hover:underline mb-6 block mx-auto'>
            ¿No te llegó el código?
          </button>
          <button
            onClick={() => alert('Enviar dinero')}
            className='w-full bg-[#3498db] text-white py-3 rounded-lg hover:bg-[#2980b9] transition duration-300 mb-4'
          >
            Enviar dinero
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className='w-full text-gray-500 py-3 rounded-lg hover:bg-gray-100 transition duration-300'
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  )
}
