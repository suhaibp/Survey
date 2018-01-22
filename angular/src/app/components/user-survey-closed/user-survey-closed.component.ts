import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute, Params} from '@angular/router';
import { UserService } from './../../services/user.service';
import { CompanyService } from './../../services/company.service';
import {Config} from '../../config/config';
declare var $:any;
@Component({
  selector: 'app-user-survey-closed',
  templateUrl: './user-survey-closed.component.html',
  styleUrls: ['./user-survey-closed.component.css'],
  inputs: ['survey', 'attended']
})
export class UserSurveyClosedComponent implements OnInit {
  survey: any;
  themeId: any;
  theme: any;
  surveyId: any;
  disp:any;
  gotSurvey= false;
  serviceUrl :string;
  userIdx:any;
  attended:any;
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
console.log("asx");


    this.getSurvey();
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
  console.log(this.themeId)
  
  this._companyService.getTheme(this.themeId).subscribe(theme =>{
    console.log(theme);
    if(theme.status&&theme.status == 0){ //404 not found
    }
    else{
      this.disp = true;
      this.theme = theme;
    }
    
  });

  }
//  ---------------------------------end-----------------------------------------------


    //  ---------------------------------Start-------------------------------------------
  // Function      : getSurvey
  // Params        : 
  // Returns       : 
  // Author        : Manu Prasad
  // Date          : 4-1-2018
  // Last Modified : 4-1-2018, Manu Prasad 
  // Desc          : Get Survey to be displayed for the user


  getSurvey(){
    
    this._activatedRoute.params.subscribe((params: Params) => {
      this.surveyId = params['id'];
      
    });
    this._userService.getNotRunningSurvey(this.surveyId).subscribe(survey =>{
      if(!survey.status){
        console.log(survey);

        this.survey = survey;
        this.themeId = this.survey.theme;      
        this.gotSurvey = true;
      this.getTheme();    
    
      }
      else{
        // redirect to not found page
      }
    });
  
    }
  //  ---------------------------------end-----------------------------------------------
  


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
  console.log(this.userIdx);
  console.log(surveyIdx);
  this.routes.navigate(['/user-login',this.userIdx,surveyIdx]);
  
  return false;
}
// -----------------------------------End------------------------------------------
}
