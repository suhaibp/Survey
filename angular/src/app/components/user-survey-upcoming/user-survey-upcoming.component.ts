import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute, Params} from '@angular/router';
import { UserService } from './../../services/user.service';
import { CompanyService } from './../../services/company.service';

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
  constructor(private _activatedRoute: ActivatedRoute,
    private _userService: UserService,
    private _companyService: CompanyService,
    private _router: Router) { }

  ngOnInit() {
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

}
