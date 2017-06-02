import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

const routes: Routes = [
 	{path: 'userDashboard', component: UserDashboardComponent},
 	{path: 'adminDashboard', component: AdminDashboardComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
  	RouterModule
  ]
})
export class InnerappRoutingModule { }
export const innerroutingComponents = [UserDashboardComponent, AdminDashboardComponent]
