import React, { useState, ChangeEvent, useCallback } from 'react'
import { DropdownCurrency } from '@/components/icons'
import { GuaraniFlag, EuroFlag } from '@/components/Flags'
import { Checkbox } from '@/components'

type Currency = 'EUR' | 'USD' | 'BRL'

interface InputProps {
  id: string
  label: string
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  placeholder: string
  className?: string
}

const formatNumber = (num: string): string => {
  return num.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}

const Input: React.FC<InputProps> = ({ id, label, value, onChange, placeholder, className = '' }) => (
  <div className='space-y-2'>
    <label htmlFor={id} className='block text-sm sm:text-base lg:text-lg font-medium text-gray-700'>
      {label}
    </label>
    <input
      type='text'
      id={id}
      value={value}
      onChange={onChange}
      className={`font-normal text-base sm:text-lg w-full p-3 sm:p-4 lg:p-5 text-gray-700 border border-gray-300 rounded-2xl focus:ring-green-500 focus:border-green-500 ${className}`}
      placeholder={placeholder}
    />
  </div>
)

const CurrencyFlag: React.FC<{ currency: Currency }> = ({ currency }) => {
  switch (currency) {
    case 'EUR':
      return <EuroFlag className='w-5 h-5 sm:w-6 sm:h-6 lg:w-9 lg:h-9' />
    case 'USD':
      return <span className='w-5 h-5 sm:w-6 sm:h-6 lg:w-9 lg:h-9'>🇺🇸</span>
    case 'BRL':
      return <span className='w-5 h-5 sm:w-6 sm:h-6 lg:w-9 lg:h-9'>🇧🇷</span>
  }
}

