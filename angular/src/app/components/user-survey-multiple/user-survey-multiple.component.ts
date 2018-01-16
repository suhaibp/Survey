import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute, Params} from '@angular/router';
import { UserService } from './../../services/user.service';
import { CompanyService } from './../../services/company.service';
import {ReversePipe } from './../../pipe/reverse.pipe'
declare var $:any;
import {RatingModule} from "ngx-rating";

@Component({
  selector: 'app-user-survey-multiple',
  templateUrl: './user-survey-multiple.component.html',
  styleUrls: ['./user-survey-multiple.component.css'],
  inputs:['survey']
})
export class UserSurveyMultipleComponent implements OnInit {

  cardNo = 0;
  incDisp = false;
  survey: any;
  themeId: any;
  theme: any;
  disp = false;
  ans:any;
  skip = false;
  blankAns = false;
  questionCount = 0;
  progressBarWidth = 0;
  progressBarWidthString = '';
  constructor(private _activatedRoute: ActivatedRoute,
    private _userService: UserService,
    private _companyService: CompanyService,
    private _router: Router) { }

  ngOnInit() {
    this.themeId = this.survey.theme;
    if(this.survey.display_type.skip == true){
      this.skip = true;
    }
    this.getTheme();
    this.questionCount = this.survey.questions.length;
    console.log(this.questionCount);
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
    if(theme.status == 0){ //404 not found
    }
    else{
      this.disp = true;
      this.theme = theme;
    }
    
  });

  }
//  ---------------------------------end-----------------------------------------------

submitAns(){
  console.log(this.survey);
  if(this.skip == false){
    this.survey.questions.forEach(element => {
      if(element.ans == '' || !element.ans){
        this.blankAns = true;
      }
    });
    
  }
  if(!this.blankAns){
    this._userService.submitSurvey(this.survey, this.survey._id).subscribe(res =>{
  console.log(res);
  
      if(res.status == 0){
        this.blankAns = true;
      }
      else if(res.status == 1||res.status == 3){
        $('#myModal .modal-body h4').text("Somthing went wrong!");
        $('#myModal').modal('show'); 
      } 
      else if(res.status == 4){
        $('#myModal .modal-body h4').text("Successfully submitted!");
        $('#myModal').modal('show'); 
      } 
      });
  }
}

next(i){
  if(this.survey.questions[i].ans == '' || !this.survey.questions[i].ans){
    this.blankAns = true;
  }else{
  this.cardNo = this.cardNo+1
  this.blankAns = false;
  this.progressBarWidth = (this.cardNo/this.questionCount)*100;
  console.log(this.cardNo);
  }
}
back(){
  this.cardNo = this.cardNo-1
}
skipQuestion(){
  this.cardNo = this.cardNo+1
  
}
closed(){
  window.location.reload();
  
}
}
