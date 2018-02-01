import { Component ,ViewChild, OnInit } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatSnackBar } from '@angular/material';
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
  showSpinner :boolean = false;
  
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
     private routes: Router,public snackBar: MatSnackBar) { }

    
           refresh(){
            this.showSpinner =true
             console.log(this.selected);
            const company = [];
              if(this.selected == 'all'){
                this.adminService.getAllcompanies().subscribe(data=>{
                  
                  this.loadToDataTable(data);
                  this.showSpinner =false
                });
              }
              if(this.selected == 'Active'){
                this.adminService.getAllactivecompanies().subscribe(data=>{
                  this.loadToDataTable(data);
                  this.showSpinner =false
                });
              }
              if(this.selected == 'Block'){
                this.adminService.getAllblockedcompanies().subscribe(data=>{
                  this.loadToDataTable(data);
                  this.showSpinner =false
                });
              }
              if(this.selected == 'Delete'){
                this.adminService.getAlldeletedcompanies().subscribe(data=>{
                  this.loadToDataTable(data);
                  this.showSpinner =false
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
  this.showSpinner =true
    this.adminService.deleteCompany(id).subscribe(data=>{
      // console.log(data);
      if(data.success){
        this.showSpinner =false
        let snackBarRef =  this.snackBar.open(data.msg, '', {
          duration: 2000
        });
        this.refresh();
           }
           else{
            this.showSpinner =false
            let snackBarRef =  this.snackBar.open(data.msg, '', {
              duration: 2000
            });
          }
          
    });

  }

//block company
blockCompany(id){  
  this.adminService.blockCompany(id).subscribe(data=>{
    // console.log(data);
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
//unblock company
unblockCompany(id){
  this.adminService.unblockCompany(id).subscribe(data=>{
    // console.log(data);
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
