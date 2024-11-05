'use server'
import { signIn, signOut } from '@core/auth'
import { revalidatePath } from 'next/cache'

const getUserByEmail = async (email: string) => {
  try {
    const user = { email }
    return user
  } catch (error) {
    console.log(error)
    return null
  }
}

export const login = async (provider: string) => {
  console.log('🚀 ~ login ~ provider:', provider)
  await signIn(provider, { redirectTo: '/' })
  revalidatePath('/')
}

export const logout = async () => {
  await signOut({ redirectTo: '/' })
  revalidatePath('/')
}

export const loginWithCreds = async (formData: FormData) => {
  const rawFormData = {
    email: formData.get('email'),
    password: formData.get('password'),
    role: 'ADMIN',
    redirectTo: '/'
  }

  const existingUser = await getUserByEmail(formData.get('email') as string)
  console.log(existingUser)

  try {
    await signIn('credentials', rawFormData)
  } catch (error: any) {

    throw error
  }

  revalidatePath('/')
}

export const registerUser = async (formData: FormData) => {}
