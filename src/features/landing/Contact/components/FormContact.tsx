const FormContact: React.FC = () => {
  return (
    <section className='flex-1 flex items-center'>
      <form className='w-full max-w-2xl mx-auto space-y-6 xl:mx-0'>
        <div>
          <input
            type='text'
            id='name'
            className='mt-2 w-full p-4 placeholder-tuiu-green-300 text-tuiu-green-300 rounded-2xl border border-gray-300 focus:ring-green-500 focus:border-green-500 sm:text-lg'
            placeholder='Nombre completo'
            required
          />
        </div>

        <div>
          <input
            type='email'
            id='email'
            className='mt-2 w-full p-4 placeholder-tuiu-green-300 text-tuiu-green-300 rounded-2xl border border-gray-300 focus:ring-green-500 focus:border-green-500 sm:text-lg'
            placeholder='Correo electrónico'
            required
          />
        </div>

        <div>
          <textarea
            id='message'
            rows={4}
            className='mt-2 w-full p-4 placeholder-tuiu-green-300 text-tuiu-green-300 rounded-2xl border border-gray-300 focus:ring-green-500 focus:border-green-500 sm:text-lg'
            placeholder='Escribe un mensaje breve'
            required
          />
        </div>

        <button
          type='submit'
          className='w-full py-4 text-white bg-tuiu-green-300 hover:bg-tuiu-green-400 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-2xl text-base text-center sm:text-lg'
        >
          Enviar mensaje
        </button>
      </form>
    </section>
  )
}

export default FormContact
