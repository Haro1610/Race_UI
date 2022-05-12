import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }

  save(token: string,email: string,username:string){
    localStorage.setItem('token', token);
    localStorage.setItem('email', email);
    localStorage.setItem('username', username);
  }

  get(): string{
    return localStorage.getItem('token') || '';
  }
  logOut(){
    localStorage.clear();
  }
}