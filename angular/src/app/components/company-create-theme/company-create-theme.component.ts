import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-create-theme',
  templateUrl: './company-create-theme.component.html',
  styleUrls: ['./company-create-theme.component.css']
})
export class CompanyCreateThemeComponent implements OnInit {

  viewComp = "list"
  constructor() { }

  ngOnInit() {
  }
// ---------------------------------Start-------------------------------------------
// Function      : updateView()
// Params        : name of the view to be shown
// Returns       : 
// Author        : Manu Prasad
// Date          : 28-12-2017
// Last Modified : 28-12-2017, Manu Prasad, Desc:
// Desc          : hide or show the components - manage/create
  updateView(content){
    this.viewComp = content;
  }
// ----------------------------------End-------------------------------------------

}
