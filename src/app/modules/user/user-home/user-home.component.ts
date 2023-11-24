import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  users!: User[];
  user: User = new User();
  constructor(private userService: UserService) { }
  ngOnInit(): void {
    initFlowbite();
    this.userService.getUsers().subscribe(data => {
      console.log(data);
      this.users = data;
    })
  }
}
