/** @type {import('next').NextConfig} */
import createNextIntlPlugin from 'next-intl/plugin'
import { withSentryConfig } from '@sentry/nextjs'

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
    SENTRY_AUTH_TOKEN: process.env.SENTRY_AUTH_TOKEN || '$(SENTRY_AUTH_TOKEN)',
    NEXT_PUBLIC_SENTRY_DSN: process.env.NEXT_PUBLIC_SENTRY_DSN || '$(NEXT_PUBLIC_SENTRY_DSN)',
    FIREBASE_MEASUREMENT_ID: process.env.FIREBASE_MEASUREMENT_ID || '$(FIREBASE_MEASUREMENT_ID)'
  },
  experimental: {
    missingSuspenseWithCSRBailout: true
  }
}

const sentryConfig = withSentryConfig(nextConfig, {
  org: 'itti-m4',
  project: 'nextjstemplate',
  authToken: process.env.SENTRY_AUTH_TOKEN,
  silent: isProduction,
  telemetry: false
})

export default withNextIntl(sentryConfig)
