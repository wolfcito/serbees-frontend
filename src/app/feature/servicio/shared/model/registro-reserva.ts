export class RegistroReserva {

    idReserva: number;
    idUsuarioProveedor: number;
    idUsuarioCliente: number;
    nombreUsuario: string;
    nombreCategoria: string;
    costo: number;
    cantidad: number;

    constructor(idReserva: number, idUsuarioProveedor: number, idUsuarioCliente: number,
        nombreUsuario: string, nombreCategoria: string, costo: number, cantidad: number
    ) {
        this.idReserva = idReserva;
        this.idUsuarioProveedor = idUsuarioProveedor;
        this.idUsuarioCliente = idUsuarioCliente;
        this.nombreUsuario = nombreUsuario;
        this.nombreCategoria = nombreCategoria;
        this.costo = costo;
        this.cantidad = cantidad;
    }
}
