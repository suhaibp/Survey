import { Component, ViewChild, OnInit } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { AdminService} from './../../services/admin.service';
import {Router} from '@angular/router';

@Component({
  selector: 'admin-all-users',
  templateUrl: './admin-all-users.component.html',
  styleUrls: ['./admin-all-users.component.css']
})
export class AdminAllUsersComponent implements OnInit {
  displayedColumns = [ 'slno','username','email','status','action'];
  dataSource: MatTableDataSource<any>;
  notExist =false;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  position = 'before';
  constructor(
    private adminService : AdminService,
    private router: Router
  ) { }
// ---------------------------------Start-------------------------------------------
// Function      : Admin user management
// Params        : id
// Returns       : 
// Author        : sudha
// Date          : 29-12-2017 
// Last Modified : 
// Desc          : All users, delete,block,unblock

  refresh(){
    const users = [];
        this.adminService.getAllusers().subscribe(data=>{
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
