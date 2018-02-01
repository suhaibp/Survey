import { Component, OnInit, Directive, forwardRef, Attribute,OnChanges, SimpleChanges,Input } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective, NgForm,} from '@angular/forms';
import { CompanyService} from './../../services/company.service';
import { CanActivate, Router } from '@angular/router';
import { PasswordValidation } from './password-validation';
import { MatStepper } from '@angular/material';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'company-registration',
  templateUrl: './company-registration.component.html',
  styleUrls: ['./company-registration.component.css']
})


export class CompanyRegistrationComponent implements OnInit {

  isLinear = true;
  hide = true;
  timestamp = new Date().getTime().toString();
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  newReg = {
    organization : '',
    location : '',
    contact_person_fname : '',
    contact_person_lname : '',
    contact_no : '',
    contact_person_email : '',
    job_role : '',
    job_level : '',
    company_strength : '',
    organization_type : {_id : '', name : ''},
    industry : {_id : '', name : '',},
    survey_attenders : [],
    password : '',
    verification_code : this.timestamp + Math.floor(100000 + Math.random() * 900000),
  }

  Reg = { confirmPassword : ''}

  orgType : any;
  industry : any;
  surveyattenders : any;
  data : any = [];
  firstForm : any;
  secondForm : any;
  thirdForm : any ;
  result : any;

  constructor(private _formBuilder: FormBuilder, private companyService : CompanyService, private routes: Router, private _flashMessagesService: FlashMessagesService) { }

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
    this.isLinear = true;
    this.firstFormGroup = this._formBuilder.group({
      orgValidation: ['', Validators.required],
      organization_typeValidation: ['', Validators.required],
      industryValidation: ['', Validators.required],
      locationValidation: ['', Validators.required],
      strengthValidation: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      fnameValidation: ['', Validators.required],
      lnameValidation: ['', Validators.required],
      jobRoleValidation: ['', Validators.required],
      jobLevelValidation: ['', Validators.required],
      email : new FormControl('', [Validators.required, Validators.email]),
      number : new FormControl('', Validators.pattern(/^\d{9}|^\d{3}-\d{3}-\d{3}|^\d{3}\s\d{3}\s\d{3}$/)),
      password : new FormControl('', Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&.])[A-Za-z\d$@$!%*#?&.]{6,}$/)),
      confirmPassword : ['', Validators.required],
    }, {
      validator: PasswordValidation.MatchPassword
    });

// ---------------------------------Start-------------------------------------------
// Function      : Get All organization type, industry and survey attenders
// Params        : 
// Returns       : All organization type, industry and survey attenders
// Author        : Rinsha
// Date          : 28-12-2017
// Last Modified : 28-12-2017, Rinsha
// Desc          :  
    this.companyService.getAllOrgType().subscribe(res => {
      this.orgType = res;
      this.newReg.organization_type = this.orgType[0].value;
    });
    this.companyService.getAllIndustry().subscribe(res => {
      this.industry = res;
      this.newReg.industry = this.industry[0].value;
    });
    this.companyService.getAllSurveyAttenders().subscribe(res => {
      this.surveyattenders = res;
    });
// -----------------------------------End------------------------------------------
  }

  appendForm1(){
    this.firstForm = this.newReg;
  }

  appendForm2(){
    this.secondForm = this.newReg;
  }

// ---------------------------------Start-------------------------------------------
// Function      : Register company
// Params        : Company data from the form
// Returns       : 
// Author        : Rinsha
// Date          : 29-12-2017
// Last Modified : 29-12-2017, Rinsha
// Desc          : 
  register(){
  this.thirdForm = '';
  this.newReg.survey_attenders = [];
    this.surveyattenders.forEach(element => {
      if(element.check == true){
       var json = element;
       var key = "check";
       delete json[key];
       this.newReg.survey_attenders.push(element);
      }
    });
   this.thirdForm = this.newReg.survey_attenders;
   this.result =Object.assign(this.firstForm, this.secondForm);

   this.companyService.registration(this.result).subscribe(data => {
     console.log(data);
     if(data.success==true){
      this._flashMessagesService.show('Account created successfully, Please verify your Email address', { cssClass: 'alert-success', timeout: 4000 });
      setTimeout(() => {  
        this.routes.navigate(['/clogin']);
      }, 4000);
    } else {
      this._flashMessagesService.show('The email address you specified is already in use. Please login to continue', { cssClass: 'alert-danger', timeout: 4000 });
      setTimeout(() => {  
        this.routes.navigate(['/clogin']);
      }, 4000);
    }
   });
  }
// -----------------------------------End------------------------------------------

  }


