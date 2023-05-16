import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertyListComponent } from './components/property-list/property-list.component';
import { Property } from './models/property.model';
import { PropertyFormComponent } from './components/property-form/property-form.component';
import { AdminListComponent } from './components/admin-list/admin-list.component';

const routes: Routes = [
  { path: '', component: PropertyListComponent },
  { path: 'admin', component: AdminListComponent },
  { path: 'add-new', component: PropertyFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
