const Resume = () => {
  return (
    <div className='w-full max-w-2xl mx-auto p-4'>
      <h2 className='text-3xl font-bold text-tuiu-green-400 mb-4'>Resumen</h2>
      <div className='relative'>
        <div className='bg-orange-200 p-3 rounded-3xl'>
          <div className='pt-[calc(100%-25.5rem)]'></div>
          <p className='text-sm text-center relative z-10'>
            *El beneficiario recibirá el valor descontando la comisión
          </p>
        </div>
        <div className='absolute top-0 left-0 right-0 bg-tuiu-green-100 p-6 rounded-3xl'>
          <div className='grid grid-cols-2 gap-4'>
            <div>
              <p className='text-gray-600 mb-2'>Se enviará</p>
              <div className='bg-white rounded-full py-2 px-4 flex items-center space-x-2'>
                <span className='font-semibold'>G$ 8.000.000</span>
              </div>
            </div>
            <div>
              <p className='text-gray-600 mb-2'>Destinatario</p>
              <div className='bg-white rounded-full py-2 px-4'>
                <p className='font-semibold'>Maria Villalba</p>
              </div>
            </div>
            <div>
              <p className='text-gray-600 mb-2'>Cédula de identidad</p>
              <div className='bg-white rounded-full py-2 px-4'>
                <p className='font-semibold'>2.847.214</p>
              </div>
            </div>
            <div>
              <p className='text-gray-600 mb-2'>Nro. de celular</p>
              <div className='bg-white rounded-full py-2 px-4 flex items-center space-x-2'>
                <span className='font-semibold'>+595 981 345 727</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume
