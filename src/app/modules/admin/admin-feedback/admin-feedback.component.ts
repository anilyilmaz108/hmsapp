import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { Feedback } from 'src/app/models/feedback';
import { FeedbackService } from 'src/app/services/feedback.service';

@Component({
  selector: 'app-admin-feedback',
  templateUrl: './admin-feedback.component.html',
  styleUrls: ['./admin-feedback.component.css']
})
export class AdminFeedbackComponent implements OnInit{
  feedbacks!: Feedback[];
  constructor(private feedbackService: FeedbackService){}
  ngOnInit(): void {
    initFlowbite();
    this.feedbackService.getFeedbacks().subscribe(data => {
      console.log(data);
      this.feedbacks = data;
    })
  }
}
