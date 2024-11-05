import { Metadata } from 'next'
import React, { FC } from 'react'
import { siteConfig } from '@configs/site.config'

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  icons: {
    icon: '/itti.ico'
  }
}

interface RootLayoutProps {
  children: React.ReactNode
}
const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return children
}

export default RootLayout
