import { Component, OnInit } from '@angular/core';
import {TableRows, Employee} from './store-data';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
  trow:TableRows[];

  constructor() { 
    this.trow=Employee;}

  ngOnInit(): void {
  }

}