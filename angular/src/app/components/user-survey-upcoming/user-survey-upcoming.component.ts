import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute, Params} from '@angular/router';
import { UserService } from './../../services/user.service';
import { CompanyService } from './../../services/company.service';
import {Config} from '../../config/config';

@Component({
  selector: 'app-user-survey-upcoming',
  templateUrl: './user-survey-upcoming.component.html',
  styleUrls: ['./user-survey-upcoming.component.css'],
  inputs: ['countTime','survey']
})
export class UserSurveyUpcomingComponent implements OnInit {

  time:any;
  survey: any;
  themeId: any;
  theme: any;
  disp = false;
  starsCount: number;
  serviceUrl :string;
  userIdx:any;
  constructor(private _activatedRoute: ActivatedRoute,
    private _userService: UserService,
    private _companyService: CompanyService,
    private routes: Router,private config: Config,private route: ActivatedRoute) {
      this.serviceUrl = config.siteUrl + '/company/';
     }

  ngOnInit() {
// ---------------------------------Start-------------------------------------------
// Function      : get logged user details
// Params        : 
// Returns       : user details
// Author        : Rinsha
// Date          : 16-1-2018
// Last Modified : 16-1-2018, Rinsha
// Desc          :
this._userService.getLoggedUSerDetails().subscribe(info =>{
  if(info == null || info == ''){
    this.routes.navigate(['/404']); 
  }
  this.userIdx = info._id;
  if(info.role == "admin"){
    this.routes.navigate(['/admin-dashboard']);
  }
  if(info.role == "user"){
    if(info.delete_status == true || info.block_status == true){
      this.routes.navigate(['/404']); 
    }
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
    console.log(this.survey.theme);
    this.themeId = this.survey.theme;
    this.getTheme();
  }



  //  ---------------------------------Start-------------------------------------------
  // Function      : getTheme
  // Params        : 
  // Returns       : 
  // Author        : Manu Prasad
  // Date          : 5-1-2018
  // Last Modified : 5-1-2018, Manu Prasad 
  // Desc          : Get Theme details using id from parameter in router from database


getTheme(){
  
  
  this._companyService.getTheme(this.themeId).subscribe(theme =>{
    console.log(theme);
    if(theme.status == 0){
    }
    else{
      this.disp = true;
      this.theme = theme;
    }
    
  });

  }
//  ---------------------------------end-----------------------------------------------
timeOver(){
  window.location.reload();
}


// ---------------------------------Start-------------------------------------------
// Function      : Logout
// Params        : 
// Returns       : 
// Author        : Rinsha
// Date          : 03-1-2018
// Last Modified : 03-1-2018, Rinsha
// Desc          : 
logout(){
  let surveyIdx:any
  this.route.params.subscribe(params => {
    surveyIdx = params['id'];
 });
 
 
  this._userService.logout();
  this.routes.navigate(['/user-login', this.userIdx,surveyIdx]);
  
  return false;
}
// -----------------------------------End------------------------------------------
}
