import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';
import {Config} from '../config/config';

@Injectable()
export class AdminService {
  authToken: any;
  admin: any;
  serviceUrl :string;

  constructor(private http:Http, private config: Config) { 
    this.serviceUrl = config.siteUrl + '/admin/';
  }
  setHeader(){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return(headers);
  }

  setHeaderWithAuthorization(){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    return(headers);
  }

  loadToken(){
    this.authToken = localStorage.getItem('id_token');
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
    return this.http.post(this.serviceUrl + "login", admin,{headers: h})
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

// ---------------------------------Start-------------------------------------------
// Function      : get logged user details
// Params        : 
// Returns       : user details
// Author        : Rinsha
// Date          : 12-1-2018
// Last Modified : 12-1-2018, Rinsha
// Desc          :
getLoggedUSerDetails(){
  let h=this.setHeaderWithAuthorization();
  return this.http.get(this.serviceUrl + "getLoggedinUser",{headers: h})
    .map(res => res.json());
}
// -----------------------------------End-----------------------------------------------

}
