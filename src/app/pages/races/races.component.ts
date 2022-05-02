import { Component, OnInit } from '@angular/core';

export interface Races {
  event: string;
  //position: number;
  date: string;
  symbol: string;
}

const ELEMENT_DATA: Races[] = [
  {event: 'Carrera 1', date: '25-03-2022', symbol: 'H'},
  {event: 'Carrera 2', date: '25-03-2022', symbol: 'He'},
  {event: 'Carrera 3', date: '25-03-2022',symbol: 'Li'},
  {event: 'Carrera 4', date: '25-03-2022', symbol: 'Be'},
  {event: 'Carrera 5', date: '25-03-2022', symbol: 'B'},
  {event: 'Carrera 6', date: '25-03-2022', symbol: 'C'},
  {event: 'Carrera 7', date: '25-03-2022', symbol: 'N'},
  {event: 'Carrera 8', date: '25-03-2022', symbol: 'O'},
  {event: 'Carrera 9', date: '25-03-2022', symbol: 'F'},
  { event: 'Carrera 10', date: '25-03-2022', symbol: 'Ne'},
];

@Component({
  selector: 'app-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.scss']
})
export class RacesComponent implements OnInit {

  displayedColumns: string[] = [ 'event', 'date', 'symbol'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
