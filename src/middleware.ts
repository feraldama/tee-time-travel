import createMiddleware from 'next-intl/middleware'
import { locales } from '@core/i18n/i18nConfig'
import { siteConfig } from '@configs/site.config'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
// import { auth } from '@core/auth'

const protectedRoutes = ['admin']

const intlMiddleware = createMiddleware({
  locales: locales,
  defaultLocale: siteConfig.lang,
  localePrefix: 'as-needed',
  localeDetection: true
})

export default async function middleware(request: NextRequest) {
  const i18nMiddleware = intlMiddleware(request)

  // const session = await auth()

  const isProtected = protectedRoutes.some(route => request.nextUrl.pathname.startsWith(route))

  // if (!session && isProtected) {
  //   const homeUrl = '/admin'
  //   const locales_ = locales
  //   const pathname = request.nextUrl.pathname
  //   const pathnameWithoutLocale = pathname.replace(new RegExp(`^/(${locales_.join('|')})`), '') || '/'
  //   const currentLocaleRegex = new RegExp(`^/(${locales_.join('|')})`)
  //   const matches = pathname.match(currentLocaleRegex)
  //   const currentLocale = matches?.[1] || siteConfig.lang
  //   if (pathnameWithoutLocale === '/') {
  //     const url = request.nextUrl.origin
  //     const newUrl = `${url}/${currentLocale}${homeUrl}`
  //     return NextResponse.redirect(newUrl)
  //   }
  // }

  return i18nMiddleware
}

export const config = {
  matcher: [
    '/',
    '/(es|en)/:path*',
    '/((?!api|_next/static|_next/image|favicon.ico|itti-logo.png|itti.ico|demo|layout|theme).*)'
  ]
}
