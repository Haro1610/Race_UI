import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Login } from './interfaces/login'; 


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private httpClient: HttpClient) { }

  DBLogIn(email: string, password: string): Observable<Login>{
    const url = 'http://localhost:3000/api/Login/';
    console.log(url);
    console.log(this.httpClient.post<Login>(url,{email: email, password: password}));
    return this.httpClient.post<Login>(url,{email: email, password: password});
  }
}
