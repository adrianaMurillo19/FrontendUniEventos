import { HttpClient } from "@angular/common/http";

import { Injectable } from "@angular/core";
import { SesionDTO } from "../dto/sesion-dto";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })

export class AuthService {

    private loginUrl = 'http://localhost:8081/api/login'; // URL  backend
  
    constructor(private http: HttpClient) {}


    // Método para realizar login
  public login(sesionDTO: SesionDTO): Observable<any> {
    return this.http.post<any>(this.loginUrl, sesionDTO);
  }

}