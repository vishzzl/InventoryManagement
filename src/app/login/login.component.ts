import { Component } from '@angular/core';
import { ReactiveFormsModule,FormBuilder,FormsModule, FormArray, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})


export class LoginComponent {
 
constructor(private formbuilder: FormBuilder,private authservice : AuthService){}

loginform = this.formbuilder.group({
  username:new FormControl('',Validators.required) ,
  password:new FormControl('',Validators.required),
 
})
onSubmit() {
  console.log(this.loginform.controls)
 const  username =  this. loginform.controls.username.value
  const password =  this.loginform.controls.password.value
  this.authservice.authenticate(username,password).subscribe(
    (response)=>{
      console.log(response)
    }
  )
}
 
}
