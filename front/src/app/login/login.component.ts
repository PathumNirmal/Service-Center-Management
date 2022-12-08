import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginUserData = { email: '', password: ''}
  registerUserData = { nic:'', name:'', phone:'', address:'', email:'', password:'', role:'user'}

  constructor(private _auth: UserService, private _router: Router, private toast: NgToastService) { }

  ngOnInit(): void {
  }

  public status = false;

  loginpage(){
    this.status = false;
  }

  regpage(){
    this.status = true;
  }

  loginUser() {
    // console.log(this.loginUserData)
    this._auth.loginUser(this.loginUserData)
      .subscribe({
        next: (res) => {
          console.log(res);
          localStorage.setItem('token', res.token);
          console.log(this._auth.user?.role);
          if (this._auth.user?.role === 'user') {
            this._router.navigate(['/u']);
          } else if (this._auth.user?.role === 'employee') {
            this._router.navigate(['/emp']);
          } else if (this._auth.user?.role === 'admin') {
            this._router.navigate(['/admin']);
          }
        },
        error: (err) => {
          this.openError(err.error.message)
        },
        complete: () => console.info('complete')
      })
    }

  registerUser(){
    this._auth.registerUser(this.registerUserData)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.openSuccess("Registration successful. Please Login")
      },
      error: (err) => {
        this.openError(err.error.message)
      },
      complete: () => {
        console.info('complete')
      }
    })
  }

  openSuccess(msg: string){
    this.toast.success({detail:'Success',summary:msg, position:'tr', duration:5000})
    // this._router.navigate(['/']);
  }

  openError(err: string){
    this.toast.error({detail:'Error',summary:err, position:'tr', duration:5000})
  }
}
