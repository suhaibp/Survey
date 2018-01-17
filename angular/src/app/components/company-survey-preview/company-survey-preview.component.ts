import { Component, OnInit,EventEmitter } from '@angular/core';
// import {Router,ActivatedRoute, Params} from '@angular/router';
// // import { UserService } from './../../services/user.service';
// import { CompanyService } from './../../services/company.service';
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
  constructor(private config: Config) { }
  ngOnInit() {
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
