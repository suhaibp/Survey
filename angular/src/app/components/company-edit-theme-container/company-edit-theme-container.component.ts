import {Component, ViewChild, OnInit} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { CompanyService } from './../../services/company.service';
import {Router} from '@angular/router';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
declare var $:any;
import {RatingModule} from "ngx-rating";
@Component({
  selector: 'app-company-edit-theme-container',
  templateUrl: './company-edit-theme-container.component.html',
  styleUrls: ['./company-edit-theme-container.component.css'],
  inputs:["options",'classz'],
  template: `
  <div class="container">
  
      <!-- regular rating -->
      <rating [(ngModel)]="starsCount"></rating>
      <br/><br/>
  
      <!-- rating with 10 stars -->
      <rating [(ngModel)]="starsCount"
              [max]="10">
      </rating>
      <br/><br/>
  
      <!-- rating with custom icons -->
      <rating [(ngModel)]="starsCount"
              fullIcon="◆"
              emptyIcon="◇">
      </rating>
      <br/><br/>
  
      <!-- rating readonly -->
      <rating [(ngModel)]="starsCount"
              [readonly]="true">
      </rating>
      <br/><br/>
  
      <!-- rating disabled -->
      <rating [(ngModel)]="starsCount"
              [disabled]="true">
      </rating>
      <br/><br/>
  
      <!-- rating required -->
      <rating [(ngModel)]="starsCount"
              [required]="true">
      </rating>
      <br/><br/>
  
      <!-- rating with half stars -->
      <rating [(ngModel)]="starsCount"
              [float]="true">
      </rating>
      <br/><br/>
  
      <!-- rating with custom titles -->
      <rating [(ngModel)]="starsCount"
              [titles]="['one', 'two', 'three', 'four', 'five']">
      </rating>
      <br/><br/>
  
  </div>
  `,
})
export class CompanyEditThemeContainerComponent implements OnInit {
  starsCount: number;
  options: any;
  constructor(private _companyService: CompanyService, private routes: Router) { 
    
  }

  ngOnInit() {
// ---------------------------------Start-------------------------------------------
// Function      : get logged company details
// Params        : 
// Returns       : company details
// Author        : Rinsha
// Date          : 16-1-2018
// Last Modified : 16-1-2018, Rinsha
// Desc          :
this._companyService.getLoggedUSerDetails().subscribe(info =>{
        if(info.role == "admin"){
          this.routes.navigate(['/admin-dashboard']);
        }
        if(info.role == "user"){
          if(info.delete_status == true || info.block_status == true){
            this.routes.navigate(['/404']); 
          }
          this.routes.navigate(['/survey', info.surveyId]); 
        }
        if(info.role == "company"){
          if(info.delete_status == true || info.block_status == true || info.cmp_status == "Not Verified"){
            this.routes.navigate(['/clogin']); 
          }
          if(info.cmp_status == "Expired"){
            this.routes.navigate(['/expired']);
          }
          if(info.is_profile_completed == false){
            this.routes.navigate(['/additnInfo', info._id]);
          }
        }
});
// ---------------------------------End-------------------------------------------
    console.log(this.options);
    $(".rating ").css({"background-color": "#ccc"});
    // $(".rating input:checked ~ label:before, .rating:not(:checked) > label:hover:before, .rating:not(:checked) > label:hover ~ label:before").css({"color": "#F9DF4A"});
    $(".rating input:checked ~ label:before").css({"color": "#F9DF4A"});
    $(".rating input").css({"display": "none"});
    $(".rating label:before").css({"content": "\\2605","font-size": "42px","color": "#CCCCCC","line-height": "1"});
    $(".rating label:not(:first-of-type)").css({"padding-right": "2px"});
    $(".rating label").css({"float": "right","position": "relative","width": "40px","height": "40px","cursor":"pointer",});
  }

}
