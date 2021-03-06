import { Component, OnInit, Directive, forwardRef, Attribute,OnChanges, SimpleChanges,Input } from '@angular/core';
import {FormGroup,FormBuilder, Validators, FormControl, FormGroupDirective, NgForm,} from '@angular/forms';
import { CompanyService} from './../../services/company.service';
import { UserService} from './../../services/user.service';
import { CanActivate, Router, ActivatedRoute } from '@angular/router';
import { PasswordValidation } from './password-validation';
import { FlashMessagesService } from 'angular2-flash-messages';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  regFormGroup: FormGroup;
  hide = true;
  sub : any;
  surveyId : any;
  userId : any;
  userEmail : any;
  msg : any;
  newReg = {
    email : '',
    name : '',
    password : '',
  }
  Reg = { confirmPassword : ''}
  showSpinner :boolean = false
  constructor(private route: ActivatedRoute, private _formBuilder: FormBuilder, private userService : UserService, private routes: Router, private _flashMessagesService: FlashMessagesService, private companyService : CompanyService,public snackBar: MatSnackBar) { }

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
    this.regFormGroup = this._formBuilder.group({
      nameValidation: ['', Validators.required],
      password : ['', Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{6,}$/)],
      confirmPassword : ['', Validators.required]
    }, {
      validator: PasswordValidation.MatchPassword
    });
    this.sub = this.route.params.subscribe(params => {
      this.surveyId = params['id2'];
      this.userId = params['id1'];
   });
// ---------------------------------Start-------------------------------------------
// Function      : Get user email 
// Params        : company user id
// Returns       : user email
// Author        : Rinsha
// Date          : 08-01-2018
// Last Modified : 08-01-2018, Rinsha
// Desc          : Get company user id from url and fetch the email from 'company' collections
   this.companyService.getuserEmail(this.userId).subscribe(data =>{
   this.userEmail = data;
   this.newReg.email = this.userEmail;
   });
// -----------------------------------End------------------------------------------
  }

  
// ---------------------------------Start-------------------------------------------
// Function      : Register user
// Params        : user data from the form
// Returns       : status and token
// Author        : Rinsha
// Date          : 08-01-2018
// Last Modified : 08-01-2018, Rinsha
// Desc          : 
  userRegister(){
    this.showSpinner = true;
    this.userService.registration(this.newReg, this.surveyId).subscribe(data => {
      if(data.success==true){
        this.showSpinner = false;
        this.userService.storeUserData(data.token, data.user);  
      //  this._flashMessagesService.show('Account created successfully', { cssClass: 'alert-success', timeout: 4000 });
      let snackBarRef =  this.snackBar.open('Account created successfully', '', {
        duration: 2000
      });
       setTimeout(() => {
         this.routes.navigate(['/survey', this.surveyId]);
       }, 2000);
     } else {
      this.showSpinner = false;
      // this.msg = data.msg;
      //  this._flashMessagesService.show('Some error occured', { cssClass: 'alert-danger', timeout: 4000 });
      let snackBarRef =  this.snackBar.open('* Some error occured!', '', {
        duration: 2000
      });
       setTimeout(() => {  
         this.routes.navigate(['/404']);
       }, 2000);
     }
    });
  }
// -----------------------------------End------------------------------------------
}
