import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { initFlowbite } from 'flowbite';
import { Feedback } from 'src/app/models/feedback';
import { FeedbackService } from 'src/app/services/feedback.service';
import {MatSnackBar, MatSnackBarRef, MatSnackBarModule} from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-feedback',
  templateUrl: './user-feedback.component.html',
  styleUrls: ['./user-feedback.component.css']
})
export class UserFeedbackComponent implements OnInit{
  feedback: Feedback = new Feedback();
  constructor(private feedbackService: FeedbackService, private _snackBar: MatSnackBar){}
  ngOnInit(): void {
    initFlowbite();
  }

  addFeedbackForm = new FormGroup({
    name: new FormControl(null,[Validators.required]),
    surname: new FormControl(null,[Validators.required]),
    title: new FormControl(null,[Validators.required]),
    description: new FormControl(null,[Validators.required]),
    date: new FormControl("6/19/2015 5:35:50 PM"),
    user_id: new FormControl("123"),
  })

  onSubmit(){
    console.log('Submitted');
    this.feedback = Object.assign(this.feedback, this.addFeedbackForm.value);

    this.feedbackService.addFeedback(this.feedback).subscribe(data => console.log(data), error => console.log(error));
    console.log(this.feedback);
    console.log(typeof(this.feedback));
    this._snackBar.open("İşleminiz Gerçekleşmiştir","Tamam", {
      duration: 3000
    });

  }
}
