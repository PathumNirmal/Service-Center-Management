
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { VehicleService } from '../../services/vehicle.service';

@Component({
  selector: 'app-vehicle-add',
  templateUrl: './vehicle-add.component.html',
  styleUrls: ['./vehicle-add.component.scss']
})
export class VehicleAddComponent implements OnInit {

  vehicleData = {brand:'', model:'', manufacture_year:'', vehicle_type:'', fuel_type:''}

  constructor(private _vehicle: VehicleService, private _router: Router, private toast: NgToastService) { }

  ngOnInit(): void {
  }

  addVehicle() {
    //console.log(this.registerUserData)
    this._vehicle.addVehicle(this.vehicleData)
      .subscribe(
        {
          next: (v) => {
            console.log(v)
            this.openSuccess("Vehicle added")
          },
          error: (e) => {
            console.error(e),
            this.openError(e.error.message)
          }
        }
      )
  }

  openSuccess(msg: string){
    this.toast.success({detail:'Success',summary:msg, position:'tr', duration:5000})
    this._router.navigate(['/admin/dashboard']);
  }

  openError(err: string){
    this.toast.error({detail:'Error',summary:err, position:'tr', duration:5000})
  }
}



