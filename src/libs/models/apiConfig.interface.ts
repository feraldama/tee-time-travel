export interface ApiConfig {
    portal: {
        listAll: string;
        licitacionByNumber: (nroLicitacion: string) => string;
    },
    licitaciones : {
        licitaciones: string;
        licitacionId: (nroLicitacion: string) => string;
    }
}