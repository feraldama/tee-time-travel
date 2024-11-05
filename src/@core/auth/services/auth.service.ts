export interface oauthAppInterface {
  lastLoginTime: string
  sessionToken: string
  refreshToken: string
  traceToken: string
  inactiveMaxTime: number
}

export const oauthApp = async (username: string, password: string): Promise<oauthAppInterface> => {
  const myHeaders = new Headers()
  myHeaders.append('accept', 'application/json')
  myHeaders.append('Content-Type', 'application/json')

  const raw = JSON.stringify({
    clientId: process.env.AUTH_CLIENT_ID,
    clientSecret: process.env.AUTH_CLIENT_SECRET,
    username: username,
    password: password,
    phoneId: 'facetec-id-client',
    brand: '',
    model: '',
    so: '',
    application: process.env.AUTH_APLICATION_ID,
    version: process.env.AUTH_VERSION
  })

  const requestOptions: RequestInit = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  }

  try {
    const url = process.env.AUTH_URL_ACCESS_CONTROL
    const response = await fetch(url + '/oauth/app', requestOptions)
    console.log(response.json)
    return response.json()
  } catch (error) {
    throw new Error('Error al generar el token de sesión.')
  }
}

export const authToken = async (username: string, password: string) => {
  const url = process.env.AUTH_URL_ACCESS_CONTROL
  const response = await fetch(url + '/oauth', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: username,
      password: password,
      formAuth: 'USERNAME',
      application: process.env.AUTH_APLICATION_ID,
      phoneId: '861536030196001',
      brand: 'Samsung',
      model: 'Galaxy S10',
      so: 'Android 11',
      version: process.env.AUTH_VERSION
    })
  })

  if (!response.ok) {
    throw new Error(`Error: ${response.status}`)
  }

  const data = await response.json()
  return data
}

export const userRoles = async (token: string) => {
  const url = process.env.AUTH_URL_ACCESS_CONTROL
  const response = await fetch(url + '/secure/user-roles', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  if (!response.ok) {
    throw new Error(`Error: ${response.status}`)
  }

  const data = await response.json()
  return data
}
