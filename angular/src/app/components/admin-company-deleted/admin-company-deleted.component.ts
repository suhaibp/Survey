import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatSnackBar } from '@angular/material';
import { AdminService} from './../../services/admin.service';
import {Router} from '@angular/router';

@Component({
  selector: 'admin-company-deleted',
  templateUrl: './admin-company-deleted.component.html',
  styleUrls: ['./admin-company-deleted.component.css']
})
export class AdminCompanyDeletedComponent implements OnInit {

  displayedColumns = ['slno','companyname','email','contactperson','contactnumber','companystatus'];
  dataSource: MatTableDataSource<any>;
  notExist =false;
  showSpinner :Boolean =false
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(
    private adminService : AdminService,
    private routes: Router,
    public snackBar: MatSnackBar
  ) { }

 // ---------------------------------Start-------------------------------------------
// Function      : Admin company management
// Params        : 
// Returns       : 
// Author        : sudha
// Date          : 29-12-2017
// Last Modified : 
// Desc          : All deleted companieslist
// -----------------------------------
refresh(){
  this.showSpinner =true
  const company = [];
      this.adminService.getAlldeletedcompanies().subscribe(data=>{
        this.showSpinner =false
        this.showSpinner =false
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

// -----------------------------------End------------------------------------------

  
// ---------------------------------Start-------------------------------------------
// Function      : Admin company management
// Params        : 
// Returns       : 
// Author        : sudha
// Date          : 29-12-2017
// Last Modified : 
// Desc          : All deleted companieslist filter

applyFilter(filterValue: string) {
  filterValue = filterValue.trim(); // Remove whitespace
  filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
  this.dataSource.filter = filterValue;
}
// -----------------------------------End------------------------------------------
}
