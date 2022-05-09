import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { RaceResultsService } from 'src/app/shared/services/race-results.service';
import { RaceResults } from 'src/app/shared/services/interfaces/race-results';
import { AuthServiceService } from 'src/app/shared/services/auth-service.service';
const ELEMENT_DATA: RaceResults[] = [
  {_id: '1', results : '1 CQ, 2 VQ 3 AR', number_of_laps: 3,  race_id: "2",race_name: 'Carrerota',date: '1:40'},
];

@Component({
  selector: 'app-race-results',
  templateUrl: './race-results.component.html',
  styleUrls: ['./race-results.component.scss']
})


export class RaceResultsComponent implements OnInit {

  
  displayedColumns: string[] = [ 'race_name', 'results', 'number_of_laps','date'];
  dataSource: RaceResults[] = [];
  public current_race : string = '';

  constructor(private Router : ActivatedRoute, private raceResultService : RaceResultsService , private auth: AuthServiceService, private router: Router) { 
    if (!auth.get()){
      this.router.navigate(['/home']);
    }
  }

  ngOnInit(): void {

      this.Router.params.subscribe( params => {
        this.current_race = params['_id'];
          this.raceResultService.getResults(this.current_race).subscribe( a =>{
            this.dataSource = [a];
        });

        
      });
  }

}
