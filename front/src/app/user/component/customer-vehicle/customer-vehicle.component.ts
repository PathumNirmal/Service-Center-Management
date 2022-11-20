import { Component, OnInit } from '@angular/core';
import {TableRows, Employee} from './customer_vehicle-data';

@Component({
  selector: 'app-customer-vehicle',
  templateUrl: './customer-vehicle.component.html',
  styleUrls: ['./customer-vehicle.component.scss']
})
export class CustomerVehicleComponent implements OnInit {
  trow:TableRows[];

  constructor() {
    this.trow=Employee;
  }

  ngOnInit(): void {
  }

}