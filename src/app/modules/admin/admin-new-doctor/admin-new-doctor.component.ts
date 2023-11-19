import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';

@Component({
  selector: 'app-admin-new-doctor',
  templateUrl: './admin-new-doctor.component.html',
  styleUrls: ['./admin-new-doctor.component.css'],
  
})
export class AdminNewDoctorComponent implements OnInit{
  constructor(){}
  ngOnInit(): void {
    initFlowbite();
  }
}
