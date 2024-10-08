import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { RouterOutlet} from '@angular/router';



@Component({
  selector: 'app-root',
  standalone: true,
 imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'uniEventos_app';
  //footer = 'Universidad del Quindío - 2024-2'
  isLogged = false;
  isAdmin = false;
  email: string = "";


  constructor() {

  }

  

   

}