import { Component, OnInit } from '@angular/core';

import { CircuitsService } from 'src/app/shared/services/circuits.service';
import { Circuits } from 'src/app/shared/services/interfaces/circuits-interface';

@Component({
  selector: 'app-circuits',
  templateUrl: './circuits.component.html',
  styleUrls: ['./circuits.component.scss'],
})
export class CircuitsComponent implements OnInit {

  displayedColumns: string[] = [ 'name','address','circuit_distance','phone_number'];
  dataSource: Circuits[] = [];
  

  //public circuits: string = '';

  constructor(private circuitsService : CircuitsService ) { }

  ngOnInit(): void {
    this.circuitsService.getCircuits().subscribe(a =>{
      this.dataSource = a;
    });

  }

}
// import { Component } from '@angular/core';

// @Component({selector: 'ngbd-carousel-basic', templateUrl: './carousel-basic.html'})
// export class NgbdCarouselBasic {
//   images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
// }