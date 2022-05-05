import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UsersService } from 'src/app/shared/services/users.service'; 
import { Users } from 'src/app/shared/services/interfaces/users'; 

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  //displayedColumns: string[] = [ 'race_name', 'results', 'number_of_laps','date'];
  dataSource: Users[] = [];
  public email : string = '';

  constructor(private Router : ActivatedRoute, private UsersService : UsersService ) { }

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
