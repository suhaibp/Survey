import { Component, OnInit } from '@angular/core';
import { CompanyService} from './../../services/company.service';
import { CanActivate, Router } from '@angular/router';

@Component({
  selector: 'company-login',
  templateUrl: './company-login.component.html',
  styleUrls: ['./company-login.component.css']
})
export class CompanyLoginComponent implements OnInit {
  btnDisbled:boolean = false;
  msg : any;
  newLogin = {
    contact_person_email : '',
    password : '',
  }

  constructor(private companyService : CompanyService, private routes: Router) { }

  ngOnInit() {
  }

// ---------------------------------Start-------------------------------------------
// Function      : Login
// Params        : username and password
// Returns       : token, company details and company status
// Author        : Rinsha
// Date          : 01-1-2018
// Last Modified : 01-1-2018, Rinsha
// Desc          : CHeck whether company is expired. If expired, it redirect to expired page, otherwise dashboard
  login(){
  this.btnDisbled = true;
  console.log(this.newLogin);
  this.companyService.authenticateCompany(this.newLogin).subscribe(data => {
    if(data.success){
      this.btnDisbled = false;
      if(data.company.status == "Expired"){
         var json = data.company;
         var key = "status";
         delete json[key];
         this.companyService.storeUserData(data.token, data.company);
         this.routes.navigate(['/expired']);
      }
      else{
         var json = data.company;
         var key = "status";
         delete json[key];
         this.companyService.storeUserData(data.token, data.company);
         this.routes.navigate(['/creg']);
      }
    } else {
      this.btnDisbled = false;
      this.msg = data.msg;
    }
  });
  }
// -----------------------------------End------------------------------------------

}
