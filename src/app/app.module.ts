import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BsDropdownModule} from 'ngx-bootstrap/dropdown';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SignupComponent } from './signup/signup.component';
import { RoutesComponent } from './routes/routes.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { JwtComponent } from './jwt/jwt.component';
import { ProfileComponent } from './profile/profile.component';
import { ReportComponent } from './report/report.component';
import { SettingComponent } from './setting/setting.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LeadsComponent } from './leads/leads.component';
import { LeadsFormComponent } from './leads-form/leads-form.component';
import { LeadsService } from './services/leads.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    SignupComponent,
    RoutesComponent,
    ResetPasswordComponent,
    JwtComponent,
    ProfileComponent,
    ReportComponent,
    SettingComponent,
    DashboardComponent,
    LeadsComponent,
    LeadsFormComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    TooltipModule.forRoot(),
    AccordionModule.forRoot(),
    BsDropdownModule.forRoot(),
    RouterModule,
    BrowserAnimationsModule
  ],
  providers: [ LeadsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
