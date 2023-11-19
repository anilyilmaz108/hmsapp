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

const routes: Routes = [
  {path: 'adminhome', component: AdminHomeComponent},
  {path: 'adminappointment', component: AdminAppointmentComponent},
  {path: 'admindoctor', component: AdminDoctorComponent},
  {path: 'adminpatient', component: AdminPatientComponent},
  {path: 'adminpayment', component: AdminPaymentComponent},
  {path: 'admindepartment', component: AdminDepartmentComponent},
  {path: 'adminfeedback', component: AdminFeedbackComponent},
  {path: 'adminsimulator', component: AdminSimulatorComponent},

  {path: '**', component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
