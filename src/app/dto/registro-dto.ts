export class RegistroDTO {

    //Los atributos debe ser iguales a los del Backend
    constructor(
        public cedula: string = '',
        public nombre: string = '',
        public email: string = '',
        public contrasenia: string = ''
    ) { }
}
