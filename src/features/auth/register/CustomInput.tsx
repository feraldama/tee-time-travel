import React, { Ref, useState, forwardRef } from 'react'

interface CustomInputProps {
  type: string
  placeholder: string
  labelText: string
  value: string
  name: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
  ref?: Ref<HTMLInputElement>
}

const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(function CustomInput(
  { type, placeholder, labelText, value, name, onChange, onFocus, onBlur },
  ref
) {
  const [isFocused, setIsFocused] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false)

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true)
    if (onFocus) onFocus(e)
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false)
    if (onBlur) onBlur(e)
  }
  const selectTextColor = isFocused || value ? 'text-tuiu-gray-400' : 'text-tuiu-green-300'
  return (
    <div className='relative w-full max-w-[367px] mx-auto mt-8'>
      <input
        ref={ref}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        disabled={isDisabled}
        arial-label={labelText}
        className={`
          w-full h-[64px] p-4 border font-roboto font-normal rounded-2xl sm:text-lg focus:outline-none 
          transition-all duration-200 ease-in-out
          placeholder:text-tuiu-green-300
          ${
            isDisabled
              ? 'bg-tuiu-green-100 text-tuiu-green-300 border-tuiu-green-300'
              : `border-gray-300 focus:ring-green-500 focus:border-green-500 hover:border-tuiu-green-300 
              ${isFocused || value ? 'border-tuiu-green-300' : 'border-gray-300'}`
          }
          ${selectTextColor}
        `}
        placeholder={isFocused || value ? '' : placeholder}
      />
      <label
        className={`
          absolute left-4 transition-all duration-300 ease-in-out
          ${
            isFocused || value
              ? '-top-6 left-2  font-roboto text-[16px]'
              : 'top-4  font-roboto text-[16px] pointer-events-none'
          }
        `}
      >
        {isFocused || value ? labelText : ''}
      </label>
    </div>
  )
})

CustomInput.displayName = 'CustomInput'

export default CustomInput
