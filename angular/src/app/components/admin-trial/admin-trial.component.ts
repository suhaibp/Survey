import { Component, ViewChild, OnInit } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { AdminService} from './../../services/admin.service';
import {Router} from '@angular/router';

@Component({
  selector: 'admin-trial',
  templateUrl: './admin-trial.component.html',
  styleUrls: ['./admin-trial.component.css']
})
export class AdminTrialComponent implements OnInit {
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
// Last Modified : 
// Desc          : Allnot trailcompanieslist
 
  refresh(){
    console.log(this.selected);
   const company = [];
     if(this.selected == 'all'){
       this.adminService.getAlltrialcompanies().subscribe(data=>{
         this.loadToDataTable(data);
       });
     }
     if(this.selected == 'Active'){
       this.adminService.getAlltrialactivecompanies().subscribe(data=>{
         this.loadToDataTable(data);
       });
     }
     if(this.selected == 'Block'){
       this.adminService.getAlltrialblockcompanies().subscribe(data=>{
         this.loadToDataTable(data);
       });
     }
     if(this.selected == 'Delete'){
       this.adminService.getAlltrialdeletecompanies().subscribe(data=>{
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
// Desc          : All trail companieslist filer
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
// Desc          : delete,block,unblock

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


