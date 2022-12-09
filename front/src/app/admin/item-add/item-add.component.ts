import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { VehicleService } from '../../services/vehicle.service';

@Component({
  selector: 'app-item-add',
  templateUrl: './item-add.component.html',
  styleUrls: ['./item-add.component.scss']
})
export class ItemAddComponent implements OnInit {

  itemData = {type:'', brand:'', identification_no:'', unit:'', price:''}

  constructor(private _vehicleService: VehicleService, private _router: Router, private toast: NgToastService) { }

  ngOnInit(): void {
  }

  addItem() {
    //console.log(this.registerUserData)
    this._vehicleService.addItem(this.itemData)
      .subscribe(
        {
          next: (v) => {
            console.log(v)
            this.openSuccess("Item added")
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
