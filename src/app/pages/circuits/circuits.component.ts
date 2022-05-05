import { Component, OnInit } from '@angular/core';

import { CircuitsService } from 'src/app/shared/services/circuits.service';
import { CircuitsInterface } from 'src/app/shared/services/interfaces/circuits-interface';

@Component({
  selector: 'app-circuits',
  templateUrl: './circuits.component.html',
  styleUrls: ['./circuits.component.scss']
})
export class CircuitsComponent implements OnInit {

  displayedColumns: string[] = [ 'name', 'address', 'pista','phone_number','circuit_distance'];
  dataSource: CircuitsInterface[] = [];

  public circuits: string = '';

  constructor(private circuitsService : CircuitsService ) { }

  ngOnInit(): void {
    this.circuitsService.getCircuits().subscribe(a =>{
      this.dataSource = a;
    });

  }

}
