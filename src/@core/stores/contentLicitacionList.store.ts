import { create } from 'zustand'
import { Content, LicitacionesResponse } from '@/libs/models/portal/response'
import { getAllLicitaciones } from '@core/services/licitaciones.service'

interface listLicitacionesState {
  content: Content[] | null
  setContent: (content: Content[]) => void
  loading: boolean
  setLoading: (loading: boolean) => void
}

export const listLicitaciones = create<listLicitacionesState>(set => {
  const initialState: listLicitacionesState = {
    content: null,
    setContent: content => set({ content }),
    loading: true,
    setLoading: loading => set({ loading })
  }

  getAllLicitaciones()
    .then((response: LicitacionesResponse) => {
      set({ content: response.content, loading: false })
    })
    .catch((error: Error) => {
      console.error('Error al obtener las licitaciones:', error)
      set({ content: null, loading: false })
    })

  return initialState
})
