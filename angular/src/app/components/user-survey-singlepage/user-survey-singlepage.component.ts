import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute, Params} from '@angular/router';
import { UserService } from './../../services/user.service';
import { CompanyService } from './../../services/company.service';
declare var $:any;
import {RatingModule} from "ngx-rating";
import {Config} from '../../config/config';
import { MatSnackBar } from '@angular/material';

// import {OnClickEvent, OnRatingChangeEven, OnHoverRatingChangeEvent} from "angular-star-rating/src/star-rating-struct";
@Component({
  selector: 'app-user-survey-singlepage',
  templateUrl: './user-survey-singlepage.component.html',
  styleUrls: ['./user-survey-singlepage.component.css'],
  inputs: ['survey'],
  
})
export class UserSurveySinglepageComponent implements OnInit {

  starsCount: number;
  showSpinner :boolean = false;
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
  serviceUrl :string;
  userIdx:any;
  err = false;
  constructor(private _activatedRoute: ActivatedRoute,
    private _userService: UserService,
    private _companyService: CompanyService,
    public snackBar: MatSnackBar,
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



// ---------------------------------Start-------------------------------------------
// Function      : submitAns()
// Params        : name of the view to be shown
// Returns       : 
// Author        : Manu Prasad
// Date          : 28-12-2017
// Last Modified : 28-12-2017, Manu Prasad, Desc:
// Desc          : Submit survey answrs
submitAns(){
  this.showSpinner =true;
  console.log(this.survey);
  if(this.skip == false){
    this.blankAns = false;
    this.survey.questions.forEach(element => {
      this.showSpinner =false
      if(element.ans == '' || !element.ans){
        this.blankAns = true;
      }
    });
    
  }
  if(!this.blankAns){
    
    this._userService.submitSurvey(this.survey, this.survey._id).subscribe(res =>{
      if(res.status == 0){
        this.blankAns = true;
        this.showSpinner =false;
      }
      else if(res.status == 1||res.status == 3){
        this.err = true;
      //   $('#myModal .modal-body h4').text("Somthing went wrong!");
      //   $('#myModal').modal('show'); 
      // } 
      // else if(res.status == 4){
      //   this.err = false;                        
      //   $('#myModal .modal-body h4').text("Successfully submitted!");
      //   $('#myModal').modal('show'); 
        this.showSpinner =false;
        let snackBarRef =  this.snackBar.open('* Somthing went wrong!', '', {
          duration: 2000
        });
        // $('#myModal .modal-body h4').text("Somthing went wrong!");
        // $('#myModal').modal('show'); 
      } 
      else if(res.status == 4){
        this.showSpinner =false;
        let snackBarRef =  this.snackBar.open('Successfully submitted', '', {
          duration: 2000
        });
        let surveyIdx:any
        this.route.params.subscribe(params => {
          surveyIdx = params['id'];
       }); 
       this.routes.navigate(['/survey-success', surveyIdx]);
  // window.location.reload();  
        // $('#myModal .modal-body h4').text("Successfully submitted!");
        // $('#myModal').modal('show'); 
      } 
      }); 
  }
  
}

//  ---------------------------------end-----------------------------------------------


// ---------------------------------Start-------------------------------------------
// Function      : closed()
// Params        : 
// Returns       : 
// Author        : Manu Prasad
// Date          : 28-12-2017
// Last Modified : 28-12-2017, Manu Prasad, Desc:
// Desc          : redirect to success message
closed(){
  // window.location.reload();  
  let surveyIdx:any
        this.route.params.subscribe(params => {
          surveyIdx = params['id'];
       }); 
  this.routes.navigate(['/survey-success',surveyIdx]);
  
  
}
//  ---------------------------------end-----------------------------------------------


// ---------------------------------Start-------------------------------------------
// Function      : closed()
// Params        : 
// Returns       : 
// Author        : Manu Prasad
// Date          : 29-1-2018
// Last Modified : 29-1-2018, Manu Prasad, Desc:
// Desc          : reload survey after submission
closedErr(){
  window.location.reload();  

}
//  ---------------------------------end-----------------------------------------------

// ---------------------------------Start-------------------------------------------
// Function      : timeOver()
// Params        : 
// Returns       : 
// Author        : Manu Prasad
// Date          : 28-12-2017
// Last Modified : 28-12-2017, Manu Prasad, Desc:
// Desc          : check for timeout of survey
timeOver(){
  console.log("h");
  if(this.skip == false){
    let snackBarRef =  this.snackBar.open('Survey TimeOut', '', {
      duration: 2000
    });
  // $('#myModalx .modal-body h4').text("Surevey TimeOut!");
  // $('#myModalx').modal('show'); 
  }
  else{
      let snackBarRef =  this.snackBar.open('Survey TimeOut! Do you want to submit?', '', {
        duration: 2000
      });
    // $('#myModaly .modal-body h4').text("Surevey TimeOut! Do you want to submit?");
    // $('#myModaly').modal('show');
  }
}
// -----------------------------------End------------------------------------------


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
