import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from 'src/app/shared/services/login.service';
import { Login } from 'src/app/shared/services/interfaces/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  [x: string]: any;

  email: string = '';
  password: string = '';
  constructor(private LoginService:LoginService, private router:Router) { }

  ngOnInit(): void {
  }

  login(){
    this.LoginService.DBLogIn(this.email,this.password).subscribe( a => {
        console.log("iniciando sesion")
        //console.log(a)
        this.router.navigate(['/home']);
      });
    }
}


