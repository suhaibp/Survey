import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute, Params} from '@angular/router';
import { UserService } from './../../services/user.service';
import { CompanyService } from './../../services/company.service';
@Component({
  selector: 'app-user-survey-closed',
  templateUrl: './user-survey-closed.component.html',
  styleUrls: ['./user-survey-closed.component.css'],
  inputs: ['survey']
})
export class UserSurveyClosedComponent implements OnInit {
  survey: any;
  themeId: any;
  theme: any;
  surveyId: any;
  disp:any;
  gotSurvey= false;
  constructor(private _activatedRoute: ActivatedRoute,
    private _userService: UserService,
    private _companyService: CompanyService,
    private _router: Router) { }

  ngOnInit() {
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
  
}
