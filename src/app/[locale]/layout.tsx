import '@core/styles/tailwind.css'
import { inter, roboto } from '@configs/font.config'
import clsx from 'clsx'
import { siteConfig } from '@configs/site.config'
import Providers from './providers'
import { GoogleAnalytics } from '@next/third-parties/google'
import { unstable_setRequestLocale } from 'next-intl/server'

const gaId = process.env.FIREBASE_MEASUREMENT_ID || ''

interface MainLayoutProps {
  children: React.ReactNode
  params: { locale: string }
}

const LocaleLayout = ({ children, params: { locale } }: MainLayoutProps) => {
  const currentLocale = locale || siteConfig.lang
  unstable_setRequestLocale(currentLocale)

  return (
    <html className='scroll-smooth' lang={locale} suppressHydrationWarning>
      <body className={clsx('min-h-screen bg-background antialiased', inter.variable, roboto.variable)}>
        <Providers>
          {children}
          <GoogleAnalytics gaId={gaId} />
        </Providers>
      </body>
    </html>
  )
}

export default LocaleLayout
