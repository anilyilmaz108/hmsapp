import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './modules/admin/admin-home/admin-home.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { AdminAppointmentComponent } from './modules/admin/admin-appointment/admin-appointment.component';
import { AdminDoctorComponent } from './modules/admin/admin-doctor/admin-doctor.component';
import { AdminPatientComponent } from './modules/admin/admin-patient/admin-patient.component';
import { AdminPaymentComponent } from './modules/admin/admin-payment/admin-payment.component';
import { AdminDepartmentComponent } from './modules/admin/admin-department/admin-department.component';
import { AdminFeedbackComponent } from './modules/admin/admin-feedback/admin-feedback.component';
import { AdminSimulatorComponent } from './modules/admin/admin-simulator/admin-simulator.component';
import { AdminNewDoctorComponent } from './modules/admin/admin-new-doctor/admin-new-doctor.component';
import { LoginComponent } from './modules/login/login.component';
import { DoctorAppointmentComponent } from './modules/doctor/doctor-appointment/doctor-appointment.component';
import { DoctorPaymentComponent } from './modules/doctor/doctor-payment/doctor-payment.component';
import { DoctorNewPaymentComponent } from './modules/doctor/doctor-new-payment/doctor-new-payment.component';
import { UserHomeComponent } from './modules/user/user-home/user-home.component';

const routes: Routes = [
  { path: '',   redirectTo: '/userhome', pathMatch: 'full' },
  {path: 'adminhome', component: AdminHomeComponent},
  {path: 'adminappointment', component: AdminAppointmentComponent},
  {path: 'admindoctor', component: AdminDoctorComponent},
  {path: 'adminpatient', component: AdminPatientComponent},
  {path: 'adminpayment', component: AdminPaymentComponent},
  {path: 'admindepartment', component: AdminDepartmentComponent},
  {path: 'adminfeedback', component: AdminFeedbackComponent},
  {path: 'adminsimulator', component: AdminSimulatorComponent},
  {path: 'adminnewdoctor', component: AdminNewDoctorComponent},
  {path: 'login', component: LoginComponent},
  {path: 'doctorappointment', component: DoctorAppointmentComponent},
  {path: 'doctorpayment', component: DoctorPaymentComponent},
  {path: 'doctornewpayment', component: DoctorNewPaymentComponent},
  {path: 'userhome', component: UserHomeComponent},



  {path: '**', component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
