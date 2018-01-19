import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute, Params} from '@angular/router';
import { UserService } from './../../services/user.service';

@Component({
  selector: 'app-user-survey',
  templateUrl: './user-survey.component.html',
  styleUrls: ['./user-survey.component.css']
})
export class UserSurveyComponent implements OnInit {

  surveyId: any;
  survey:any;
  closed = false;
  upcoming = false;
  run = false;
  mrun = false;
  countTime: any;
  single:false;
  attented = false;
  constructor(private _activatedRoute: ActivatedRoute,
    private _userService: UserService,
    private routes: Router) { }

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
    this.getSurvey();
  }


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
  this._userService.getSurvey(this.surveyId).subscribe(survey =>{
    this.survey = survey;
    console.log(survey);
    if(survey.status == 0){ // closed
      this.closed = true;
    }
    else if(survey.status == 1){ // upcoming
      this.countTime = survey.start_time;
      this.upcoming = true;
      
    }
    else if(survey.status == 2){
      //show error
      // this._router.navigate(['/404'])
      this.closed = true;
      
    }
    else if(survey.status == 3){
      //survey not exist 
      this.routes.navigate(['/404'])
    }
    else if(survey.status == 4){
      this.attented = true;
      
    }
    else if(!survey.status && survey.display_type.ui.toLowerCase() == 'single'){
      // if(){

      // }
      this.run = true;
    }
    else if(!survey.status && survey.display_type.ui.toLowerCase() == 'multiple'){
      // if(){

      // }
      this.mrun = true;
    }
    // console.log(survey);
  });

  }
//  ---------------------------------end-----------------------------------------------

}
