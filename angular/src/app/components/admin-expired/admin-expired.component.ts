import { Component, ViewChild, OnInit } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { AdminService} from './../../services/admin.service';
import {Router} from '@angular/router';

@Component({
  selector: 'admin-expired',
  templateUrl: './admin-expired.component.html',
  styleUrls: ['./admin-expired.component.css']
})
export class AdminExpiredComponent implements OnInit {
  displayedColumns = [ 'slno','companyname','email','contactperson','contactnumber','status','action'];
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
// Desc          : All expired companieslist
// -----------------------------------
 
  refresh(){
    console.log(this.selected);
   const company = [];
     if(this.selected == 'all'){
       this.adminService.getAllexpiredcompanies().subscribe(data=>{
         this.loadToDataTable(data);
       });
     }
     if(this.selected == 'Active'){
       this.adminService.getAllexpiredactivecompanies().subscribe(data=>{
         this.loadToDataTable(data);
       });
     }
     if(this.selected == 'Block'){
       this.adminService.getAllexpiredblockcompanies().subscribe(data=>{
         this.loadToDataTable(data);
       });
     }
     if(this.selected == 'Delete'){
       this.adminService.getAllexpireddeletecompanies().subscribe(data=>{
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
// Desc          : All expired companieslist filter

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
// Desc          : delete , block, unblock

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

//block company
blockCompany(id){  
  this.adminService.blockCompany(id).subscribe(data=>{
    console.log(data);
    if(data.success){
      this.refresh();
    
    }else{
     
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

