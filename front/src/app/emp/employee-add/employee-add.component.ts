import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.scss']
})
export class EmployeeAddComponent implements OnInit {

  registerUserData = {nic:'', name:'', phone:'', address:'', email:'', password:'emp@123', role:'employee'}

  constructor(private _user: UserService, private _router: Router) { }

  ngOnInit(): void {
  }

  registerUser() {
    //console.log(this.registerUserData)
    this._user.registerUser(this.registerUserData)
      .subscribe(
        {
          next: (v) => {
            console.log(v)
            this._router.navigate(['/admin'])
          },
          error: (e) => console.error(e),
        }
      )
  }
}
