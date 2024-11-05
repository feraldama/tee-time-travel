import { create } from 'zustand'
import { LicitacionIdResponse } from '@/libs/models/portal/response'

interface detailLicitacionState {
  detailContent: LicitacionIdResponse | null
  setdetailContent: (detailContent: LicitacionIdResponse) => void
  loading: boolean
  setLoading: (loading: boolean) => void
}

export const detailLicitacion = create<detailLicitacionState>(set => {
  const initialState: detailLicitacionState = {
    detailContent: null,
    setdetailContent: detailContent => set({ detailContent }),
    loading: true,
    setLoading: loading => set({ loading })
  }

  return initialState
})
