import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminHomeComponent } from './modules/admin/admin-home/admin-home.component';
import { AdminAppointmentComponent } from './modules/admin/admin-appointment/admin-appointment.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AdminDoctorComponent } from './modules/admin/admin-doctor/admin-doctor.component';
import { AdminPatientComponent } from './modules/admin/admin-patient/admin-patient.component';
import { AdminPaymentComponent } from './modules/admin/admin-payment/admin-payment.component';
import { AdminDepartmentComponent } from './modules/admin/admin-department/admin-department.component';
import { AdminFeedbackComponent } from './modules/admin/admin-feedback/admin-feedback.component';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { AdminSimulatorComponent } from './modules/admin/admin-simulator/admin-simulator.component';
import { AdminNewDoctorComponent } from './modules/admin/admin-new-doctor/admin-new-doctor.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { LoginComponent } from './modules/login/login.component';
import { DoctorAppointmentComponent } from './modules/doctor/doctor-appointment/doctor-appointment.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DoctorPaymentComponent } from './modules/doctor/doctor-payment/doctor-payment.component';
import { DoctorNewPaymentComponent } from './modules/doctor/doctor-new-payment/doctor-new-payment.component';
import { UserHomeComponent } from './modules/user/user-home/user-home.component';
import { NavbarUserComponent } from './shared/navbar-user/navbar-user.component';
import { FooterUserComponent } from './shared/footer-user/footer-user.component';
import { UserAboutComponent } from './modules/user/user-about/user-about.component';
import { UserStaffComponent } from './modules/user/user-staff/user-staff.component';
import { UserDepartmentComponent } from './modules/user/user-department/user-department.component';
import { UserAppointmentComponent } from './modules/user/user-appointment/user-appointment.component';
import { UserFeedbackComponent } from './modules/user/user-feedback/user-feedback.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminDoctorUpdateComponent } from './modules/admin/admin-doctor-update/admin-doctor-update.component';
import { AdminDruptadeComponent } from './modules/admin/admin-druptade/admin-druptade.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    AdminHomeComponent,
    AdminAppointmentComponent,
    NotFoundComponent,
    NavbarComponent,
    AdminDoctorComponent,
    AdminPatientComponent,
    AdminPaymentComponent,
    AdminDepartmentComponent,
    AdminFeedbackComponent,
    AdminSimulatorComponent,
    AdminNewDoctorComponent,
    LoginComponent,
    DoctorAppointmentComponent,
    DoctorPaymentComponent,
    DoctorNewPaymentComponent,
    UserHomeComponent,
    NavbarUserComponent,
    FooterUserComponent,
    UserAboutComponent,
    UserStaffComponent,
    UserDepartmentComponent,
    UserAppointmentComponent,
    UserFeedbackComponent,
    AdminDoctorUpdateComponent,
    AdminDruptadeComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CanvasJSAngularChartsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
