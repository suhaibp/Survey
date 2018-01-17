import { Component, OnInit } from '@angular/core';
import { CompanyService} from './../../services/company.service';
import { CanActivate, Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'company-expired-page',
  templateUrl: './company-expired-page.component.html',
  styleUrls: ['./company-expired-page.component.css']
})
export class CompanyExpiredPageComponent implements OnInit {

  constructor(private companyService : CompanyService, private routes: Router, private _flashMessagesService: FlashMessagesService) { }

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
  }
});
// ---------------------------------End-------------------------------------------
  }

// ---------------------------------Start-------------------------------------------
// Function      : Subscribe
// Params        : 
// Returns       : 
// Author        : Rinsha
// Date          : 03-1-2018
// Last Modified : 03-1-2018, Rinsha
// Desc          : If the trial period of company expired, they can subscribe the app by clicking subscribe button
  subscribe(){
    this.companyService.subscribeCompany().subscribe(data => {
      if(data.success){
        this._flashMessagesService.show('Success...', { cssClass: 'alert-success', timeout: 4000 });
        setTimeout(() => {  
          this.routes.navigate(['/dashboard']);
        }, 4000);
      }
      else{
        this._flashMessagesService.show('Error...', { cssClass: 'alert-danger', timeout: 4000 });
        setTimeout(() => {  
          this.routes.navigate(['/expired']);
        }, 4000);
      }
    });
  }
// -----------------------------------End------------------------------------------

// ---------------------------------Start-------------------------------------------
// Function      : Logout
// Params        : 
// Returns       : 
// Author        : Rinsha
// Date          : 03-1-2018
// Last Modified : 03-1-2018, Rinsha
// Desc          : 
  logout(){
    this.companyService.logout();
    this.routes.navigate(['/clogin']);
    return false;
  }
// -----------------------------------End------------------------------------------
}
