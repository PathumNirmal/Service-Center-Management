import { Routes } from '@angular/router';
import { NgbdpaginationBasicComponent } from './pagination/pagination.component';
import { NgbdAlertBasicComponent } from './alert/alert.component';

import { NgbdDropdownBasicComponent } from './dropdown-collapse/dropdown-collapse.component';
import { NgbdnavBasicComponent } from './nav/nav.component';
import { BadgeComponent } from './badge/badge.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './card/card.component';
import { TableComponent } from './table/table.component';
import { EmployeeComponent } from './employee/employee.component';
import { CustomerComponent } from './customer/customer.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { BookingComponent } from './booking/booking.component';
import { CustomerVehicleComponent } from './customer-vehicle/customer-vehicle.component';
import { StoreComponent } from './store/store.component';


export const ComponentsRoutes: Routes = [
	{
		path: '',
		children: [
			{
				path: 'table',
				component: TableComponent
			},
			{
				path: 'card',
				component: CardsComponent
			},
			{
				path: 'pagination',
				component: NgbdpaginationBasicComponent
			},
			{
				path: 'badges',
				component: BadgeComponent
			},
			{
				path: 'alert',
				component: NgbdAlertBasicComponent
			},
			{
				path: 'dropdown',
				component: NgbdDropdownBasicComponent
			},
			{
				path: 'nav',
				component: NgbdnavBasicComponent
			},
			{
				path: 'employee',
				component: EmployeeComponent
			},
			{
				path: 'customer',
				component: CustomerComponent
			},
			{
				path: 'vehicle',
				component: VehicleComponent
			},
			{
				path: 'booking',
				component: BookingComponent
			},
			{
				path: 'card',
				component: CardsComponent
			},
			{
				path: 'customer_vehicles',
				component: CustomerVehicleComponent
			},
			{
				path: 'buttons',
				component: ButtonsComponent
			}
		]
	}
];
