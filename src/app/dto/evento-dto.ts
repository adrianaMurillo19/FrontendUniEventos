
/*export interface EventoDTO {
    id: string;
    nombre: string;
    descripcion: string;
    direccion: string;
    ciudad: string;
    tipoEvento: string;
    posterUrl: string;
    fecha: Date;
  }*/

    export class EventoDTO{

      id: string;
      nombre: string;
      descripcion: string;
      direccion: string;
      ciudad: string;
      tipoEvento: string[] = [];//Nuevo
      posterUrl: string[] = [];//nuevo
      fecha: Date;

      constructor(id: string, nombre: string, descripcion: string, direccion: string, ciudad: string, tipoEvento: string[], posterUrl: string[], fecha: Date) {
        
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.direccion = direccion;
        this.ciudad = ciudad;
        this.tipoEvento = tipoEvento;
        this.posterUrl = posterUrl;
        this.fecha = fecha;
      }

    }