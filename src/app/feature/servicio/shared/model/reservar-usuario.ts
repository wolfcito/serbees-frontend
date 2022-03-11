export class ReservaUsuario {

    id: number;
    idUsuarioCli: number;
    modalidad: string;
    cantidad: number;
    costo: number;
    estado: string;

    constructor(id: number, idUsuarioCli: number, modalidad: string, cantidad: number, costo: number, estado: string) {
        this.id = id;
        this.idUsuarioCli = idUsuarioCli;
        this.modalidad = modalidad;
        this.cantidad = cantidad;
        this.costo = costo;
        this.estado = estado;
    }
}
