import axios, { AxiosResponse, AxiosError } from 'axios'
import { apiConfig } from '@configs/api.config'
import { LicitacionesResponse, LicitacionIdResponse } from '@/libs/models/portal/response'
import { LicitacionesRequest, LicitacionIdRequest } from '@/libs/models/portal/request'

export const getAllLicitaciones = async (
  params: LicitacionesRequest
): Promise<AxiosResponse<LicitacionesResponse[]>> => {
  const url = process.env.BASE_URL_PORTAL

  if (!url) throw new Error('BASE_URL_PORTAL deben estar definidos en las variables de entorno.')

  try {
    const response = await axios.get<LicitacionesResponse[]>(url + apiConfig.portal.listAll, {
      params: params,
      headers: {
        Accept: 'application/json'
      }
    })

    if (!response) {
      throw new Error('BASE_URL_DNCP fallo en la consulta.')
    }
    return response
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError
      if (axiosError.response) {
        console.error('Error de solicitud:', axiosError.response.status)

        console.error('Mensaje del servidor:', axiosError.response.data)
      } else if (axiosError.request) {
        console.error('Error de solicitud:', axiosError.request)
      } else {
        console.error('Error:', axiosError.message)
      }
    } else {
      console.error('Error:', (error as Error).message)
    }

    throw new Error('Error al obtener las licitaciones.')
  }
}

export const getLicitacionId = async (params: LicitacionIdRequest): Promise<AxiosResponse<LicitacionIdResponse>> => {
  console.log('🚀 ~ getLicitacionId ~ params:', params)
  const url = process.env.BASE_URL_PORTAL

  if (!url) throw new Error('BASE_URL_PORTAL deben estar definidos en las variables de entorno.')

  try {
    const response = await axios.get<LicitacionIdResponse>(
      url + apiConfig.portal.licitacionByNumber(params.nroLicitacion),
      {
        headers: {
          Accept: 'application/json'
        }
      }
    )

    if (!response) {
      throw new Error('BASE_URL_DNCP fallo en la consulta.')
    }
    return response
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError
      if (axiosError.response) {
        console.error('Error de solicitud:', axiosError.response.status)

        console.error('Mensaje del servidor:', axiosError.response.data)
      } else if (axiosError.request) {
        console.error('Error de solicitud:', axiosError.request)
      } else {
        console.error('Error:', axiosError.message)
      }
    } else {
      console.error('Error:', (error as Error).message)
    }

    throw new Error('Error al obtener la licitacion por nro de ID.')
  }
}
