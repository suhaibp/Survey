import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';
import {Config} from '../config/config';

@Injectable()
export class AdminService {
  authToken: any;
  admin: any;
  loginUrl: string;
  serviceUrl :string;

  constructor(private http:Http,config:Config) {
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


// ---------------------------------Start-------------------------------------------
// Function      : Admin company management
// Params        : 
// Returns       : 
// Author        : sudha
// Date          : 28-12-2017
// Last Modified : 
// Desc          : all companieslist



//all companies
getAllcompanies(){
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  return this.http.get(this.serviceUrl + 'allcompanies',{headers:headers})
  .map(res =>res.json());

}
// -----------------------------------End------------------------------------------
// ---------------------------------Start-------------------------------------------
// Function      : Admin company management
// Params        : 
// Returns       : 
// Author        : sudha
// Date          : 29-12-2017
// Last Modified : 
// Desc          : all subscribedcompanies

//all subscribedcompanies
getAllsubcompanies(){
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  return this.http.get(this.serviceUrl + 'allsubcompanies',{headers:headers})
  .map(res =>res.json());

}
// -----------------------------------End------------------------------------------
// ---------------------------------Start-------------------------------------------
// Function      : Admin company management
// Params        : 
// Returns       : 
// Author        : sudha
// Date          : 03-01-2018
// Last Modified : 
// Desc          : all subscribedactivecompanies


getAllsubactivecompanies(){
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  return this.http.get(this.serviceUrl + 'allsubactivecompanies',{headers:headers})
  .map(res =>res.json());

}
// -----------------------------------End------------------------------------------
// ---------------------------------Start-------------------------------------------
// Function      : Admin company management
// Params        : 
// Returns       : 
// Author        : sudha
// Date          : 03-01-2018
// Last Modified : 
// Desc          : all subscribedblockcompanies


getAllsubblockcompanies(){
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  return this.http.get(this.serviceUrl + 'allsubblockcompanies',{headers:headers})
  .map(res =>res.json());

}
// -----------------------------------End------------------------------------------
// ---------------------------------Start-------------------------------------------
// Function      : Admin company management
// Params        : 
// Returns       : 
// Author        : sudha
// Date          : 03-01-2018
// Last Modified : 
// Desc          : all subscribeddeletecompanies


getAllsubdeletecompanies(){
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  return this.http.get(this.serviceUrl + 'allsubdeletecompanies',{headers:headers})
  .map(res =>res.json());

}
// -----------------------------------End------------------------------------------
// ---------------------------------Start-------------------------------------------
// Function      : Admin company management
// Params        : 
// Returns       : 
// Author        : sudha
// Date          : 29-12-2017
// Last Modified : 
// Desc          : all trailcompanies

//all trailcompanies
getAlltrialcompanies(){
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  return this.http.get(this.serviceUrl + 'alltrialcompanies',{headers:headers})
  .map(res =>res.json());

}
// -----------------------------------End------------------------------------------
// ---------------------------------Start-------------------------------------------
// Function      : Admin company management
// Params        : 
// Returns       : 
// Author        : sudha
// Date          : 03-01-2018
// Last Modified : 
// Desc          : all trialactivecompanies


getAlltrialactivecompanies(){
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  return this.http.get(this.serviceUrl + 'alltrialactivecompanies',{headers:headers})
  .map(res =>res.json());

}
// -----------------------------------End------------------------------------------
// ---------------------------------Start-------------------------------------------
// Function      : Admin company management
// Params        : 
// Returns       : 
// Author        : sudha
// Date          : 03-01-2018
// Last Modified : 
// Desc          : all trialblockcompanies


getAlltrialblockcompanies(){
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  return this.http.get(this.serviceUrl + 'alltrialblockcompanies',{headers:headers})
  .map(res =>res.json());

}
// -----------------------------------End------------------------------------------
// ---------------------------------Start-------------------------------------------
// Function      : Admin company management
// Params        : 
// Returns       : 
// Author        : sudha
// Date          : 03-01-2018
// Last Modified : 
// Desc          : all trialdeletecompanies


getAlltrialdeletecompanies(){
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  return this.http.get(this.serviceUrl + 'alltrialdeletecompanies',{headers:headers})
  .map(res =>res.json());

}
// -----------------------------------End------------------------------------------

// ---------------------------------Start-------------------------------------------
// Function      : Admin company management
// Params        : 
// Returns       : 
// Author        : sudha
// Date          : 29-12-2017
// Last Modified : 
// Desc          : all notverifiedcompanies
//all not verified companies
getAllnotverficompanies(){
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  return this.http.get(this.serviceUrl + 'allnotverficompanies',{headers:headers})
  .map(res =>res.json());

}
// -----------------------------------End------------------------------------------
// ---------------------------------Start-------------------------------------------
// Function      : Admin company management
// Params        : 
// Returns       : 
// Author        : sudha
// Date          : 03-01-2018
// Last Modified : 
// Desc          : all notverfiactivecompanies


getAllnotverfiactivecompanies(){
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  return this.http.get(this.serviceUrl + 'allnotverfiactivecompanies',{headers:headers})
  .map(res =>res.json());

}
// -----------------------------------End------------------------------------------
// ---------------------------------Start-------------------------------------------
// Function      : Admin company management
// Params        : 
// Returns       : 
// Author        : sudha
// Date          : 03-01-2018
// Last Modified : 
// Desc          : all notverfiblockcompanies


getAllnotverfiblockcompanies(){
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  return this.http.get(this.serviceUrl + 'allnotverfiblockcompanies',{headers:headers})
  .map(res =>res.json());

}
// -----------------------------------End------------------------------------------
// ---------------------------------Start-------------------------------------------
// Function      : Admin company management
// Params        : 
// Returns       : 
// Author        : sudha
// Date          : 03-01-2018
// Last Modified : 
// Desc          : all notverfideletecompanies


getAllnotverfideletecompanies(){
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  return this.http.get(this.serviceUrl + 'allnotverfideletecompanies',{headers:headers})
  .map(res =>res.json());

}
// -----------------------------------End------------------------------------------

// ---------------------------------Start-------------------------------------------
// Function      : Admin company management
// Params        : 
// Returns       : 
// Author        : sudha
// Date          : 29-12-2017
// Last Modified : 
// Desc          : all expired companies
//all expired companies
getAllexpiredcompanies(){
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  return this.http.get(this.serviceUrl + 'allexpiredcompanies',{headers:headers})
  .map(res =>res.json());

}
// -----------------------------------End------------------------------------------
// ---------------------------------Start-------------------------------------------
// Function      : Admin company management
// Params        : 
// Returns       : 
// Author        : sudha
// Date          : 03-01-2018
// Last Modified : 
// Desc          : all expiredactivecompanies


getAllexpiredactivecompanies(){
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  return this.http.get(this.serviceUrl + 'allexpiredactivecompanies',{headers:headers})
  .map(res =>res.json());

}
// -----------------------------------End------------------------------------------
// ---------------------------------Start-------------------------------------------
// Function      : Admin company management
// Params        : 
// Returns       : 
// Author        : sudha
// Date          : 03-01-2018
// Last Modified : 
// Desc          : all expiredblockcompanies


getAllexpiredblockcompanies(){
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  return this.http.get(this.serviceUrl + 'allexpiredblockcompanies',{headers:headers})
  .map(res =>res.json());

}
// -----------------------------------End------------------------------------------
// ---------------------------------Start-------------------------------------------
// Function      : Admin company management
// Params        : 
// Returns       : 
// Author        : sudha
// Date          : 03-01-2018
// Last Modified : 
// Desc          : all expireddeletecompanies


getAllexpireddeletecompanies(){
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  return this.http.get(this.serviceUrl + 'allexpireddeletecompanies',{headers:headers})
  .map(res =>res.json());

}
// -----------------------------------End------------------------------------------
// ---------------------------------Start-------------------------------------------
// Function      : Allactivecompanies
// Params        : 
// Returns       : 
// Author        : sudha
// Date          : 29-12-2017
// Last Modified : 
// Desc          : Allactivecompanies


getAllactivecompanies(){
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  return this.http.get(this.serviceUrl + 'allactivecompanies',{headers:headers})
  .map(res =>res.json());

}
// -----------------------------------End------------------------------------------

// ---------------------------------Start-------------------------------------------
// Function      : Admin company management
// Params        : 
// Returns       : 
// Author        : sudha
// Date          : 29-12-2017
// Last Modified : 
// Desc          : all blocked companies

//all blocked companies
getAllblockedcompanies(){
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  return this.http.get(this.serviceUrl + 'allblockedcompanies',{headers:headers})
  .map(res =>res.json());

}
// -----------------------------------End------------------------------------------

// ---------------------------------Start-------------------------------------------
// Function      : Admin company management
// Params        : 
// Returns       : 
// Author        : sudha
// Date          : 29-12-2017
// Last Modified : 
// Desc          : all deleted companies

//all deleted companies
getAlldeletedcompanies(){
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  return this.http.get(this.serviceUrl + 'alldeletedcompanies',{headers:headers})
  .map(res =>res.json());

}
// -----------------------------------End------------------------------------------

// ---------------------------------Start-------------------------------------------
// Function      : Admin company management
// Params        : company id
// Returns       : 
// Author        : sudha
// Date          : 29-12-2017
// Last Modified : 
// Desc          : delete company

//delete company
deleteCompany(id){
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  return this.http.delete(this.serviceUrl + 'deletecompany/'+id,{headers:headers})
  .map(res =>res.json());
}
// -----------------------------------End------------------------------------------

// ---------------------------------Start-------------------------------------------
// Function      : Admin company management
// Params        : company id
// Returns       : 
// Author        : sudha
// Date          : 29-12-2017
// Last Modified : 
// Desc          : block company

//block company
blockCompany(id){
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  return this.http.put(this.serviceUrl + 'blockcompany/'+id,{headers:headers})
  .map(res =>res.json());
}
// -----------------------------------End------------------------------------------

// ---------------------------------Start-------------------------------------------
// Function      : Admin company management
// Params        : company id
// Returns       : 
// Author        : sudha
// Date          : 29-12-2017
// Last Modified : 
// Desc          : unblock company

//unblock company
unblockCompany(id){
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  return this.http.put(this.serviceUrl + 'unblockcompany/'+id,{headers:headers})
  .map(res =>res.json());
}
// -----------------------------------End------------------------------------------
// ---------------------------------Start-------------------------------------------
// Function      : Admin user management
// Params        : 
// Returns       : 
// Author        : sudha
// Date          : 29-12-2017
// Last Modified : 
// Desc          : all users


getAllusers(){
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  return this.http.get(this.serviceUrl + 'allusers',{headers:headers})
  .map(res =>res.json());

}
// -----------------------------------End------------------------------------------
// ---------------------------------Start-------------------------------------------
// Function      : Admin user management
// Params        : 
// Returns       : 
// Author        : sudha
// Date          : 29-12-2017
// Last Modified : 
// Desc          : all active users


getAllactiveusers(){
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  return this.http.get(this.serviceUrl + 'allactiveusers',{headers:headers})
  .map(res =>res.json());

}
// -----------------------------------End------------------------------------------
// ---------------------------------Start-------------------------------------------
// Function      : Admin user management
// Params        : 
// Returns       : 
// Author        : sudha
// Date          : 29-12-2017
// Last Modified : 
// Desc          : all block users


getAllblockusers(){
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  return this.http.get(this.serviceUrl + 'allblockusers',{headers:headers})
  .map(res =>res.json());

}
// -----------------------------------End------------------------------------------
// ---------------------------------Start-------------------------------------------
// Function      : Admin user management
// Params        : 
// Returns       : 
// Author        : sudha
// Date          : 29-12-2017
// Last Modified : 
// Desc          : all delete users


getAlldeleteusers(){
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  return this.http.get(this.serviceUrl + 'alldeleteusers',{headers:headers})
  .map(res =>res.json());

}
// -----------------------------------End------------------------------------------
// ---------------------------------Start-------------------------------------------
// Function      : Admin user management
// Params        : id
// Returns       : 
// Author        : sudha
// Date          : 29-12-2017
// Last Modified : 
// Desc          : delete user


deleteUser(id){
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  return this.http.delete(this.serviceUrl + 'deleteuser/'+id,{headers:headers})
  .map(res =>res.json());
}
// -----------------------------------End------------------------------------------
// ---------------------------------Start-------------------------------------------
// Function      : Admin user management
// Params        :  id
// Returns       : 
// Author        : sudha
// Date          : 29-12-2017
// Last Modified : 
// Desc          : block user


blockUser(id){
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  return this.http.put(this.serviceUrl + 'blockuser/'+id,{headers:headers})
  .map(res =>res.json());
}
// -----------------------------------End------------------------------------------
// ---------------------------------Start-------------------------------------------
// Function      : Admin user management
// Params        : id
// Returns       : 
// Author        : sudha
// Date          : 29-12-2017
// Last Modified : 
// Desc          : unblock user


unblockUser(id){
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  return this.http.put(this.serviceUrl + 'unblockuser/'+id,{headers:headers})
  .map(res =>res.json());
}
// -----------------------------------End------------------------------------------
// ---------------------------------Start-------------------------------------------
// Function      : Admin user management
// Params        : 
// Returns       : 
// Author        : sudha
// Date          : 29-12-2017
// Last Modified : 01-01-2018
// Desc          : all requested users


getAllrequsers(){
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  return this.http.get(this.serviceUrl + 'allrequsers',{headers:headers})
  .map(res =>res.json());

}
// -----------------------------------End------------------------------------------


// ---------------------------------Start-------------------------------------------
// Function      : Admin user management
// Params        : 
// Returns       : 
// Author        : sudha
// Date          : 01-01-2018
// Last Modified : 03-01-2018
// Desc          : reject users notifcation



rejectUser(id){
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  return this.http.put(this.serviceUrl + 'rejectuser/'+id,{headers:headers})
  .map(res =>res.json());
}
// -----------------------------------End------------------------------------------
// ---------------------------------Start-------------------------------------------
// Function      : Admin user management
// Params        : 
// Returns       : 
// Author        : sudha
// Date          : 03-04-2018
// Last Modified : 
// Desc          : accept user notifcation



acceptUser(id){
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  return this.http.put(this.serviceUrl + 'acceptuser/'+id,{headers:headers})
  .map(res =>res.json());
}
// -----------------------------------End------------------------------------------
// ---------------------------------Start-------------------------------------------
// Function      : Admin notification management
// Params        : 
// Returns       : 
// Author        : sudha
// Date          : 02-01-2018
// Last Modified : 
// Desc          : notification

getAdminnotification(){
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  return this.http.get(this.serviceUrl + 'notification',{headers:headers})
  .map(res =>res.json());

}
// -----------------------------------End------------------------------------------
// ---------------------------------Start-------------------------------------------
// Function      : Admin user notification management
// Params        : 
// Returns       : 
// Author        : sudha
// Date          : 03-04-2018
// Last Modified : 
// Desc          : view status user notifcation



viewstatusUser(id,cmpid){
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  var data = {user_id :id,company_id : cmpid}
  return this.http.put(this.serviceUrl + 'viewstatususer',data,{headers:headers})
  .map(res =>res.json());
}
// -----------------------------------End------------------------------------------
// ---------------------------------Start-------------------------------------------
// Function      : Admin piechart
// Params        : 
// Returns       : 
// Author        : sudha
// Date          : 05-01-2018
// Last Modified : 
// Desc          : adminchart company vs status

getchart1(){
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  return this.http.get(this.serviceUrl + 'adminchart1',{headers:headers})
  .map(res =>res.json());

}
// -----------------------------------End------------------------------------------
// ---------------------------------Start-------------------------------------------
// Function      : Admin piechart
// Params        : 
// Returns       : 
// Author        : sudha
// Date          : 10-01-2018
// Last Modified : 11-01-2018
// Desc          : adminchart company vs survey

getchartbar(){
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  return this.http.get(this.serviceUrl + 'admind3',{headers:headers})
  .map(res =>res.json());

}
// -----------------------------------End------------------------------------------
}
