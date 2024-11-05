export interface LicitacionesResponse {
    content:          Content[];
    pageable:         Pageable;
    last:             boolean;
    totalPages:       number;
    totalElements:    number;
    numberOfElements: number;
    first:            boolean;
    size:             number;
    number:           number;
    sort:             Sort;
    empty:            boolean;
}

export interface Content {
    nro_licitacion:     string;
    categoria:          string;
    convocante:         string;
    estado:             Estado;
    fecha_emision_cc:   string;
    fecha_publicacion:  string;
    moneda:             Moneda;
    monto_adjudicado:   string;
    nombre_licitacion:  string;
    tipo_entidad:       TipoEntidad;
    tipo_procedimiento: TipoProcedimiento;
}

export enum Estado {
    LicitacionAdjudicada = "Licitacion Adjudicada",
}

export enum Moneda {
    Pyg = "PYG",
}

export enum TipoEntidad {
    EntidadesDescentralizadas = "Entidades Descentralizadas",
    Municipalidades = "Municipalidades",
    OrganismosDeLaAdministraciónCentral = "Organismos de la Administración Central",
}

export enum TipoProcedimiento {
    ConcursoDeOfertas = "Concurso de Ofertas",
    ContrataciónDirecta = "Contratación Directa",
    ContrataciónPorExcepción = "Contratación por Excepción",
    LicitaciónPúblicaNacional = "Licitación Pública Nacional",
}

export interface Pageable {
    pageNumber: number;
    pageSize:   number;
    sort:       Sort;
    offset:     number;
    paged:      boolean;
    unpaged:    boolean;
}

export interface Sort {
    sorted:   boolean;
    unsorted: boolean;
    empty:    boolean;
}