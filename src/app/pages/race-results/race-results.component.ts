import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RaceResultsService } from 'src/app/shared/services/race-results.service';
import { RaceResults } from 'src/app/shared/services/interfaces/race-results';




@Component({
  selector: 'app-race-results',
  templateUrl: './race-results.component.html',
  styleUrls: ['./race-results.component.scss']
})
export class RaceResultsComponent implements OnInit {

  
  displayedColumns: string[] = [ 'race_name', 'piloto', 'l1','l2','l3'];
  dataSource: RaceResults[] = [];
  current_race : string = '';

  constructor(private Router : ActivatedRoute, private raceResultService : RaceResultsService ) { }

  ngOnInit(): void {
    this.Router.params.subscribe( params => {
      this.current_race = params['_id']
    });
    this.raceResultService.getResults(this.current_race).subscribe( a =>{
      this.dataSource.push(a);
      console.log(this.dataSource)
    });
  }

}
