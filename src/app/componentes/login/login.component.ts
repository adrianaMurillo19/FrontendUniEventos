import { Component } from '@angular/core';
import { SesionDTO} from '../../dto/sesion-dto';




@Component({
  selector: 'app-login',
  //standalone: true,
  //imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  //nuevo

  sesion: SesionDTO;
  //faltan parametros en el constructor
  constructor(){
    this.sesion = new SesionDTO();
  }

  //metodos para validar el inicio de sesion
  public iniciarSesion() {
    /// cuerpo del metodo
    

  }

}
