import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-company',
  templateUrl: './admin-company.component.html',
  styleUrls: ['./admin-company.component.css']
})
export class AdminCompanyComponent implements OnInit {
  viewComp : string='AllCompanies';
  title : any;
  constructor() { }

  ngOnInit() {
    //this.viewComp = 'AllCompanies';
    //this.title = 'Allusers List';
    console.log(this.viewComp);
  }
updateView(page){
    this.viewComp = page;
    this.title = page + ' Users List';

  }
}
