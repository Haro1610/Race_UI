import { Component, OnInit } from '@angular/core';

export interface Races {
  event: string;
  //position: number;
  date: string;
  pista: string;
}

const ELEMENT_DATA: Races[] = [
  {event: 'Carrera 1', date: '25-03-2022', pista: '1a'},
  {event: 'Carrera 2', date: '25-03-2022', pista: '1c'},
  {event: 'Carrera 3', date: '25-03-2022',pista: '2c'},
  {event: 'Carrera 4', date: '25-03-2022', pista: '1a'},
  {event: 'Carrera 5', date: '25-03-2022', pista: '2c'},
  {event: 'Carrera 6', date: '25-03-2022', pista: '1a'},
  {event: 'Carrera 7', date: '25-03-2022', pista: '2c'},
  {event: 'Carrera 8', date: '25-03-2022', pista: '2a'},
  {event: 'Carrera 9', date: '25-03-2022', pista: '2b'},
  { event: 'Carrera 10', date: '25-03-2022', pista: '2a'},
  {event: 'Carrera 11', date: '25-03-2022', pista: '1b'},
  {event: 'Carrera 12', date: '25-03-2022', pista: '1c'},
  {event: 'Carrera 13', date: '25-03-2022', pista: '2a'},
  { event: 'Carrera 114', date: '25-03-2022', pista: '1a'},
  { event: 'Carrera 115', date: '25-03-2022', pista: '1a'},
];

@Component({
  selector: 'app-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.scss']
})
export class RacesComponent implements OnInit {

  displayedColumns: string[] = [ 'event', 'date', 'pista'];
  dataSource = ELEMENT_DATA;

  constructor() {

   }

  ngOnInit(): void {
  }

}