import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { NgToastService } from 'ng-angular-popup';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  customers: any;
  test: any;

  constructor(private userService: UserService, private _router: Router, private toast: NgToastService) {
    // this.trow=Employee;
  }

  ngOnInit(): void { 
    this.userService.getCustomers().subscribe((customers: any) => {
      this.test = customers;
      this.customers = this.test.customers;
    })
  }

  deleteCustomer(cusId: string){
    this.userService.deleteCustomer(cusId)
      .subscribe({
        next: (res: any) => {
          console.log(res);
          this.openSuccess("Customer Deleted");
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