import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  CommonModule, LocationStrategy,
  PathLocationStrategy
} from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgToastModule} from 'ng-angular-popup';

import { FullComponent } from './layouts/full/full.component';

import { NavigationComponent } from './shared/header/navigation.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

import { Approutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpinnerComponent } from './shared/spinner.component';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { WebsiteComponent } from './website/website.component';
import { LoginComponent } from './login/login.component';
import { Full1Component } from './emp/layouts/full1/full1.component';
import { Sidebar1Component } from './emp/shared/sidebar1/sidebar1.component';
import { Navigation1Component } from './emp/shared/navigation1/navigation1.component';
import { Full2Component } from './user/layouts/full2/full2.component';
import { Sidebar2Component } from './user/shared/sidebar2/sidebar2.component';
import { Navigation2Component } from './user/shared/navigation2/navigation2.component';
import { EmployeeAddComponent } from './admin/employee-add/employee-add.component';
import { ServiceComponent } from './service/service.component';
import { VehicleAddComponent } from './admin/vehicle-add/vehicle-add.component';
import { ServiceHistoryComponent } from './user/service-history/service-history.component';
import { InvoiceListComponent } from './user/invoice-list/invoice-list.component';
import { AppointmentComponent } from './user/appointment/appointment.component';
import { ItemAddComponent } from './admin/item-add/item-add.component';
import { WorkingSheetComponent } from './emp/working-sheet/working-sheet.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelSpeed: 1,
  wheelPropagation: true,
  minScrollbarLength: 20
};

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    FullComponent,
    NavigationComponent,
    SidebarComponent,
    WebsiteComponent,
    LoginComponent,
    Full1Component,
    Sidebar1Component,
    Navigation1Component,
    Full2Component,
    Sidebar2Component,
    Navigation2Component,
    EmployeeAddComponent,
    ServiceComponent,
    VehicleAddComponent,
    ServiceHistoryComponent,
    InvoiceListComponent,
    AppointmentComponent,
    ItemAddComponent,
    WorkingSheetComponent,
  ],
  imports: [
    NgToastModule,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot(Approutes, { useHash: false, relativeLinkResolution: 'legacy' }),
    PerfectScrollbarModule,
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    },
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
