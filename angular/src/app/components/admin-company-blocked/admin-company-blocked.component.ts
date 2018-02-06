import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatSnackBar } from '@angular/material';
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
  id :any;
  notExist =false;
  all_value =false;
  selected = 'all';
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
// Last Modified : 03-01-2018
// Desc          : All blocked companieslist
// -----------------------------------
 
 
refresh(){
  this.showSpinner =true
  console.log(this.selected);
 const company = [];
   if(this.selected == 'all'){
     this.adminService.getAllblockedcompanies().subscribe(data=>{
      if(data.length != 0){
        this.all_value=true;
      }
       this.loadToDataTable(data);
       this.showSpinner =false
     });
   }
   if(this.selected == 'Subscribed'){
     this.adminService.getAllsubblockcompanies().subscribe(data=>{
       this.loadToDataTable(data);
       this.showSpinner =false
     });
   }
   if(this.selected == 'Trail'){
     this.adminService.getAlltrialblockcompanies().subscribe(data=>{
       this.loadToDataTable(data);
       this.showSpinner =false
     });
   }
   if(this.selected == 'Expired'){
     this.adminService.getAllexpiredblockcompanies().subscribe(data=>{
       this.loadToDataTable(data);
       this.showSpinner =false
     });
   }
   if(this.selected == 'Not Verified'){
    this.adminService.getAllnotverfiblockcompanies().subscribe(data=>{
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
  getId(id){
    // this.showSpinner =false
    // this.showSpinnerDelete =false
    this.id = id
   //  console.log(this.id)
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
  this.showSpinner =true
    this.adminService.deleteCompany(id).subscribe(data=>{
      console.log(data);
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


//unblock company
unblockCompany(id){
  this.showSpinner =true
  this.adminService.unblockCompany(id).subscribe(data=>{
    console.log(data);
    if(data.success){
      this.showSpinner =false
      let snackBarRef =  this.snackBar.open(data.msg, '', {
        duration: 2000
      });
      this.refresh();
   
    }else{
      this.showSpinner =false
      let snackBarRef =  this.snackBar.open(data.msg, '', {
        duration: 2000
      });
     
    }
  });

}
// -----------------------------------End------------------------------------------
}

