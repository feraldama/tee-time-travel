/** @type {import('next').NextConfig} */
import createNextIntlPlugin from 'next-intl/plugin'

const isProduction = process.env.NODE_ENV === 'production'
const basePath = process.env.BASEPATH || ''

const withNextIntl = createNextIntlPlugin('./src/@core/i18n/i18nConfig.ts')

const nextConfig = {
  basePath: basePath,
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || '$(NEXT_PUBLIC_API_URL)',
    PORT: process.env.PORT || '$(PORT)',
    BASE_URL_PORTAL: process.env.BASE_URL_PORTAL || '$(BASE_URL_PORTAL)',
    AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID || '$(AWS_ACCESS_KEY_ID)',
    AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY || '$(AWS_SECRET_ACCESS_KEY)',
    AWS_REGION: process.env.AWS_REGION || '$(AWS_REGION)',
    AWS_BUCKET_NAME: process.env.AWS_BUCKET_NAME || '$(AWS_BUCKET_NAME)',
    FIREBASE_MEASUREMENT_ID: process.env.FIREBASE_MEASUREMENT_ID || '$(FIREBASE_MEASUREMENT_ID)'
  },
  experimental: {
    missingSuspenseWithCSRBailout: true
  }
}

export default withNextIntl()
