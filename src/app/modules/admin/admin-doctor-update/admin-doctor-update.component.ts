import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-admin-doctor-update',
  templateUrl: './admin-doctor-update.component.html',
  styleUrls: ['./admin-doctor-update.component.css']
})
export class AdminDoctorUpdateComponent implements OnInit {
  user: User = new User();

  constructor(private userService: UserService, public updateUser: User){}
  ngOnInit(): void {
    initFlowbite();
  }

/*  updateDoctorForm = new FormGroup({
    role: new FormControl(null,[Validators.required]),
    about: new FormControl(null,[Validators.required]),
    image: new FormControl(null,[Validators.required]),
    name: new FormControl(null,[Validators.required]),
    surname: new FormControl(null,[Validators.required]),
    email: new FormControl(null,[Validators.required]),
    phone: new FormControl(null,[Validators.required]),
    department: new FormControl(null,[Validators.required]),
    salary: new FormControl(null,[Validators.required]),
    date: new FormControl(null,[Validators.required]),
    address: new FormControl(null,[Validators.required]),
    staff: new FormControl(null,[Validators.required]),
  }) */

  updateDoctorForm = new FormGroup({
    role: new FormControl(null,[Validators.required]),
    about: new FormControl(null,[Validators.required]),
    image: new FormControl(null,[Validators.required]),
    name: new FormControl(null,[Validators.required]),
    surname: new FormControl(null,[Validators.required]),
    email: new FormControl(null,[Validators.required]),
    phone: new FormControl(null,[Validators.required]),
    department: new FormControl(null,[Validators.required]),
    salary: new FormControl(null,[Validators.required]),
    date: new FormControl(null,[Validators.required]),
    address: new FormControl(null,[Validators.required]),
    staff: new FormControl(null,[Validators.required]),
  })



  onSubmit(){
    console.log('Submitted');
    
    this.user = Object.assign(this.user, this.updateDoctorForm.value);
    const body = { 
      "role":`${this.updateDoctorForm.controls['role'].value}`,
      "name":`${this.updateDoctorForm.controls['name'].value}`,
      "surname":`${this.updateDoctorForm.controls['surname'].value}`,
      "about":`${this.updateDoctorForm.controls['about'].value}`,
      "image":`${this.updateDoctorForm.controls['image'].value}`,
      "email":`${this.updateDoctorForm.controls['email'].value}`,
      "phone":`${this.updateDoctorForm.controls['phone'].value}`,
      "department":`${this.updateDoctorForm.controls['department'].value}`,
      "salary":`${this.updateDoctorForm.controls['salary'].value}`,
      "started":`${this.updateDoctorForm.controls['role'].value}`,
      "address":`${this.updateDoctorForm.controls['address'].value}`,
      "staff":`${this.updateDoctorForm.controls['staff'].value}`,
     };

    this.userService.updateUser(this.user, 1).subscribe(data => console.log(data), error => console.log(error));
    //console.log(this.user);
    //console.log(typeof(this.user));
 
  }
}
