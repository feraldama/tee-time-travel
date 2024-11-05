import NextAuth, { User, Roles } from 'next-auth'
import Github from 'next-auth/providers/github'
import Credentials from 'next-auth/providers/credentials'
import { encryptPassword } from '@/utils/helper'
import { authToken, userRoles } from '@core/auth/services/auth.service'

export const {
  handlers: { GET, POST },
  signIn,
  signOut,
  auth
} = NextAuth({
  session: { strategy: 'jwt' },
  providers: [
    Github({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET
    }),
    Credentials({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'email@example.com'
        },
        password: { label: 'Password', type: 'password' }
      },
      authorize: async credentials => {
        if (!credentials || !credentials.email || !credentials.password) {
          return null
        }

        const email = credentials.email as string
        const hash = encryptPassword(credentials.password as string)

        const authUser: any = await authToken(email, hash)

        if (authUser.message) {
          throw new Error(authUser.message)
        }

        const authRoles: any = await userRoles(authUser.sessionToken)
        console.log('🚀 ~ roles:', JSON.stringify(authRoles))

        let roles: Roles[] = []

        const mapToRoles = (data: any[]): Roles[] => {
          return data.map(item => ({
            name: item.role.name,
            permissions: item.role.rolePermissions.map((permission: any) => permission.permission.name)
          }))
        }

        if (authRoles && authRoles.length > 0) {
          roles = mapToRoles(authRoles)
        }

        const user: User = {
          id: '1',
          name: 'Pedro',
          lastName: 'Amarilla',
          email: email,
          roles: roles,
          sessionToken: authUser.sessionToken,
          refreshToken: authUser.refreshToken
        }
        console.log('🚀 ~ user:', JSON.stringify(user))

        return user
      }
    })
  ],
  callbacks: {
    async session({ session, token, user }: { session: any; token: any; user: any }) {
      if (token) {
        session.sessionToken = token.sessionToken as string
      }
      return session
    },
    async jwt({ token, user }: { token: any; user: any }) {
      if (user) {
        token.sessionToken = user.sessionToken
      }
      return token
    }
  }
})
