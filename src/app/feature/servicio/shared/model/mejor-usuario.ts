export class MejorUsuario {

    nombreUsuario: string;
    experiencia: number;
    nombreCategoria: string;
    nivelSatisfacion: string;
    modalidad: string;

    constructor(nombreUsuario: string, experiencia: number, nombreCategoria: string, nivelSatisfacion: string, modalidad: string) {
        this.nombreUsuario = nombreUsuario;
        this.experiencia = experiencia;
        this.nombreCategoria = nombreCategoria;
        this.nivelSatisfacion = nivelSatisfacion;
        this.modalidad = modalidad;
    }
}
