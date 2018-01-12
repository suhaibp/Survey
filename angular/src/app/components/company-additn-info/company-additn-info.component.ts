import { Component, OnInit, Directive, forwardRef, Attribute,OnChanges, SimpleChanges,Input } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective, NgForm,} from '@angular/forms';
import { CompanyService} from './../../services/company.service';
import { CanActivate, Router, ActivatedRoute } from '@angular/router';
import { MatStepper } from '@angular/material';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'company-additn-info',
  templateUrl: './company-additn-info.component.html',
  styleUrls: ['./company-additn-info.component.css']
})
export class CompanyAdditnInfoComponent implements OnInit {
  
  private sub: any;
  isLinear = true;
  contact_person_email : any;
  contact_person_fname : any;
  contact_person_lname : any;
  id : any;
  timestamp = new Date().getTime().toString();
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  newReg = {
    organization : '',
    location : '',
    contact_no : '',
    job_role : '',
    job_level : '',
    company_strength : '',
    organization_type : {_id : '', name : ''},
    industry : {_id : '', name : ''},
    survey_attenders : [],
    is_profile_completed : true,
  }

  orgType : any;
  industry : any;
  surveyattenders : any;
  data : any = [];
  firstForm : any;
  secondForm : any;
  thirdForm : any ;
  result : any;

  constructor(private _formBuilder: FormBuilder, private companyService : CompanyService, private routes: Router, private _flashMessagesService: FlashMessagesService, private route: ActivatedRoute) { }

  ngOnInit() {
// ---------------------------------Start-------------------------------------------
// Function      : get logged company details
// Params        : 
// Returns       : company details
// Author        : Rinsha
// Date          : 12-1-2018
// Last Modified : 12-1-2018, Rinsha
// Desc          :
this.companyService.getLoggedUSerDetails().subscribe(info =>{
  if(info.role == "admin"){
    // this.routes.navigate(['/admin dashboard']);
  }
  if(info.role == "user"){
    if(info.delete_status == true || info.block_status == true){
      // this.routes.navigate(['/404]); 
    }
    // this.routes.navigate(['/survey', info.surveyId]); 
  }
});

// ---------------------------------End-------------------------------------------

// ---------------------------------Start-------------------------------------------
// Function      : Get Company Details
// Params        : id from url
// Returns       : Company Details
// Author        : Rinsha
// Date          : 02-1-2018
// Last Modified : 02-1-2018, Rinsha
// Desc          : 
   this.sub = this.route.params.subscribe(params => {
      this.companyService.getCompanyDetailsById(params.id).subscribe(data => {
        this.id = params.id;
        if(data.is_profile_completed == true){
          this.companyService.generateToken(params.id).subscribe(data1 => {
            if(data1.success){
              this.companyService.storeUserData(data1.token, data1.company);
              if(data.cmp_status == "Expired"){
                this.routes.navigate(['/expired']);
              }else{
              // this.routes.navigate(['/creg']);
              }
            }
          });
        }
        else{
          if(data.cmp_status == "Expired"){
            this.routes.navigate(['/expired']);
          }else{
            this.contact_person_email = data.contact_person_email;
            this.contact_person_fname = data.contact_person_fname;
            this.contact_person_lname = data.contact_person_lname;
          }
        }
      });

    });
// -----------------------------------End------------------------------------------
    this.isLinear = true;
    this.firstFormGroup = this._formBuilder.group({
      orgValidation: ['', Validators.required],
      organization_typeValidation: ['', Validators.required],
      industryValidation: ['', Validators.required],
      locationValidation: ['', Validators.required],
      strengthValidation: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      jobRoleValidation: ['', Validators.required],
      jobLevelValidation: ['', Validators.required],
      number : new FormControl('', Validators.pattern(/^\d{9}|^\d{3}-\d{3}-\d{3}|^\d{3}\s\d{3}\s\d{3}$/)),
    });

// ---------------------------------Start-------------------------------------------
// Function      : Get All organization type, industry and survey attenders
// Params        : 
// Returns       : All organization type, industry and survey attenders
// Author        : Rinsha
// Date          : 02-1-2018
// Last Modified : 02-1-2018, Rinsha
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

// ---------------------------------Start-------------------------------------------
// Function      : Register additional information 
// Params        : Company id and data from the form
// Returns       : 
// Author        : Rinsha
// Date          : 03-01-2018
// Last Modified : 03-01-2018, Rinsha
// Desc          : Save additional information for company who sign in with google or facebook

   this.companyService.registerAdditnInfo(this.id,this.result).subscribe(info => {
     if(info.success==true){
      this._flashMessagesService.show('Redirecting..', { cssClass: 'alert-success', timeout: 4000 });
      this.companyService.generateToken(this.id).subscribe(data2 => {
        if(data2.success){
          this.companyService.storeUserData(data2.token, data2.company);
         }
      });
      setTimeout(() => {  
        // this.routes.navigate(['/login']);
      }, 4000);
    
    } else {
      this._flashMessagesService.show('Error', { cssClass: 'alert-danger', timeout: 4000 });
      setTimeout(() => {  
        // this.routes.navigate(['/404']);
      }, 4000);
    }
   });
// -----------------------------------End------------------------------------------
  }

  }

