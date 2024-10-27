import { HttpClient } from "@angular/common/http";

import { Injectable } from "@angular/core";
import { SesionDTO } from "../dto/sesion-dto";
import { Observable } from "rxjs";
import { RegistroDTO } from "../dto/registro-dto";

@Injectable({
    providedIn: 'root'
  })

export class AuthService {

    private loginUrl = 'http://localhost:8081/api/login'; // URL  backend

    //revisar la url de conexion para hacer el registro
    private registroUrl = 'http://localhost:8081/api/registro'; // URL  backend
  
    constructor(private http: HttpClient) {}


    //Metodo para registro
    public registrar(usuario: RegistroDTO): Observable<any>{
      return this.http.post<any>(this.registroUrl,String);//en vez de string debe ser una clase
    }
    
    /**
     * Método para realizar login. En vez de utilizar mensajeDTO; se esta utilizando ANY
     * @param sesionDTO 
     * @returns 
     */
    public login(sesionDTO: SesionDTO): Observable<any> {
      return this.http.post<any>(this.loginUrl, sesionDTO);
    }

  

}