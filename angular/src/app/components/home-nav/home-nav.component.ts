import { Component, OnInit } from '@angular/core';
import { CompanyService } from './../../services/company.service';
import { CanActivate, Router } from '@angular/router';
import * as socketIo from 'socket.io-client';
import { Config } from './../../config/config';

@Component({
  selector: 'app-home-nav',
  templateUrl: './home-nav.component.html',
  styleUrls: ['./home-nav.component.css']
})
export class HomeNavComponent implements OnInit {
  plans : any;
  private socket: any;
  sliced_array : any;
  constructor(private config: Config,private companyService: CompanyService,private routes: Router) { 
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
    this.companyService.getLoggedUSerDetails().subscribe(info =>{
      // if(info == null || info == ''){
      //   this.routes.navigate(['/clogin']); 
      // }
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
        this.routes.navigate(['/dashboard']);
      }
    });
    this.getPlans();
    this.socket.on('addplan', (data) => {
      this.getPlans();
    });
    this.socket.on('updateplan', (data) => {
      this.getPlans();
    });
    this.socket.on('deleteplan', (data) => {
      this.getPlans();
    });
    this.socket.on('bestvalue', (data) => {
      this.getPlans();
    });
    // ---------------------------------End-------------------------------------------
    
  }
  getPlans(){
// ---------------------------------Start-------------------------------------------
    // Function      : Get All  plans
    // Params        : 
    // Returns       : All plans
    // Author        : Rinsha
    // Date          : 28-12-2017
    // Last Modified : 28-12-2017, Rinsha
    // Desc          :  
    this.companyService.getAllPlans().subscribe(res => {
      // console.log(res);
      this.plans = [];
      res.forEach(element => {
        // if(element.is_default_plan == false){
          this.plans.push(element);
          this.sliced_array = this.plans.slice(0, 4);
        // }
      });
      // console.log(this.plans);
      // console.log(this.sliced_array)
    });
    // ---------------------------------End-------------------------------------------
  }

}
