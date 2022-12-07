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
export class UserService {

  user: any;

  constructor( private webReqService: WebRequestService, private _router: Router ) { }

  registerUser(user: any) {
    return this.webReqService.post(`customer/signup`, user);
  }

  loginUser(user: any) {
    return this.webReqService.post(`customer/login`, user).pipe(
      tap((response: any) => {
        this.user = this.getUser(response.token);
      })
    );
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  logoutUser() {
    localStorage.removeItem('token');
    this._router.navigate([ '/products' ]);
  }

  getToken(): any {
    return localStorage.getItem('token');
  }

  private getUser(token: string): UserLoginModel | null {
    if (!token) {
      return null
    }
    return JSON.parse(atob(token.split('.')[1])) as UserLoginModel;
  }

  refresh(): void {
    window.location.reload();
  }
}

