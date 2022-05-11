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

  
  deleteRace(id: string): Observable<Races>{
    console.log("preparando para eliminar");
    const url = 'http://localhost:3000/api/races/'+id;
    return this.httpClient.delete<Races>(url);
  }
  /*  
  updateCircuit(id:string,name:string, description:string, address:string, phone_number:number, circuit_distance:string): Observable<Circuits>{
    const url = 'http://localhost:3000/api/circuits/';
    return this.httpClient.put<Circuits>(url,
      {id:id,
      name:name,
      description:description,
      address:address,
      phone_number:phone_number,
      circuit_distance:circuit_distance});
  } */

  createRace(name: string,number_of_laps: number,date: string,circuit:string,drivers: string[],capacity: number,status: string): Observable<Races>{
    const url = 'http://localhost:3000/api/races/';
    return this.httpClient.post<Races>(url,
      {name:name,
      number_of_laps:number_of_laps,
      date:date,
      circuit:circuit,
      drivers:drivers,
      capacity:capacity,
      status:status
    });
  }
  
}