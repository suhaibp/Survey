import { Injectable, Component, OnInit } from '@angular/core';
import { Http, Headers, Response, Request, RequestMethod, URLSearchParams, RequestOptions } from "@angular/http";
import {Observable} from 'rxjs/Rx';
import {Config} from '../config/config';
import 'rxjs/add/operator/map';

@Injectable()
export class CompanyService {

    serviceUrl :string;
    
    constructor(private _http: Http,private config: Config) { 
        this.serviceUrl = config.siteUrl + '/company/';
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
    // Function      : get themes
    // Params        : 
    // Returns       : list of themes with details
    // Author        : Manu Prasad
    // Date          : 27-12-2017
    // Last Modified : 27-12-2017, Manu Prasad, Desc:
    // Desc          : routing used to get all the themes from database

    getThemes(){
        let headers = this.setHeader();
        return this._http.get(this.serviceUrl + 'get-themes',  {headers: headers})
          .map(res => res.json());
    } 
      
    // ----------------------------------End-------------------------------------------

    // ---------------------------------Start-------------------------------------------
    // Function      : get fonts
    // Params        : 
    // Returns       : list of fonts with details
    // Author        : Manu Prasad
    // Date          : 27-12-2017
    // Last Modified : 27-12-2017, Manu Prasad, Desc:
    // Desc          : routing used to get all the fonts from database

    getFonts(){
      let headers = this.setHeader();
      return this._http.get(this.serviceUrl + 'get-fonts',  {headers: headers})
        .map(res => res.json());
    }

    // ----------------------------------End-------------------------------------------

    // ---------------------------------Start-------------------------------------------
    // Function      : get fontsize
    // Params        : 
    // Returns       : list of fonts with details
    // Author        : Manu Prasad
    // Date          : 27-12-2017
    // Last Modified : 27-12-2017, Manu Prasad, Desc:
    // Desc          : routing used to get all the fontsize from database

    getFontSize(){
      let headers = this.setHeader();
      return this._http.get(this.serviceUrl + 'get-font-sizes',  {headers: headers})
        .map(res => res.json());
    }

    // ----------------------------------End-------------------------------------------

    // ---------------------------------Start-------------------------------------------
    // Function      : Get all user groups
    // Params        : 
    // Returns       : list of user groups with details
    // Author        : Yasir Poongadan
    // Date          : 29-12-2017
    // Last Modified : 29-12-2017, Yasir Poongadan
    // Desc          : all user groups of specific company

    getAllUserGroup(){
      let headers = this.setHeader();
      return this._http.get(this.serviceUrl + 'get-all-groups',  {headers: headers})
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
      let headers = this.setHeader();
      return this._http.post(this.serviceUrl + 'add-user-group',JSON.stringify({group: group}), {headers: headers})
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
      let headers = this.setHeader();
      return this._http.post(this.serviceUrl + 'add-users',data, {headers: headers})
        .map(res => res.json());
    }

    // ----------------------------------End-------------------------------------------

    // ---------------------------------Start-------------------------------------------
    // Function      : getMyCompany
    // Params        : 
    // Returns       : logged in company details
    // Author        : Yasir Poongadan
    // Date          : 02-01-2018
    // Last Modified : 02-01-2018, Yasir Poongadan
    // Desc          : to get logged in company details 

    getMyCompany(){
      let headers = this.setHeader();
      return this._http.get(this.serviceUrl + 'get-my-company',{headers: headers})
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

    updateUser(data){
      let headers = this.setHeader();
      return this._http.put(this.serviceUrl + 'update-users',data, {headers: headers})
        .map(res => res.json());
    }

    // ----------------------------------End-------------------------------------------

    // ---------------------------------Start-------------------------------------------
    // Function      : getAllSurveyType
    // Params        : 
    // Returns       : list of Survey type
    // Author        : Yasir Poongadan
    // Date          : 04-01-2017
    // Last Modified : 04-01-2017, Yasir Poongadan
    // Desc          : all user Survey type

    getAllSurveyCategory(){
      let headers = this.setHeader();
      return this._http.get(this.serviceUrl + 'get-all-survey-type',  {headers: headers})
        .map(res => res.json());
    }

    // ----------------------------------End-------------------------------------------

    // ---------------------------------Start-------------------------------------------
    // Function      : getAllThemes
    // Params        : 
    // Returns       : list of Survey Themes
    // Author        : Yasir Poongadan
    // Date          : 04-01-2017
    // Last Modified : 04-01-2017, Yasir Poongadan
    // Desc          : all user Survey Themes

    getAllThemes(){
      let headers = this.setHeader();
      return this._http.get(this.serviceUrl + 'get-all-themes',  {headers: headers})
        .map(res => res.json());
    }

    // ----------------------------------End-------------------------------------------

    // ---------------------------------Start-------------------------------------------
    // Function      : getAnswerType
    // Params        : 
    // Returns       : list of all answer type
    // Author        : Yasir Poongadan
    // Date          : 08-01-2017
    // Last Modified : 08-01-2017, Yasir Poongadan
    // Desc          : all answer type

    getAnswerType(){
      let headers = this.setHeader();
      return this._http.get(this.serviceUrl + 'get-all-answer-type',  {headers: headers})
        .map(res => res.json());
    }

    // ----------------------------------End-------------------------------------------

    // ---------------------------------Start-------------------------------------------
    // Function      : getAnswerType
    // Params        : 
    // Returns       : list of all answer type
    // Author        : Yasir Poongadan
    // Date          : 08-01-2017
    // Last Modified : 08-01-2017, Yasir Poongadan
    // Desc          : all answer type

    createSurvey(data){


    let headers = this.setHeader();
      return this._http.post(this.serviceUrl + 'create-survey',data, {headers: headers})
        .map(res => res.json());
    }

    // ----------------------------------End-------------------------------------------

    // ---------------------------------Start-------------------------------------------
    // Function      : getMyUsers
    // Params        : 
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 04-01-2018
    // Last Modified : 04-01-2018, Jooshifa
    // Desc          : to get users of a company which is not blocked and deleted 

    getMyUsers(){
      let headers = this.setHeader();
      return this._http.get(this.serviceUrl + 'get-my-users',{headers: headers})
        .map(res => res.json());
    }
    
    // ----------------------------------End-------------------------------------------


  //  ---------------------------------Start-------------------------------------------
  // Function      : getSingleUserGroup
  // Params        : id
  // Returns       : 
  // Author        : Jooshifa
  // Date          : 10-01-2018
  // Last Modified : 10-01-2018, Jooshifa 
  // Desc          : to get single users groups for pass to edit modal

  getUsersInAGroups(data :any){
    let h=this.setHeader();
    return this._http.get(this.serviceUrl +"getUsersInAGroups/"+data,{headers: h})
    .map(res =>res.json());

  }
  // < ----------------------------------End------------------------------------------- 

  //  ---------------------------------Start-------------------------------------------
  // Function      : inviteUsers
  // Params        : users and survey details
  // Returns       : 
  // Author        : Yasir Poongadan
  // Date          : 15-01-2018
  // Last Modified : 15-01-2018, Yasir Poongadan 
  // Desc          : For inviting users for a survey

  inviteUsers(data :any){
    let h=this.setHeader();
    return this._http.post(this.serviceUrl + 'invite-users',data, {headers: h})
    .map(res => res.json());

  }
  // < ----------------------------------End------------------------------------------- 

  //  ---------------------------------Start-------------------------------------------
  // Function      : getAllSurvey
  // Params        : 
  // Returns       : all survey list
  // Author        : Yasir Poongadan
  // Date          : 15-01-2018
  // Last Modified : 15-01-2018, Yasir Poongadan 
  // Desc          : To get all all survey list

  getAllSurvey(){
    let headers = this.setHeader();
    return this._http.get(this.serviceUrl + 'get-company-survey',{headers: headers})
      .map(res => res.json());

  }
  // < ----------------------------------End------------------------------------------- 

  //  ---------------------------------Start-------------------------------------------
  // Function      : deleteSurvey
  // Params        : id
  // Returns       : boolean success or failed
  // Author        : Yasir Poongadan
  // Date          : 16-01-2018
  // Last Modified : 16-01-2018, Yasir Poongadan 
  // Desc          : for delete a upcoming survey

  deleteSurvey(id){
    let headers = this.setHeader();
    return this._http.delete(this.serviceUrl + 'delete-survey/'+id,{headers: headers})
      .map(res => res.json());

  }
  // < ----------------------------------End------------------------------------------- 

  //  ---------------------------------Start-------------------------------------------
  // Function      : getSurvey
  // Params        : id
  // Returns       : single survey details
  // Author        : Yasir Poongadan
  // Date          : 16-01-2018
  // Last Modified : 16-01-2018, Yasir Poongadan 
  // Desc          : to get a specific servey details
  getSurvey(id){
    let headers = this.setHeader();
    return this._http.get(this.serviceUrl + 'get-survey/'+id,{headers: headers})
      .map(res => res.json());

  }
  // < ----------------------------------End------------------------------------------- 

  //  ---------------------------------Start-------------------------------------------
  // Function      : updateSurvey
  // Params        : survey details to update
  // Returns       : boolean success or not with message
  // Author        : Yasir Poongadan
  // Date          : 16-01-2018
  // Last Modified : 16-01-2018, Yasir Poongadan 
  // Desc          : to update a survey

  updateSurvey(data){
    
    let headers = this.setHeader();
    return this._http.post(this.serviceUrl + 'update-survey',data, {headers: headers})
      .map(res => res.json());
  }
  // < ----------------------------------End------------------------------------------- 
    
}