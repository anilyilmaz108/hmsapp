import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { Appointment } from 'src/app/models/appointment';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-doctor-appointment',
  templateUrl: './doctor-appointment.component.html',
  styleUrls: ['./doctor-appointment.component.css']
})
export class DoctorAppointmentComponent implements OnInit {
  appointments!: Appointment[];

  constructor(private appointmentService: AppointmentService){}
  ngOnInit(): void {
    initFlowbite();
    this.appointmentService.getAppointments().subscribe(data => {
      console.log(data);
      this.appointments = data;
    })
  }


 /* selectAppointmentForEdit(id: number, role: String, name: String, surname: String, about: String, image: String, email:String, phone:String, department:String, salary:String, started:String, address:String, staff:String){
    this.appointmentService.getAppointment(id).subscribe(data => {
      console.log('SELECT APPOINTMENT FOR EDIT KISMINDA');
      console.log(data);
      AdminDoctorComponent.eUser.id = id;
      AdminDoctorComponent.eUser.role = role;
      AdminDoctorComponent.eUser.name = name;
      AdminDoctorComponent.eUser.surname = surname;
      AdminDoctorComponent.eUser.about = about;
      AdminDoctorComponent.eUser.image = image;
      AdminDoctorComponent.eUser.email = email;
      AdminDoctorComponent.eUser.phone = phone;
      AdminDoctorComponent.eUser.department = department;
      AdminDoctorComponent.eUser.salary = salary;
      AdminDoctorComponent.eUser.started = started;
      AdminDoctorComponent.eUser.address = address;
      AdminDoctorComponent.eUser.staff = staff;
      console.log(AdminDoctorComponent.eUser);
    })
  } */

  update(appointment: Appointment, id: number){
    this.appointmentService.updateAppointment(appointment,id).subscribe(data => {
      console.log(data);

    })
  }


  deleteUser(id: number){
    this.appointmentService.deleteAppointment(id).subscribe(data => {
      console.log(data);
      console.log('SILINDI');
    })  }
}
