import { Injectable,Component, OnInit  } from '@angular/core';
import {Config} from '../config/config';
import { Http, Headers, Response, Request, RequestMethod, URLSearchParams, RequestOptions } from "@angular/http";
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class UserService {

  serviceUrl: string;  
  authToken: any;
  user: any;
  constructor(private http: Http,private config: Config) { 
    this.serviceUrl = config.siteUrl + '/user/';
  }


  // ---------------------------------Start-------------------------------------------
  // Function      : set Header
  // Params        : 
  // Returns       : header
  // Author        : Manu Prasad
  // Date          : 27-12-2017
  // Last Modified : 27-12-2017, Manu Prasad, Desc:
  // Desc          : to set header to call an api
  setHeader(){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return(headers);
  }
  // ----------------------------------End-------------------------------------------

  // ---------------------------------Start-------------------------------------------

  // Function      : getSurvey
  // Params        : 
  // Returns       : survey data
  // Author        : Manu Prasad
  // Date          : 3-1-2018
  // Last Modified : 3-1-2018, Manu Prasad, Desc:
  // Desc          : get survey to be displayed for the user
  getSurvey(surveyId){
    let headers = this.setHeader();
    return this.http.get(this.serviceUrl+'get-survey/'+surveyId,  {headers: headers})
      .map(res => res.json());
} 
// ----------------------------------End-------------------------------------------


// ---------------------------------Start-------------------------------------------

  // Function      : getSurvey
  // Params        : 
  // Returns       : survey data
  // Author        : Manu Prasad
  // Date          : 3-1-2018
  // Last Modified : 3-1-2018, Manu Prasad, Desc:
  // Desc          : get survey to be displayed for the user
  getNotRunningSurvey(surveyId){
    let headers = this.setHeader();
    return this.http.get(this.serviceUrl+'get-not-run-survey/'+surveyId,  {headers: headers})
      .map(res => res.json());
} 
// ----------------------------------End-------------------------------------------

// ---------------------------------Start-------------------------------------------

  // Function      : save survey
  // Params        : 
  // Returns       : response save status
  // Author        : Manu Prasad
  // Date          : 9-1-2018
  // Last Modified : 9-1-2018, Manu Prasad, Desc:
  // Desc          : routing used to submit the survey
  submitSurvey(survey, surveyId){
    let headers = this.setHeader();
    return this.http.put(this.serviceUrl+'submit-survey/'+surveyId, survey, {headers: headers})
      .map(res => res.json());
  }
  // ----------------------------------End-------------------------------------------
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

// ---------------------------------Start------------------------------------------------
// Function      : Get logged user details
// Params        : 
// Returns       : get details of logged in entity
// Author        : Rinsha
// Date          : 16-01-2018
// Last Modified : 16-01-2018, Rinsha
// Desc          : 
getLoggedUSerDetails(){
  let h = this.setHeaderWithAuthorization();
  return this.http.get(this.serviceUrl + 'getLoggedinUser',{headers:h})
  .map(res =>res.json());
}
// ---------------------------------------End--------------------------------------------
}
