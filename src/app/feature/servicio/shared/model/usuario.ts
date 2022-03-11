export class Usuario {
    id?: number;
    nombre: string;
    clave: string;

    constructor(nombre: string, clave: string) {
        this.nombre = nombre;
        this.clave = clave;
    }
}
