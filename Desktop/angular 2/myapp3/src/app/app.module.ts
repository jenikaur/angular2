import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { routingComponents } from './app-routing.module';
import { InnerappRoutingModule } from './inner_layout/innerapp-routing.module';
import { innerroutingComponents } from './inner_layout/innerapp-routing.module';


import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header.component';
import { FooterComponent } from './layout/footer.component';
import { AdminDashboardComponent } from './inner_layout/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './inner_layout/user-dashboard/user-dashboard.component';
import { InnerLayoutComponent } from './inner_layout/inner-layout.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    routingComponents,
    innerroutingComponents,
    AdminDashboardComponent,
    UserDashboardComponent,
    InnerLayoutComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AppRoutingModule,
    InnerappRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
