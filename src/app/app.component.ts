import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { RouterOutlet} from '@angular/router';
import { TokenService } from './servicios/token.service';


@Component({
  selector: 'app-root',
 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'uniEventos_app';
  
  isLogged = false;
  isAdmin = false;
  email: string = "";

                                  //router
  constructor(private tokenService: TokenService, private router: Router) {
  }

  ngOnInit(): void{}

  public iraBusqueda(valor: string){
    if(valor){
      this.router.navigate(['/busqueda', valor]);
    }
  }

}