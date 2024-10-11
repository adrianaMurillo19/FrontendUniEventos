

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, provideHttpClient} from '@angular/common/http';//cambio HTTPCLIENTModule
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module'; // Asegúrate de que el AppRoutingModule esté importado


import { AppComponent } from './app.component';
import { RouterOutlet } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';




import { RouterModule, Routes } from '@angular/router';


import { InicioComponent } from './componentes/inicio/inicio.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';

/*
const routes: Routes = [
  { path: '', component: AppComponent },
  // otras rutas
];*/

@NgModule({
  declarations: [
    AppComponent, // Declarar AppComponent aquí
    InicioComponent,
    LoginComponent,
    //RegistroComponent
  ],

  imports: [
    BrowserModule,
    RouterModule,//RouterModule.forRoot([]),//cambios
    RouterOutlet,
    CommonModule,
    AppRoutingModule,
      // Para las peticiones HTTP
    FormsModule,
   
    NgSelectModule, // >>> revisar MODULO
    RegistroComponent, // Importa el componente standalone

  ],
 // providers: [{ provide: HTTP_INTERCEPTORS,  multi: true },provideHttpClient(), ],
 // bootstrap: [AppComponent],
 providers: [],
  bootstrap: [AppComponent]
  //exports: [RouterModule]//nuevo
})
export class AppModule { }


