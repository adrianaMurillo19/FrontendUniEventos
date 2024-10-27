export class LoginDTO {

        //Los atributos debe ser iguales a los del Backend
    constructor(
        public email: string = '',
        public password: string = ''
    ){}

}
