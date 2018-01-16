import { Component, ViewChild, OnInit } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { AdminService} from './../../services/admin.service';
import {Router} from '@angular/router';
@Component({
  selector: 'admin-company-blocked',
  templateUrl: './admin-company-blocked.component.html',
  styleUrls: ['./admin-company-blocked.component.css']
})
export class AdminCompanyBlockedComponent implements OnInit {
  displayedColumns = [ 'slno','companyname','email','contactperson','contactnumber','companystatus','action'];
  dataSource: MatTableDataSource<any>;
  notExist =false;
  selected = 'all';
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
// Last Modified : 03-01-2018
// Desc          : All blocked companieslist
// -----------------------------------
 
 
refresh(){
  console.log(this.selected);
 const company = [];
   if(this.selected == 'all'){
     this.adminService.getAllblockedcompanies().subscribe(data=>{
       this.loadToDataTable(data);
     });
   }
   if(this.selected == 'Subscribed'){
     this.adminService.getAllsubblockcompanies().subscribe(data=>{
       this.loadToDataTable(data);
     });
   }
   if(this.selected == 'Trail'){
     this.adminService.getAlltrialblockcompanies().subscribe(data=>{
       this.loadToDataTable(data);
     });
   }
   if(this.selected == 'Expired'){
     this.adminService.getAllexpiredblockcompanies().subscribe(data=>{
       this.loadToDataTable(data);
     });
   }
   if(this.selected == 'Not Verified'){
    this.adminService.getAllnotverfiblockcompanies().subscribe(data=>{
      this.loadToDataTable(data);
    });
  }
}

loadToDataTable(data){

 this.notExist =false;
 if(data.length == 0){
   this.notExist = true;
 }
 this.dataSource = new MatTableDataSource(data);
 console.log(this.dataSource);
 this.dataSource.paginator = this.paginator;
 this.dataSource.sort = this.sort;
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
// Desc          : All blocked companieslist filter

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
// -----------------------------------End------------------------------------------
  // ---------------------------------Start-------------------------------------------
// Function      : Admin company management
// Params        : id
// Returns       : 
// Author        : sudha
// Date          : 29-12-2017
// Last Modified : 
// Desc          : delete , unblock

//delete company
deleteCompany(id){  
    this.adminService.deleteCompany(id).subscribe(data=>{
      console.log(data);
      if(data.success){
        this.refresh();
           }
           else{
          }
          
    });

  }


//unblock company
unblockCompany(id){
  this.adminService.unblockCompany(id).subscribe(data=>{
    console.log(data);
    if(data.success){
      this.refresh();
   
    }else{
     
    }
  });

}
// -----------------------------------End------------------------------------------
}

