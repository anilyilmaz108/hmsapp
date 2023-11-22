import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { initFlowbite } from 'flowbite';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { AdminDoctorComponent } from '../admin-doctor/admin-doctor.component';

@Component({
  selector: 'app-admin-druptade',
  templateUrl: './admin-druptade.component.html',
  styleUrls: ['./admin-druptade.component.css']
})
export class AdminDruptadeComponent implements OnInit{
  user: User = new User();

  constructor(private httpClient: HttpClient){}
  ngOnInit(): void {
    initFlowbite();
    console.log("==>" + AdminDoctorComponent.eUser)
    console.log("==>" + AdminDoctorComponent.eUser)
    console.log("==>" + AdminDoctorComponent.eUser)
  }

  updateDoctorForm = new FormGroup({
    role: new FormControl(AdminDoctorComponent.eUser.role,[Validators.required]),
    about: new FormControl(AdminDoctorComponent.eUser.about,[Validators.required]),
    image: new FormControl(AdminDoctorComponent.eUser.image,[Validators.required]),
    name: new FormControl(AdminDoctorComponent.eUser.name,[Validators.required]),
    surname: new FormControl(AdminDoctorComponent.eUser.surname,[Validators.required]),
    email: new FormControl(AdminDoctorComponent.eUser.email,[Validators.required]),
    phone: new FormControl(AdminDoctorComponent.eUser.phone,[Validators.required]),
    department: new FormControl(AdminDoctorComponent.eUser.department,[Validators.required]),
    salary: new FormControl(AdminDoctorComponent.eUser.salary,[Validators.required]),
    date: new FormControl(AdminDoctorComponent.eUser.started,[Validators.required]),
    address: new FormControl(AdminDoctorComponent.eUser.address,[Validators.required]),
    staff: new FormControl(AdminDoctorComponent.eUser.staff,[Validators.required]),
  })

  updateUser(user: User, id: number): Observable<any> {
    //return this.httpClient.put(`http://localhost:3306/users?displayname=test3@hms.com&name=testdeneme&surname=asdasd&about=Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC&image=https://www.shutterstock.com/shutterstock/photos/2308557423/display_1500/stock-vector-doctor-holding-a-clipboard-young-cartoon-doctor-with-vector-illustration-medical-concept-2308557423.jpg&email=test3@gmail.com&phone=1112223344&department=dentist&salary=20000&started=6/19/2015 5:35:50 PM&address=Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC&staff=fulltime&role=doctor&id=12`, null);
    return this.httpClient.put(`http://localhost:3306/users?displayname=${user.email}&name=${user.name}&surname=${user.surname}&about=${user.about}&image=${user.image}&email=${user.email}&phone=${user.phone}&department=${user.department}&salary=${user.salary}&started=${user.started}&address=${user.address}&staff=${user.staff}&role=${user.role}&id=${id}`, null);
  }

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

     
    this.updateUser(this.user, AdminDoctorComponent.eUser.id).subscribe(data => console.log(data), error => console.log(error));
    //console.log(this.user);
    //console.log(typeof(this.user));
 
  }

}
