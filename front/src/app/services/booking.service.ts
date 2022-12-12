import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { WebRequestService } from './web-request.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor( private webReqService: WebRequestService, private _router: Router ) { }

  addBooking(booking: any) {
    return this.webReqService.post(`booking`, booking);
  }

  getBookings(){
    return this.webReqService.get(`booking/count`);
  }
}

