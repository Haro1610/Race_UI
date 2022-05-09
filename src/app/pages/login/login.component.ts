import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from 'src/app/shared/services/login.service';
import { Login } from 'src/app/shared/services/interfaces/login';
import { AuthServiceService } from 'src/app/shared/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  [x: string]: any;

  email: string = '';
  password: string = '';
  constructor(private LoginService:LoginService, private router:Router, private authService :AuthServiceService) { }

  ngOnInit(): void {
  }

  login(){
    this.LoginService.DBLogIn(this.email,this.password).subscribe( res => {
        console.log("iniciando sesion")
        console.log(res)
        //console.log(a)
        this.authService.save(res.token,this.email)
        this.router.navigate(['/races']);
      });
      
     /*console.log("iniciando sesión")
     this.LoginService.LOG(this.email,this.password).then( res => {
       console.log(res)  
      this.authService.save(res.token)
        this.router.navigate(['/races']);
     }).catch(e =>{
        console.log(e)
     });*/
    }
}


