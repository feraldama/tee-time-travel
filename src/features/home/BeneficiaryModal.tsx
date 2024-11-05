'use client'

import { useState } from 'react'

interface Beneficiary {
  id: number
  name: string
}

interface AddBeneficiaryModalProps {
  isOpen: boolean
  onClose: () => void
  onAddBeneficiary: (beneficiary: any) => void
}

function AddBeneficiaryModal({ isOpen, onClose, onAddBeneficiary }: AddBeneficiaryModalProps) {
  const [formData, setFormData] = useState({
    cedula: '',
    nombre: '',
    apellido: '',
    celular: '',
    codigoPais: '+595',
    correo: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onAddBeneficiary(formData)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50'>
      <div className='bg-white rounded-lg shadow-xl w-full max-w-md'>
        <div className='p-6'>
          <div className='flex items-center mb-6'>
            <button onClick={onClose} className='text-[#3498db] mr-4'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 19l-7-7m0 0l7-7m-7 7h18' />
              </svg>
            </button>
            <h2 className='text-2xl font-semibold text-[#3498db]'>Agregar nuevo beneficiario</h2>
          </div>
          <form onSubmit={handleSubmit} className='space-y-4'>
            <div>
              <label htmlFor='cedula' className='block text-sm font-medium text-gray-700'>
                *Cédula de Identidad
              </label>
              <input
                type='text'
                id='cedula'
                name='cedula'
                value={formData.cedula}
                onChange={handleInputChange}
                className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#3498db] focus:ring focus:ring-[#3498db] focus:ring-opacity-50'
                required
              />
            </div>
            <div>
              <label htmlFor='nombre' className='block text-sm font-medium text-gray-700'>
                *Nombre del beneficiario
              </label>
              <input
                type='text'
                id='nombre'
                name='nombre'
                value={formData.nombre}
                onChange={handleInputChange}
                className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#3498db] focus:ring focus:ring-[#3498db] focus:ring-opacity-50'
                required
              />
            </div>
            <div>
              <label htmlFor='apellido' className='block text-sm font-medium text-gray-700'>
                *Apellido del beneficiario
              </label>
              <input
                type='text'
                id='apellido'
                name='apellido'
                value={formData.apellido}
                onChange={handleInputChange}
                className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#3498db] focus:ring focus:ring-[#3498db] focus:ring-opacity-50'
                required
              />
            </div>
            <div>
              <label htmlFor='celular' className='block text-sm font-medium text-gray-700'>
                *Nro de Celular
              </label>
              <div className='mt-1 flex rounded-md shadow-sm'>
                <span className='inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm'>
                  <select
                    name='codigoPais'
                    value={formData.codigoPais}
                    onChange={handleInputChange}
                    className='h-full rounded-md border-transparent bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:border-[#3498db] focus:ring-0 sm:text-sm'
                  >
                    <option value='+595'>🇵🇾 +595</option>
                  </select>
                </span>
                <input
                  type='tel'
                  id='celular'
                  name='celular'
                  value={formData.celular}
                  onChange={handleInputChange}
                  className='flex-1 block w-full rounded-none rounded-r-md border-gray-300 focus:border-[#3498db] focus:ring focus:ring-[#3498db] focus:ring-opacity-50 sm:text-sm'
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor='correo' className='block text-sm font-medium text-gray-700'>
                Correo electrónico
              </label>
              <input
                type='email'
                id='correo'
                name='correo'
                value={formData.correo}
                onChange={handleInputChange}
                className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#3498db] focus:ring focus:ring-[#3498db] focus:ring-opacity-50'
              />
            </div>
            <button
              type='submit'
              className='w-full bg-[#3498db] text-white py-2 px-4 rounded-md hover:bg-[#2980b9] focus:outline-none focus:ring-2 focus:ring-[#3498db] focus:ring-opacity-50 transition duration-300'
            >
              Registrar beneficiario
            </button>
          </form>
          <button
            onClick={onClose}
            className='mt-4 w-full text-gray-600 py-2 px-4 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition duration-300'
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  )
}

const initialBeneficiaries: Beneficiary[] = [
  { id: 1, name: 'Ariel Gonzalez' },
  { id: 2, name: 'Arnold Ledesma' },
  { id: 3, name: 'Atanacio Gutierrez' },
  { id: 4, name: 'Ana Gonzalez' }
]

export default function BeneficiaryModal() {
  const [isOpen, setIsOpen] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [beneficiaries, setBeneficiaries] = useState(initialBeneficiaries)
  const [showAddModal, setShowAddModal] = useState(false)

  const filteredBeneficiaries = beneficiaries.filter(b => b.name.toLowerCase().includes(searchTerm.toLowerCase()))

  const groupedBeneficiaries = filteredBeneficiaries.reduce((acc, beneficiary) => {
    const firstLetter = beneficiary.name[0].toUpperCase()
    if (!acc[firstLetter]) {
      acc[firstLetter] = []
    }
    acc[firstLetter].push(beneficiary)
    return acc
  }, {} as Record<string, Beneficiary[]>)

  const handleAddBeneficiary = (newBeneficiary: any) => {
    setBeneficiaries(prev => [
      ...prev,
      { id: prev.length + 1, name: `${newBeneficiary.nombre} ${newBeneficiary.apellido}` }
    ])
  }

  if (!isOpen) return null

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4'>
      <div className='bg-white rounded-lg shadow-xl w-full max-w-md'>
        <div className='p-6'>
          <div className='flex justify-between items-center mb-6'>
            <h2 className='text-2xl font-semibold text-[#3498db]'>Mis beneficiarios</h2>
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
          <div className='flex space-x-4 mb-6'>
            <div className='flex-1 relative'>
              <input
                type='text'
                placeholder='Buscar destinatario'
                className='w-full py-2 pl-10 pr-4 text-gray-700 bg-[#E6F3FF] rounded-full focus:outline-none focus:ring-2 focus:ring-[#3498db]'
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
              />
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5 text-gray-400 absolute left-3 top-3'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                />
              </svg>
            </div>
            <button
              onClick={() => setShowAddModal(true)}
              className='px-4 py-2 text-[#3498db] border border-[#3498db] rounded-full hover:bg-[#3498db] hover:text-white transition duration-300 flex items-center'
            >
              Agregar
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5 ml-2'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 4v16m8-8H4' />
              </svg>
            </button>
          </div>
          <div className='space-y-4'>
            {Object.entries(groupedBeneficiaries).map(([letter, beneficiaries]) => (
              <div key={letter} className='bg-[#E6F3FF] rounded-lg overflow-hidden'>
                <div className='bg-[#3498db] text-white py-2 px-4 font-semibold'>{letter}</div>
                <div className='p-2 space-y-2'>
                  {beneficiaries.map(beneficiary => (
                    <div key={beneficiary.id} className='bg-white rounded-lg p-4 flex justify-between items-center'>
                      <div>
                        <p className='text-xs text-gray-500'>Nombre del beneficiario</p>
                        <p className='font-semibold'>{beneficiary.name}</p>
                      </div>
                      <button className='text-gray-400 hover:text-gray-600'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='h-6 w-6'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z'
                          />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <AddBeneficiaryModal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        onAddBeneficiary={handleAddBeneficiary}
      />
    </div>
  )
}
