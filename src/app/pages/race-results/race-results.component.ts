import { Component, OnInit } from '@angular/core';

export interface RacesResults {
  posicion: string;
  //position: number;
  piloto: string;
  l1: string;
  l2: string;
  l3: string;
}

const ELEMENT_DATA: RacesResults[] = [
  {posicion: '1', piloto: 'Juan Perez',  l1: '1:50',l2: '1:49',l3: '1:40'},
  {posicion: '2', piloto: 'Jose Lopez',  l1: '1:52',l2: '1:50',l3: '1:40'},
  {posicion: '3', piloto: 'Ivan Mendez',  l1: '1:53',l2: '1:52',l3: '2:40'},
  {posicion: '4', piloto: 'Rosa Melano',  l1: '1:54',l2: '1:54',l3: '1:40'},
  {posicion: '5', piloto: 'Jorge Gonzalez',  l1: '1:57',l2: '1:55',l3: '2:40'},
  {posicion: '6', piloto: 'Pablo Cruz',  l1: '1:59',l2: '1:57',l3: '1:40'},
  {posicion: '7', piloto: 'Paula Romero',  l1: '2:02',l2: '1:59',l3: '2:40'},
  {posicion: '8', piloto: 'Carlos Ramirez',  l1: '2:05',l2: '2:02',l3: '2:40'},
  {posicion: '9', piloto: 'Alejandro Perez',  l1: '2:07',l2: '2:40',l3: '2:40'},
  {posicion: '10', piloto: 'Hernan Gomez', l1: '2:09',l2: '2:40',l3: '2:40'},
  {posicion: '11', piloto: 'Facundo Gomez', l1: '2:10',l2: '1:40',l3: '1:40'},
  {posicion: '12', piloto: 'Enesto Perez', l1: '2:11',l2: '1:40',l3: '1:40'},
  {posicion: '13', piloto: 'Amalia Perez', l1: '2:13',l2: '2:40',l3: '2:40'},
  {posicion: '14', piloto: 'Fernado Torres', l1: '2:15',l2: '1:40',l3: '1:40'},
];

@Component({
  selector: 'app-race-results',
  templateUrl: './race-results.component.html',
  styleUrls: ['./race-results.component.scss']
})
export class RaceResultsComponent implements OnInit {

  displayedColumns: string[] = [ 'posicion', 'piloto', 'l1','l2','l3'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
