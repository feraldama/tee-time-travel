import React, { useState } from 'react'
import { CalendarIcon, DottedLineIcon, ArrowDownIconSVG } from '@/components/icons'

type Send = {
  id: number
  sender: string
  beneficiary: string
  currency: string
  amount: number
  convertedAmount: string
  paymentMethod: string
  date: string
}

const sends: Send[] = [
  {
    id: 1,
    sender: 'Luis Quevedo',
    beneficiary: 'Betania Ayala',
    currency: 'EUR',
    amount: 1000,
    convertedAmount: '8.000.000',
    paymentMethod: 'Mastercard Credit **** 2831',
    date: '20/06/2024 - 14:39 hs'
  },
  {
    id: 2,
    sender: 'Juan Villalba',
    beneficiary: 'Carlos Ruiz',
    currency: 'Gs',
    amount: 6000000,
    convertedAmount: '6.000.000',
    paymentMethod: 'Visa Debit **** 5678',
    date: '27/04/2024 - 10:20 hs'
  }
  // Agregar más envíos según sea necesario
]

export default function Search() {
  const [openSendId, setOpenSendId] = useState<number | null>(null)

  const toggleDetails = (id: number) => {
    setOpenSendId(openSendId === id ? null : id)
  }

  return (
    <div className='p-4 pt-[1px] bg-tuiu-green-100'>
      {sends.map(send => (
        <div key={send.id} className='mt-4 rounded-lg overflow-hidden bg-[#fff]'>
          <div className='flex justify-between p-4 cursor-pointer items-center' onClick={() => toggleDetails(send.id)}>
            <div className='flex items-center space-x-2'>
              <div className='flex flex-col items-center'>
                <CalendarIcon />
                <p className='text-tuiu-gray-400 text-[7px]'>31/10</p>
              </div>
              <div>
                <p className='text-tuiu-gray-400 text-[7px]'>Nombre del destinatario</p>
                <p className='font-normal'>{send.sender}</p>
              </div>
            </div>
            <div className='flex items-center text-tuiu-gray-400 font-normal'>
              <p>Gs. {send.convertedAmount}</p>
              <div className='pl-4 flex items-center'>
                <ArrowDownIconSVG />
              </div>
            </div>
          </div>
          {openSendId === send.id && (
            <div className=' font-normal p-7 space-y-2 m-6 mt-1 rounded-2xl border-2'>
              <div>
                <p className='text-xs font-bold pb-2'>Beneficiario</p>
                <p className='text-tuiu-gray-400'>{send.beneficiary}</p>
              </div>
              <div className='py-3'>
                <DottedLineIcon />
              </div>
              <div>
                <p className='text-xs font-bold  pb-2'>Dinero</p>
                {/* <p className='text-tuiu-gray-400 flex items-center'>
                  {send.currency} <p className='text-black pl-2 pr-5'>{send.amount}</p> | <p className='pl-5'> Gs </p>
                  <p className='text-black pl-2'>{send.convertedAmount}</p>
                </p> */}
                <div className='text-tuiu-gray-400 flex items-center'>
                  <p>{send.currency}</p>
                  <span className='text-black pl-2 pr-5'>{send.amount}</span> |<span className='pl-5'> Gs </span>
                  <span className='text-black pl-2'>{send.convertedAmount}</span>
                </div>
              </div>
              <div className='py-3'>
                <DottedLineIcon />
              </div>
              <div>
                <p className='text-xs font-bold  pb-2'>Método de pago</p>
                <p className='text-tuiu-gray-400'>{send.paymentMethod}</p>
              </div>
              <div className='py-3'>
                <DottedLineIcon />
              </div>
              <div>
                <p className='text-xs font-bold  pb-2'>Fecha y hora</p>
                <p className='text-tuiu-gray-400'>{send.date}</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
