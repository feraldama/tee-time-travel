import React, { useState, useRef, useEffect, forwardRef } from 'react'
import { ArrowDownIcon } from '@/components/icons'

interface FormData {
  documentType: string
  documentNumber: string
  firstName: string
  lastName: string
  nationality: string
  companyName: string
  taxpayerNumber: string
  countryCode: string
  phoneNumber: string
  email: string
  password: string
  confirmPassword: string
  billingData: boolean
  termsAccepted: boolean
}

interface CustomDocumentSelectProps {
  formData: FormData
  setFormData: (data: FormData) => void
  onBlur?: () => void
  labelText: string
  isDocumentSelectVisible: boolean
  handleKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void
}

const documentOptions = [
  { value: 'cedula_paraguaya', label: 'Cédula de Identidad Paraguaya' },
  { value: 'cedula_extranjera', label: 'Cédula de Identidad Extranjera' },
  { value: 'dni', label: 'DNI' },
  { value: 'pasaporte', label: 'Pasaporte' }
]

const CustomDocumentSelect = forwardRef<HTMLInputElement, CustomDocumentSelectProps>(function CustomDocumentSelect(
  { formData, setFormData, onBlur, labelText, isDocumentSelectVisible, handleKeyDown },
  ref
) {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false)
  const [selectedCountryCode, setSelectedCountryCode] = useState(formData.countryCode)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement | null>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [selectedDocumentType, setSelectedDocumentType] = useState<string>(formData.documentType)
  let isClickInsideDropdown
  // Efecto para manejar el focus automático

  useEffect(() => {
    // Ajustar el ancho del botón al ancho del texto seleccionado
    if (buttonRef.current) {
      const buttonWidth = buttonRef.current.scrollWidth
      buttonRef.current.style.width = `${buttonWidth}px`
    }
  }, [selectedDocumentType])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])
  useEffect(() => {
    if (isDocumentSelectVisible && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isDocumentSelectVisible])

  const toggleDropdown = () => setIsDropdownOpen(prev => !prev)

  const handleSelect = (value: string) => {
    setSelectedDocumentType(value)
    setFormData({ ...formData, documentType: value })
    setIsDropdownOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const clickedElement = event.target as HTMLElement
      isClickInsideDropdown = dropdownRef.current && dropdownRef.current.contains(clickedElement)
      const isClickInsideDocumentTypeSelector = clickedElement.closest('.document-type-selector')

      // Solo cerrar el dropdown si se hace clic fuera del dropdown y del selector de código de país
      if (!isClickInsideDropdown && !isClickInsideDocumentTypeSelector) {
        setIsDropdownOpen(false)

        // Si el clic no está relacionado con el código de país, llama a onBlur
        if (onBlur) {
          onBlur()
        }
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [onBlur])

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const defaultOption = { code: '', flagIcon: null }
  const [isFocused, setIsFocused] = useState<boolean>(false)

  const handleFocus = () => setIsFocused(true)
  const handleBlur = () => setIsFocused(false)

  const getShortLabel = () => {
    const option = documentOptions.find(opt => opt.value === selectedDocumentType)
    return option ? option.label.split(' ')[0] : 'Cédula'
  }

  return (
    <div className='relative w-full max-w-[367px] top-8'>
      <div className='flex'>
        <div className='relative inline-block flex-grow'>
          <button
            ref={buttonRef}
            type='button'
            onFocus={handleFocus}
            onBlur={handleBlur}
            onClick={toggleDropdown}
            className='w-full flex items-center px-4 text-base font-roboto pt-4 pb-5 pl-3 font-normal text-gray-900 border border-gray-300 rounded-l-2xl focus:outline-none focus:ring-2 focus:ring-green-500 document-type-selector'
            style={{ width: '150px' }}
          >
            <span className='flex-grow text-left'>{getShortLabel()}</span>
            <div className='ml-3 h-5 w-5 flex items-center'>
              <ArrowDownIcon />
            </div>
          </button>
          {isDropdownOpen && (
            <div
              ref={dropdownRef}
              className='absolute left-0 w-[300px] bg-white border rounded-2xl z-10 shadow-2xl pb-6 pt-4 pl-4 pr-4'
            >
              {documentOptions.map((option, index) => (
                <div
                  key={option.value}
                  onClick={() => handleSelect(option.value)}
                  className={`flex items-center cursor-pointer px-4 py-2 hover:bg-gray-100 font-roboto font-normal text-[18px] ${
                    index !== documentOptions.length - 1 ? 'border-b border-gray-300' : ''
                  }`}
                >
                  <span>{option.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className='relative flex-grow'>
          <input
            ref={inputRef}
            type='text'
            name='documentNumber'
            value={formData.documentNumber}
            onKeyDown={handleKeyDown}
            onChange={handleInputChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            aria-label={labelText}
            className='w-full h-[64px] pl-4 pr-12 border font-roboto font-normal rounded-r-2xl placeholder-gray-300 border-gray-300 focus:ring-green-500 focus:border-green-500 sm:text-lg focus:outline-none'
          />
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-tuiu-green-300'
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
          <label
            className={`
          absolute transition-all duration-300 ease-in-out
          ${
            isFocused || formData.documentNumber || formData.documentType
              ? '-top-6 -left-36 font-roboto text-[16px] z-10'
              : !isDropdownOpen
              ? 'top-6 -left-36 font-roboto text-[16px] pointer-events-none z-0'
              : '-top-6 -left-36 font-roboto text-[16px] z-10'
          }
        `}
          >
            {labelText}
          </label>
        </div>
      </div>
    </div>
  )
})

CustomDocumentSelect.displayName = 'CustomDocumentSelect'

export default CustomDocumentSelect
