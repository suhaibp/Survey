import { Component ,ViewChild, OnInit } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { AdminService} from './../../services/admin.service';
import {Router} from '@angular/router';

@Component({
  selector: 'admin-all-companies',
  templateUrl: './admin-all-companies.component.html', 
  styleUrls: ['./admin-all-companies.component.css']
})
export class AdminAllCompaniesComponent implements OnInit {
  displayedColumns = [ 'slno','companyname','email','contactperson','contactnumber','companystatus','status','action'];
  dataSource: MatTableDataSource<any>;
  notExist =false;
  selected = 'all';

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
 
// ---------------------------------Start-------------------------------------------
// Function      : Admin user management
// Params        : id
// Returns       : 
// Author        : sudha
// Date          : 29-12-2017 
// Last Modified : 03-01-2018
// Desc          : All users
  constructor(
    private adminService : AdminService,
     private router: Router) { }

    
           refresh(){
             console.log(this.selected);
            const company = [];
              if(this.selected == 'all'){
                this.adminService.getAllcompanies().subscribe(data=>{
                  this.loadToDataTable(data);
                });
              }
              if(this.selected == 'Active'){
                this.adminService.getAllactivecompanies().subscribe(data=>{
                  this.loadToDataTable(data);
                });
              }
              if(this.selected == 'Block'){
                this.adminService.getAllblockedcompanies().subscribe(data=>{
                  this.loadToDataTable(data);
                });
              }
              if(this.selected == 'Delete'){
                this.adminService.getAlldeletedcompanies().subscribe(data=>{
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

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
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
