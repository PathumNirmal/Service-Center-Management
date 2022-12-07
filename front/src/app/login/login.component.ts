import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginUserData = { email: '', password: ''}
  registerUserData = { nic:'', name:'', phone:'', address:'', email:'', password:'', role:'user'}

  // isError = false;
  // isAlert = false;
  // message = "";

  isAlert = false;
  alert = {type: '', message: ''};

  constructor(private _auth: UserService, private _router: Router) { }

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
          this.isAlert = true
          this.alert.message = err.error.message,
          this.alert.type = "danger"
        },
        complete: () => console.info('complete')
      })
    }

  registerUser(){
    this._auth.registerUser(this.registerUserData)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.isAlert = true
          this.alert.message = "Registration successful. Please Login",
          this.alert.type = "success"
      },
      error: (err) => {
        this.isAlert = true
        this.alert.message = err.error.message,
        this.alert.type = "danger"
      },
      complete: () => {
        console.info('complete')
      }
    })
  }
}
