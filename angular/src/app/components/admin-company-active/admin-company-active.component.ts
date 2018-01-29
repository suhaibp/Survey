import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatSnackBar } from '@angular/material';
import { AdminService} from './../../services/admin.service';
import {Router} from '@angular/router';

@Component({
  selector: 'admin-company-active',
  templateUrl: './admin-company-active.component.html',
  styleUrls: ['./admin-company-active.component.css']
})
export class AdminCompanyActiveComponent implements OnInit {

  displayedColumns = ['slno','companyname','email','contactperson','contactnumber','companystatus','action'];
  dataSource: MatTableDataSource<any>;
  notExist =false;
  selected = 'all';
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
 

  constructor(
    private adminService : AdminService,
     private routes: Router,
     public snackBar: MatSnackBar) { }
    // ---------------------------------Start-------------------------------------------
// Function      : Admin company management
// Params        : 
// Returns       : 
// Author        : sudha
// Date          : 29-12-2017
// Last Modified : 03-01-2018
// Desc          : All active companieslist, block,delete
// --------------------------------------------------------------------------------------
          refresh(){
            console.log(this.selected);
           const company = [];
             if(this.selected == 'all'){
               this.adminService.getAllactivecompanies().subscribe(data=>{
                 this.loadToDataTable(data);
               });
             }
             if(this.selected == 'Subscribed'){
               this.adminService.getAllsubactivecompanies().subscribe(data=>{
                 this.loadToDataTable(data);
               });
             }
             if(this.selected == 'Trail'){
               this.adminService.getAlltrialactivecompanies().subscribe(data=>{
                 this.loadToDataTable(data);
               });
             }
             if(this.selected == 'Expired'){
               this.adminService.getAllexpiredactivecompanies().subscribe(data=>{
                 this.loadToDataTable(data);
               });
             }
             if(this.selected == 'Not Verified'){
              this.adminService.getAllnotverfiactivecompanies().subscribe(data=>{
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

  //delete company
deleteCompany(id){  
  this.adminService.deleteCompany(id).subscribe(data=>{
    console.log(data);
    if(data.success){
      let snackBarRef =  this.snackBar.open(data.msg, '', {
        duration: 2000
      });
      this.refresh();
         }
         else{
          let snackBarRef =  this.snackBar.open(data.msg, '', {
            duration: 2000
          });
        }
        
  });

}

//block company
blockCompany(id){  
this.adminService.blockCompany(id).subscribe(data=>{
  console.log(data);
  if(data.success){
    let snackBarRef =  this.snackBar.open(data.msg, '', {
      duration: 2000
    });
    this.refresh();
  
  }else{
    let snackBarRef =  this.snackBar.open(data.msg, '', {
      duration: 2000
    });
  }
});

}  
// -----------------------------------End------------------------------------------
}
