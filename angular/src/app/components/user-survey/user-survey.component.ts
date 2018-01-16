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
  constructor(private _activatedRoute: ActivatedRoute,
    private _userService: UserService,
    private _router: Router) { }

  ngOnInit() {
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
    }
    else if(survey.status == 3){
      //survey not exist 
    }
    else if(survey.status == 4){
      this.closed = true;
      
    }
    else if(!survey.status && survey.display_type.ui == 'single'){
      // if(){

      // }
      this.run = true;
    }
    else if(!survey.status && survey.display_type.ui == 'multiple'){
      // if(){

      // }
      this.mrun = true;
    }
    // console.log(survey);
  });

  }
//  ---------------------------------end-----------------------------------------------

}
