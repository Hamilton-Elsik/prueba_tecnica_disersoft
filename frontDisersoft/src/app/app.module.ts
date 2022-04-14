import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { AddEditMaintenanceComponent } from './components/add-edit-maintenance/add-edit-maintenance.component';
import { MaintenanceListComponent } from './components/maintenance-list/maintenance-list.component';
import { ViewMaintenanceComponent } from './components/view-maintenance/view-maintenance.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddEditMaintenanceComponent,
    MaintenanceListComponent,
    ViewMaintenanceComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
