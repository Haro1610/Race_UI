import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RacesService} from '../../shared/services/races.service'
import { Races} from '../../shared/services/interfaces/races';
import { AuthServiceService } from 'src/app/shared/services/auth-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

/*export interface Races {
  event: string;
  //position: number;
  date: string;
  pista: string;
}*/


@Component({
  selector: 'app-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.scss']
})
export class RacesComponent implements OnInit {

  displayedColumns: string[] = [ 'event', 'date', 'pista','laps','drivers','capacity','status','editar','eliminar'];
  displayed: string[] = [ 'event', 'date', 'pista','laps','drivers','capacity','status','editar','eliminar'];
  
  dataSource: Races[] = [];
  closed_events: Races[] = [];
  private current_race: string = '';
  private hoy: Date = new Date();
  form: FormGroup;
  

  constructor(private racesService: RacesService,private auth: AuthServiceService, 
    private router: Router,private formBuilder: FormBuilder,config: NgbModalConfig, 
    private modalService: NgbModal) { 
    if (!auth.get()){
      this.router.navigate(['/home']);
    }
    this.form = this.formBuilder.group({
      name: [],
      number_of_laps: [],
      date: [],
      circuit: [],
      capacity:[],
    }
    );
  }
  
  stringToDate(fecha:string)
  {
    const [day,month, year] = fecha.split('-');
    const formatedDate = new Date(+year, +month - 1, +day);
    return formatedDate;}


  ngOnInit(): void {
      this.racesService.getRaces().subscribe(a =>{
        this.dataSource = a;
        this.closed_events = this.dataSource.filter( a =>{
          return a.status === 'closed'  &&  this.stringToDate(a.date) > this.hoy ;
      });        
        this.dataSource = this.dataSource.filter( a =>{
          //console.log("probando :" + this.stringToDate(a.date))
          console.log("contra:"+ this.hoy)
          return a.status === 'open'  &&  this.stringToDate(a.date) > this.hoy ;
        });
      });
  }

  open(content: any) {
    this.modalService.open(content);
  }

  sendData(its_new:boolean){
    if(this.form.valid){
      const {name,
        number_of_laps,date,circuit,drivers,capacity,status,} = this.form.getRawValue()
      console.log('Enviar datos',name,number_of_laps,date,circuit,drivers,capacity,status);
    } else{
      console.log('Error, faltan datos',this.form);
    }
  }





}