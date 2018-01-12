import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin-header-title',
  templateUrl: './admin-header-title.component.html',
  styleUrls: ['./admin-header-title.component.css'],
  inputs : ['title']
})
// ---------------------------------Start-------------------------------------------
// Function      : AdminHeaderTitle
// Params        : 
// Returns       : 
// Author        : sudha
// Date          : 29-12-2017
// Last Modified : 
// Desc          : AdminHeaderTitle
// -----------------------------------
export class AdminHeaderTitleComponent implements OnInit {
  private title:String;
  constructor() { }

  ngOnInit() {
  }

}
