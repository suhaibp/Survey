import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'admin-side-bar',
  templateUrl: './admin-side-bar.component.html',
  styleUrls: ['./admin-side-bar.component.css'],
  inputs:['open']
})
export class AdminSideBarComponent implements OnInit {

  open: any;
  constructor() { }

  ngOnInit() {
    
  }

}
