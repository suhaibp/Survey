import { Component, OnInit } from '@angular/core';
import { UserService} from './../../services/user.service';
import { CanActivate, Router, ActivatedRoute} from '@angular/router';
import { MatSnackBar } from '@angular/material';
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
  constructor(private route: ActivatedRoute, private userService : UserService, private routes: Router,public snackBar: MatSnackBar) { }

  ngOnInit() {
// ---------------------------------Start-------------------------------------------
// Function      : get logged user details
// Params        : 
// Returns       : user details
// Author        : Rinsha
// Date          : 16-1-2018
// Last Modified : 16-1-2018, Rinsha
// Desc          :
this.userService.getLoggedUSerDetails().subscribe(info =>{
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
      let snackBarRef =  this.snackBar.open(this.msg, '', {
        duration: 2000
      });
    }
    if(data.success){
      this.showError = false;
      this.userService.storeUserData(data.token, data.user);
      this.routes.navigate(['/survey', this.surveyId]);
    }
    });
  }
// -----------------------------------End------------------------------------------
}
