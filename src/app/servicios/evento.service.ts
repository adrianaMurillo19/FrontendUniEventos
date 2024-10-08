import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EventoDTO } from '../dto/evento-dto';

@Injectable({
  providedIn: 'root'
})

export class EventoService {

    eventos: EventoDTO[];

   
  
    private apiUrl = 'http://localhost:8081/eventos'; // URL del backend

    //constructor(private http: HttpClient) {}
    constructor() {
      this.eventos = [];

      this.eventos.push(new EventoDTO("19", "Melendi", "Melendi en colombia se presenta en el movistar arena", "calle 10", "Bogotá",["CONCIERTO"],["https://movistararena.co/wp-content/uploads/2024/08/melendi-20-anos-en-concierto-3.jpg"], new Date("2024-10-15T20:00:00")));
    }

    // Método para obtener la lista de eventos
   /* obtenerEventos(): Observable<EventoDTO[]> {
        return this.http.get<EventoDTO[]>(this.apiUrl); // Esto debe devolver un Observable
      }*/

      //nuevo
    public listar(): EventoDTO[] {
      return this.eventos;
    }

    //nuevo
    public obtener(codigo:string):EventoDTO | undefined{
      return this.eventos.find(p => p.id == codigo);
    }

}
