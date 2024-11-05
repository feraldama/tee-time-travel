import { ArrowDownIcon } from '@/components/icons'
import React, { Ref, useState, forwardRef } from 'react'

interface CustomSelectProps {
  options: { value: string; label: string }[] // Lista de opciones del select
  placeholder: string
  labelText: string
  value: string
  name: string
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  onFocus?: (e: React.FocusEvent<HTMLSelectElement>) => void
  onBlur?: (e: React.FocusEvent<HTMLSelectElement>) => void
  ref?: Ref<HTMLSelectElement>
}

const CustomSelect = forwardRef<HTMLSelectElement, CustomSelectProps>(function CustomSelect(
  { options, placeholder, labelText, value, name, onChange, onFocus, onBlur },
  ref
) {
  const [isFocused, setIsFocused] = useState(false)

  const handleFocus = (e: React.FocusEvent<HTMLSelectElement>) => {
    setIsFocused(true)
    if (onFocus) onFocus(e)
  }

  const handleBlur = (e: React.FocusEvent<HTMLSelectElement>) => {
    setIsFocused(false)
    if (onBlur) onBlur(e)
  }
  // Cambiar el color dependiendo del estado de focus o si se ha seleccionado una opción
  const selectTextColor = isFocused || value ? 'text-tuiu-gray-400' : 'text-tuiu-green-300'
  return (
    <div className='relative w-full max-w-[367px] mx-auto mt-8'>
      <select
        ref={ref}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={`
          w-full h-[64px] p-4 border font-roboto font-normal rounded-2xl sm:text-lg focus:outline-none 
          transition-all duration-200 ease-in-out appearance-none
          ${selectTextColor}
        `}
      >
        <option value=''>{placeholder}</option>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <label
        className={`
          absolute left-4 transition-all duration-300 ease-in-out
          ${
            isFocused || value
              ? '-top-6 left-2 font-roboto text-[16px]'
              : 'top-4 font-roboto text-[16px] pointer-events-none'
          }
        `}
      >
        {isFocused || value ? labelText : ''}
      </label>
      <div className='absolute top-1/2 right-4 transform -translate-y-1/2 pointer-events-none'>
        <ArrowDownIcon />
      </div>
    </div>
  )
})

CustomSelect.displayName = 'CustomSelect'

export default CustomSelect
