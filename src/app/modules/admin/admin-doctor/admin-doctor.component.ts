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

}
