import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Feedback } from '../models/feedback';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  public baseUrl = "http://localhost:3306/feedbacks";

  constructor(private httpClient: HttpClient) { }

   //FEEDBACKS
   public getFeedbacks(): Observable<any> {
    return this.httpClient.get("http://localhost:3306/feedbacks");
  }

  public addFeedback(feedback: Feedback): Observable<object> {
    return this.httpClient.post(`http://localhost:3306/feedbacks?user_id=${feedback.user_id}&name=${feedback.name}&surname=${feedback.surname}&title=${feedback.title}&description=${feedback.description}&date=${feedback.date}`, null);
  }
}
