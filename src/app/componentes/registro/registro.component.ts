import { Component } from '@angular/core';
//import { RegistroClienteDTO } from '../../dto/registro-cliente-dto';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule, CommonModule],//nuevo
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {

 

//nuevo
constructor() {
   
}


//Metodo para validar los datos que son ingresados

}