const SendMoney: React.FC = () => {
  const [formData, setFormData] = useState({
    amount: '',
    ci: '',
    beneficiaryName: '',
    beneficiaryLastName: '',
    phone: ''
  })
  const [selectedCurrency, setSelectedCurrency] = useState<Currency>('EUR')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const handleInputChange = useCallback(
    (field: keyof typeof formData) => (event: ChangeEvent<HTMLInputElement>) => {
      let value = event.target.value
      if (field === 'amount' || field === 'ci') {
        value = formatNumber(value.replace(/\D/g, ''))
      } else if (field === 'beneficiaryName' || field === 'beneficiaryLastName') {
        value = value.replace(/[^a-zA-Z\s]/g, '')
        if (!/^[a-zA-Z]/.test(value) && value !== '') return
      } else if (field === 'phone') {
        value = value.replace(/\D/g, '')
        if (value.startsWith('0')) value = value.substring(1)
        value = value.replace(/(\d{3})(?=\d)/g, '$1 ')
      }
      setFormData(prev => ({ ...prev, [field]: value }))
    },
    []
  )

  const toggleDropdown = useCallback(() => setIsDropdownOpen(prev => !prev), [])

  const handleCurrencyChange = useCallback((currency: Currency) => {
    setSelectedCurrency(currency)
    setIsDropdownOpen(false)
  }, [])

  return (
    <div className='w-full max-w-[700px] mx-auto bg-white p-4 sm:p-6'>
      <form className='space-y-6 sm:space-y-8'>
        <div className='space-y-4'>
          <h3 className='text-lg sm:text-xl lg:text-2xl font-medium flex items-center'>
            <span className='flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-tuiu-green-300/20 text-tuiu-green-300 font-black rounded-full mr-3 sm:mr-4 text-xl sm:text-2xl'>
              1
            </span>
            Ingresá el monto a enviar
          </h3>
          <div className='space-y-2'>
            <label htmlFor='amount' className='block text-sm sm:text-base lg:text-lg font-medium text-gray-700'>
              Monto a enviar
            </label>
            <div className='flex'>
              <input
                type='text'
                id='amount'
                value={formData.amount}
                onChange={handleInputChange('amount')}
                className='flex-grow py-3 sm:py-4 lg:py-6 px-2 sm:px-4 lg:px-6 text-base sm:text-xl lg:text-2xl font-normal text-gray-900 rounded-l-2xl border border-gray-300 focus:ring-green-500 focus:border-green-500'
                placeholder='8.000.000'
              />
              <button
                type='button'
                className='flex items-center px-3 sm:px-3 lg:px-4 text-xs sm:text-sm lg:text-base font-normal text-gray-900 border border-l-0 border-gray-300 rounded-r-2xl hover:bg-gray-200'
              >
                <GuaraniFlag className='w-4 h-4 sm:w-6 sm:h-6 lg:w-9 lg:h-9 mr-0 sm:mr-3 lg:mr-4' />
                <span className='mr-6'>G$</span>
              </button>
            </div>
          </div>
          <div className='space-y-2'>
            <label className='block text-sm sm:text-base lg:text-lg font-medium text-gray-700'>Monto aproximado</label>
            <div className='flex'>
              <input
                type='text'
                value='1.000'
                className='py-3 sm:py-4 lg:py-6 px-3 sm:px-4 lg:px-6 flex-grow text-base sm:text-xl lg:text-2xl font-normal text-tuiu-green-400 bg-tuiu-green-300/20 rounded-l-2xl border border-white'
                disabled
              />
              <div className='relative inline-block'>
                <button
                  type='button'
                  onClick={toggleDropdown}
                  className='flex items-center h-full px-2 sm:px-3 lg:px-4 text-xs sm:text-sm lg:text-base font-normal text-tuiu-green-400 bg-tuiu-green-300/20 border border-l-0 border-white rounded-r-2xl focus:outline-none focus:ring-2 focus:ring-green-500'
                >
                  <CurrencyFlag currency={selectedCurrency} />
                  <span className='ml-2 sm:ml-3'>{selectedCurrency}</span>
                  <DropdownCurrency className='ml-1 sm:ml-2 h-2 w-2 sm:h-3 sm:w-3' />
                </button>
                {isDropdownOpen && (
                  <div className='absolute right-0 mt-2 w-24 sm:w-32 lg:w-40 bg-white border border-gray-300 rounded-md shadow-lg z-10'>
                    {(['EUR', 'USD', 'BRL'] as Currency[]).map(currency => (
                      <button
                        key={currency}
                        type='button'
                        onClick={() => handleCurrencyChange(currency)}
                        className='flex items-center w-full px-2 sm:px-3 lg:px-4 py-2 text-left hover:bg-gray-100 focus:outline-none focus:bg-gray-100'
                      >
                        <CurrencyFlag currency={currency} />
                        <span className='ml-2 sm:ml-3'>{currency}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className='space-y-4'>
          <h3 className='text-lg sm:text-xl lg:text-2xl font-medium flex items-center'>
            <span className='flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-tuiu-green-300/20 text-tuiu-green-300 font-black rounded-full mr-3 sm:mr-4 text-xl sm:text-2xl'>
              2
            </span>
            Agregá los datos del beneficiario
          </h3>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <Input
              id='ci'
              label='*Cédula de Identidad'
              value={formData.ci}
              onChange={handleInputChange('ci')}
              placeholder='2.847.214'
            />
            <Input
              id='beneficiary-name'
              label='*Nombre del beneficiario'
              value={formData.beneficiaryName}
              onChange={handleInputChange('beneficiaryName')}
              placeholder='Maria'
            />
            <Input
              id='beneficiary-last-name'
              label='*Apellido del beneficiario'
              value={formData.beneficiaryLastName}
              onChange={handleInputChange('beneficiaryLastName')}
              placeholder='Villalba'
            />
            <div className='space-y-2'>
              <label htmlFor='phone' className='block text-sm sm:text-base lg:text-lg font-medium text-gray-700'>
                *Nro de Celular
              </label>
              <div className='flex'>
                <button
                  type='button'
                  className='flex items-center px-2 sm:px-3 lg:px-4 text-xs sm:text-sm lg:text-base font-medium text-gray-900 border border-r-0 border-gray-300 rounded-l-2xl hover:bg-gray-200 whitespace-nowrap'
                >
                  <GuaraniFlag className='mr-2 sm:mr-3 h-3 w-3 sm:h-4 sm:w-4' />
                  <span>+595</span>
                </button>
                <input
                  type='text'
                  id='phone'
                  value={formData.phone}
                  onChange={handleInputChange('phone')}
                  className='font-normal text-base sm:text-lg flex-grow p-3 sm:p-4 lg:p-5 text-gray-900 border border-gray-300 rounded-r-2xl focus:ring-green-500 focus:border-green-500 min-w-0'
                  placeholder='981 345 727'
                />
              </div>
            </div>
          </div>
          <div className='flex justify-between'>
            <div className='flex items-center space-x-2'>
              <Checkbox />
            </div>
            <p className='text-xs font-normal text-gray-500 bg-gray-100 p-1 rounded-[7px]'>
              <span className='text-black'> * </span> Campos obligatorios
            </p>
          </div>
        </div>
        <button
          type='submit'
          className='w-full p-3 sm:p-4 lg:p-5 text-white bg-tuiu-green-300 hover:bg-tuiu-green-400 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-2xl text-lg sm:text-xl lg:text-2xl text-center'
        >
          Empezar
        </button>
      </form>
    </div>
  )
}

export default SendMoney
