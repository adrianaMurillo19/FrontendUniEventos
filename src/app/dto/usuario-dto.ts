export class UsuarioDTO{

    //Los atributos debe ser iguales a los del Backend, por lo tanto se comento los demas atributos; ya que esos no se encuetran en la clase UsuarioDTO
    constructor(
        //Cuenta cuenta
        public usuario: string = '',
        public password: string = ''
    ) {}

    /*
    cedula: string = "";
    nombreCompleto: string = "";
    direccion: string = "";
    telefono: string = "";
    correo: string = "";
    contrasenia: string = "";*/


}