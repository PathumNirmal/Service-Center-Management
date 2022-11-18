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