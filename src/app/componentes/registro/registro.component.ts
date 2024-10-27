import { Component } from '@angular/core';
//import { RegistroClienteDTO } from '../../dto/registro-cliente-dto';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AuthService } from 'src/app/servicios/auth.service';
import { RegistroDTO } from 'src/app/dto/registro-dto';

import { AlertaComponent } from '../alerta/alerta.component';
import { Alerta } from 'src/app/dto/alerta';
@Component({
  selector: 'app-registro',

  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  
  //Revisar en caso que se deba de cambiar
  registroDTO: RegistroDTO;

//nuevo--segun la guia#16
constructor(private authService: AuthService) {
   
  this.registroDTO = new RegistroDTO();
}

alerta!: Alerta;//Alerta del DTO

//Metodo para validar los datos que son ingresados

public registrar() {
  

    this.authService.registrar(this.registroDTO).subscribe({
      next: data => {
        this.alerta = new Alerta(data.respuesta, "success");//console.log("Usuario registrado");
      },
      error: error => {
        this.alerta = new Alerta(error.error.respuesta, "danger");      }
    });

}


}
