import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CircuitsService } from 'src/app/shared/services/circuits.service';
import { Circuits } from 'src/app/shared/services/interfaces/circuits-interface';
import { AuthServiceService } from 'src/app/shared/services/auth-service.service';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-circuits',
  templateUrl: './circuits.component.html',
  styleUrls: ['./circuits.component.scss'],
})
export class CircuitsComponent implements OnInit {

  displayedColumns: string[] = [ 'name','address','circuit_distance','phone_number','editar','eliminar'];
  dataSource: Circuits[] = [];
  form: FormGroup;
  

  //public circuits: string = '';

  constructor(private circuitsService : CircuitsService, private auth: AuthServiceService, 
    private router: Router,config: NgbModalConfig, private modalService: NgbModal,private formBuilder: FormBuilder) { 
    if (!auth.get()){
      this.router.navigate(['/home']);
    }
    config.backdrop = 'static';
    config.keyboard = false;
    this.form = this.formBuilder.group({
      name: [],
      address:[],
      distance:[],
      description:[],
      circuit_distance:[],
      phone_number:[]
      //imagen: []
    }
    ); 
  }

  refresh(): void {
    this.circuitsService.getCircuits().subscribe(a =>{
      this.dataSource = a;
    });

  }

  ngOnInit(): void {
    this.refresh();
  }

  open(content: any) {
    this.modalService.open(content);
  }

  delete(id :string){
    console.log("vamos a borrar a :" + id)
    this.circuitsService.deleteCircuit(id).subscribe(a => {
      console.log(a)
      this.refresh();
    });
    //this.router.navigate(['/users'])
  }
  

}
// import { Component } from '@angular/core';

// @Component({selector: 'ngbd-carousel-basic', templateUrl: './carousel-basic.html'})
// export class NgbdCarouselBasic {
//   images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
// }