import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent implements OnInit {

  form: FormGroup;
  showPassword: boolean = false;


  constructor(private router: Router,private formBuilder: FormBuilder ) { 
    this.form = this.formBuilder.group({
      name: ['',Validators.required],
      username: ['',Validators.required],
      email: ['',[Validators.required,Validators.email]],
      password: ['',[Validators.required,Validators.minLength(4)]],
      confirm_password : ['',[Validators.required,Validators.minLength(4)]]
  },{
    validators:  [this.matchPasswords.bind(this)]
 });
}


  ngOnInit(): void {

  }
  toggleShowPassword(): void{
    this.showPassword = !this.showPassword;
  }

  sendData(){
    console.log("Datos formulario"+this.formBuilder.group.name);
    this.router.navigate(['/races']);

  }

  matchPasswords() {
    if(!this.form) return;
    const {password, confirm_password} = this.form.getRawValue()
    if( password == confirm_password){
      return null;
    }else{
      return {passwordMismatch:true}
    }
  }

}
