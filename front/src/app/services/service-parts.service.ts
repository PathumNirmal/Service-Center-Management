import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicePartsService {

  constructor(private webReqService: WebRequestService, private _router: Router) { }

  // getParts(): any{
  //   return this.webReqService.get('service_part');
  // }
}
