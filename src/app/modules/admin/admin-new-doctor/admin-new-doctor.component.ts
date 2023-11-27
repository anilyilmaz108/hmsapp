import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { AdminDoctorComponent } from '../admin-doctor/admin-doctor.component';
import {MatSnackBar, MatSnackBarRef, MatSnackBarModule} from '@angular/material/snack-bar';

@Component({
  selector: 'app-admin-new-doctor',
  templateUrl: './admin-new-doctor.component.html',
  styleUrls: ['./admin-new-doctor.component.css'],
  
})
export class AdminNewDoctorComponent implements OnInit{
  user: User = new User();
  eUser: User = AdminDoctorComponent.eUser;

  constructor(private userService: UserService, private _snackBar: MatSnackBar){}
  ngOnInit(): void {
    initFlowbite();
  }

  addDoctorForm = new FormGroup({
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

  updateDoctorForm = new FormGroup({
    role: new FormControl(`${AdminDoctorComponent.eUser}`,[Validators.required]),
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
    this.user = Object.assign(this.user, this.addDoctorForm.value);
    const body = { 
      "role":`${this.addDoctorForm.controls['role'].value}`,
      "name":`${this.addDoctorForm.controls['name'].value}`,
      "surname":`${this.addDoctorForm.controls['surname'].value}`,
      "about":`${this.addDoctorForm.controls['about'].value}`,
      "image":`${this.addDoctorForm.controls['image'].value}`,
      "email":`${this.addDoctorForm.controls['email'].value}`,
      "phone":`${this.addDoctorForm.controls['phone'].value}`,
      "department":`${this.addDoctorForm.controls['department'].value}`,
      "salary":`${this.addDoctorForm.controls['salary'].value}`,
      "started":`${this.addDoctorForm.controls['role'].value}`,
      "address":`${this.addDoctorForm.controls['address'].value}`,
      "staff":`${this.addDoctorForm.controls['staff'].value}`,
     };

    this.userService.addUser(this.user).subscribe(data => console.log(data), error => console.log(error));
    console.log(this.user);
    console.log(typeof(this.user));
    this._snackBar.open("İşleminiz Gerçekleşmiştir","Tamam", {
      duration: 3000
    });

  }


  onUpdateSubmit(){
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

    this.user = new User();
    console.log(this.user);
    this._snackBar.open("İşleminiz Gerçekleşmiştir","Tamam", {
      duration: 3000
    });
  }
}

   