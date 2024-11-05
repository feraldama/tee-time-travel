import axios, { AxiosResponse, AxiosError } from 'axios'
import { apiConfig } from '@configs/api.config'
import { LicitacionesResponse, LicitacionIdResponse } from '@/libs/models/portal/response'
import { LicitacionIdRequest } from '@/libs/models/portal/request'

export const getAllLicitaciones = async (): Promise<LicitacionesResponse> => {
  const url = process.env.NEXT_PUBLIC_API_URL

  if (!url) console.error('BASE_URL_PORTAL deben estar definidos en las variables de entorno.')

  const response = await fetch(url + apiConfig.licitaciones.licitaciones)

  if (!response) {
    console.error('NEXT_PUBLIC_API_URL fallo en la consulta.')
  }

  return response.json()
}

export const getLicitacionId = async (params: LicitacionIdRequest): Promise<LicitacionIdResponse> => {
  const url = process.env.NEXT_PUBLIC_API_URL

  if (!url) console.error('BASE_URL_PORTAL deben estar definidos en las variables de entorno.')

  const response = await fetch(url + apiConfig.licitaciones.licitacionId(params.nroLicitacion))

  if (!response) {
    console.error('NEXT_PUBLIC_API_URL fallo en la consulta.')
  }

  return response.json()
}
