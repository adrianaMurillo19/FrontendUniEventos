import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from "./componentes/inicio/inicio.component";
import { LoginComponent } from "./componentes/login/login.component";
import { RegistroComponent } from "./componentes/registro/registro.component";

// Declarar las rutas
export const routes: Routes = [
    { path: '', component: InicioComponent },
    { path: 'login', component: LoginComponent },
    { path: 'registro', component: RegistroComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],  // Configurar las rutas
    exports: [RouterModule]
})
export class AppRoutingModule { }
