import { Component, OnInit } from '@angular/core';
// import { AgmCoreModule, MapsAPILoader } from '@agm/core';
import { CompanyService } from './../../services/company.service';
import {Router} from '@angular/router';
import * as socketIo from 'socket.io-client';
import { Config } from './../../config/config';

@Component({
  selector: 'app-company-dashboard',
  templateUrl: './company-dashboard.component.html',
  styleUrls: ['./company-dashboard.component.css']
})
export class CompanyDashboardComponent implements OnInit {
  lat: number = 51.678418;
  lng: number = 7.809007;
  private socket: any;
  locations = [];
  allSurveys:any;
  surveyId:any;
  
  constructor(private _companyService: CompanyService,
    private routes: Router,
    private config: Config) {
      this.socket = socketIo(config.socketURL);
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
    this.getMapPositions();
    this.socket.on('closebid', (data) => {
      console.log(data);
      this.getMapPositions();
     }) 
  }


 //  ---------------------------------Start-------------------------------------------
  // Function      : getTheme
  // Params        : 
  // Returns       : 
  // Author        : Manu Prasad
  // Date          : 1-1-2018
  // Last Modified : 1-1-2018, Manu Prasad 
  // Desc          : Get Theme details using id from parameter in router from database


  getMapPositions(){
    // this.locations.push({lat:27.56,long:-82.68});
    // this.locations.push({lat:37.56,long:-72.68});
    
    this._companyService.getPositions().subscribe(survey =>{
      // console.log(theme);
      this.locations = survey;
      this.allSurveys = survey;
      
      // console.log(this.locations);
      // survey.questions.forEach((element,i) => {
      //   // this.locations[i].question = element.question;
      //   // this.locations[i].answer = element.question;
      //   // this.locations[i].question = element.question;
  
      //   element.forEach((ele,j) => {
      //     console.log(element._id.longitude);
      //     this.locations.push({lat:parseFloat(element._id.latitude),long:parseFloat(element._id.longitude)});
      //   })
        
      // });
      console.log(this.locations);
      // this.locations.push({lat:27.56,long:-82.68});
      // this.locations.push({lat:37.56,long:-72.68});
      // console.log(this.locations);
    });
  
  
    }
//  ---------------------------------end-----------------------------------------------


//  ---------------------------------Start-------------------------------------------
  // Function      : getTheme
  // Params        : 
  // Returns       : 
  // Author        : Manu Prasad
  // Date          : 1-1-2018
  // Last Modified : 1-1-2018, Manu Prasad 
  // Desc          : Get Theme details using id from parameter in router from database


  getMapPositionsforId(){
    // this.locations.push({lat:27.56,long:-82.68});
    // this.locations.push({lat:37.56,long:-72.68});
  console.log(this.surveyId)
    if(this.surveyId == undefined || this.surveyId == null || this.surveyId == ''){
      this.getMapPositions();
    
    }
    else{
      this._companyService.getSurveyforDash(this.surveyId).subscribe(survey =>{
        // console.log(theme);
        this.locations = survey;
        // console.log(this.locations);
        // survey.questions.forEach((element,i) => {
        //   // this.locations[i].question = element.question;
        //   // this.locations[i].answer = element.question;
        //   // this.locations[i].question = element.question;
    
        //   element.forEach((ele,j) => {
        //     console.log(element._id.longitude);
        //     this.locations.push({lat:parseFloat(element._id.latitude),long:parseFloat(element._id.longitude)});
        //   })
          
        // });
        console.log(this.locations);
        // this.locations.push({lat:27.56,long:-82.68});
        // this.locations.push({lat:37.56,long:-72.68});
        // console.log(this.locations);
      });
    }
    
  
  
    }
  //  ---------------------------------end-----------------------------------------------
  
ConvertString(value){
  return parseFloat(value)
  }
}
