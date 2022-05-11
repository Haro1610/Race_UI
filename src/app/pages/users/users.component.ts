import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UsersService } from 'src/app/shared/services/users.service'; 
import { Users } from 'src/app/shared/services/interfaces/users'; 
import { AuthServiceService } from 'src/app/shared/services/auth-service.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],

  //selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Hi there!</h4>
      <button type="button" class="btn-close" aria-label="Close" (click)="activeModal.dismiss('Cross click')"></button>
    </div>
    <div class="modal-body">
      <p>Hello, {{name}}!</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>`
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = [ 'name', 'email', 'number','editar','eliminar'];
  dataSource: Users[] = [];
  public email : string = '';

  constructor(private Router : ActivatedRoute, private UsersService : UsersService,
    private auth: AuthServiceService, private router: Router,config: NgbModalConfig, private modalService: NgbModal) { 
    if (!auth.get()){
      this.router.navigate(['/home']);
    } 
    config.backdrop = 'static';
    config.keyboard = false;
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



  open(content: any) {
    this.modalService.open(content);
  }

  delete(email :string){
    console.log("vamos a borrar a :" + email)
    this.UsersService.deleteUser(email).subscribe( a =>{
      console.log(a)
    })
    this.router.navigate(['/users'])
  }

  update(//username:string, email:string, password:string, number:number, picture:string
    content:any
  ){
     console.log(content)
    /*
      this.UsersService.updateUser(username,email,password,number,picture).subscribe( a => {
        console.log(a);
      });
      */
  }
}

