import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from '@angular/router';
import path from "path";
import { InicioComponent } from "./componentes/inicio/inicio.component";
import { LoginComponent } from "./componentes/login/login.component";
import { RegistroComponent } from "./componentes/registro/registro.component";


const routes: Routes = [
    { path: '', component: InicioComponent },
    { path: 'login', component: LoginComponent},
    { path: 'registro', component: RegistroComponent }
    //

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],//Configura las rutas ahí
    exports: [RouterModule]
})
export class AppRoutingModule{ }