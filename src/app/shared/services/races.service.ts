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
    const url = 'https://karting-gdl.herokuapp.com/api/races';
    console.log(this.httpClient.get<Races[]>(url))
    return this.httpClient.get<Races[]>(url);
  }

  
  deleteRace(id: string): Observable<Races>{
    console.log("preparando para eliminar"+ id);
    const url = 'https://karting-gdl.herokuapp.com/api/races/'+id;
    return this.httpClient.delete<Races>(url);
  }
  
  updateRace(id:string,name: string,number_of_laps: number,date: string,circuit:string,capacity: number,image:string): Observable<Races>{
    const url = 'https://karting-gdl.herokuapp.com/api/races/';
    return this.httpClient.put<Races>(url,
      {_id:id,
        name:name,
        number_of_laps:number_of_laps,
        date:date,
        circuit:circuit,
        capacity:capacity,
        image:image
    });
  } 

  createRace(name: string,number_of_laps: number,date: string,circuit:string,capacity: number,image:string): Observable<Races>{
    const url = 'https://karting-gdl.herokuapp.com/api/races/';
    return this.httpClient.post<Races>(url,
      {name:name,
      number_of_laps:number_of_laps,
      date:date,
      circuit:circuit,
      capacity:capacity,
      image:image
    });
  }

  joinRace(id:string){
    const url = 'https://karting-gdl.herokuapp.com/api/races/'+id;
    console.log(url)
    return this.httpClient.put<Races>(url,{
      username:localStorage.getItem('username')
    });
  }
  
  leftRace(id:string){
    const url = 'https://karting-gdl.herokuapp.com/api/races/'+id;
    console.log(url)
    return this.httpClient.post<Races>(url,{
      username:localStorage.getItem('username')
    });
  }
}