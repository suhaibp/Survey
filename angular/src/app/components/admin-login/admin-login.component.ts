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
