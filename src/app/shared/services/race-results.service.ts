import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { RaceResults } from './interfaces/race-results';

@Injectable({
  providedIn: 'root'
})
export class RaceResultsService {

  constructor(private httpClient: HttpClient) { }

  getResults(id: string): Observable<RaceResults>{
    const url = 'https://karting-gdl.herokuapp.com/api/race_results/'+id;
    console.log(url)
    console.log(this.httpClient.get<RaceResults>(url))
    return this.httpClient.get<RaceResults>(url);
  }
}
