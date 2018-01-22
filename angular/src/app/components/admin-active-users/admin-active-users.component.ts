import { Component, ViewChild, OnInit } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { AdminService} from './../../services/admin.service';
import {Router} from '@angular/router';

@Component({
  selector: 'admin-active-users',
  templateUrl: './admin-active-users.component.html',
  styleUrls: ['./admin-active-users.component.css']
})
export class AdminActiveUsersComponent implements OnInit {
  displayedColumns = [ 'slno','username','email','action'];
  dataSource: MatTableDataSource<any>;
  notExist =false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
 
  constructor(
    private adminService : AdminService,
    private routes: Router
  ) { }
// ---------------------------------Start-------------------------------------------
// Function      : Admin user management
// Params        : id
// Returns       : 
// Author        : sudha
// Date          : 29-12-2017
// Last Modified : 
// Desc          : All active users, delete,block,unblock

  refresh(){
    const users = [];
        this.adminService.getAllactiveusers().subscribe(data=>{
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
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
//delete user
deleteUser(id){  
    this.adminService.deleteUser(id).subscribe(data=>{
      console.log(data);
      if(data.success){
        this.refresh();
           }
           else{
          }
          
    });

  }

//block User
blockUser(id){  
  this.adminService.blockUser(id).subscribe(data=>{
    console.log(data);
    if(data.success){
      this.refresh();
    
    }else{
     
    }
  });

}  
//unblock User
unblockUser(id){
  this.adminService.unblockUser(id).subscribe(data=>{
    console.log(data);
    if(data.success){
      this.refresh();
   
    }else{
     
    }
  });

}
// -----------------------------------End------------------------------------------
}
