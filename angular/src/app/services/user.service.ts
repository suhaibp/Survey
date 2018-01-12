import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';
import {Config} from '../config/config';

@Injectable()
export class UserService {
  authToken: any;
  user: any;
  serviceUrl :string;

  constructor(private http:Http, private config: Config) {
    this.serviceUrl = config.siteUrl + '/user/';
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

// ---------------------------------Start-----------------------------------------------
// Function      : Get user email from user collection
// Params        : user email registered by company
// Returns       : staus and global user id
// Author        : Rinsha
// Date          : 05-01-2018
// Last Modified : 05-01-2018, Rinsha
// Desc          : Check whether the company registered email id is registered globally
checkEmail(email){
  let h=this.setHeader();
  return this.http.get(this.serviceUrl +"checkEmail/" + email,{headers: h})
  .map(res =>res.json());
}
// ---------------------------------------End--------------------------------------------

// ---------------------------------Start------------------------------------------------
// Function      : Registration
// Params        : User data from the form
// Returns       : status and token
// Author        : Rinsha
// Date          : 08-01-2018
// Last Modified : 08-01-2018, Rinsha
// Desc          : 
registration(user, surveyId){
  let h=this.setHeader();
  return this.http.post(this.serviceUrl +"register/" + surveyId, JSON.stringify(user), {headers: h})
  .map(res =>res.json());
}
// ---------------------------------------End--------------------------------------------

// ---------------------------------Start-------------------------------------------
// Function      : Store User Data
// Params        : Token, admin id and role
// Returns       : 
// Author        : Rinsha
// Date          : 08-01-2018
// Last Modified : 08-01-2018, Rinsha
// Desc          : To locally store admin data

storeUserData(token, user){
  localStorage.setItem('id_token', token);
  localStorage.setItem('user', JSON.stringify(user));
  this.authToken = token;
  this.user = user;
}
// ---------------------------------------End--------------------------------------------

// ---------------------------------Start-------------------------------------------
// Function      : User Login
// Params        : user username,user password from form
// Returns       : Token, user id and role
// Author        : Rinsha
// Date          : 08-01-2018
// Last Modified : 08-01-2018, Rinsha
// Desc          : 
userLogin(user, surveyId){
  let h=this.setHeader();
  return this.http.post(this.serviceUrl + "/login/" + surveyId, user,{headers: h})
    .map(res => res.json());
}
// -----------------------------------End-----------------------------------------------

// ---------------------------------Start-------------------------------------------
// Function      : Get user email 
// Params        : global user id
// Returns       : user email
// Author        : Rinsha
// Date          : 08-01-2018
// Last Modified : 08-01-2018, Rinsha
// Desc          : 

getuserEmail(userId){
  let headers = this.setHeader();
  return this.http.get(this.serviceUrl + 'getUserEmailByID/' + userId, {headers: headers})
    .map(res => res.json());
}
// ----------------------------------End-------------------------------------------

}
