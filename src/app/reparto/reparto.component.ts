import { Component } from '@angular/core';
import { ImdbService } from '../imdb.service';
import { Peliculas } from '../peliculas';

import { MensajesComponent } from '../mensajes/mensajes.component';
import { Mensajes } from '../mock-mensaje';
@Component({
  selector: 'app-reparto',
  templateUrl: './reparto.component.html',
  styleUrls: ['./reparto.component.css']
})
export class RepartoComponent {
  public peliculas : any;
  public _mensaje: MensajesComponent
  public mensajes = Mensajes
  constructor(private _service: ImdbService,){
    this._mensaje = new MensajesComponent
    this.mensajes = Mensajes
  }
  
  mostarReparto(url:string){
    this._service.verActores(url).subscribe(peliculas => this.peliculas = peliculas)
  }

}
