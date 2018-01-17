import { Component, OnInit,EventEmitter } from '@angular/core';
import {Router,ActivatedRoute, Params} from '@angular/router';
// // import { UserService } from './../../services/user.service';
import { CompanyService } from './../../services/company.service';
// declare var $:any;
// import {RatingModule} from "ngx-rating";
import {Config} from '../../config/config';

@Component({
  selector: 'app-company-survey-preview',
  templateUrl: './company-survey-preview.component.html',
  styleUrls: ['./company-survey-preview.component.css'],
  inputs : ["survey"],
  outputs : ['onBackBtnClick']
})
export class CompanySurveyPreviewComponent implements OnInit {
  private survey: any;
  private theme: object;
  private cardNo = 0;
  public onBackBtnClick = new EventEmitter();
  progressBarWidth:any;
  blankAns:any;
  constructor(private companyService : CompanyService, private config: Config, private routes: Router) { }
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
    this.theme = this.survey;
   
  }

  backTosurvey(){
    this.onBackBtnClick.emit();
  }

  next(i){
    if(this.survey.questions[i].ans == '' || !this.survey.questions[i].ans){
      this.blankAns = true;
      setTimeout(()=>{ 
        this.blankAns = true;;
      }, 2000);
    }else{
      this.cardNo = this.cardNo+1
      this.blankAns = false;
      this.progressBarWidth = (this.cardNo/this.survey.questions.length)*100;
      console.log(this.cardNo);
    }
  }
  back(){
    this.cardNo = this.cardNo-1
  }
  skipQuestion(){
    this.cardNo = this.cardNo+1
    
  }
}
