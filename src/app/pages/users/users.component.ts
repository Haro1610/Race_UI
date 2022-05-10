import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UsersService } from 'src/app/shared/services/users.service'; 
import { Users } from 'src/app/shared/services/interfaces/users'; 
import { AuthServiceService } from 'src/app/shared/services/auth-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = [ 'name', 'email', 'number','editar'];
  dataSource: Users[] = [];
  public email : string = '';

  constructor(private Router : ActivatedRoute, private UsersService : UsersService,private auth: AuthServiceService, private router: Router) { 
    if (!auth.get()){
      this.router.navigate(['/home']);
    } 
  }

  ngOnInit(): void {

      this.Router.params.subscribe( params => {
        this.email = params['_id']
      });
      this.UsersService.getUsers().subscribe( a =>{
        this.dataSource = a;
    });
      console.log(this.dataSource)
      this.dataSource = this.dataSource.filter( a =>{
          a.email = this.email;
      })
      console.log(this.dataSource)
    
    //this.dataSource = ELEMENT_DATA;
  }

}
