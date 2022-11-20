import { Component, OnInit } from '@angular/core';
import {TableRows, Employee} from './customer-data';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  trow:TableRows[];

  constructor() {
    this.trow=Employee;
  }

  ngOnInit(): void {
  }

}