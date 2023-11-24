import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { initFlowbite } from 'flowbite';
import { Payment } from 'src/app/models/payment';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-doctor-new-payment',
  templateUrl: './doctor-new-payment.component.html',
  styleUrls: ['./doctor-new-payment.component.css']
})
export class DoctorNewPaymentComponent implements OnInit{
  payment: Payment = new Payment();
  constructor(private paymentService: PaymentService){}
  ngOnInit(): void {
    initFlowbite();
  }

  addPaymentForm = new FormGroup({
    payment_id: new FormControl("123"),
    patient_id: new FormControl("234"),
    name: new FormControl(null,[Validators.required]),
    surname: new FormControl(null,[Validators.required]),
    doctor_name: new FormControl(null,[Validators.required]),
    salary: new FormControl(null,[Validators.required]),
    date: new FormControl(null,[Validators.required]),
    operations: new FormControl(null,[Validators.required]),

  })

  onSubmit(){
    console.log('Submitted');
    this.payment = Object.assign(this.payment, this.addPaymentForm.value);

    this.paymentService.addPayments(this.payment).subscribe(data => console.log(data), error => console.log(error));
    console.log(this.payment);
    console.log(typeof(this.payment));
 

  }
}
