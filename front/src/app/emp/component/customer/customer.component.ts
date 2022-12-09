import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  customers: any;
  test: any;

  constructor(private userService: UserService, private _router: Router, private toast: NgToastService) { }

  ngOnInit(): void {
    this.userService.getCustomers().subscribe((customers: any) => {
      this.test = customers;
      this.customers = this.test.customers;
    })
  }

}