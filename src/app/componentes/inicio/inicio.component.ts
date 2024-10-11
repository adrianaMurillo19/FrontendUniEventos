import { Component, OnInit } from '@angular/core';

import { EventoService } from '../../servicios/evento.service'; // para obtener los eventos del backend
import { EventoDTO } from '../../dto/evento-dto'; // DTO de Evento


@Component({
  selector: 'app-inicio',
 /* 
  imports: [
    
    HttpClientModule, // Módulo de HttpClient
    DatePipe // Pipe para manejar fechas en las plantillas
  ],*/
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'] // Corregido, debe ser "styleUrls"
})

export class InicioComponent {
  eventos: EventoDTO[] = [];

  constructor(private eventoService: EventoService) {
    this.eventos = this.eventoService.listar();
  }

  /*
  ngOnInit(): void {
    this.cargarEventos();
  }

  
  cargarEventos(): void {
    this.eventoService.obtenerEventos().subscribe(eventos => {
      // Aquí conviertes las fechas en objetos Date
      this.eventos = eventos.map(evento => {
        evento.fecha = new Date(evento.fecha); // Convertir la fecha a objeto Date
        return evento;
      });
    });
  }*/
}