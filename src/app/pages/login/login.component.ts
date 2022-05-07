import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  [x: string]: any;

  Username: string = '';
  password: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    console.log('Enviar los datos:',this.Username +""+ this.password);
/*this.Router.params.subscribe( params => {
      this.current_race = params['_id'];
        this.raceResultService.getResults(this.current_race).subscribe( a =>{
          this.dataSource = [a];
      });
    */
    
    this.router.navigate(['/home']);
    }
}
