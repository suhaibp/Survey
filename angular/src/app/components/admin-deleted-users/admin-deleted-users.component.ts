import { Component, ViewChild, OnInit } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { AdminService} from './../../services/admin.service';
import {Router} from '@angular/router';

@Component({
  selector: 'admin-deleted-users',
  templateUrl: './admin-deleted-users.component.html',
  styleUrls: ['./admin-deleted-users.component.css']
})
export class AdminDeletedUsersComponent implements OnInit {
  displayedColumns = ['slno','username','email'];
  dataSource: MatTableDataSource<any>;
  notExist =false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private adminService : AdminService,
    private router: Router) { }

 // ---------------------------------Start-------------------------------------------
// Function      : Admin deleteuser 
// Params        : id
// Returns       : 
// Author        : sudha
// Date          : 29-12-2017
// Last Modified : 
// Desc          : All delete users

refresh(){
  const users = [];
      this.adminService.getAlldeleteusers().subscribe(data=>{
       // console.log(data);
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


}
