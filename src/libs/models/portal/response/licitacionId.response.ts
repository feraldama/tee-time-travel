export interface LicitacionIdResponse {
    nro_licitacion:     string;
    categoria:          string;
    convocante:         string;
    estado:             string;
    fecha_emision_cc:   Date;
    fecha_publicacion:  Date;
    moneda:             string;
    monto_adjudicado:   string;
    nombre_licitacion:  string;
    tabla_comparativa:  string;
    tipo_entidad:       string;
    tipo_procedimiento: string;
    documentos:         string;
    observaciones:      string;
}