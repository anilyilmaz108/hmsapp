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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CanvasJSAngularChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
