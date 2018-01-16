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
  constructor(private _companyService: CompanyService,
    private _router: Router,
    private config: Config) {
      this.socket = socketIo(config.socketURL);
   }

  ngOnInit() {
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
    
    this._companyService.getPositions().subscribe(survey =>{
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
  //  ---------------------------------end-----------------------------------------------
  
ConvertString(value){
  return parseFloat(value)
  }
}
