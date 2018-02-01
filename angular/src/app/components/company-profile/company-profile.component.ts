import { Component, OnInit, Directive, forwardRef, Attribute,OnChanges, SimpleChanges,Input } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective, NgForm,} from '@angular/forms';
import { CompanyService} from './../../services/company.service';
import { CanActivate, Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.css']
})
export class CompanyProfileComponent implements OnInit {
  ProfileFormGroup: FormGroup;
  selected : any;
  typeId : any;
  industryId : any;
  surveyattendersId : any;
  checked = false;
  showSpinner :boolean = false
  surveyattenderss : any;
  modelArr : any;
  showSubscribe : Boolean = false;
  newReg = {
    organization : '',
    location : '',
    contact_no : '',
    job_role : '',
    job_level : '',
    company_strength : '',
    organization_type : {_id : '', name : ''},
    industry : {_id : '', name : '',},
    survey_attenders : [],
  }
  selectedOrg : any;
  orgType : any;
  industry : any;
  surveyattenders : any;
  company : any;
  t =true;
  constructor(private _formBuilder: FormBuilder, private companyService : CompanyService, private routes: Router, private _flashMessagesService: FlashMessagesService,public snackBar: MatSnackBar) { }  

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
  if(info == null || info == ''){
    this.routes.navigate(['/clogin']); 
  }
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
    this.ProfileFormGroup = this._formBuilder.group({
      orgValidation: ['', Validators.required],
      organization_typeValidation: ['', Validators.required],
      industryValidation: ['', Validators.required],
      locationValidation: ['', Validators.required],
      strengthValidation: ['', Validators.required],
      jobRoleValidation: ['', Validators.required],
      jobLevelValidation: ['', Validators.required],
      number : ['', Validators.pattern(/^\d{9}|^\d{3}-\d{3}-\d{3}|^\d{3}\s\d{3}\s\d{3}$/)],
    });

// ---------------------------------Start-------------------------------------------
// Function      : Get All organization type, industry and survey attenders
// Params        : 
// Returns       : All organization type, industry and survey attenders
// Author        : Rinsha
// Date          : 04-1-2018
// Last Modified : 04-1-2018, Rinsha
// Desc          : 
    this.companyService.getAllOrgType().subscribe(res => {
      this.orgType = res;
    });
    this.companyService.getAllIndustry().subscribe(res => {
      this.industry = res;
    });
    this.companyService.getAllSurveyAttenders().subscribe(res => {
      this.surveyattenders = res;
    });
// -----------------------------------End------------------------------------------

// ---------------------------------Start-------------------------------------------
// Function      : Get Company details
// Params        : 
// Returns       : Login company details
// Author        : Rinsha
// Date          : 04-1-2018
// Last Modified : 04-1-2018, Rinsha
// Desc          : 
    this.companyService.getMyCompany().subscribe(info => {
      this.company = info;
      this.typeId = this.company.organization_type.id;
      this.industryId = this.company.industry.id;
      this.surveyattendersId = this.company.survey_attenders;
      if(this.company.cmp_status == "Trail"){
        this.showSubscribe = true;
      }
      this.modelArr = [];
      for(let item of this.surveyattendersId){
       this.modelArr.push(item._id);
      }
      for(let i in this.surveyattenders){
        if(this.modelArr.includes(this.surveyattenders[i]._id)){
         this.surveyattenders[i].check = true;
        }else{
         this.surveyattenders[i].check = false;
        }
      }
      this.newReg = {
        organization : this.company.organization,
        location : this.company.location,
        contact_no : this.company.contact_no,
        job_role : this.company.job_role,
        job_level : this.company.job_level,
        company_strength : this.company.company_strength,
        organization_type : {_id : this.company.organization_type.id, name : this.company.organization_type.name},
        industry :{_id : this.company.industry.id, name : this.company.industry.name},
        survey_attenders : this.surveyattenders,
      }
    });
// -----------------------------------End------------------------------------------    
  }

  getOrgType(type){
    this.newReg.organization_type = type;
  }

  getIndustry(item){
    this.newReg.industry = item;
  }

// ---------------------------------Start-------------------------------------------
// Function      : Subscribe
// Params        : 
// Returns       : 
// Author        : Rinsha
// Date          : 04-1-2018
// Last Modified : 04-1-2018, Rinsha
// Desc          : Company can subscribe app by clicking the subscribe button
  subscribe(){
    this.showSpinner =true
    this.companyService.subscribeCompany().subscribe(data => {
      if(data.success){
        this.showSpinner =false
        // this._flashMessagesService.show('Success...', { cssClass: 'alert-success', timeout: 4000 });
        let snackBarRef =  this.snackBar.open('Subscribed successfully', '', {
          duration: 2000
        });
        // setTimeout(() => {  
          this.routes.navigate(['/dashboard']);
          // location.reload();
        // }, 4000);
      }
      else{
        this.showSpinner =false
        // this._flashMessagesService.show('* Some error occured, Please try again!', { cssClass: 'alert-danger', timeout: 4000 });
        let snackBarRef =  this.snackBar.open('* Some error occured, Please try again!', '', {
          duration: 2000
        });
        setTimeout(() => {  
          this.routes.navigate(['/profile']);
        }, 4000);
      }
    });
  }
// -----------------------------------End------------------------------------------    

// ---------------------------------Start-------------------------------------------
// Function      : Update profile
// Params        : Data from form
// Returns       : 
// Author        : Rinsha
// Date          : 03-1-2018
// Last Modified : 03-1-2018, Rinsha
// Desc          : Company can update all the details except email and name
  updateProfile(){
    this.showSpinner =true
    this.newReg.survey_attenders = [];
    this.surveyattenders.forEach(element => {
      if(element.check == true){
       var json = element;
       var key = "check";
       delete json[key];
       this.newReg.survey_attenders.push(element);
      }
    });
    this.companyService.updateCompany(this.newReg).subscribe(info => {
      if(info.success){
        this.companyService.storeUserData(info.token, info.company);
        this.showSpinner =false
        let snackBarRef =  this.snackBar.open('Profile updated Successfully', '', {
          duration: 2000
        });
        // this._flashMessagesService.show('Success...', { cssClass: 'alert-success', timeout: 4000 });
        setTimeout(() => {  
          this.routes.navigate(['/profile']);
        }, 4000);
      }
      else{
        this.showSpinner =false
        // this._flashMessagesService.show('Error...', { cssClass: 'alert-danger', timeout: 4000 });
        let snackBarRef =  this.snackBar.open('* Error!', '', {
          duration: 2000
        });
        setTimeout(() => {  
          this.routes.navigate(['/profile']);
        }, 4000);
      }
    })
  }
// -----------------------------------End------------------------------------------    

}
