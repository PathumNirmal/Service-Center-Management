import { Component, OnInit } from '@angular/core';
import {TableRows, Employee} from './booking-data';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  trow:TableRows[];

  constructor() {
    this.trow=Employee;
  }

  ngOnInit(): void {
  }

}