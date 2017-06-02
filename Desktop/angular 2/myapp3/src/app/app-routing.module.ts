import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './layout/login.component';
import { ContextComponent } from './layout/context.component';
import { ForgotComponent } from './layout/forgot.component';
import { SignupComponent } from './layout/signup.component';
import { AdminDashboardComponent } from './inner_layout/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './inner_layout/user-dashboard/user-dashboard.component';

const routes: Routes = [
	{path: '', component: LoginComponent},
 	{path: 'about', component: ContextComponent},
 	{path: 'help', component: ContextComponent},
 	{path: 'home', component: LoginComponent},
 	{path: 'forgot', component: ForgotComponent},
 	{path: 'signup', component: SignupComponent}
]


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
  	RouterModule
  ]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, ContextComponent, ForgotComponent, SignupComponent, AdminDashboardComponent, UserDashboardComponent]
