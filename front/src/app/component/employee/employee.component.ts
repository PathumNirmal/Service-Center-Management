import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { NgToastService } from 'ng-angular-popup';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: 'employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  employees: any;
  test: any;

  constructor(private userService: UserService, private _router: Router, private toast: NgToastService) {
  }

  ngOnInit(): void { 
    this.userService.getEmployees().subscribe((employees: any) => {
      this.test = employees;
      this.employees = this.test.users;
    })
  }

  deleteEmployee(empId: string){
    this.userService.deleteEmployee(empId)
      .subscribe({
        next: (res: any) => {
          console.log(res);
          this.openSuccess("Employee Deleted");
          window.location.reload();
      },
      error: (err: any) => {
        this.openError(err.error.message)
      },
      complete: () => {
        console.info('complete')
      }
    })
  }

  openSuccess(msg: string){
    this.toast.success({detail:'Success',summary:msg, position:'tr', duration:5000})
    // this._router.navigate(['/']);
  }

  openError(err: string){
    this.toast.error({detail:'Error',summary:err, position:'tr', duration:5000})
  }

}

// import { Component } from '@angular/core';
// import {Product,TopSelling, TableRows, Employee} from './table-data';


// @Component({
//     selector: 'app-table',
//     templateUrl: 'table.component.html'
// })
// export class TableComponent {
//   topSelling:Product[];

//   trow:TableRows[];

//   constructor() { 

//     this.topSelling=TopSelling;

//     this.trow=Employee;
//   }
// }