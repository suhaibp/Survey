import { Injectable,Component, OnInit  } from '@angular/core';
import {Config} from '../config/config';
import { Http, Headers, Response, Request, RequestMethod, URLSearchParams, RequestOptions } from "@angular/http";
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  serviceUrl: string;  
  constructor(private _http: Http,private config: Config) { 
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
    return this._http.get(this.serviceUrl+'get-survey/'+surveyId,  {headers: headers})
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
    return this._http.get(this.serviceUrl+'get-not-run-survey/'+surveyId,  {headers: headers})
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
    return this._http.put(this.serviceUrl+'submit-survey/'+surveyId, survey, {headers: headers})
      .map(res => res.json());
  }
  // ----------------------------------End-------------------------------------------
}

