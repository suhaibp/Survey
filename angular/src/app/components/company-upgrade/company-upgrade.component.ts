import { Component, OnInit } from '@angular/core';
import { CompanyService } from './../../services/company.service';
import { CanActivate, Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective, NgForm, } from '@angular/forms';
import { DragulaService } from 'ng2-dragula/ng2-dragula';
import {MatSnackBar} from '@angular/material';
@Component({
  selector: 'company-upgrade',
  templateUrl: './company-upgrade.component.html',
  styleUrls: ['./company-upgrade.component.css']
})
export class CompanyUpgradeComponent implements OnInit {

  plans : any;
  showPaymentInfo : Boolean = false;
  updateBtnDisbled : Boolean = false;
  selectedId : any;
  selectedPlan : any;
  formGroup : any;
  msg : any;
  showSpinner :Boolean =false;
  payment = {
    cardnum : '',
    cardname : '',
    cvv : '',
    fname : '',
    lname : '',
    addr : '',
    no : '',
    no_months : ''
  }

  constructor(private _formBuilder: FormBuilder, private companyService: CompanyService, private routes: Router, private _flashMessagesService: FlashMessagesService,public snackBar: MatSnackBar) { }

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
      if (info == null || info == '') {
        this.routes.navigate(['/clogin']);
      }
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
    this.formGroup = this._formBuilder.group({
      cardnumValidation: ['', Validators.required],
      cardnameValidation: ['', Validators.required],
      cvvValidation : ['', Validators.required],
      fnameValidation : ['', Validators.required],
      lnameValidation : ['', Validators.required],
      addrValidation : ['', Validators.required],
      noValidation : new FormControl('', Validators.pattern(/^\d{9}|^\d{3}-\d{3}-\d{3}|^\d{3}\s\d{3}\s\d{3}$/)),
      no_monthsValidation : ['', Validators.required],
    });
    // ---------------------------------Start-------------------------------------------
    // Function      : Get All  plans
    // Params        : 
    // Returns       : All plans
    // Author        : Rinsha
    // Date          : 28-12-2017
    // Last Modified : 28-12-2017, Rinsha
    // Desc          :  
    this.companyService.getAllPlans().subscribe(res => {
      // console.log(res);
      this.plans = [];
      res.forEach(element => {
        if(element.is_default_plan == false){
          this.plans.push(element);
        }
      });
      // console.log(this.plans);
    });
  }

  // ---------------------------------Start-------------------------------------------
  // Function      : Upgrade
  // Params        : 
  // Returns       : 
  // Author        : Rinsha
  // Date          : 30-1-2018
  // Last Modified : 30-1-2018, Rinsha
  // Desc          : If the trial period of company expired, they can upgrade the app by clicking corresponding upgrade button
  upgrade(id){
    this.showPaymentInfo = true;
    this.selectedId = id;
    this.plans.forEach(element => {
      if(element._id == id){
        this.selectedPlan = element;
      }
    });
  }

  confirm(id){
    this.showSpinner =true;
    this.updateBtnDisbled = false;
    if(this.payment.cardnum == '' || this.payment.cardname == '' || this.payment.cvv == '' || this.payment.fname == '' || this.payment.lname == '' || this.payment.addr == '' || this.payment.no == '' || this.payment.no_months == '' ){
      // this.msg = "All the fields are required";
      this.showSpinner =false;
      let snackBarRef =  this.snackBar.open('* All the fields are required!', '', {
        duration: 3000
      });
      this.updateBtnDisbled = false;
    }
    else{
     
      // this.msg = "";
      // console.log(id);
      // console.log(this.payment.no_months);
      // console.log(this.plans);
      this.companyService.upgradeCompany(id, this.payment.no_months).subscribe(data => {
      // console.log(data);
      this.updateBtnDisbled = true;
      if(data.success){
        this.companyService.storeUserData(data.token, data.company);
        this.showSpinner =false;
        // this._flashMessagesService.show('Success...', { cssClass: 'alert-success', timeout: 2000 });
        let snackBarRef =  this.snackBar.open('Success...', '', {
          duration: 3000
        });
        setTimeout(() => {  
          this.routes.navigate(['/dashboard']);
        }, 3000);
      }
      else{
        this.showSpinner =false;
        // this._flashMessagesService.show('Error...', { cssClass: 'alert-danger', timeout: 2000 });
        let snackBarRef =  this.snackBar.open('* Error...!', '', {
          duration: 3000
        });
        setTimeout(() => {  
          this.routes.navigate(['/upgrade']);
        }, 3000);
      }
    });
    }
  }
}