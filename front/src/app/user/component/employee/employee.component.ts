import { Component, OnInit } from '@angular/core';
import {TableRows, Employee} from './employee-data';

@Component({
  selector: 'app-employee',
  templateUrl: 'employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  trow:TableRows[];

  constructor() {
    this.trow=Employee;
  }

  ngOnInit(): void { 
  }

}