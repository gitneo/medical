import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { Password } from './authentication/password-reset/password.component';
import { SignUpComponent } from './authentication/signup/sign-up.compoennt';
import { DashboardComponent } from './shared/dashboard/dashboard.component';
import { LoginComponent } from './shared/login/login.component';


const appRoutes :Routes = [
  {path: '', component:LoginComponent},
  {path: 'password-reset', component:Password},
  {path: 'sign-up', component:SignUpComponent},
  {path: 'dashboard', component:DashboardComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    Password,
    SignUpComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
