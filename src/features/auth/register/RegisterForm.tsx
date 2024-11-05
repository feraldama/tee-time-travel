import { useEffect, useRef, useState } from 'react'
import { ArrowDownIcon, CircleOkIcon, LineContactIcon, LinePasswordIcon, LinePersonalIcon } from '@/components/icons'
import CheckInput from './CheckInput'
import LoadingModal from './LoadingModal'
import CustomCountrySelect from './CustomCountrySelect'
import CustomDocumentSelect from './CustomDocumentSelect'
import CustomInput from './CustomInput'
import CustomSelect from './CustomSelect'
import CustomSearch from './CustomSearch'

type UserData = {
  firstName: string
  lastName: string
  nationality: string
}

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

interface FormErrors {
  email: string
}

const fetchUserData = (documentNumber: string): UserData | null => {
  // Ejemplo de datos simulados
  // Funciona al darle enter
  const mockData: { [key: string]: UserData } = {
    '4350393': {
      firstName: 'Pablo',
      lastName: 'Benítez',
      nationality: 'paraguaya'
    }
    // Agrega más datos de ejemplo según sea necesario
  }
  return mockData[documentNumber] || null
}

const RegisterForm = () => {
  // Ejemplo de datos simulados
  const [isModalVisible, setModalVisible] = useState(false)
  const [showCountrySelect, setShowCountrySelect] = useState(false)
  const [isCountrySelectVisible, setCountrySelectVisible] = useState<boolean>(false)
  const [isInputVisible, setInputVisible] = useState<boolean>(true)

  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    // Verifica si estás en el lado del cliente
    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth <= 768)
    }
  }, [])
  const containerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const countrySelectRef = useRef<HTMLDivElement>(null)
  const documentSelectRef = useRef<HTMLDivElement>(null)
  const [hasUserData, setHasUserData] = useState(false)
  const [isDocumentSelectVisible, setIsDocumentSelectVisible] = useState(false)
  const [isDocumentInputVisible, setIsDocumentInputVisible] = useState(true)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const [errors, setErrors] = useState({
    email: ''
    // otros errores del formulario
  })

  useEffect(() => {
    if (isCountrySelectVisible && countrySelectRef.current) {
      countrySelectRef.current.focus()
    }
    // Si isDocumentSelectVisible es verdadero, enfocamos el documentSelectRef
    if (isDocumentSelectVisible && documentSelectRef.current) {
      documentSelectRef.current.focus()
    }
  }, [isCountrySelectVisible, isDocumentSelectVisible])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Verificamos si el clic fue fuera de los selectores y sus respectivos inputs
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node) &&
        countrySelectRef.current &&
        !countrySelectRef.current.contains(event.target as Node) &&
        documentSelectRef.current &&
        !documentSelectRef.current.contains(event.target as Node)
      ) {
        // Si está visible el selector de país, lo ocultamos y mostramos el input
        if (isCountrySelectVisible) {
          setCountrySelectVisible(false)
          setInputVisible(true)
        }

        // Si está visible el selector de documento, lo ocultamos y mostramos el input
        if (isDocumentSelectVisible) {
          setIsDocumentSelectVisible(false)
          setIsDocumentInputVisible(true)
        }
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    // Función para actualizar el estado basado en el tamaño de la ventana
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    // Agregar el listener al redimensionar la ventana
    window.addEventListener('resize', handleResize)

    // Limpiar los listeners cuando el componente se desmonte
    return () => {
      window.removeEventListener('resize', handleResize)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isCountrySelectVisible, isDocumentSelectVisible])
  const [formData, setFormData] = useState<FormData>({
    documentType: '',
    documentNumber: '',
    firstName: '',
    lastName: '',
    nationality: '',
    companyName: '',
    taxpayerNumber: '',
    countryCode: '',
    phoneNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
    billingData: false,
    termsAccepted: false
  })

  // Estado para deshabilitar inputs
  const [isDisabled, setIsDisabled] = useState(false)

  const handleInputChange = (event: any) => {
    const { name, value } = event.target
    setFormData({
      ...formData,
      [name]: value
    })
  }
  const validateForm = () => {
    // Crea un nuevo objeto de errores con la misma estructura que el estado
    const newErrors: FormErrors = {
      email: '' // Inicializa todas las propiedades necesarias
      // otros campos de error si los hay
    }

    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'El correo electrónico no es válido.'
    }

    setErrors(newErrors)
    return Object.values(newErrors).every(error => error === '')
  }

  const handleInputBlur = () => {
    console.log('Input has lost focus')
    // Aquí puedes agregar cualquier lógica adicional que necesites
  }

  const handleCountrySelectBlur = () => {
    setTimeout(() => {
      // Verificar si el foco está en el campo de número de teléfono o en el código de país
      const countryCodeFocused = document.activeElement?.closest('.country-code-selector')

      if (!formData.phoneNumber && !formData.countryCode && !countryCodeFocused) {
        // Solo ocultar si ambos están vacíos y no estamos en el selector del código de país
        setCountrySelectVisible(false)
        setInputVisible(true)
      }
    }, 200)
  }

  const handleDocumentSelectBlur = () => {
    setTimeout(() => {
      // Verificar si el foco está en el campo de número de documento o en el selector de tipo de documento
      const documentTypeFocused = document.activeElement?.closest('.document-type-selector')

      if (!formData.documentNumber && !formData.documentType && !documentTypeFocused) {
        // Solo ocultar si ambos están vacíos y no estamos en el selector de tipo de documento
        console.log('document number')
        setIsDocumentSelectVisible(false)
        setIsDocumentInputVisible(true)
      }
    }, 200)
  }

  // Verifica si el campo debe mostrarse
  const shouldShowField = !!formData.phoneNumber

  const handleInputFocusDocument = () => {
    setIsDocumentInputVisible(false)
    setIsDocumentSelectVisible(true)
    setTimeout(() => {
      if (documentSelectRef.current) {
        documentSelectRef.current.focus() // Espera a que esté visible para aplicar el foco
      }
    }, 100)
  }

  const handleInputFocus = () => {
    setInputVisible(false)
    setCountrySelectVisible(true)
    setTimeout(() => {
      if (countrySelectRef.current) {
        countrySelectRef.current.focus() // Espera a que esté visible para aplicar el foco
      }
    }, 100)
  }

  // Manejar cambios en los inputs
  const handleInputChangeDN = (event: any) => {
    const { name, value } = event.target

    setModalVisible(true)
    // Actualizar el valor del formulario
    setFormData({
      ...formData,
      [name]: value
    })
    // Si el campo modificado es el número de documento
    if (name === 'documentNumber') {
      // Simular un retraso para la carga de datos (puedes ajustar el tiempo según sea necesario)
      setTimeout(() => {
        const userData = fetchUserData(value)

        if (userData) {
          // Actualizar los campos de nombres, apellidos y nacionalidad
          setFormData({
            ...formData,
            firstName: userData.firstName,
            lastName: userData.lastName,
            nationality: userData.nationality,
            documentNumber: value // Asegura mantener el número de documento actualizado
          })
          setIsDisabled(true) // Deshabilitar inputs después de llenar los datos
          setHasUserData(true)
        } else {
          setFormData({
            ...formData,
            firstName: '',
            lastName: '',
            nationality: '',
            documentNumber: value // Asegura mantener el número de documento actualizado
          })
          setIsDisabled(false) // Habilitar inputs si no se encuentran datos
          setHasUserData(false)
        }

        // Ocultar el modal después de actualizar los datos
        setModalVisible(false)
      }, 2000) // Ajusta el tiempo del retraso si es necesario
    }
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    if (validateForm()) {
      console.log('Procesando')
      // Procesar el formulario
    }
  }
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      // Si se presiona Enter, ejecuta el manejo del cambio de entrada
      handleInputChangeDN(event as unknown as React.ChangeEvent<HTMLInputElement>)
    }
  }
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='bg-white w-full max-w-4xl p-8 md:p-12'>
        <span className='text-[36px] md:text-[54px] text-tuiu-green-300 text-left mb-20 pb-20 font-medium font-roboto'>
          Regístrate <br />
          en 3 simples pasos
        </span>

        <form onSubmit={handleSubmit} className='space-y-6 mt-5'>
          {/* Datos personales */}
          <div className='space-y-4 -top-5'>
            <div className='flex items-center space-x-4'>
              <CircleOkIcon />

              <span className='text-[24px] md:text-[32px] font-roboto font-medium text-tuiu-green-300 pl-5'>
                Datos personales
              </span>
            </div>
            <div className='w-full flex flex-col md:flex-row md:items-start'>
              <div className='hidden md:flex md:w-1/12 md:order-1 ml-3'>
                <LinePersonalIcon />
              </div>
              <div className='w-full md:w-7/8 md:order-2 grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className='relative w-full col-span-1 max-w-[367px]'>
                  {isDocumentSelectVisible && (
                    <CustomDocumentSelect
                      isDocumentSelectVisible={isDocumentSelectVisible}
                      formData={formData}
                      setFormData={setFormData}
                      onBlur={handleDocumentSelectBlur}
                      handleKeyDown={handleKeyDown}
                      labelText='*Nro. de documento'
                    />
                  )}
                  {isDocumentInputVisible && (
                    <CustomSearch
                      type='text'
                      placeholder='*Nro. de documento'
                      labelText='*Nro. de documento'
                      value={formData.documentNumber}
                      onChange={handleInputChange}
                      onFocus={handleInputFocusDocument}
                      name={'documentNumber'}
                    />
                  )}
                </div>

                <div className='relative w-full col-span-1'>
                  <div className='relative w-full col-span-1 max-w-[367px]'>
                    {hasUserData ? (
                      // Si hay datos de usuario, muestra el input normal
                      <>
                        <label htmlFor='firstName' className='font-roboto text-[16px]'>
                          *Ingresá tus nombres
                        </label>
                        <input
                          type='text'
                          name='firstName'
                          value={formData.firstName}
                          disabled={isDisabled}
                          onChange={handleInputChange}
                          aria-label='*Ingresá tus nombres'
                          className={`w-full max-w-[367px] h-[64px] p-4 border font-roboto font-normal rounded-2xl sm:text-lg focus:outline-none ${
                            isDisabled
                              ? 'bg-tuiu-green-100 text-tuiu-green-300 border-tuiu-green-300'
                              : 'border-gray-300 focus:ring-green-500 focus:border-green-500 hover:border-tuiu-green-300'
                          }`}
                        />
                      </>
                    ) : (
                      // Si no hay datos de usuario, muestra el CustomInput
                      <CustomInput
                        type='text'
                        placeholder='*Ingresá tus nombres'
                        labelText='*Ingresá tus nombres'
                        value={formData.firstName}
                        onChange={handleInputChange}
                        name={'firstName'}
                      />
                    )}
                  </div>
                </div>
                <div className='relative w-full col-span-1'>
                  <div className='relative w-full col-span-1 max-w-[367px]'>
                    {hasUserData ? (
                      // Si hay datos de usuario, muestra el input normal para apellidos
                      <>
                        <label htmlFor='lastName' className='font-roboto text-[16px]'>
                          *Ingresá tus apellidos
                        </label>
                        <input
                          type='text'
                          name='lastName'
                          value={formData.lastName}
                          disabled={isDisabled}
                          onChange={handleInputChange}
                          aria-label='*Ingresá tus apellidos'
                          className={`w-full max-w-[367px] h-[64px] p-4 border font-roboto font-normal rounded-2xl sm:text-lg focus:outline-none ${
                            isDisabled
                              ? 'bg-tuiu-green-100 text-tuiu-green-300 border-tuiu-green-300'
                              : 'border-gray-300 focus:ring-green-500 focus:border-green-500 hover:border-tuiu-green-300'
                          }`}
                        />
                      </>
                    ) : (
                      // Si no hay datos de usuario, muestra el CustomInput para apellidos
                      <CustomInput
                        type='text'
                        placeholder='*Ingresá tus apellidos'
                        labelText='*Ingresá tus apellidos'
                        value={formData.lastName}
                        onChange={handleInputChange}
                        name={'lastName'}
                      />
                    )}
                  </div>
                </div>
                <div className='relative w-full col-span-1'>
                  <div className='relative w-full col-span-1 max-w-[367px]'>
                    {hasUserData ? (
                      // Si hay datos de usuario, muestra el select para nacionalidad
                      <>
                        <label htmlFor='nationality' className='font-roboto text-[16px]'>
                          *Nacionalidad de tu documento
                        </label>
                        <div className='relative w-full max-w-[367px]'>
                          <select
                            name='nationality'
                            value={formData.nationality}
                            disabled={isDisabled}
                            onChange={handleInputChange}
                            className={`w-full h-[64px] p-4 border font-roboto font-normal rounded-2xl sm:text-lg focus:outline-none appearance-none ${
                              isDisabled
                                ? 'bg-tuiu-green-100 text-tuiu-green-300 border-tuiu-green-300'
                                : 'border-gray-300 focus:ring-green-500 focus:border-green-500 hover:border-tuiu-green-300'
                            }`}
                          >
                            <option value='' disabled>
                              Selecciona tu nacionalidad
                            </option>
                            <option value='paraguaya'>Paraguaya</option>
                            <option value='extranjero'>Extranjero</option>
                          </select>
                          <div className='absolute top-1/2 right-4 transform -translate-y-1/2 pointer-events-none'>
                            <ArrowDownIcon />
                          </div>
                        </div>
                      </>
                    ) : (
                      // Si no hay datos de usuario, muestra el CustomInput para nacionalidad
                      <CustomSelect
                        placeholder='*Nacionalidad de tu documento'
                        labelText='*Nacionalidad de tu documento'
                        value={formData.nationality} // Valor de la nacionalidad en el estado
                        onChange={handleInputChange} // Controlador para manejar cambios
                        onFocus={handleInputBlur}
                        name={'nationality'} // Nombre del campo
                        options={[
                          { value: 'paraguaya', label: 'Paraguaya' }, // Opción 'Paraguaya'
                          { value: 'extranjero', label: 'Extranjero' } // Opción 'Extranjero'
                        ]}
                      />
                    )}
                  </div>
                </div>
                <div className='flex items-center space-x-2 col-span-1 md:col-span-2'>
                  <CheckInput name='billingData' label='Registrar datos de facturación' />
                </div>
                <div className='relative w-full col-span-1 max-w-[367px]'>
                  <CustomInput
                    type='text'
                    placeholder='Razón social'
                    labelText='*Razón social'
                    value={formData.companyName}
                    onChange={handleInputChange}
                    name={'companyName'}
                  />
                </div>
                <div className='relative w-full col-span-1 max-w-[367px]'>
                  <CustomInput
                    type='text'
                    placeholder={isMobile ? 'RUC' : 'RUC o Nro. de contribuyente'}
                    labelText={isMobile ? 'RUC' : 'RUC o Nro. de contribuyente'}
                    value={formData.taxpayerNumber}
                    onChange={handleInputChange}
                    name={'taxpayerNumber'}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Datos de contacto */}
          <div className='space-y-4'>
            <div className='flex items-center space-x-4'>
              <CircleOkIcon />
              <span className='text-[24px] md:text-[32px] font-roboto font-medium text-tuiu-green-300 pl-5'>
                Datos de contacto
              </span>
            </div>
            <div className='w-full flex flex-col md:flex-row md:items-start'>
              <div className='hidden md:flex md:w-1/12 md:order-1 ml-3 mt-3'>
                <LineContactIcon />
              </div>
              <div className='w-full md:w-7/8 md:order-2 grid flex-col md:mt-0 grid-cols-1 md:grid-cols-2 gap-4'>
                {/* <div className='relative w-full col-span-1 max-w-[367px]'> */}
                {/* // Dentro de tu JSX: */}
                {isCountrySelectVisible && (
                  <CustomCountrySelect
                    isCountrySelectVisible={isCountrySelectVisible}
                    formData={formData}
                    setFormData={setFormData}
                    onBlur={handleCountrySelectBlur}
                    labelText='*Indicá tu Nro. de teléfono'
                  />
                )}
                {isInputVisible && (
                  <div className='relative w-full col-span-1 max-w-[367px]'>
                    <CustomInput
                      type='text'
                      placeholder='*Indicá tu Nro. de teléfono'
                      labelText='*Indicá tu Nro. de teléfono'
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      name='phoneNumber'
                      onFocus={handleInputFocus}
                    />
                  </div>
                )}
                {/* </div> */}
                <div className='relative w-full col-span-1 max-w-[367px]'>
                  <CustomInput
                    type='email'
                    placeholder='*Ingresá tu correo electrónico'
                    labelText='*Ingresá tu correo electrónico'
                    value={formData.email}
                    onChange={handleInputChange}
                    name={'email'}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Datos de acceso */}
          <div className='space-y-4'>
            <div className='flex items-center space-x-4'>
              <CircleOkIcon />
              <span className='text-[24px] md:text-[32px] font-roboto font-medium text-tuiu-green-300 pl-5'>
                Datos de acceso
              </span>
            </div>
            <div className='w-full flex flex-col md:flex-row md:items-start'>
              <div className='hidden md:flex md:w-1/12 md:order-1 ml-3'>
                <LinePasswordIcon />
              </div>
              <div className='w-full md:w-7/8 md:order-2 grid flex-col md:mt-0 grid-cols-1 md:grid-cols-2 gap-4'>
                <div className='relative w-full col-span-1 max-w-[367px]'>
                  <CustomInput
                    type='password' // Especifica que el tipo es password
                    placeholder='*Ingresá tu contraseña' // Placeholder para cuando el campo no está enfocado
                    labelText='*Ingresá tu contraseña' // Texto que se moverá hacia arriba cuando el campo está enfocado o lleno
                    value={formData.password} // Valor del campo, manejado desde el estado del formulario
                    onChange={handleInputChange} // Función que manejará el cambio del valor del input
                    name={'password'}
                  />
                </div>
                <div className='relative w-full col-span-1 max-w-[367px]'>
                  <CustomInput
                    type='password' // Especifica que el tipo es password
                    placeholder='*Confirmá tu contraseña' // Placeholder para cuando el campo no está enfocado
                    labelText='*Confirmá tu contraseña' // Texto que se moverá hacia arriba cuando el campo está enfocado o lleno
                    value={formData.confirmPassword} // Valor del campo, manejado desde el estado del formulario
                    onChange={handleInputChange} // Función que manejará el cambio del valor del input
                    name={'confirmPassword'}
                  />
                </div>
                <div className='w-full flex items-center space-x-4 mt-8'>
                  <CheckInput name='termsAccepted' label='Acepto los términos y condiciones' />
                </div>
              </div>
            </div>
          </div>

          {/* Botones */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <button
              type='button'
              className='order-2 md:order-1 text-[18px] text-tuiu-gray-100 w-full max-w-[367px] h-[64px] rounded-2xl'
            >
              Cancelar
            </button>
            <button
              type='submit'
              className='order-1 md:order-2 text-[24px] w-full max-w-[367px] h-[64px] rounded-2xl bg-tuiu-green-300 text-white'
            >
              Registrarme
            </button>
          </div>
          <LoadingModal isVisible={isModalVisible} onClose={() => setModalVisible(false)} />
        </form>
      </div>
    </div>
  )
}

export default RegisterForm
