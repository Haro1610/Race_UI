import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }

  save(token: string,email: string){
    localStorage.setItem('token', token);
    localStorage.setItem('email', email);
  }

  get(): string{
    return localStorage.getItem('token') || '';
  }
}
