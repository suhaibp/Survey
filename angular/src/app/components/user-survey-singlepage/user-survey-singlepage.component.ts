import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute, Params} from '@angular/router';
import { UserService } from './../../services/user.service';
import { CompanyService } from './../../services/company.service';
declare var $:any;
import {RatingModule} from "ngx-rating";

// import {OnClickEvent, OnRatingChangeEven, OnHoverRatingChangeEvent} from "angular-star-rating/src/star-rating-struct";
@Component({
  selector: 'app-user-survey-singlepage',
  templateUrl: './user-survey-singlepage.component.html',
  styleUrls: ['./user-survey-singlepage.component.css','./user-survey-singlepage.scss'],
  inputs: ['survey'],
  
})
export class UserSurveySinglepageComponent implements OnInit {

  starsCount: number;
  // onClickResult:OnClickEvent;
  // onHoverRatingChangeResult:OnHoverRatingChangeEvent;
  // onRatingChangeResult:OnRatingChangeEven;

  // onClick = ($event:OnClickEvent) => {
  //     console.log('onClick $event: ', $event);
  //     this.onClickResult = $event;
  // };

  // onRatingChange = ($event:OnRatingChangeEven) => {
  //     console.log('onRatingUpdated $event: ', $event);
  //     this.onRatingChangeResult = $event;
  // };

  // onHoverRatingChange = ($event:OnHoverRatingChangeEvent) => {
  //     console.log('onHoverRatingChange $event: ', $event);
  //     this.onHoverRatingChangeResult = $event;
  // };


  survey: any;
  themeId: any;
  theme: any;
  disp = false;
  ans:any;
  skip = false;
  blankAns = false;
  constructor(private _activatedRoute: ActivatedRoute,
    private _userService: UserService,
    private _companyService: CompanyService,
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
    // console.log(this.survey[0].theme.id);
    this.themeId = this.survey.theme;
    if(this.survey.display_type.skip == true){
      this.skip = true;
    }
    this.getTheme();
    // console.log(this.survey.questions);
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
closed(){
  window.location.reload();  
  
}
hel(event){
  console.log(this.survey);
  console.log("h")
}
}
