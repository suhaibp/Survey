import { Component, OnInit } from '@angular/core';
import { CompanyService} from './../../services/company.service';
import { CanActivate, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-company-create-theme',
  templateUrl: './company-create-theme.component.html',
  styleUrls: ['./company-create-theme.component.css']
})
export class CompanyCreateThemeComponent implements OnInit {

  viewComp = "list"
  showSpinner :Boolean = false
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
  if(info == null || info == ''){
    this.routes.navigate(['/clogin']); 
  }
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
