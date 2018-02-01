import { Component,ViewChild, OnInit } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatSnackBar } from '@angular/material';
import { AdminService} from './../../services/admin.service';
import {Router} from '@angular/router';
import { Config } from './../../config/config';
import * as socketIo from 'socket.io-client';

@Component({
  selector: 'admin-request-users',
  templateUrl: './admin-request-users.component.html',
  styleUrls: ['./admin-request-users.component.css']
})
export class AdminRequestUsersComponent implements OnInit {
  displayedColumns = [ 'slno','username','email','requestedcompanies','status','action'];
  dataSource: MatTableDataSource<any>;
  notExist =false;
  showSpinner :Boolean =false
  private socket: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
 company : any;
 complaintCompanies : any;
 involvedCompany : any = [];
  constructor(
    private adminService : AdminService,
    private routes: Router,
    private config: Config,
    public snackBar: MatSnackBar
  ) {  this.socket = socketIo(config.siteUrl); }
// ---------------------------------Start-------------------------------------------
// Function      : Admin user management
// Params        : id
// Returns       : 
// Author        : sudha
// Date          : 29-12-2017 
// Last Modified : 03-01-2018
// Desc          : All users, delete,block,unblock 

  
  refresh(){
    this.showSpinner =true
   const company = [];

       this.adminService.getAllrequsers().subscribe(data=>{
        this.showSpinner =false
        this.notExist =false;
        if(data.length == 0){
          this.notExist = true;
        }
        this.dataSource = new MatTableDataSource(data);
        console.log(this.dataSource);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
       });
    
  }
  
 
  ngOnInit() {
// ---------------------------------Start-------------------------------------------
// Function      : get logged user details
// Params        : 
// Returns       : user details
// Author        : Rinsha
// Date          : 16-1-2018
// Last Modified : 16-1-2018, Rinsha
// Desc          :
this.adminService.getLoggedUSerDetails().subscribe(info =>{
  if(info == null || info == ''){
    this.routes.navigate(['/admin-login']); 
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
// ---------------------------------End-------------------------------------------   
    this.refresh();
    this.socket.on('requestuser', (data) => {
      
        this.refresh();
      
     });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
// //accept user
acceptUser(id){  
  this.showSpinner =true
    this.adminService.acceptUser(id).subscribe(data=>{
      console.log(data);
      if(data.success){
        this.showSpinner =false
        let snackBarRef =  this.snackBar.open(data.msg, '', {
          duration: 2000
        });
        this.refresh();
           }
           else{
            this.showSpinner =false
            let snackBarRef =  this.snackBar.open(data.msg, '', {
              duration: 2000
            });
          }
          
    });

  }

//reject User
rejectUser(id){  
  this.showSpinner =true
  console.log(id);
  this.adminService.rejectUser(id).subscribe(data=>{
    
    console.log(data);
    if(data.success){
      this.showSpinner =false
      let snackBarRef =  this.snackBar.open(data.msg, '', {
        duration: 2000
      });
      this.refresh();
    
    }else{
      this.showSpinner =false
      let snackBarRef =  this.snackBar.open(data.msg, '', {
        duration: 2000
      });
     
    }
  });

}  



getCompany(company){

  this.involvedCompany = company;
  this.complaintCompanies = company.block_request[company.block_request.length-1].companies;
  
}
// -----------------------------------End------------------------------------------
}
