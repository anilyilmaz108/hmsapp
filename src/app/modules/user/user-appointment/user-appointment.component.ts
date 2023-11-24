import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { initFlowbite } from 'flowbite';
import { Appointment } from 'src/app/models/appointment';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-user-appointment',
  templateUrl: './user-appointment.component.html',
  styleUrls: ['./user-appointment.component.css']
})
export class UserAppointmentComponent implements OnInit{
  appointment: Appointment = new Appointment();

  constructor(private appointmentService: AppointmentService){}
  ngOnInit(): void {
    initFlowbite();
  }

  addAppointmentForm = new FormGroup({
    name: new FormControl(null,[Validators.required]),
    surname: new FormControl(null,[Validators.required]),
    email: new FormControl(null,[Validators.required]),
    phone: new FormControl(null,[Validators.required]),
    age: new FormControl(null,[Validators.required]),
    date: new FormControl(null,[Validators.required]),
    symptoms: new FormControl(null,[Validators.required]),
    patient_id: new FormControl("123",[Validators.required]),
  })

 



  onSubmit(){
    console.log('Submitted');
    this.appointment = Object.assign(this.appointment, this.addAppointmentForm.value);
   

    this.appointmentService.addAppointment(this.appointment).subscribe(data => console.log(data), error => console.log(error));
    console.log(this.appointment);
    console.log(typeof(this.appointment));
 

  }
}
