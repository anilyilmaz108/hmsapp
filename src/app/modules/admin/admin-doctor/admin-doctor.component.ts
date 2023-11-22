import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-doctor',
  templateUrl: './admin-doctor.component.html',
  styleUrls: ['./admin-doctor.component.css']
})
export class AdminDoctorComponent implements OnInit{
  users!: User[];
  user: User = new User();
  static eUser = new User();
  constructor(private userService: UserService, private router: Router,) { }
  ngOnInit(): void {
    initFlowbite();
    this.userService.getUsers().subscribe(data => {
      console.log(data);
      this.users = data;
    })
  }

  userDetails(id: number) {
    this.router.navigate(['users', id]);
    console.log(id);
  }

  selectUserForEdit(id: number, role: String, name: String, surname: String, about: String, image: String, email:String, phone:String, department:String, salary:String, started:String, address:String, staff:String){
    this.userService.getUser(id).subscribe(data => {
      console.log('SELECT USER FOR EDIT KISMINDA');
      console.log(data);
      AdminDoctorComponent.eUser.id = id;
      AdminDoctorComponent.eUser.role = role;
      AdminDoctorComponent.eUser.name = name;
      AdminDoctorComponent.eUser.surname = surname;
      AdminDoctorComponent.eUser.about = about;
      AdminDoctorComponent.eUser.image = image;
      AdminDoctorComponent.eUser.email = email;
      AdminDoctorComponent.eUser.phone = phone;
      AdminDoctorComponent.eUser.department = department;
      AdminDoctorComponent.eUser.salary = salary;
      AdminDoctorComponent.eUser.started = started;
      AdminDoctorComponent.eUser.address = address;
      AdminDoctorComponent.eUser.staff = staff;
      console.log(AdminDoctorComponent.eUser);
    })
  }

  update(user: User, id: number){
    this.userService.updateUser(user,id).subscribe(data => {
      console.log(data);

    })
  }


  deleteUser(id: number){
    this.userService.deleteUser(id).subscribe(data => {
      console.log(data);
      console.log('SILINDI');
    })  }

}
