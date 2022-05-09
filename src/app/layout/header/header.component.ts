import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthServiceService } from 'src/app/shared/services/auth-service.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router,private auth : AuthServiceService) { }
//    autorizacion: string = '' ;
  
  ngOnInit(): void {
  }

  // login(){
  //   //console.log('Enviar los datos:',this.Username +""+ this.password);
   
  //   this.router.navigate(['/races']);

  //   }

}
