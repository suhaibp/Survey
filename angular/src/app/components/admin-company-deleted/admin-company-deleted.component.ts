import { Component, ViewChild, OnInit } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
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
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(
    private adminService : AdminService,
    private router: Router
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
  const company = [];
      this.adminService.getAlldeletedcompanies().subscribe(data=>{
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
