import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Buffer } from "buffer";
import { SesionService } from './sesion.service';

const TOKEN_KEY = "AuthToken";

@Injectable({
  providedIn: 'root'
})
export class TokenService {


  /**
   * permite guardar el token devuelto por el backend una vez nos autenticamos por medio del formulario de login
   * @param token 
   */
  public setToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  /**
   *  permite acceder al token guardado en el sessionStorage.
   * @returns 
   */
  public getToken(): string | null {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  /**
   * Permite verificar en cualquier momento si estamos logueados o no
   * @returns 
   */
  public isLogged(): boolean {
    if (this.getToken()) {
      return true;
    }
    return false;
  }


  /**
   * esta función guarda el token en el sessionStorage y nos redirecciona al inicio
   * @param token 
   */
  public login(token: string) {
    this.setToken(token);
    this.sesionService.updateSession(true);//
    this.router.navigate(["/"]);
  }

  /**
   * para “cerrar sesión”, esta función borra el token del sessionStorage y nos redirecciona al login
   */
  public logout() {
    window.sessionStorage.clear();
    this.sesionService.updateSession(false);//
    this.router.navigate(["/login"]);
  }

  public getEmail(): string {
    const token = this.getToken();
    if (token) {
      const values = this.decodePayload(token);
      return values.sub;
    }
    return "";
  }

  public getRole(): string[] {
    const token = this.getToken();
    if (token) {
      const values = this.decodePayload(token);
      return values.roles;
    }
    return [];
  }

  public getId(): number {
    const token = this.getToken();
    if (token) {
      const values = this.decodePayload(token);
      return values.sub_code;
    }
    return 0;
  }

  /**
   * Permite descifrar 
   * @param token 
   * @returns 
   */
  private decodePayload(token: string): any {
    const payload = token!.split(".")[1];
    const payloadDecoded = Buffer.from(payload, 'base64').toString('ascii');
    const values = JSON.parse(payloadDecoded);
    return values;
  }

/**
 * Esta función accede al token guardado previamente en el Session storage del navegador, lo decodifica y retorna el id, este id hace referencia al código del usuario que retorna el backend.
 * @returns 
 */
  public getCodigo(): string {
    const token = this.getToken();
    if (token) {
      const values = this.decodePayload(token);
      return values.id;
    }
    return "";
 }
 
  constructor(private router: Router, private sesionService: SesionService) { }
}
