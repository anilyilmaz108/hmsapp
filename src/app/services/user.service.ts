import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public baseUrl = "http://localhost:3306/users";

  constructor(private httpClient: HttpClient) {

  }

  //USERS
  public getUsers(): Observable<any> {
    return this.httpClient.get(this.baseUrl);
  }

  public getUser(id: number): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/${id}`);
  }

  public addUser(user: User): Observable<object> {
    return this.httpClient.post(`http://localhost:3306/users?displayname=${user.email}&name=${user.name}&surname=${user.surname}&about=${user.about}&image=${user.image}&email=${user.email}&phone=${user.phone}&department=${user.department}&salary=${user.salary}&started=${user.started}&address=${user.address}&staff=${user.staff}&role=${user.role}`, null);
  }

  public updateUser(user: User, id: number): Observable<any> {
    //return this.httpClient.put(`http://localhost:3306/users?displayname=test3@hms.com&name=testdeneme&surname=asdasd&about=Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC&image=https://www.shutterstock.com/shutterstock/photos/2308557423/display_1500/stock-vector-doctor-holding-a-clipboard-young-cartoon-doctor-with-vector-illustration-medical-concept-2308557423.jpg&email=test3@gmail.com&phone=1112223344&department=dentist&salary=20000&started=6/19/2015 5:35:50 PM&address=Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC&staff=fulltime&role=doctor&id=12`, null);
    return this.httpClient.put(`http://localhost:3306/users?displayname=${user.email}&name=${user.name}&surname=${user.surname}&about=${user.about}&image=${user.image}&email=${user.email}&phone=${user.phone}&department=${user.department}&salary=${user.salary}&started=${user.started}&address=${user.address}&staff=${user.staff}&role=${user.role}&id=${id}`, null);
  }

  public deleteUser(id: number): Observable<any> {
    return this.httpClient.delete(`http://localhost:3306/users?id=${id}`);
  }

 
}
