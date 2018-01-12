import { Component, OnInit } from '@angular/core';
import { CompanyService} from './../../services/company.service';
import { CanActivate, Router } from '@angular/router';

@Component({
  selector: 'app-company-topbar',
  templateUrl: './company-topbar.component.html',
  styleUrls: ['./company-topbar.component.css']
})
export class CompanyTopbarComponent implements OnInit {

  constructor(private companyService : CompanyService, private routes: Router,) { }

  ngOnInit() {
  }

// ---------------------------------Start-------------------------------------------
// Function      : Logout
// Params        : 
// Returns       : 
// Author        : Rinsha
// Date          : 04-1-2018
// Last Modified : 04-1-2018, Rinsha
// Desc          : 
logout(){
  this.companyService.logout();
  this.routes.navigate(['/clogin']);
  return false;
}
// -----------------------------------End------------------------------------------

}
