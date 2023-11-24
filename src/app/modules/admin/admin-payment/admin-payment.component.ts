import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { Payment } from 'src/app/models/payment';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-admin-payment',
  templateUrl: './admin-payment.component.html',
  styleUrls: ['./admin-payment.component.css']
})
export class AdminPaymentComponent implements OnInit{
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
