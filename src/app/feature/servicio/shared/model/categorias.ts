export class Categoria {

    id: number;
    nombre: string;
    codigo: string;
    costoHora: number;
    costoDia: number;
    costoSemana: number;

    constructor(id: number, nombre: string, codigo: string, costoHora: number, costoDia: number, costoSemana: number
    ) {
        this.id = id;
        this.nombre = nombre;
        this.codigo = codigo;
        this.costoHora = costoHora;
        this.costoDia = costoDia;
        this.costoSemana = costoSemana;
    }
}
