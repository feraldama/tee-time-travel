import React, { useState, useRef, useEffect, forwardRef } from 'react'
import { ArgentinaFlagIcon, ArrowDownIcon, ParaguayFlagIcon, SpainFlagIcon, UsaFlagIcon } from '@/components/icons'

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

interface CustomCountrySelectProps {
  formData: FormData
  setFormData: (data: FormData) => void
  onBlur?: () => void
  labelText: string
  isCountrySelectVisible: boolean
}

const options = [
  { code: '+34', flagIcon: <SpainFlagIcon /> },
  { code: '+1 408', flagIcon: <UsaFlagIcon /> },
  { code: '+54', flagIcon: <ArgentinaFlagIcon /> },
  { code: '+595', flagIcon: <ParaguayFlagIcon /> }
]

const CustomCountrySelect = forwardRef<HTMLInputElement, CustomCountrySelectProps>(function CustomCountrySelect(
  { formData, setFormData, onBlur, labelText, isCountrySelectVisible },
  ref
) {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false)
  const [selectedCountryCode, setSelectedCountryCode] = useState(formData.countryCode)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement | null>(null)
  let isClickInsideDropdown
  // Efecto para manejar el focus automático
  useEffect(() => {
    if (isCountrySelectVisible && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isCountrySelectVisible])

  const toggleDropdown = () => setIsDropdownOpen(prev => !prev)

  const handleSelect = (code: string) => {
    setSelectedCountryCode(code)
    setFormData({ ...formData, countryCode: code })
    setIsDropdownOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const clickedElement = event.target as HTMLElement
      isClickInsideDropdown = dropdownRef.current && dropdownRef.current.contains(clickedElement)
      const isClickInsideCountryCodeSelector = clickedElement.closest('.country-code-selector')

      // Solo cerrar el dropdown si se hace clic fuera del dropdown y del selector de código de país
      if (!isClickInsideDropdown && !isClickInsideCountryCodeSelector) {
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

  const getSelectedFlagIcon = () => {
    const option = options.find(o => o.code === selectedCountryCode)
    return option ? option.flagIcon : null
  }

  const defaultOption = { code: '', flagIcon: null }
  const [isFocused, setIsFocused] = useState<boolean>(false)

  const handleFocus = () => setIsFocused(true)
  const handleBlur = () => setIsFocused(false)

  return (
    <div className='relative col-span-1 max-w-[367px] flex items-center w-full top-4'>
      <div className='relative inline-block'>
        <button
          type='button'
          onFocus={handleFocus}
          onBlur={handleBlur}
          onClick={toggleDropdown}
          className='flex items-center px-4 text-base font-roboto pt-5 pb-4 pl-3 font-normal text-gray-900 border border-gray-300 rounded-l-2xl focus:outline-none focus:ring-2 focus:ring-green-500 country-code-selector'
          style={{ width: '135px' }}
        >
          <div className='flex items-center space-x-2'>
            {getSelectedFlagIcon() || defaultOption.flagIcon}
            <span>{selectedCountryCode || 'País'}</span>
          </div>
          <div className='ml-3 h-3 w-3'>
            <ArrowDownIcon />
          </div>
        </button>
        {isDropdownOpen && (
          <div
            ref={dropdownRef}
            className='absolute left-0 w-[360px] h-[260px] bg-white border rounded-2xl z-10 shadow-2xl pb-6 pt-4 pl-4 pr-4'
          >
            {options.map((option, index) => (
              <div
                key={option.code}
                onClick={() => handleSelect(option.code)}
                className={`flex items-center cursor-pointer px-4 py-2 hover:bg-gray-100 font-roboto font-normal text-[18px] pt-4 pb-4 ${
                  index !== options.length - 1 ? 'border-b border-gray-300' : ''
                }`}
              >
                {option.flagIcon}
                <span className='ml-2'>{option.code}</span>
              </div>
            ))}
          </div>
        )}
      </div>
      <input
        ref={inputRef}
        type='text'
        name='phoneNumber'
        value={formData.phoneNumber}
        onChange={handleInputChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        aria-label={labelText}
        className='w-full flex-grow p-4 text-base font-roboto font-normal border border-gray-300 rounded-r-2xl focus:ring-green-500 focus:border-green-500 hover:border-gray-300 sm:text-lg focus:outline-none'
      />
      <label
        className={`
            absolute transition-all duration-300 ease-in-out
            ${
              isFocused || formData.phoneNumber || formData.countryCode
                ? 'md:-top-3 -top-5 left-2 font-roboto text-[16px] z-10'
                : !isDropdownOpen
                ? 'md:-top-3 top-5 left-2 font-roboto text-[16px] pointer-events-none z-0'
                : 'md:-top-3 -top-5 left-2 font-roboto text-[16px] z-10'
            }
          `}
      >
        {labelText}
      </label>
    </div>
  )
})

CustomCountrySelect.displayName = 'CustomCountrySelect'

export default CustomCountrySelect
