import { Component, OnInit, Directive, forwardRef, Attribute, OnChanges, SimpleChanges, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective, NgForm, } from '@angular/forms';
import { CompanyService } from './../../services/company.service';
import { CanActivate, Router, ActivatedRoute } from '@angular/router';
import { PasswordValidation } from './password-validation';
import { MatStepper, MatSnackBar } from '@angular/material';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'company-registration',
  templateUrl: './company-registration.component.html',
  styleUrls: ['./company-registration.component.css']
})


export class CompanyRegistrationComponent implements OnInit {
  showSpinner :boolean = false;
  isLinear = true;
  sub: any;
  plan_id: any;
  planId: any;
  showPlanStepper: Boolean = false;
  showMonth: Boolean = true;
  hide = true;
  
  timestamp = new Date().getTime().toString();
  firstFormGroup: FormGroup;
  planFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  payment = {
    cardnum : '',
    cardname : '',
    cvv : ''
  }
  newReg = {
    organization: '',
    location: '',
    contact_person_fname: '',
    contact_person_lname: '',
    contact_no: '',
    contact_person_email: '',
    job_role: '',
    job_level: '',
    company_strength: '',
    organization_type: { _id: '', name: '' },
    industry: { _id: '', name: '', },
    survey_attenders: [],
    password: '',
    verification_code: this.timestamp + Math.floor(100000 + Math.random() * 900000),
    plans: {
      plan_id: '',
      no_month: '',
      plan_name: '',
      plan_price: '',
      no_survey: '',
      no_question: '',
      excel_import: '',
      survey_logic: '',
      no_survey_attenders: '',
      is_default_plan: '',
    }
  }

  Reg = { confirmPassword: '' }

  orgType: any;
  industry: any;
  plans: any;
  surveyattenders: any;
  data: any = [];
  firstForm: any;
  secondForm: any;
  thirdForm: any;
  planForm: any;
  result: any;

  constructor(private _formBuilder: FormBuilder, private companyService: CompanyService, private routes: Router, private _flashMessagesService: FlashMessagesService, private route: ActivatedRoute ,public snackBar: MatSnackBar) { }

  ngOnInit() {
    // ---------------------------------Start-------------------------------------------
    // Function      : get logged company details
    // Params        : 
    // Returns       : company details
    // Author        : Rinsha
    // Date          : 16-1-2018
    // Last Modified : 16-1-2018, Rinsha
    // Desc          :
    this.companyService.getLoggedUSerDetails().subscribe(info => {
      if (info.role == "admin") {
        this.routes.navigate(['/admin-dashboard']);
      }
      if (info.role == "user") {
        if (info.delete_status == true || info.block_status == true) {
          this.routes.navigate(['/404']);
        }
        this.routes.navigate(['/survey', info.surveyId]);
      }
      if (info.role == "company") {
        if (info.delete_status == true || info.block_status == true || info.cmp_status == "Not Verified") {
          this.routes.navigate(['/clogin']);
        }
        if (info.cmp_status == "Expired") {
          this.routes.navigate(['/expired']);
        }
        if (info.is_profile_completed == false) {
          this.routes.navigate(['/additnInfo', info._id]);
        }
      }
    });
    // ---------------------------------End-------------------------------------------

    this.sub = this.route.params.subscribe(params => {
      this.plan_id = params.id;
    });
    if (this.plan_id) {
      // this.showPlanStepper = true;
      // ---------------------------------Start-------------------------------------------
      // Function      : get plan details using id
      // Params        : 
      // Returns       : plan details
      // Author        : Rinsha
      // Date          : 29-1-2018
      // Last Modified : 29-1-2018, Rinsha
      // Desc          :
      this.companyService.getPlanById(this.plan_id).subscribe(info1 => {
        this.showPlanStepper = true;
        // console.log(info1);
        this.planId = this.plan_id;
        this.newReg = {
          organization: '',
          location: '',
          contact_person_fname: '',
          contact_person_lname: '',
          contact_no: '',
          contact_person_email: '',
          job_role: '',
          job_level: '',
          company_strength: '',
          organization_type: { _id: '', name: '' },
          industry: { _id: '', name: '', },
          survey_attenders: [],
          password: '',
          verification_code: this.timestamp + Math.floor(100000 + Math.random() * 900000),
          plans: {
            plan_id: info1._id,
            no_month: '',
            plan_name: info1.plan_name,
            plan_price: info1.plan_price,
            no_survey: info1.no_survey,
            no_question: info1.no_question,
            excel_import: info1.excel_import,
            survey_logic: info1.survey_logic,
            no_survey_attenders: info1.no_survey_attenders,
            is_default_plan: info1.is_default_plan,
          }
        }
        if (this.newReg.plans.is_default_plan) {
          this.showMonth = false;
          this.showPlanStepper = false;
        }
      });
      // ---------------------------------End-------------------------------------------
    }
    this.isLinear = true;
    this.firstFormGroup = this._formBuilder.group({
      orgValidation: ['', Validators.required],
      organization_typeValidation: ['', Validators.required],
      industryValidation: ['', Validators.required],
      locationValidation: ['', Validators.required],
      strengthValidation: ['', Validators.required],
    });
    this.planFormGroup = this._formBuilder.group({
      planNameValidation: ['', Validators.required],
      planMonthValidation: ['', Validators.required],
      cardnumValidation : ['', Validators.required],
      cardnameValidation: ['', Validators.required],
      cvvValidation : ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      fnameValidation: ['', Validators.required],
      lnameValidation: ['', Validators.required],
      jobRoleValidation: ['', Validators.required],
      jobLevelValidation: ['', Validators.required],
      email: new FormControl('', [Validators.required, Validators.email]),
      number: new FormControl('', Validators.pattern(/^\d{9}|^\d{3}-\d{3}-\d{3}|^\d{3}\s\d{3}\s\d{3}$/)),
      password: new FormControl('', Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{6,}$/)),
      confirmPassword: ['', Validators.required],
    }, {
        validator: PasswordValidation.MatchPassword
      });

