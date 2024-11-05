import { useState } from 'react'

interface SectionData {
  title: string
  description: string
  items?: Array<{ text: string }>
}

interface AboutUsData {
  heading: string
  introduction: string
  features: SectionData
  howItWorks: SectionData
  benefits: SectionData
  conclusion: string
}

export default function AboutUs() {
  // Datos de ejemplo
  const [data] = useState<AboutUsData>({
    heading: 'Nosotros',
    introduction: 'Tu Conexión Directa para el Envío de Dinero a Paraguay',
    features: {
      title: 'Nos enorgullecemos de ofrecer',
      description: 'Ofrecemos envíos seguros, facilidad de uso y retiros rápidos.',
      items: [
        { text: 'Envíos de Dinero Seguros: tu dinero está protegido con tecnología avanzada en seguridad digital.' },
        { text: 'Facilidad de Uso: Una interfaz amigable y soporte al cliente.' },
        { text: 'Retiro fácil: Acreditación en una cuenta de Upay con opciones de apertura rápida.' }
      ]
    },
    howItWorks: {
      title: '¿Cómo funciona?',
      description: 'Retiro de dinero: Los envíos se depositan directamente en una cuenta de Upay.',
      items: [
        { text: 'Elegí el Monto y la Moneda: Ingresa cuánto quieres enviar o recibir y en qué moneda.' },
        { text: 'Añadí los Datos de Envío: Completa la información del destinatario.' },
        { text: 'Confirmá con el comprobante: Te mostramos un resumen para verificar los datos.' },
        { text: 'Paga con Tarjeta: Usa tu tarjeta de crédito o débito para efectuar el pago.' }
      ]
    },
    benefits: {
      title: 'Beneficios de Usar Nombre de la Marca',
      description: 'Beneficios description',
      items: [
        { text: 'Envío Directo: Realiza envíos desde la comodidad de tu hogar.' },
        { text: 'Envíos Instantáneos: Tu dinero llega al instante.' },
        { text: 'Bancarización del Destinatario: Facilitamos la inclusión financiera de tus seres queridos.' },
        { text: 'Disponibilidad Total: Servicio disponible 24/7.' },
        {
          text: 'Seguridad Garantizada: Protegemos tus envíos y datos personales con los más altos estándares de seguridad.'
        }
      ]
    },
    conclusion:
      'Con Nombre de la Marca, acortamos distancias y fortalecemos lazos, asegurando que tu apoyo llegue a quienes más lo necesitan, cuando lo necesitan.'
  })

  return (
    <main className='font-roboto'>
      <div className='max-w-3xl mx-auto p-6 space-y-6 text-gray-700'>
        <h1 className='text-2xl font-semibold text-center text-tuiu-green-300'>{data.heading}</h1>

        <section className='space-y-4'>
          <h2 className='text-lg font-semibold text-gray-800'>{data.introduction}</h2>
          <p>{data.features.title}</p>
          <p>{data.features.description}</p>
        </section>

        <section className='space-y-4'>
          <h3 className='text-lg font-semibold text-gray-800'>{data.features.title}</h3>
          <ul className='space-y-2'>
            {data.features.items?.map((item, index) => (
              <li key={index} className='flex items-start space-x-2'>
                <span className='h-3 w-3 rounded-full bg-tuiu-green-300 mt-1'></span>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className='space-y-4'>
          <h3 className='text-lg font-semibold text-gray-800'>{data.howItWorks.title}</h3>
          <ol className='space-y-2 text-gray-700'>
            {data.howItWorks.items?.map((item, index) => (
              <li key={index}>
                <strong>{index + 1}</strong> {item.text}
              </li>
            ))}
          </ol>
        </section>

        <div className='bg-tuiu-green-100 p-4 rounded-lg text-center text-tuiu-green-300 font-semibold'>
          {data.howItWorks.description}
        </div>

        <section className='space-y-4'>
          <h3 className='text-lg font-semibold text-gray-800'>{data.benefits.title}</h3>
          <ul className='space-y-2'>
            {data.benefits.items?.map((item, index) => (
              <li key={index} className='flex items-start space-x-2'>
                <span className='h-3 w-3 rounded-full bg-tuiu-green-300 mt-1'></span>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </section>

        <p className='text-center text-gray-700'>{data.conclusion}</p>
      </div>
    </main>
  )
}
