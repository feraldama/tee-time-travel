import Providers from './providers'
import { unstable_setRequestLocale } from 'next-intl/server'
import { siteConfig } from '@configs/site.config'

const NotFound = () => {
  unstable_setRequestLocale(siteConfig.lang)

  return (
    <html lang='es'>
      <body>
        <Providers>
          <div className='flex flex-col items-center justify-center h-screen space-y-4'>
            <h1 className='text-4xl font-bold'>404</h1>
            <p className='text-lg'>Página no encontrada</p>
          </div>
        </Providers>
      </body>
    </html>
  )
}

export default NotFound
