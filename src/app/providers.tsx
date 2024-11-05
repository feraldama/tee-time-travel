import { IntlProvider } from '@core/i18n/IntlProvider'
import { PropsWithChildren } from 'react'

export default function Providers({ children }: PropsWithChildren) {
  return <IntlProvider>{children}</IntlProvider>
}
