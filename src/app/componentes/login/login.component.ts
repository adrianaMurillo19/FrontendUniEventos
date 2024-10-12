import { Component } from '@angular/core';
import { AuthService } from '../../servicios/auth.service'; // Asegúrate de que el servicio está en la carpeta correcta
import { SesionDTO } from '../../dto/sesion-dto';
import { TokenService } from '../../servicios/token.service'; // Servicio para manejar el token
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  // logica 

  sesionDTO: SesionDTO = new SesionDTO();
  error: string = '';


  //constructor
  constructor(private authService: AuthService, private tokenService: TokenService, private router: Router) {}
    
     // Método para iniciar sesión
  onLogin(): void {
    this.authService.login(this.sesionDTO).subscribe({
      next: (data) => {
        this.tokenService.setToken(data.token); // Guardar el token en el servicio
        this.router.navigate(['/']); // Redirigir al usuario a la página de inicio
      },
      error: (err) => {
        this.error = 'Error en el inicio de sesión. Verifica tus credenciales';
      }
    });

  }

}
