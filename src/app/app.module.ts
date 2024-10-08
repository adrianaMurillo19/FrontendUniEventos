import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, provideHttpClient} from '@angular/common/http';//cambio HTTPCLIENTModule
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { RouterOutlet } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';

import { LoginComponent } from './componentes/login/login.component';
import { InicioComponent } from './componentes/inicio/inicio.component';


import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: AppComponent },
  // otras rutas
];

@NgModule({
  declarations: [
   //AppComponent,
    InicioComponent,
    LoginComponent,
    
    //registro


  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),//RouterModule.forRoot([]),//cambios
    RouterOutlet,
    CommonModule,
      // Para las peticiones HTTP
    FormsModule,
    AppComponent ,
    NgSelectModule // >>> revisar MODULO
  ],
 // providers: [{ provide: HTTP_INTERCEPTORS,  multi: true },provideHttpClient(), ],
 // bootstrap: [AppComponent],
  exports: [RouterModule]//nuevo
})
export class AppModule { }


