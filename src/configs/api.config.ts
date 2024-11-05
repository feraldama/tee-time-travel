import { ApiConfig } from "@/libs/models/apiConfig.interface"

export const apiConfig: ApiConfig = {
	portal: {
        listAll: '/licitaciones/listAll',
        licitacionByNumber: (nroLicitacion: string) => `/licitaciones/licitacionByNumber/${nroLicitacion}`,
    },
    licitaciones: {
        licitaciones: '/api/getAllLicitaciones',
        licitacionId: (nroLicitacion: string) => `/api/getLicitacion/${nroLicitacion}`,
    }
}