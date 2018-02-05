import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { tokenNotExpired } from 'angular2-jwt';
import { Config } from '../config/config';
import 'rxjs/add/operator/map';
@Injectable()
export class AdminService {
  serviceUrl: string;
  authToken: any;
  admin: any;
  constructor(private http: Http, private config: Config) {
    this.serviceUrl = config.siteUrl + '/admin/';
  }
  setHeader() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return (headers);
  }
  //  ---------------------------------Start-------------------------------------------
  // Function      : addCategory
  // Params        : catg
  // Returns       : 
  // Author        : Jooshifa
  // Date          : 27-12-2017
  // Last Modified : 29-12-2017, Jooshifa 
  // Desc          : for add survey category in admin master settings


  addCategory(catg: any) {
    let h = this.setHeader();
    return this.http.post(this.serviceUrl + "/addsurveycategory", JSON.stringify(catg), { headers: h })
      .map(res => res.json());

  }

  // < ----------------------------------End------------------------------------------- 

  //  ---------------------------------Start-------------------------------------------
  // Function      : addIndustry
  // Params        : indus
  // Returns       : 
  // Author        : Jooshifa
  // Date          : 27-12-2017
  // Last Modified : 29-12-2017, Jooshifa 
  // Desc          : for add industry in admin master settings


  addIndustry(indus: any) {
    let h = this.setHeader();
    return this.http.post(this.serviceUrl + "/addindustry", JSON.stringify(indus), { headers: h })
      .map(res => res.json());

  }

  // <----------------------------------End-----------------------------------------

  //  ---------------------------------Start-------------------------------------------
  // Function      : addOraganization
  // Params        : org
  // Returns       : 
  // Author        : Jooshifa
  // Date          : 27-12-2017
  // Last Modified : 29-12-2017, Jooshifa 
  // Desc          : for add Organization type in admin master settings


  addOrganizationType(org: any) {
    let h = this.setHeader();
    return this.http.post(this.serviceUrl + "/addorganizationtype", JSON.stringify(org), { headers: h })
      .map(res => res.json());

  }
  // < ----------------------------------End------------------------------------------- 

  //  ---------------------------------Start-------------------------------------------
  // Function      : addAttenderType
  // Params        : attnd
  // Returns       : 
  // Author        : Jooshifa
  // Date          : 27-12-2017
  // Last Modified : 29-12-2017, Jooshifa 
  // Desc          : for add survey attender type in admin master settings

  addAttenderType(attnd: any) {
    let h = this.setHeader();
    return this.http.post(this.serviceUrl + "/addattendertype", JSON.stringify(attnd), { headers: h })
      .map(res => res.json());

  }
  // < ----------------------------------End------------------------------------------- 

  //  ---------------------------------Start-------------------------------------------
  // Function      : getCategory
  // Params        : 
  // Returns       : 
  // Author        : Jooshifa
  // Date          : 28-12-2017
  // Last Modified : 29-12-2017, Jooshifa 
  // Desc          : for get all saved survey categories

  getCategory() {
    let h = this.setHeader();
    return this.http.get(this.serviceUrl + "/getsurveycategory", { headers: h })
      .map(res => res.json());

  }

  // < ----------------------------------End------------------------------------------- 

  //  ---------------------------------Start-------------------------------------------
  // Function      : getIndustry
  // Params        : 
  // Returns       : 
  // Author        : Jooshifa
  // Date          : 28-12-2017
  // Last Modified : 29-12-2017, Jooshifa 
  // Desc          : for get all industries

  getIndustry() {
    let h = this.setHeader();
    return this.http.get(this.serviceUrl + "/getindustry", { headers: h })
      .map(res => res.json());

  }

  // < ----------------------------------End------------------------------------------- 

  //  ---------------------------------Start-------------------------------------------
  // Function      : getOrganization
  // Params        : 
  // Returns       : 
  // Author        : Jooshifa
  // Date          : 28-12-2017
  // Last Modified : 29-12-2017, Jooshifa 
  // Desc          : for get all oraganization types

  getOrganizationType() {
    let h = this.setHeader();
    return this.http.get(this.serviceUrl + "/getorganizationtype", { headers: h })
      .map(res => res.json());

  }

  // < ----------------------------------End------------------------------------------- 

  //  ---------------------------------Start-------------------------------------------
  // Function      : getAttenderType
  // Params        : 
  // Returns       : 
  // Author        : Jooshifa
  // Date          : 28-12-2017
  // Last Modified : 29-12-2017, Jooshifa 
  // Desc          : for get all survey attender types

  getAttenderType() {
    let h = this.setHeader();
    return this.http.get(this.serviceUrl + "/getattendertype", { headers: h })
      .map(res => res.json());

  }

  // < ----------------------------------End------------------------------------------- 

  //  ---------------------------------Start-------------------------------------------
  // Function      : deleteCategory
  // Params        : id
  // Returns       : 
  // Author        : Jooshifa
  // Date          : 28-12-2017
  // Last Modified : 29-12-2017, Jooshifa 
  // Desc          : for delete a survey category

  deleteCategory(id) {
    let h = this.setHeader();
    return this.http.delete(this.serviceUrl + "/deletesurveycategory/" + id, { headers: h })
      .map(res => res.json())

  }
  // < ----------------------------------End------------------------------------------- 

  //  ---------------------------------Start-------------------------------------------
  // Function      : deleteIndustry
  // Params        : id
  // Returns       : 
  // Author        : Jooshifa
  // Date          : 28-12-2017
  // Last Modified : 29-12-2017, Jooshifa 
  // Desc          : for delete a industry

  deleteIndustry(id) {
    let h = this.setHeader();
    return this.http.delete(this.serviceUrl + "/deleteindustry/" + id, { headers: h })
      .map(res => res.json())

  }
  // < ----------------------------------End------------------------------------------- 

  //  ---------------------------------Start-------------------------------------------
  // Function      : deleteOrganizationType
  // Params        : id
  // Returns       : 
  // Author        : Jooshifa
  // Date          : 28-12-2017
  // Last Modified : 29-12-2017, Jooshifa 
  // Desc          : for delete a Organization type

  deleteOrganizationType(id) {
    let h = this.setHeader();
    return this.http.delete(this.serviceUrl + "/deleteorganizationtype/" + id, { headers: h })
      .map(res => res.json())

  }
  // < ----------------------------------End------------------------------------------- 

  //  ---------------------------------Start-------------------------------------------
  // Function      : deleteAttenderType
  // Params        : id
  // Returns       : 
  // Author        : Jooshifa
  // Date          : 28-12-2017
  // Last Modified : 29-12-2017, Jooshifa 
  // Desc          : for delete a survey attender type

  deleteAttenderType(id) {
    let h = this.setHeader();
    return this.http.delete(this.serviceUrl + "/deleteattendertype/" + id, { headers: h })
      .map(res => res.json())

  }
  // < ----------------------------------End------------------------------------------- 

  //  ---------------------------------Start-------------------------------------------
  // Function      : getSinglecategory
  // Params        : id
  // Returns       : 
  // Author        : Jooshifa
  // Date          : 29-12-2017
  // Last Modified : 29-12-2017, Jooshifa 
  // Desc          : for get a single category 

  getSinglecategory(id) {
    // console.log("id get in service");
    let h = this.setHeader();
    return this.http.get(this.serviceUrl + "/getsinglesurveycategory/" + id, { headers: h })
      .map(res => res.json());
  }

  // < ----------------------------------End------------------------------------------- 

  //  ---------------------------------Start-------------------------------------------
  // Function      : getSingleindustry
  // Params        : id
  // Returns       : 
  // Author        : Jooshifa
  // Date          : 29-12-2017
  // Last Modified : 29-12-2017, Jooshifa 
  // Desc          : for get a single industry 

  getSingleindustry(id) {
    // console.log("id get in service");
    let h = this.setHeader();
    return this.http.get(this.serviceUrl + "/getsingleindustry/" + id, { headers: h })
      .map(res => res.json());
  }

  // < ----------------------------------End------------------------------------------- 

  //  ---------------------------------Start-------------------------------------------
  // Function      : getSingleOrganizationType
  // Params        : id
  // Returns       : 
  // Author        : Jooshifa
  // Date          : 29-12-2017
  // Last Modified : 29-12-2017, Jooshifa 
  // Desc          : for get a single Organization type 

  getSingleOrganizationType(id) {
    // console.log("id get in service");
    let h = this.setHeader();
    return this.http.get(this.serviceUrl + "/getsingleorganizationtype/" + id, { headers: h })
      .map(res => res.json());
  }

  // < ----------------------------------End------------------------------------------- 

  //  ---------------------------------Start-------------------------------------------
  // Function      : getSingleAttenderType
  // Params        : id
  // Returns       : 
  // Author        : Jooshifa
  // Date          : 29-12-2017
  // Last Modified : 29-12-2017, Jooshifa 
  // Desc          : for get a single survey attender type 

  getSingleAttenderType(id) {
    let h = this.setHeader();
    return this.http.get(this.serviceUrl + "/getsingleattendertype/" + id, { headers: h })
      .map(res => res.json());
  }

  // < ----------------------------------End------------------------------------------- 

  //  ---------------------------------Start-------------------------------------------
  // Function      : updatecategory
  // Params        : id
  // Returns       : 
  // Author        : Jooshifa
  // Date          : 29-12-2017
  // Last Modified : 29-12-2017, Jooshifa 
  // Desc          : Update a category name
  updateCategory(catgr: any) {
    let h = this.setHeader();
    return this.http.put(this.serviceUrl + "/updatesurveycategory/" + catgr._id, (catgr), { headers: h })
      .map(res => res.json());

  }
  // < ----------------------------------End------------------------------------------- 

  //  ---------------------------------Start-------------------------------------------
  // Function      : updateIndustry
  // Params        : id
  // Returns       : 
  // Author        : Jooshifa
  // Date          : 29-12-2017
  // Last Modified : 29-12-2017, Jooshifa 
  // Desc          : Update a industry 
  updateIndustry(indus: any) {
    let h = this.setHeader();
    return this.http.put(this.serviceUrl + "/updateindustry/" + indus._id, (indus), { headers: h })
      .map(res => res.json());

  }
  // < ----------------------------------End------------------------------------------- 

  //  ---------------------------------Start-------------------------------------------
  // Function      : updatecategory
  // Params        : id
  // Returns       : 
  // Author        : Jooshifa
  // Date          : 29-12-2017
  // Last Modified : 29-12-2017, Jooshifa 
  // Desc          : Update a category name
  updateOrganizationType(orgn: any) {
    let h = this.setHeader();
    return this.http.put(this.serviceUrl + "/updateorganizationtype/" + orgn._id, (orgn), { headers: h })
      .map(res => res.json());

  }
  // < ----------------------------------End------------------------------------------- 

  //  ---------------------------------Start-------------------------------------------
  // Function      : updatecategory
  // Params        : id
  // Returns       : 
  // Author        : Jooshifa
  // Date          : 29-12-2017
  // Last Modified : 29-12-2017, Jooshifa 
  // Desc          : Update a category name
  updateAttenderType(attender: any) {
    let h = this.setHeader();
    return this.http.put(this.serviceUrl + "/updateattendertype/" + attender._id, (attender), { headers: h })
      .map(res => res.json());

  }
  // < ----------------------------------End------------------------------------------- 

  setHeaderWithAuthorization() {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return (headers);
  }

  loadToken() {
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
  adminLogin(admin) {
    let h = this.setHeader();
    return this.http.post(this.serviceUrl + "login", admin, { headers: h })
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

  storeUserData(token, admin) {
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

  getAllcompanies() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.serviceUrl + 'allcompanies', { headers: headers })
      .map(res => res.json());

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
  getAllsubcompanies() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.serviceUrl + 'allsubcompanies', { headers: headers })
      .map(res => res.json());

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

  getAllsubactivecompanies() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.serviceUrl + 'allsubactivecompanies', { headers: headers })
      .map(res => res.json());

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

  getAllsubblockcompanies() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.serviceUrl + 'allsubblockcompanies', { headers: headers })
      .map(res => res.json());

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

  getAllsubdeletecompanies() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.serviceUrl + 'allsubdeletecompanies', { headers: headers })
      .map(res => res.json());

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
  getAlltrialcompanies() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.serviceUrl + 'alltrialcompanies', { headers: headers })
      .map(res => res.json());

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

  getAlltrialactivecompanies() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.serviceUrl + 'alltrialactivecompanies', { headers: headers })
      .map(res => res.json());

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
  getAlltrialblockcompanies() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.serviceUrl + 'alltrialblockcompanies', { headers: headers })
      .map(res => res.json());

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

  getAlltrialdeletecompanies() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.serviceUrl + 'alltrialdeletecompanies', { headers: headers })
      .map(res => res.json());

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
  getAllnotverficompanies() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.serviceUrl + 'allnotverficompanies', { headers: headers })
      .map(res => res.json());

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

  getAllnotverfiactivecompanies() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.serviceUrl + 'allnotverfiactivecompanies', { headers: headers })
      .map(res => res.json());

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

  getAllnotverfiblockcompanies() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.serviceUrl + 'allnotverfiblockcompanies', { headers: headers })
      .map(res => res.json());

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

  getAllnotverfideletecompanies() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.serviceUrl + 'allnotverfideletecompanies', { headers: headers })
      .map(res => res.json());

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
  getAllexpiredcompanies() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.serviceUrl + 'allexpiredcompanies', { headers: headers })
      .map(res => res.json());

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

  getAllexpiredactivecompanies() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.serviceUrl + 'allexpiredactivecompanies', { headers: headers })
      .map(res => res.json());

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

  getAllexpiredblockcompanies() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.serviceUrl + 'allexpiredblockcompanies', { headers: headers })
      .map(res => res.json());

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

  getAllexpireddeletecompanies() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.serviceUrl + 'allexpireddeletecompanies', { headers: headers })
      .map(res => res.json());

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

  getAllactivecompanies() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.serviceUrl + 'allactivecompanies', { headers: headers })
      .map(res => res.json());

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
  getAllblockedcompanies() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.serviceUrl + 'allblockedcompanies', { headers: headers })
      .map(res => res.json());

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
  getAlldeletedcompanies() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.serviceUrl + 'alldeletedcompanies', { headers: headers })
      .map(res => res.json());

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
  deleteCompany(id) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.delete(this.serviceUrl + 'deletecompany/' + id, { headers: headers })
      .map(res => res.json());
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
  blockCompany(id) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put(this.serviceUrl + 'blockcompany/' + id, { headers: headers })
      .map(res => res.json());
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
  unblockCompany(id) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put(this.serviceUrl + 'unblockcompany/' + id, { headers: headers })
      .map(res => res.json());
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


  getAllusers() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.serviceUrl + 'allusers', { headers: headers })
      .map(res => res.json());

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


  getAllactiveusers() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.serviceUrl + 'allactiveusers', { headers: headers })
      .map(res => res.json());

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


  getAllblockusers() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.serviceUrl + 'allblockusers', { headers: headers })
      .map(res => res.json());

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
  getAlldeleteusers() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.serviceUrl + 'alldeleteusers', { headers: headers })
      .map(res => res.json());

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


  deleteUser(id) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.delete(this.serviceUrl + 'deleteuser/' + id, { headers: headers })
      .map(res => res.json());
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


  blockUser(id) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put(this.serviceUrl + 'blockuser/' + id, { headers: headers })
      .map(res => res.json());
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


  unblockUser(id) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put(this.serviceUrl + 'unblockuser/' + id, { headers: headers })
      .map(res => res.json());
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


  getAllrequsers() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.serviceUrl + 'allrequsers', { headers: headers })
      .map(res => res.json());

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

  rejectUser(id) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put(this.serviceUrl + 'rejectuser/' + id, { headers: headers })
      .map(res => res.json());
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

  acceptUser(id) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put(this.serviceUrl + 'acceptuser/' + id, { headers: headers })
      .map(res => res.json());
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

  getAdminnotification() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.serviceUrl + 'notification', { headers: headers })
      .map(res => res.json());

  }
  // -----------------------------------End------------------------------------------

  // ---------------------------------Start-------------------------------------------
  // Function      : Admin user notification management
  // Params        : 
  // Returns       : 
  // Author        : sudha
  // Date          : 03-01-2018
  // Last Modified : 
  // Desc          : view status user notifcation

  viewstatusUser(id, cmpid) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    var data = { user_id: id, company_id: cmpid }
    return this.http.put(this.serviceUrl + 'viewstatususer', data, { headers: headers })
      .map(res => res.json());
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
  getchart1() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.serviceUrl + 'adminchart1', { headers: headers })
      .map(res => res.json());

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
  getchartbar() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.serviceUrl + 'admind3', { headers: headers })
      .map(res => res.json());

  }
  // -----------------------------------End------------------------------------------

  // ---------------------------------Start-------------------------------------------
  // Function      : get logged user details
  // Params        : 
  // Returns       : user details
  // Author        : Rinsha
  // Date          : 12-1-2018
  // Last Modified : 12-1-2018, Rinsha
  // Desc          :
  getLoggedUSerDetails() {
    let h = this.setHeaderWithAuthorization();
    return this.http.get(this.serviceUrl + "getLoggedinUser", { headers: h })
      .map(res => res.json());
  }
  // -----------------------------------End-----------------------------------------------

  // ---------------------------------Start------------------------------------------------
  // Function      : Logout
  // Params        : 
  // Returns       : 
  // Author        : Rinsha
  // Date          : 03-1-2018
  // Last Modified : 03-1-2018, Rinsha
  // Desc          : 
  logout() {
    this.authToken = null;
    this.admin = null;
    localStorage.clear();
  }
  // ---------------------------------------End--------------------------------------------
  // ---------------------------------Start-------------------------------------------
  // Function      : Admin company management
  // Params        : 
  // Returns       : 
  // Author        : sudha
  // Date          : 25-01-2018
  // Last Modified : 
  // Desc          : getAllplans

  getAllplans() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.serviceUrl + 'allplans', { headers: headers })
      .map(res => res.json());

  }
  // -----------------------------------End------------------------------------------
   //  ---------------------------------Start-------------------------------------------
  // Function      : addplans
  // Params        : id
  // Returns       : 
  // Author        : sudha
  // Date          :25-01-2018
  // Last Modified : 
  // Desc          : addPlans

  addPlan(data: any) {
    // console.log(data)
    let headers =  new Headers()
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.serviceUrl + 'addplan', data, { headers: headers })
      .map(res => res.json());
  }
  // < ----------------------------------End-------------------------------------------
    //  ---------------------------------Start-------------------------------------------
  // Function      : deletePlan
  // Params        : id
  // Returns       : 
  // Author        : sudha
  // Date          : 29-01-2018
  // Last Modified :
  // Desc          : to delete a plan

  deletePlan(plan_id: any) {
   
    let headers =  new Headers()
    headers.append('Content-Type', 'application/json');
    return this.http.delete(this.serviceUrl + "deleteplan/" + plan_id, { headers: headers})
      .map(res => res.json())
  }

  // < ----------------------------------End------------------------------------------- 
     //  ---------------------------------Start-------------------------------------------
  // Function      : edit Plan
  // Params        : id
  // Returns       : 
  // Author        : sudha
  // Date          : 29-01-2018
  // Last Modified :
  // Desc          : to edite a plan

  getSingleplan(plan_id: any) {
    
     let headers =  new Headers()
     headers.append('Content-Type', 'application/json');
     return this.http.get(this.serviceUrl + "getsingleplan/" + plan_id, { headers: headers})
       .map(res => res.json())
   }
 
   // < ----------------------------------End------------------------------------------- 
      //  ---------------------------------Start-------------------------------------------
  // Function      : update Plan
  // Params        : id
  // Returns       : 
  // Author        : sudha
  // Date          : 29-01-2018
  // Last Modified :
  // Desc          : to update a plan

  updatePlan(plan: any) {
  // console.log(plan);
     let headers =  new Headers()
     headers.append('Content-Type', 'application/json');
     return this.http.post(this.serviceUrl + "updateplan", plan, { headers: headers})
       .map(res => res.json())
   }
 
   // < ----------------------------------End------------------------------------------- 
     // ---------------------------------Start-------------------------------------------
  // Function      : bestPlan
  // Params        : 
  // Returns       : 
  // Author        : sudha
  // Date          : 30-01-2018
  // Last Modified : 
  // Desc          : bestPlan

  bestPlan(id, best) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    var data = { _id: id, value: best }
    return this.http.post(this.serviceUrl + 'bestplan', data, { headers: headers })
      .map(res => res.json());
  }
  // -----------------------------------End------------------------------------------

}
