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
// ---------------------------------Start-------------------------------------------
// Function      : get logged company details
// Params        : 
// Returns       : company details
// Author        : Rinsha
// Date          : 16-1-2018
// Last Modified : 16-1-2018, Rinsha
// Desc          :
this.companyService.getLoggedUSerDetails().subscribe(info =>{
  if(info.role == "admin"){
    this.routes.navigate(['/admin-dashboard']);
  }
  if(info.role == "user"){
    if(info.delete_status == true || info.block_status == true){
      this.routes.navigate(['/404']); 
    }
    this.routes.navigate(['/survey', info.surveyId]); 
  }
  if(info.role == "company"){
    if(info.delete_status == true || info.block_status == true || info.cmp_status == "Not Verified"){
      this.routes.navigate(['/clogin']); 
    }
    if(info.cmp_status == "Expired"){
      this.routes.navigate(['/expired']);
    }
    if(info.is_profile_completed == false){
      this.routes.navigate(['/additnInfo', info._id]);
    }
    this.routes.navigate(['/dashboard']);
  }
});
// ---------------------------------End-------------------------------------------
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
