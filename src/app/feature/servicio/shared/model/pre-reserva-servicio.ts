export class PreReservaServicio {

    idReserva: number;
    idUsuarioProveedor: number;
    nombreUsuario: string;
    costoHora: number;
    costoDia: number;
    costoSemana: number;
    nombreCategoria: string;
    idCategoria: number;

    constructor(idReserva: number, idUsuarioProveedor: number, nombreUsuario: string, costoHora: number,
        costoDia: number, costoSemana: number, nombreCategoria: string, idCategoria: number
    ) {
        this.idReserva = idReserva;
        this.idUsuarioProveedor = idUsuarioProveedor;
        this.nombreUsuario = nombreUsuario;
        this.costoHora = costoHora;
        this.costoDia = costoDia;
        this.costoSemana = costoSemana;
        this.nombreCategoria = nombreCategoria;
        this.idCategoria = idCategoria;
    }
}
