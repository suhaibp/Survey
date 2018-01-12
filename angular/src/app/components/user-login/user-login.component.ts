import { Component, OnInit } from '@angular/core';
import { UserService} from './../../services/user.service';
import { CanActivate, Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  sub : any;
  userId : any;
  surveyId : any;
  userEmail : any;
  newLogin = {
    email : '',
    password : '',
  }
  msg : any;
  showError : Boolean = false;
  constructor(private route: ActivatedRoute, private userService : UserService, private routes: Router) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.surveyId = params['id2'];
      this.userId = params['id1'];
   });
// ---------------------------------Start-------------------------------------------
// Function      : Get user email 
// Params        : global user id
// Returns       : user email
// Author        : Rinsha
// Date          : 08-01-2018
// Last Modified : 08-01-2018, Rinsha
// Desc          : Get company user id from url and fetch the email from 'user' collections
  this.userService.getuserEmail(this.userId).subscribe(data =>{
    this.userEmail = data;
    this.newLogin.email = this.userEmail;
  });
// -----------------------------------End------------------------------------------
}

// ---------------------------------Start-------------------------------------------
// Function      : User Login
// Params        : user username,user password from form
// Returns       : Token, user id and role
// Author        : Rinsha
// Date          : 08-01-2018
// Last Modified : 08-01-2018, Rinsha
// Desc          : 
  login(){
    this.userService.userLogin(this.newLogin, this.surveyId).subscribe(data => {
    if(data.success==false){
      this.showError = true;
      this.msg = data.msg;
    }
    if(data.success){
      this.showError = false;
      this.userService.storeUserData(data.token, data.user);
      // this.routes.navigate(['/survey', this.surveyId]);
    }
    });
  }
// -----------------------------------End------------------------------------------
}
