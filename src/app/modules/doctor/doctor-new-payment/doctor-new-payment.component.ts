import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-doctor-new-payment',
  templateUrl: './doctor-new-payment.component.html',
  styleUrls: ['./doctor-new-payment.component.css']
})
export class DoctorNewPaymentComponent implements OnInit{
  constructor(){}
  ngOnInit(): void {
    initFlowbite();
  }
}
