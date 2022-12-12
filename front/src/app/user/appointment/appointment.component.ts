import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { BookingService } from '../../services/booking.service';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {

  data = {date:'', time:'', status:'', full_service:false, under_wash:false, body_wash:false, vaccum:false, interior:false, engine_oil:false, brake_oil:false, gear_oil:false, oil_filter:false, fuel_filter:false, cabin_filter:false, air_filter:false, coolant:false, power_steering:false, battery_replace:false, wheel_balance:false, other:'', owner:'', vehicle:''}
  vehicle = {brand:'', model:'', vehicle_no:'', milage:'', manufacture_year:''}

  constructor(private _cusVehicle: CustomerService, private _booking: BookingService, private _router: Router, private toast: NgToastService) { }

  ngOnInit(): void {
  }

  addAppointment(){
    this.addVehicle();
    this._booking.addBooking(this.data)
      .subscribe(
        {
          next: (v) => {
            console.log(v)
            this.openSuccess("Appointment added")
          },
          error: (e) => {
            console.error(e),
            this.openError(e.error.message)
          }
        }
      )
  }

  addVehicle(){
    this._cusVehicle.addVehicle(this.vehicle)
      .subscribe(
        {
          next: (v) => {
            console.log(v)
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
    this._router.navigate(['/u/dashboard']);
  }

  openError(err: string){
    this.toast.error({detail:'Error',summary:err, position:'tr', duration:5000})
  }

}
