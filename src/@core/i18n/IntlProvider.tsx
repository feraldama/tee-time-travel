import React, { FC } from 'react'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'

interface IntlProviderProps {
  children: React.ReactNode
}
export const IntlProvider: FC<IntlProviderProps> = async ({ children }) => {
  const messages = await getMessages()
  return <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
}
