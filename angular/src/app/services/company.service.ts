import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';
import {Config} from '../config/config';

@Injectable()
export class CompanyService {
  authToken: any;
  company: any;
  serviceUrl :string;

  constructor(private http:Http, private config: Config) { 
    this.serviceUrl = config.siteUrl + '/company/';
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
// Function      : Get all organization type
// Params        : 
// Returns       : 
// Author        : Rinsha
// Date          : 27-12-2017
// Last Modified : 27-12-2017, Rinsha
// Desc          : 
  getAllOrgType(){
    let h=this.setHeader();
    return this.http.get(this.serviceUrl +"getAllOrgType",{headers: h})
    .map(res =>res.json());
  }
// ---------------------------------------End--------------------------------------------

// ---------------------------------Start------------------------------------------------
// Function      : Get all industry
// Params        : 
// Returns       : 
// Author        : Rinsha
// Date          : 27-12-2017
// Last Modified : 27-12-2017, Rinsha
// Desc          : 
  getAllIndustry(){
    let h=this.setHeader();
    return this.http.get(this.serviceUrl +"getAllIndustry",{headers: h})
    .map(res =>res.json());
  }
// ---------------------------------------End--------------------------------------------

// ---------------------------------Start------------------------------------------------
// Function      : Get all survey attenders
// Params        : 
// Returns       : 
// Author        : Rinsha
// Date          : 27-12-2017
// Last Modified : 27-12-2017, Rinsha
// Desc          : 
getAllSurveyAttenders(){
    let h=this.setHeader();
    return this.http.get(this.serviceUrl +"getAllSurveyAttenders",{headers: h})
    .map(res =>res.json());
  }
// ---------------------------------------End--------------------------------------------

// ---------------------------------Start------------------------------------------------
// Function      : Registration
// Params        : Company data from the form
// Returns       : 
// Author        : Rinsha
// Date          : 29-12-2017
// Last Modified : 29-12-2017, Rinsha
// Desc          : 
registration(company){
    let h=this.setHeader();
    return this.http.post(this.serviceUrl +"register", company, {headers: h})
    .map(res =>res.json());
  }
// ---------------------------------------End--------------------------------------------

// ---------------------------------Start------------------------------------------------
// Function      : Company verification
// Params        : verification id
// Returns       : 
// Author        : Rinsha
// Date          : 29-12-2017
// Last Modified : 29-12-2017, Rinsha
// Desc          : 
verifyCompany(verif_id){
let h=this.setHeader();
 return this.http.get(this.serviceUrl + "companyVerification/" + verif_id,{headers: h})
 .map((response : Response) => response.json());
}
// ---------------------------------------End--------------------------------------------

// ---------------------------------Start------------------------------------------------
// Function      : Get company details by id
// Params        : id
// Returns       : company details
// Author        : Rinsha
// Date          : 02-1-2018
// Last Modified : 02-1-2018, Rinsha
// Desc          : 
getCompanyDetailsById(id){
  let h=this.setHeader();
  return this.http.get(this.serviceUrl +"getCompanyDetails/" + id,{headers: h})
  .map(res =>res.json());
}
// ---------------------------------------End--------------------------------------------

// ---------------------------------Start------------------------------------------------
// Function      : Generate token
// Params        : company id
// Returns       : jwt token
// Author        : Rinsha
// Date          : 28-12-2017
// Last Modified : 28-12-2017, Rinsha
// Desc          : 
generateToken(id){
  let h=this.setHeader();
  return this.http.get(this.serviceUrl +"generateToken/" + id,{headers: h})
  .map(res =>res.json());
}
// ---------------------------------------End--------------------------------------------

// ---------------------------------Start-------------------------------------------
// Function      : Store User Data
// Params        : Token, admin id and role
// Returns       : 
// Author        : Rinsha
// Date          : 27-12-2017
// Last Modified : 27-12-2017, Rinsha
// Desc          : To locally store admin data

storeUserData(token, company){
  localStorage.setItem('id_token', token);
  localStorage.setItem('company', JSON.stringify(company));
  this.authToken = token;
  this.company = company;
}
// ---------------------------------------End--------------------------------------------

// ---------------------------------Start------------------------------------------------
// Function      : Register additional information 
// Params        : Company id and data from the form
// Returns       : 
// Author        : Rinsha
// Date          : 03-01-2018
// Last Modified : 03-01-2018, Rinsha
// Desc          : 
registerAdditnInfo(id, company){
  let h=this.setHeader();
  return this.http.post(this.serviceUrl +"registerAdditnInfo/" + id, company, {headers: h})
  .map(res =>res.json());
}
// ---------------------------------------End--------------------------------------------

// ---------------------------------Start------------------------------------------------
// Function      : Login
// Params        : username and password
// Returns       : token, company details and company status
// Author        : Rinsha
// Date          : 01-1-2018
// Last Modified : 01-1-2018, Rinsha
// Desc          : 
authenticateCompany(company){
  let h=this.setHeader();
  return this.http.post(this.serviceUrl +"authenticate", company, {headers: h})
  .map(res =>res.json());
}
// ---------------------------------------End--------------------------------------------

// ---------------------------------Start------------------------------------------------
// Function      : Subscribe
// Params        : 
// Returns       : 
// Author        : Rinsha
// Date          : 03-1-2018
// Last Modified : 03-1-2018, Rinsha
// Desc          : 
subscribeCompany(){
  let h=this.setHeaderWithAuthorization();
  return this.http.get(this.serviceUrl +"subscribe", {headers: h})
  .map(res =>res.json());
}
// ---------------------------------------End--------------------------------------------

// ---------------------------------Start------------------------------------------------
// Function      : Get logged user details
// Params        : 
// Returns       : get details of logged in entity
// Author        : Rinsha
// Date          : 03-01-2018
// Last Modified : 03-01-2018, Rinsha
// Desc          : 
getLoggedUSerDetails(){
  let h = this.setHeaderWithAuthorization();
  return this.http.get(this.serviceUrl + 'getLoggedinCompany',{headers:h})
  .map(res =>res.json());
}
// ---------------------------------------End--------------------------------------------

// ---------------------------------Start------------------------------------------------
// Function      : Logout
// Params        : 
// Returns       : 
// Author        : Rinsha
// Date          : 03-1-2018
// Last Modified : 03-1-2018, Rinsha
// Desc          : 
logout(){
  this.authToken = null;
  this.company = null;
  localStorage.clear();
}
// ---------------------------------------End--------------------------------------------

// ---------------------------------Start------------------------------------------------
// Function      : Get company details
// Params        : 
// Returns       : Login company details
// Author        : Rinsha
// Date          : 04-1-2018
// Last Modified : 04-1-2018, Rinsha
// Desc          : 
getMyCompany(){
  let h = this.setHeaderWithAuthorization();
  return this.http.get(this.serviceUrl + 'getCompanyDetails',{headers:h})
  .map(res =>res.json());
}
// ---------------------------------------End--------------------------------------------

// ---------------------------------Start------------------------------------------------
// Function      : Update profile
// Params        : Data from form
// Returns       : 
// Author        : Rinsha
// Date          : 03-1-2018
// Last Modified : 03-1-2018, Rinsha
// Desc          : 
updateCompany(company){
  let h = this.setHeaderWithAuthorization();
  return this.http.post(this.serviceUrl + 'updateCompany', company, {headers:h})
  .map(res =>res.json());
}
// ---------------------------------------End--------------------------------------------

// ---------------------------------Start-------------------------------------------
  // Function      : Get all user groups
  // Params        : 
  // Returns       : list of user groups with details
  // Author        : Yasir Poongadan
  // Date          : 29-12-2017
  // Last Modified : 29-12-2017, Yasir Poongadan
  // Desc          : all user groups of specific company

  getAllUserGroup(){
    let headers = this.setHeaderWithAuthorization();
    return this.http.get(this.serviceUrl + 'get-all-groups',  {headers: headers})
      .map(res => res.json());
  }

// ----------------------------------End-------------------------------------------

// ---------------------------------Start-------------------------------------------
  // Function      : update Users
  // Params        : users and group arrays
  // Returns       : status and message
  // Author        : Yasir Poongadan
  // Date          : 01-01-2018
  // Last Modified : 01-01-2018, Yasir Poongadan
  // Desc          : update Users

  updateUser(data){
    let headers = this.setHeaderWithAuthorization();
    return this.http.put(this.serviceUrl + 'update-users',data, {headers: headers})
      .map(res => res.json());
  }

// ----------------------------------End-------------------------------------------

// ---------------------------------Start-------------------------------------------
// Function      : addUsers
// Params        : users and group arrays
// Returns       : status and message
// Author        : Yasir Poongadan
// Date          : 01-01-2018
// Last Modified : 01-01-2018, Yasir Poongadan
// Desc          : Add Users

 addUsers(data){
    let headers = this.setHeaderWithAuthorization();
    return this.http.post(this.serviceUrl + 'add-users',data, {headers: headers})
      .map(res => res.json());
 }

// ----------------------------------End-------------------------------------------

// ---------------------------------Start-------------------------------------------
// Function      : addUserGroup
// Params        : Group name
// Returns       : status and message
// Author        : Yasir Poongadan
// Date          : 29-12-2017
// Last Modified : 29-12-2017, Yasir Poongadan
// Desc          : Add User Group

  addUserGroup(group){
    let headers = this.setHeaderWithAuthorization();
    return this.http.post(this.serviceUrl + 'add-user-group',JSON.stringify({group: group}), {headers: headers})
      .map(res => res.json());
  }

// ----------------------------------End-------------------------------------------

// ---------------------------------Start-------------------------------------------
// Function      : Get user email 
// Params        : company user id
// Returns       : user details
// Author        : Rinsha
// Date          : 05-01-2018
// Last Modified : 05-01-2018, Rinsha
// Desc          : 

getuserEmail(userId){
    let headers = this.setHeader();
    return this.http.get(this.serviceUrl + 'getUserEmailByID/' + userId, {headers: headers})
      .map(res => res.json());
  }
// ----------------------------------End-------------------------------------------

// ---------------------------------Start-------------------------------------------
// Function      : change mail response status 
// Params        : company user id and survey id
// Returns       : 
// Author        : Rinsha
// Date          : 09-01-2018
// Last Modified : 09-01-2018, Rinsha
// Desc          : change mail response status when the user click the link in email

changeMailResponseStatus(userId, surveyId){
  let headers = this.setHeaderWithAuthorization();
  return this.http.post(this.serviceUrl + 'changeMailResponseStatus/' + surveyId,JSON.stringify({userId}), {headers: headers})
    .map(res => res.json());
}

// ----------------------------------End-------------------------------------------

// ---------------------------------Start-------------------------------------------
// Function      : get all Mail responsed users
// Params        : 
// Returns       : count of mail responsed users
// Author        : Rinsha
// Date          : 10-1-2018
// Last Modified : 11-1-2018, Rinsha
// Desc          : 

getMailResponseCount(data){
  let id = data.id;
  let headers = this.setHeaderWithAuthorization();
  return this.http.get(this.serviceUrl +"getMailResponseCount/" + id, {headers: headers})
    .map(res => res.json());
}
// ----------------------------------End-------------------------------------------

// ---------------------------------Start-------------------------------------------
// Function      : get all Mail viewed users
// Params        : 
// Returns       : count of mail viewed users
// Author        : Rinsha
// Date          : 10-1-2018
// Last Modified : 11-1-2018, Rinsha
// Desc          : 

getMailViewedCount(data){
  let id = data.id;
  let headers = this.setHeaderWithAuthorization();
  return this.http.get(this.serviceUrl +"getMailViewedCount/" + id, {headers: headers})
    .map(res => res.json());
}
// ----------------------------------End-------------------------------------------

// ---------------------------------Start-------------------------------------------
// Function      : get all survey completed users
// Params        : 
// Returns       : count of survey completed users
// Author        : Rinsha
// Date          : 10-1-2018
// Last Modified : 11-1-2018, Rinsha
// Desc          : 

getSurveyCompletedCount(data){
  let id = data.id;
  let headers = this.setHeaderWithAuthorization();
  return this.http.get(this.serviceUrl +"getSurveyCompletedCount/" + id, {headers: headers})
    .map(res => res.json());
}
// ----------------------------------End-------------------------------------------

// ---------------------------------Start-------------------------------------------
// Function      : get all invited users
// Params        : 
// Returns       : count of invited users
// Author        : Rinsha
// Date          : 10-1-2018
// Last Modified : 11-1-2018, Rinsha
// Desc          : 

getInvitedUserCount(data){
  let id = data.id;
  let headers = this.setHeaderWithAuthorization();
  return this.http.get(this.serviceUrl +"getInvitedUserCount/" + id, {headers: headers})
    .map(res => res.json());
}
// ----------------------------------End-------------------------------------------

// ---------------------------------Start-------------------------------------------
// Function      : get all survey
// Params        : 
// Returns       : count of mail responsed users, mail viewed users
// Author        : Rinsha
// Date          : 16-1-2018
// Last Modified : 16-1-2018, Rinsha
// Desc          : 

getAllSurvey(){
  let headers = this.setHeaderWithAuthorization();
  return this.http.get(this.serviceUrl +"getAllSurvey", {headers: headers})
    .map(res => res.json());
}
// ----------------------------------End-------------------------------------------

}

