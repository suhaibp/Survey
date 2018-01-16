import { Injectable,Component, OnInit  } from '@angular/core';
import {Config} from '../config/config';
import { Http, Headers, Response, Request, RequestMethod, URLSearchParams, RequestOptions } from "@angular/http";
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class CompanyService {
  // URL = "http://localhost:3000/company/";
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
      return this._http.get(this.serviceUrl+'get-themes',  {headers: headers})
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
    return this._http.get(this.serviceUrl+'get-fonts',  {headers: headers})
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
    return this._http.get(this.serviceUrl+'get-font-sizes',  {headers: headers})
      .map(res => res.json());
  }
  // ----------------------------------End-------------------------------------------



  // ---------------------------------Start-------------------------------------------

  // Function      : save theme
  // Params        : 
  // Returns       : 
  // Author        : Manu Prasad
  // Date          : 27-12-2017
  // Last Modified : 27-12-2017, Manu Prasad, Desc:
  // Desc          : routing used to save theme properties
  saveTheme(theme){
    let headers = this.setHeader();
    return this._http.post(this.serviceUrl+'save-theme', theme, {headers: headers})
      .map(res => res.json());
  }
  // ----------------------------------End-------------------------------------------



  // ---------------------------------Start-------------------------------------------

  // Function      : delete theme
  // Params        : 
  // Returns       : status of deletion
  // Author        : Manu Prasad
  // Date          : 1-1-2018
  // Last Modified : 1-1-2018, Manu Prasad, Desc:
  // Desc          : routing used to delete a theme from database
  deleteTheme(id){
    let headers = this.setHeader();
    return this._http.delete(this.serviceUrl+'delete-theme/'+id, {headers: headers})
      .map(res => res.json());
  }
  // ----------------------------------End-------------------------------------------



  // ---------------------------------Start-------------------------------------------

  // Function      : getTheme
  // Params        : 
  // Returns       : Details of a theme
  // Author        : Manu Prasad
  // Date          : 1-1-2018
  // Last Modified : 1-1-2018, Manu Prasad, Desc:
  // Desc          : routing used to get details of a theme from database
  getTheme(id){
    let headers = this.setHeader();
    return this._http.get(this.serviceUrl+'get-theme/'+id,  {headers: headers})
      .map(res => res.json());
} 
// ----------------------------------End-------------------------------------------


 // ---------------------------------Start-------------------------------------------

  // Function      : getTheme
  // Params        : 
  // Returns       : Details of a theme
  // Author        : Manu Prasad
  // Date          : 1-1-2018
  // Last Modified : 1-1-2018, Manu Prasad, Desc:
  // Desc          : function used to get details of a theme from database
  updateTheme(id, theme){
    let headers = this.setHeader();
    return this._http.put(this.serviceUrl+'update-theme/'+id, theme, {headers: headers})
      .map(res => res.json());
} 
// ----------------------------------End-------------------------------------------

// ---------------------------------Start-------------------------------------------

  // Function      : getPositions
  // Params        : 
  // Returns       : get longitude and latitude for maps
  // Author        : Manu Prasad
  // Date          : 3-1-2018
  // Last Modified : 3-1-2018, Manu Prasad, Desc:
  // Desc          : get longitude and latitude for maps
  getPositions(){
    let headers = this.setHeader();
    return this._http.get(this.serviceUrl+'get-locations',  {headers: headers})
      .map(res => res.json());
} 
// ----------------------------------End-------------------------------------------


}
