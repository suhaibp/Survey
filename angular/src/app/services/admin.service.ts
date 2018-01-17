import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Config} from '../config/config';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AdminService {
  authToken: any;
  admin: any;
  loginUrl: string;
  serviceUrl :string;
  constructor(private http:Http,private config: Config) { 
    this.serviceUrl = config.siteUrl + '/admin/';
    this.loginUrl = config.siteUrl + "/admin/login";
  }

  setHeader(){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return(headers);
  }

// ---------------------------------Start-------------------------------------------
// Function      : Admin Login
// Params        : admin, contains username and password
// Returns       : Token, admin id and role
// Author        : Rinsha
// Date          : 27-12-2017
// Last Modified : 27-12-2017, Rinsha
// Desc          : Admin login
  adminLogin(admin){
    let h=this.setHeader();
    return this.http.post(this.loginUrl, admin,{headers: h})
      .map(res => res.json());
  }
// -----------------------------------End-----------------------------------------------

// ---------------------------------Start-------------------------------------------
// Function      : Store User Data
// Params        : Token, admin id and role
// Returns       : 
// Author        : Rinsha
// Date          : 27-12-2017
// Last Modified : 27-12-2017, Rinsha
// Desc          : To locally store admin data

  storeUserData(token, admin){
    localStorage.setItem('id_token', token);
    localStorage.setItem('admin', JSON.stringify(admin));
    this.authToken = token;
    this.admin = admin;
  }
// ---------------------------------------End--------------------------------------------

}
