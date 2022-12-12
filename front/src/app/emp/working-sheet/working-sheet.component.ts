import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-working-sheet',
  templateUrl: './working-sheet.component.html',
  styleUrls: ['./working-sheet.component.scss']
})
export class WorkingSheetComponent implements OnInit {

  hide = false;

  constructor(private _router: Router, private toast: NgToastService) { }

  ngOnInit(): void {
  }

  hideThis(){
    this.openSuccess("Done")
  }

  openSuccess(msg: string){
    this.toast.success({detail:'Success',summary:msg, position:'tr', duration:5000})
    this._router.navigate(['/emp/dashboard']);
  }

  openError(err: string){
    this.toast.error({detail:'Error',summary:err, position:'tr', duration:5000})
  }

}
