import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute, Params} from '@angular/router';
import { UserService } from './../../services/user.service';

@Component({
  selector: 'app-user-survey-success',
  templateUrl: './user-survey-success.component.html',
  styleUrls: ['./user-survey-success.component.css']
})
export class UserSurveySuccessComponent implements OnInit {
  userIdx:any;

  constructor(private routes: Router,private route: ActivatedRoute, private _userService: UserService) { }

  ngOnInit() {
  }


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
