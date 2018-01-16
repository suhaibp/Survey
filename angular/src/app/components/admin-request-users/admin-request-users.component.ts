import { Component,ViewChild, OnInit } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
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
  private socket: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
 company : any;
 complaintCompanies : any;
 involvedCompany : any = [];
  constructor(
    private adminService : AdminService,
    private router: Router,
    private config: Config
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
  
   const company = [];

       this.adminService.getAllrequsers().subscribe(data=>{
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
    this.adminService.acceptUser(id).subscribe(data=>{
      console.log(data);
      if(data.success){
        this.refresh();
           }
           else{
          }
          
    });

  }

//reject User
rejectUser(id){  
  console.log(id);
  this.adminService.rejectUser(id).subscribe(data=>{
    console.log(data);
    if(data.success){
      this.refresh();
    
    }else{
     
    }
  });

}  



getCompany(company){

  this.involvedCompany = company;
  this.complaintCompanies = company.block_request[company.block_request.length-1].companies;
  
}
// -----------------------------------End------------------------------------------
}
