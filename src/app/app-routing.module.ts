import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './modules/admin/admin-home/admin-home.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { AdminAppointmentComponent } from './modules/admin/admin-appointment/admin-appointment.component';

const routes: Routes = [
  {path: 'adminhome', component: AdminHomeComponent},
  {path: 'adminappointment', component: AdminAppointmentComponent},

  {path: '**', component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
