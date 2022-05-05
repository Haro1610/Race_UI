import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { CircuitsInterface } from './interfaces/circuits-interface';


@Injectable({
  providedIn: 'root'
})
export class CircuitsService {

  constructor(private httpClient: HttpClient) { }

  getCircuits(): Observable<CircuitsInterface[]>{
    console.log("preparando el get")
    const url = 'http://localhost:3000/api/circuits';
    console.log(this.httpClient.get<CircuitsInterface[]>(url))
    return this.httpClient.get<CircuitsInterface[]>(url);
  }
}
