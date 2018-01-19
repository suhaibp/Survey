import { Component, OnInit } from '@angular/core';

import { CompanyService } from '../../services/company.service';
import { Config } from './../../config/config';
import { CanActivate, Router } from '@angular/router';
import * as socketIo from 'socket.io-client';
@Component({
  selector: 'app-company-top-bar',
  templateUrl: './company-top-bar.component.html',
  styleUrls: ['./company-top-bar.component.css']
})
export class CompanyTopBarComponent implements OnInit {

dataEmail :any;
count :any;
dataArray =[];
userData ={
  userEmail : '',
  userId : ''
}
company_name : any;
userId: any;
viewNotification :Boolean = false;
private socket:any;
  constructor(private companyService: CompanyService, private config: Config, private routes: Router) { this.socket = socketIo(config.siteUrl); }

  ngOnInit() {
  this.logChecking();
    this.loadData();
    this.socket.on('acceptuser', (data) => {
      this.loadData();
     });
     this.socket.on('expiredcompany', (data) => {
      this.logChecking();
    });
  }

  logChecking(){
    // ---------------------------------Start-------------------------------------------
// Function      : get logged company details
// Params        : 
// Returns       : company details
// Author        : Rinsha
// Date          : 16-1-2018
// Last Modified : 16-1-2018, Rinsha
// Desc          :
this.companyService.getLoggedUSerDetails().subscribe(info =>{
  this.company_name = info.organization;
  console.log(this.company_name);
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
  }
  loadData(){
    this.companyService.getAcceptedNotification().subscribe(data => {
      // console.log(data);
      if(data.arr1 == '' || data.arr1 ==null){
        this.count = 0;
      }
      else{
      // console.log(data);
    //  this.count = data.arr1.notifCount
 
      // data.arra1.
      this.dataArray= [];
      data.arr1.forEach(element => {
        this.count = element.notifCount;
        // console.log( element);
        this.dataArray.push(element);
        // console.log(this.dataArray);
        // this.dataEmail = element
        
      
    });
  }
   });
  }
  notifViewed(email,id){
    // console.log(id);
    // console.log(email);
    this.userData.userEmail = email;
    this.userData.userId = id
    // console.log(this.userData);
    // console.log(this.dataArray)
    this.companyService.updateNotifViewed(this.userData).subscribe(data => {
      if(data.success){
        this.loadData();
        window.location.reload();
      }
    //  console.log(data)
   });
   
  }

// ---------------------------------Start-------------------------------------------
// Function      : Logout
// Params        : 
// Returns       : 
// Author        : Rinsha
// Date          : 03-1-2018
// Last Modified : 03-1-2018, Rinsha
// Desc          : 
logout(){
  this.companyService.logout();
  this.routes.navigate(['/clogin']);
  return false;
}
// -----------------------------------End------------------------------------------

}
