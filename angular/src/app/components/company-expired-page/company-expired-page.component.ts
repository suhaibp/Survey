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
          // this.routes.navigate(['/clogin']);
        }, 4000);
      }
      else{
        this._flashMessagesService.show('Error...', { cssClass: 'alert-danger', timeout: 4000 });
        setTimeout(() => {  
          // this.routes.navigate(['/expired']);
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
