import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { Peliculas } from './peliculas';
@Injectable({
  providedIn: 'root'
})
export class ImdbService{
  
  constructor(private _http: HttpClient) {
    
   }

  getPeliculas(url: string):Observable<Peliculas[]>{
    return this._http.get<Peliculas[]>(url);
  }
  verActores(url: string):Observable<Peliculas[]>{
    return this._http.get<Peliculas[]>(url);
  }
}
