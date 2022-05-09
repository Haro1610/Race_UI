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
  public current_race: string = '';

  constructor(private racesService: RacesService,private auth: AuthServiceService, private router: Router) { 
    if (!auth.get()){
      this.router.navigate(['/home']);
    }
  }
  
  

  ngOnInit(): void {
      this.racesService.getRaces().subscribe(a =>{
        this.dataSource = a;
        this.closed_events = this.dataSource.filter( a =>{
          return a.status === 'closed';
      });        
        this.dataSource = this.dataSource.filter( a =>{
            return a.status === 'open';
        });
      });

  }



}