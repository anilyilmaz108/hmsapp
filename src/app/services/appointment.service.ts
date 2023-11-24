import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from '../models/appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  public baseUrl = "http://localhost:3306/appointments";

  constructor(private httpClient: HttpClient) { }
    //APPOINTMENTS
    public getAppointments(): Observable<any> {
      return this.httpClient.get(this.baseUrl);
    }
  
    public getAppointment(id: number): Observable<any> {
      return this.httpClient.get(`${this.baseUrl}/${id}`);
    }
  
    public addAppointment(appointment: Appointment): Observable<object> {
      return this.httpClient.post(`http://localhost:3306/appointments?patient_id=${appointment.patient_id}&name=${appointment.name}&surname=${appointment.surname}&phone=${appointment.phone}&email=${appointment.email}&age=${appointment.age}&date=${appointment.date}&symptoms=${appointment.symptoms}`, null);
    }
  
    public updateAppointment(appointment: Appointment, id: number): Observable<any> {
      return this.httpClient.put(`http://localhost:3306/appointments?patient_id=${appointment.patient_id}&name=${appointment.name}&surname=${appointment.surname}&phone=${appointment.phone}&email=${appointment.email}&age=${appointment.age}&date=${appointment.date}&symptoms=${appointment.symptoms}&id=${id}`, null);
    }
  
    public deleteAppointment(id: number): Observable<any> {
      return this.httpClient.delete(`http://localhost:3306/appointments?id=${id}`);
    }
}
