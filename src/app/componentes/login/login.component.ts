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

  alerta!: { mensaje: any; tipo: string; };
  tokenService: any;
  authService: any;

  public login(){
    this.authService.login(this.loginDTO).subscribe({
    next: (data: { respuesta: { token: any; }; }) => {
    this.tokenService.login(data.respuesta.token);
  },
  error: (error: { error: { respuesta: any; }; }) => {
  this.alerta = { mensaje: error.error.respuesta, tipo: "danger" };
  }
  });
}

  loginDTO(loginDTO: any) {
    throw new Error('Method not implemented.');
  }

}
