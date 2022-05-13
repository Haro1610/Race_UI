import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthServiceService } from 'src/app/shared/services/auth-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  flag : boolean = false;

  constructor(private auth: AuthServiceService, private router: Router) {
    if(auth.get()){
      router.navigate(['/races']);
    }
    
   }

  ngOnInit(): void {
    // if(localStorage.getItem('level') === 'admin'){
    //   this.flag = !this.flag;

    // }
  }

}
