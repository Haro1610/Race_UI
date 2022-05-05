import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Users } from './interfaces/users';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<Users[]>{
    console.log("preparando el get")
    const url = 'http://localhost:3000/api/users';
    console.log(this.httpClient.get<Users[]>(url))
    return this.httpClient.get<Users[]>(url);
  }
}
