import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private httpClient:HttpClient) { }

  Sign_up(username:string,email: string, password: string): Observable<any>{
    const url = 'https://karting-gdl.herokuapp.com/api/users/';
    return this.httpClient.post<any>(url,{username: username, email:email,password: password});
  }
}

