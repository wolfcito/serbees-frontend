export class RegistroUsuario {

    idCategoria: number;
    idUsuarioPro: number;
    nombreCategoria: string;
    nivelSatisfacion: string;
    modalidad: string;

    constructor(idCategoria: number, idUsuarioPro: number) {
        this.idCategoria = idCategoria;
        this.idUsuarioPro = idUsuarioPro;
    }
}
