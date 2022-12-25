import { Routes } from '@angular/router';
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
				path: 'parts',
				component: StoreComponent
			},
			{
				path: 'customer_vehicles',
				component: CustomerVehicleComponent
			},
		]
	}
];
