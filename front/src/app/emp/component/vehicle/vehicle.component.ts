import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { VehicleService } from '../../../services/vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent implements OnInit {
  vehicles: any;
  test: any;

  constructor(private _vehicle: VehicleService, private _router: Router, private toast: NgToastService) { }

  ngOnInit(): void {
    this._vehicle.getVehicles().subscribe((vehicles: any) => {
      this.test = vehicles;
      this.vehicles = this.test.vehicles;
    })
  }

}