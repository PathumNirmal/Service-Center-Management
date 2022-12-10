import { Component, OnInit } from '@angular/core';
import {topcard,topcards} from './top-cards-data';
import { BookingService } from '../../../services/booking.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-cards',
  templateUrl: './top-cards.component.html'
})
export class TopCardsComponent implements OnInit {
  bookings = '';
  test = '';

  constructor(private _booking: BookingService, private _router: Router,) { 
  }
  topcards = [{bgcolor: 'info', icon: 'bi bi-wallet', title: '0', subtitle: 'Total booking'},{bgcolor: 'success', icon: 'bi bi-coin', title: '0', subtitle: 'Completed'},{bgcolor: 'warning', icon: 'bi bi-basket3', title: '0', subtitle: 'Pending'}];

  ngOnInit(): void {
    this._booking.getBookings().subscribe((bookings: any) => {
      this.test = bookings.count;
      // this.bookings = this.test.count;
    })
  }

}
