import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { WebRequestService } from './web-request.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, tap } from 'rxjs';
import { UserLoginModel } from '../models/user-login.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private webReqService: WebRequestService, private _router: Router) { }

  addVehicle(data: any) {
    return this.webReqService.post(`customer_vehicle/add`, data);
  }
}
