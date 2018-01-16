import { Component, OnInit } from '@angular/core';
 import { AdminService} from './../../services/admin.service';
import { CanActivate, Router } from '@angular/router';

@Component({
  selector: 'admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  newLogin = {
    username : '',
    password : '',
  }
  showError : Boolean = false;

  constructor(private adminService : AdminService, private routes: Router) { }

  ngOnInit() {
// ---------------------------------Start-------------------------------------------
// Function      : get logged user details
// Params        : 
// Returns       : user details
// Author        : Rinsha
// Date          : 16-1-2018
// Last Modified : 16-1-2018, Rinsha
// Desc          :
  this.adminService.getLoggedUSerDetails().subscribe(info =>{
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
      this.routes.navigate(['/dashboard']);
    }
  });
// ---------------------------------End-------------------------------------------
  }

// ---------------------------------Start-------------------------------------------
// Function      : Admin Login
// Params        : admin username,admin password from form
// Returns       : Token, admin id and role
// Author        : Rinsha
// Date          : 27-12-2017
// Last Modified : 27-12-2017, Rinsha
// Desc          : Admin login

  login(){
     this.adminService.adminLogin(this.newLogin).subscribe(data => {
      if(data.success==false){
        this.showError = true;
      }
      if(data.success){
        this.showError = false;
        this.adminService.storeUserData(data.token, data.admin);
        // this.routes.navigate(['/home']);
      }
     });
  }
// -----------------------------------End------------------------------------------
}
