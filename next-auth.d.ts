import NextAuth from 'next-auth'

declare module 'next-auth' {
  interface User {
    id?: string
    name?: string
    lastName?: string
    email?: string
    sessionToken?: string
    refreshToken?: string
    roles?: Roles[]
  }

  interface Session {
    user?: User
    sessionToken?: string
    roles?: Roles[]
  }

  interface Roles {
    name: string
    permissions: string[]
  }
}
