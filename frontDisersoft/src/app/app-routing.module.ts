import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddEditMaintenanceComponent } from './components/add-edit-maintenance/add-edit-maintenance.component';
import { MaintenanceListComponent } from './components/maintenance-list/maintenance-list.component';
import { ViewMaintenanceComponent } from './components/view-maintenance/view-maintenance.component';

const routes: Routes = [
  { path: '', component: MaintenanceListComponent },
  { path: 'add', component: AddEditMaintenanceComponent },
  { path: 'edit/:id', component: AddEditMaintenanceComponent },
  { path: 'view/:id', component: ViewMaintenanceComponent },
  { path: '**', redirectTo: '',pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
