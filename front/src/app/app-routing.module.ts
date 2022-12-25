import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { LoginComponent } from './login/login.component';
import { WebsiteComponent } from './website/website.component';
import { Full1Component } from './emp/layouts/full1/full1.component';
import { Full2Component } from './user/layouts/full2/full2.component';
import { EmployeeAddComponent } from './admin/employee-add/employee-add.component';
import { ServiceComponent } from './service/service.component';
import { VehicleAddComponent } from './admin/vehicle-add/vehicle-add.component';
import { ServiceHistoryComponent } from './user/service-history/service-history.component';
import { InvoiceListComponent } from './user/invoice-list/invoice-list.component';
import { ItemAddComponent } from './admin/item-add/item-add.component';
import { AppointmentComponent } from './user/appointment/appointment.component';
import { WorkingSheetComponent } from './emp/working-sheet/working-sheet.component';


export const Approutes: Routes = [
  
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: WebsiteComponent},
  { path: 'login', component: LoginComponent},
  { path: 'service', component: ServiceComponent},
  {
    path: 'admin',
    component: FullComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'component',
        loadChildren: () => import('./component/component.module').then(m => m.ComponentsModule)
      }
    ]
  },
  { path: 'admin/add-emp', component: EmployeeAddComponent},
  { path: 'admin/add-vehicle', component: VehicleAddComponent},
  { path: 'admin/add-item', component: ItemAddComponent},
  {
    path: 'emp',
    component: Full1Component,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadChildren: () => import('./emp/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'component',
        loadChildren: () => import('./emp/component/component.module').then(m => m.ComponentsModule)
      }
    ]
  },
  { path: 'emp/servicePlan', component: WorkingSheetComponent},
  {
    path: 'u',
    component: Full2Component,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadChildren: () => import('./user/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'component',
        loadChildren: () => import('./user/component/component.module').then(m => m.ComponentsModule)
      }
    ]
  },
  { path: 'u/service-history', component: ServiceHistoryComponent},
  { path: 'u/allInvoices', component: InvoiceListComponent},
  { path: 'u/appointment', component: AppointmentComponent},
  {
    path: '**',
    redirectTo: '/starter'
  }
];
