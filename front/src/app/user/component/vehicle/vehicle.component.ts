import { Component, OnInit } from '@angular/core';
import {TableRows, Employee} from './vehicle-data';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent implements OnInit {
  trow:TableRows[];

  constructor() {
    this.trow=Employee;
  }

  ngOnInit(): void {
  }

}