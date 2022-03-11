export class CalificaServicio {

    id: number;
    nivelSatisfacion: string;
    estado: string;

    constructor(id: number, nivelSatisfacion: string, estado: string) {
        this.id = id;
        this.nivelSatisfacion = nivelSatisfacion;
        this.estado = estado;
    }
}
