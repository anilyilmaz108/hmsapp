import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { initFlowbite } from 'flowbite/lib/esm/components';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  constructor(private router: Router){}
  ngOnInit(): void {
    initFlowbite();
  }

  loginForm = new FormGroup({
    email: new FormControl(null,[Validators.required]),
    password: new FormControl(null,[Validators.required]),
  })

 

  onsubmit(){
    console.log('Submitted');
    if(this.loginForm.controls['email'].value === "anilyilmaz108@gmail.com" && this.loginForm.controls['password'].value === "123456"){
      AppComponent.role = "admin";
      this.router.navigateByUrl('/adminhome');
    }
    else if(this.loginForm.controls['email'].value === "test@gmail.com" && this.loginForm.controls['password'].value === "123456"){
      AppComponent.role = "doctor";
      this.router.navigateByUrl('/doctorappointment');
    }
    else{
      AppComponent.role = "user";
      this.router.navigateByUrl('/');
    }
  }

  

}
