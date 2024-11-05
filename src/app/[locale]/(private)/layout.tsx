import type { Metadata } from 'next'
// import Layout from '@layouts/layout'
import { siteConfig } from '@configs/site.config'
// import Providers from './providers'

export const metadata: Metadata = {
  title: siteConfig.name + ' - Admin',
  description: siteConfig.description,
  icons: {
    icon: '/itti.ico'
  }
}

const gaId = process.env.FIREBASE_MEASUREMENT_ID || ''

interface MainLayoutProps {
  children: React.ReactNode
}

const PrivateLayout = ({ children }: MainLayoutProps) => {
  return (
    // <Providers>
    { children }
    /* TODO: Crear el layout en @layout/private */
    /* <Layout>{children}</Layout> */
    // </Providers>
  )
}

export default PrivateLayout
