import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payment } from '../models/payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  public baseUrl = "http://localhost:3306/payments";

  constructor(private httpClient: HttpClient) {

  }

  //PAYMENTS
  public getPayments(): Observable<any> {
    return this.httpClient.get(this.baseUrl);
  }

  public getPayment(id: number): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/${id}`);
  }

  public addPayments(payment: Payment): Observable<object> {
    return this.httpClient.post(`http://localhost:3306/payments?payment_id=${payment.payment_id}&patient_id=${payment.patient_id}&name=${payment.name}&surname=${payment.surname}&doctor_name=${payment.doctor_name}&salary=${payment.salary}&date=${payment.date}&operations=${payment.operations}`, null);
  }

  public updatePayments(payment: Payment, id: number): Observable<any> {
    return this.httpClient.put(`http://localhost:3306/payments?payment_id=${payment.payment_id}&patient_id=${payment.patient_id}&name=${payment.name}&surname=${payment.surname}&doctor_name=${payment.doctor_name}&salary=${payment.date}&date=${payment.date}&operations=${payment.operations}&id=${id}`, null);
  }

  public deletePayments(id: number): Observable<any> {
    return this.httpClient.delete(`http://localhost:3306/payments?id=${id}`);
  }
}
