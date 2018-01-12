import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class CompanyService {
  company: any;
  url = "http://localhost:3000/";
  constructor(private http:Http) { }

  
}
