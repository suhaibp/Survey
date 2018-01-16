import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../services/company.service';
import { Config } from './../../config/config';
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
  ;
userId: any;
viewNotification :Boolean = false;
private socket:any;
  constructor(private companyService: CompanyService, private config: Config) { this.socket = socketIo(config.siteUrl); }

  ngOnInit() {
  
    this.loadData();
    this.socket.on('acceptuser', (data) => {
      this.loadData();
     });
    
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

}
