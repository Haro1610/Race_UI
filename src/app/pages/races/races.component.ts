import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RacesService} from '../../shared/services/races.service'
import { Races} from '../../shared/services/interfaces/races';
import { AuthServiceService } from 'src/app/shared/services/auth-service.service';
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

  displayedColumns: string[] = [ 'event', 'date', 'pista','laps','drivers','capacity','status'];
  displayed: string[] = [ 'event', 'date', 'pista','laps','drivers','capacity','status'];
  
  dataSource: Races[] = [];
  closed_events: Races[] = [];
  private current_race: string = '';
  private hoy: Date = new Date();
  

  constructor(private racesService: RacesService,private auth: AuthServiceService, private router: Router) { 
    if (!auth.get()){
      this.router.navigate(['/home']);
    }
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




}