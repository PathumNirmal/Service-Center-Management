import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private webReqService: WebRequestService, private _router: Router) { }

  addVehicle(vehicle: any) {
    return this.webReqService.post(`vehicles`, vehicle);
  }

  getVehicles() {
    return this.webReqService.get(`vehicles`);
  }

  addItem(item: any) {
    return this.webReqService.post(`service_part/add`, item);
  }
}
