import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.scss']
})
export class EmployeeAddComponent implements OnInit {

  registerUserData = {nic:'', name:'', phone:'', address:'', email:'', password:'emp@123', role:'employee'}

  constructor(private _user: UserService, private _router: Router, private toast: NgToastService) { }

  ngOnInit(): void {
  }

  addEmployee() {
    //console.log(this.registerUserData)
    this._user.addEmployee(this.registerUserData)
      .subscribe(
        {
          next: (v) => {
            console.log(v)
            this.openSuccess("Employee added")
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
