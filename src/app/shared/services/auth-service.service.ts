import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }

  save(token: string){
    console.log(token)
    localStorage.setItem('token', token)
  }

  get(): string{
    return localStorage.getItem('token') || '';
  }
}
