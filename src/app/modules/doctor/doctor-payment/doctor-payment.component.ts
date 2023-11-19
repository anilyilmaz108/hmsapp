import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-doctor-payment',
  templateUrl: './doctor-payment.component.html',
  styleUrls: ['./doctor-payment.component.css']
})
export class DoctorPaymentComponent implements OnInit{
  constructor(){}
  ngOnInit(): void {
    initFlowbite();
  }
}
