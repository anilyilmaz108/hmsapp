import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { Payment } from 'src/app/models/payment';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-doctor-payment',
  templateUrl: './doctor-payment.component.html',
  styleUrls: ['./doctor-payment.component.css']
})
export class DoctorPaymentComponent implements OnInit{
  payments!: Payment[];
  constructor(private paymentService: PaymentService){}
  ngOnInit(): void {
    initFlowbite();
    this.paymentService.getPayments().subscribe(data => {
      console.log(data);
      this.payments = data;
    })
  }
}
