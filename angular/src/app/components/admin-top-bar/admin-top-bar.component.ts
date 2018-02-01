import { Component, OnInit } from '@angular/core';
import { AdminService} from './../../services/admin.service';
import {Router} from '@angular/router';
import { Config } from './../../config/config';
import * as socketIo from 'socket.io-client';
@Component({
  selector: 'admin-top-bar',
  templateUrl: './admin-top-bar.component.html',
  styleUrls: ['./admin-top-bar.component.css']
})
export class AdminTopBarComponent implements OnInit {
 // notExist =false;
  notif = Object;
  private socket: any;
  constructor(
    private adminService : AdminService,
    private router: Router,
    private config: Config
  ) {   this.socket = socketIo(config.siteUrl);}
// ---------------------------------Start-------------------------------------------
// Function      : Admin user management
// Params        : id
// Returns       : 
// Author        : sudha
// Date          : 02-01-2018 
// Last Modified : 05-01-2018
// Desc          : All users, delete,block,unblock 

refresh(){
  //this.users = [];
      this.adminService.getAdminnotification().subscribe(data=>{
      this.notif = data;
      // console.log(data);
    });
    
}
      

  ngOnInit() {
    this.refresh();
    this.socket.on('requestuser', (data) => {
      
        this.refresh();
      
     });
     this.socket.on('acceptuser', (data) => {
      
        this.refresh();
      
     });
     this.socket.on('rejectuser', (data) => {
      
        this.refresh();
      
     });
  }

  // viewstatus user
  viewstatusUser(id,cmpid){ 
    console.log(id,cmpid) ;
  this.adminService.viewstatusUser(id,cmpid).subscribe(data=>{
    console.log(data);
    if(data.success){
      // http://localhost:3000/#tab5
      this.router.navigate(['admin-users/block_request']);
     
         }
         else{
        }
        
  });

}
// -----------------------------------End------------------------------------------
// ---------------------------------Start-------------------------------------------
// Function      : Logout
// Params        : 
// Returns       : 
// Author        : Rinsha
// Date          : 03-1-2018
// Last Modified : 03-1-2018, Rinsha
// Desc          : 
logout(){
  this.adminService.logout();
  this.router.navigate(['/admin-login']);
  return false;
}
// -----------------------------------End------------------------------------------
}
