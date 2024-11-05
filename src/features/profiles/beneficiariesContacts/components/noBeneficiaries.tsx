import React from 'react'
import { TelescopeIcon } from '@/components/icons'

export default function NoBeneficiaries() {
  return (
    <div className='mt-6 flex flex-col items-center'>
      <TelescopeIcon />
      <div className='font-medium text-lg text-tuiu-green-300'>Todavía no contás con beneficiarios registrados</div>
    </div>
  )
}
