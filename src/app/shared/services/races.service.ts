import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Races } from './interfaces/races';

@Injectable({
  providedIn: 'root'
})
export class RacesService {

  constructor(private httpClient: HttpClient) { }

  getRaces(): Observable<Races[]>{
    console.log("preparando el get")
    const url = 'http://localhost:3000/api/races';
    console.log(this.httpClient.get<Races[]>(url))
    return this.httpClient.get<Races[]>(url);
  }
}