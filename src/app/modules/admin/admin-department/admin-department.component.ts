import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-admin-department',
  templateUrl: './admin-department.component.html',
  styleUrls: ['./admin-department.component.css']
})
export class AdminDepartmentComponent implements OnInit{
  constructor(){}
  ngOnInit(): void {
    initFlowbite();
  }
}
