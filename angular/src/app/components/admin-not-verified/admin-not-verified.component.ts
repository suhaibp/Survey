import { Component,ViewChild, OnInit } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatSnackBar } from '@angular/material';
import { AdminService} from './../../services/admin.service';
import {Router} from '@angular/router';
@Component({
  selector: 'admin-not-verified',
  templateUrl: './admin-not-verified.component.html',
  styleUrls: ['./admin-not-verified.component.css']
})
export class AdminNotVerifiedComponent implements OnInit {
  displayedColumns = [ 'slno','companyname','email','contactperson','contactnumber','status','action'];
  dataSource: MatTableDataSource<any>;
  notExist =false;
  selected = 'all';
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
// Desc          : Allnotverficompanieslist


  refresh(){
    console.log(this.selected);
   const company = [];
     if(this.selected == 'all'){
       this.adminService.getAllnotverficompanies().subscribe(data=>{
         this.loadToDataTable(data);
       });
     }
     if(this.selected == 'Active'){
       this.adminService.getAllnotverfiactivecompanies().subscribe(data=>{
         this.loadToDataTable(data);
       });
     }
     if(this.selected == 'Block'){
       this.adminService.getAllnotverfiblockcompanies().subscribe(data=>{
         this.loadToDataTable(data);
       });
     }
     if(this.selected == 'Delete'){
       this.adminService.getAllnotverfideletecompanies().subscribe(data=>{
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
     // -----------------------------------End------------------------------------------  
     
     // ---------------------------------Start-------------------------------------------
// Function      : Admin company management
// Params        : 
// Returns       : 
// Author        : sudha
// Date          : 29-12-2017
// Last Modified : 
// Desc          : Allnotverficompanieslist filer

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
          // console.log(data);
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
        let snackBarRef =  this.snackBar.open(data.msg, '', {
          duration: 2000
        });
        // console.log(data);
        if(data.success){
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
    
    
    