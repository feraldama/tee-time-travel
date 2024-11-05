import React, { useState } from 'react'

const AddBeneficiary: React.FC = () => {
  const [formData, setFormData] = useState({
    nombres: '',
    apellidos: '',
    nacionalidad: '',
    cedula: '',
    celular: '',
    email: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí puedes manejar el registro del beneficiario
    console.log('Beneficiario registrado:', formData)
  }

  return (
    <div className='p-4 bg-white rounded-xl'>
      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label className='block text-sm font-medium text-gray-700'>Nombres</label>
          <input
            type='text'
            name='nombres'
            value={formData.nombres}
            onChange={handleChange}
            className='mt-1 block w-full border border-gray-300 rounded-xl p-2'
            placeholder='Pablo Benitez'
            required
          />
        </div>
        <div className='mb-4'>
          <label className='block text-sm font-medium text-gray-700'>Apellidos</label>
          <input
            type='text'
            name='apellidos'
            value={formData.apellidos}
            onChange={handleChange}
            className='mt-1 block w-full border border-gray-300 rounded-xl p-2'
            placeholder='Benitez'
            required
          />
        </div>
        <div className='mb-4'>
          <label className='block text-sm font-medium text-gray-700'>Nacionalidad del CI o Pasaporte</label>
          <input
            type='text'
            name='nacionalidad'
            value={formData.nacionalidad}
            onChange={handleChange}
            className='mt-1 block w-full border border-gray-300 rounded-xl p-2'
            placeholder='Paraguaya'
            required
          />
        </div>
        <div className='mb-4'>
          <label className='block text-sm font-medium text-gray-700'>Mi Cédula de Identidad o Pasaporte</label>
          <input
            type='text'
            name='cedula'
            value={formData.cedula}
            onChange={handleChange}
            className='mt-1 block w-full border border-gray-300 rounded-xl p-2'
            placeholder='514345234'
            required
          />
        </div>
        <div className='mb-4'>
          <label className='block text-sm font-medium text-gray-700'>Nro de Celular</label>
          <input
            type='text'
            name='celular'
            value={formData.celular}
            onChange={handleChange}
            className='mt-1 block w-full border border-gray-300 rounded-xl p-2'
            placeholder='+595 981 345 727'
            required
          />
        </div>
        <div className='mb-4'>
          <label className='block text-sm font-medium text-gray-700'>Email</label>
          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            className='mt-1 block w-full border border-gray-300 rounded-xl p-2'
            placeholder='pablobenitez@gmail.com'
            required
          />
        </div>
        <button type='submit' className='w-full bg-tuiu-green-300 text-white rounded-xl py-2'>
          Registrar beneficiario
        </button>
        <button
          type='button'
          className='w-full mt-4 text-tuiu-green-300 bg-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 py-2'
        >
          Cancelar
        </button>
      </form>
    </div>
  )
}

export default AddBeneficiary
