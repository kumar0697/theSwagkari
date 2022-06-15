import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LeadsFormComponent } from './leads-form/leads-form.component';
import { LeadsComponent } from './leads/leads.component';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path:'login',component:LoginComponent },
      { path:'reset-password',component:ResetPasswordComponent },
      { path:'forgot-password',component:ForgotPasswordComponent },
      { path:'signup',component:SignupComponent },
      { path:'dashboard',component:DashboardComponent},
      { path:'leads-form',component:LeadsFormComponent},
      { path:'leads',component:LeadsComponent},
      { path:'', redirectTo:'login' ,pathMatch: 'full'},
      
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