    // ---------------------------------Start-------------------------------------------
    // Function      : Get All organization type, industry and survey attenders, plans
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
    this.companyService.getAllPlans().subscribe(res => {
      this.plans = res;
    });
    // -----------------------------------End------------------------------------------
  }

  appendForm1() {
    this.firstForm = this.newReg;
  }

  appendForm2() {
    this.secondForm = this.newReg;
  }

  getPlan(type) {
    this.showMonth = true;
    this.newReg.plans = type;
     console.log(type)
    if (type.is_default_plan == true) {
      this.showMonth = false;
      // this.newReg.plans[0].no_month = type.no_month;
 
    }
  }

  appendPlanForm() {
    this.planForm = this.newReg;
    // console.log("_____________");
    // console.log(this.planForm.plans.no_month);
    // console.log(this.planForm.plans);
    // this.planForm.plans[0].no_month = this.planForm.plans.no_month;
    // console.log(this.planForm);
  }

  // ---------------------------------Start-------------------------------------------
  // Function      : Register company
  // Params        : Company data from the form
  // Returns       : 
  // Author        : Rinsha
  // Date          : 29-12-2017
  // Last Modified : 29-01-2017, Rinsha
  // Desc          : 
  register() {
    this.showSpinner = true
    this.thirdForm = '';
    this.newReg.survey_attenders = [];
    this.surveyattenders.forEach(element => {
      if (element.check == true) {
        var json = element;
        var key = "check";
        delete json[key];
        this.newReg.survey_attenders.push(element);
      }
    });
    this.thirdForm = this.newReg.survey_attenders;
    this.result = Object.assign(this.firstForm, this.secondForm, this.planForm);
    // console.log(this.result);
    // this.companyService.registration(this.result).subscribe(data => {
    //   // console.log(data);
    //   if (data.success == true) {
    //     this._flashMessagesService.show('Account created successfully, Please verify your Email address', { cssClass: 'alert-success', timeout: 4000 });
    //     setTimeout(() => {
    //       this.routes.navigate(['/clogin']);
    //     }, 4000);
    //   } else {
    //     this._flashMessagesService.show('The email address you specified is already in use. Please login to continue', { cssClass: 'alert-danger', timeout: 4000 });
    //     setTimeout(() => {
    //       this.routes.navigate(['/clogin']);
    //     }, 4000);
    //   }
    // });
   this.thirdForm = this.newReg.survey_attenders;
   this.result =Object.assign(this.firstForm, this.secondForm);

   this.companyService.registration(this.result).subscribe(data => {
     console.log(data);
     if(data.success==true){
      this.showSpinner = false
      // this._flashMessagesService.show('Account created successfully, Please verify your Email address', { cssClass: 'alert-success', timeout: 4000 });
      let snackBarRef =  this.snackBar.open('Account created successfully, Please verify your Email address', '', {
        duration: 3000
      });
      setTimeout(() => {  
        this.routes.navigate(['/clogin']);
      }, 3000);
    } else {
      this.showSpinner = false
      // this._flashMessagesService.show('The email address you specified is already in use. Please login to continue', { cssClass: 'alert-danger', timeout: 4000 });
      let snackBarRef =  this.snackBar.open('The email address you specified is already in use. Please login to continue', '', {
        duration: 3000
      });
      setTimeout(() => {  
        this.routes.navigate(['/clogin']);
      }, 3000);
    }
   });
  }
  // -----------------------------------End------------------------------------------

}


