import {Component, ViewChild, OnInit, ElementRef} from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatSnackBar } from '@angular/material';
import { CompanyService } from './../../services/company.service';
import {Router} from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-company-manage-themes',
  templateUrl: './company-manage-themes.component.html',
  styleUrls: ['./company-manage-themes.component.css']
})
export class CompanyManageThemesComponent implements OnInit {
  displayedColumns = ['id','name', 'status'];
  dataSource: MatTableDataSource<any>;
  displatStat = false;
  themeId: string;
  showErr = false;
  existStatus: boolean = false;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(
    private _companyService: CompanyService,
    private routes: Router,
    public snackBar: MatSnackBar) { }

  ngOnInit() {
// ---------------------------------Start-------------------------------------------
// Function      : get logged company details
// Params        : 
// Returns       : company details
// Author        : Rinsha
// Date          : 16-1-2018
// Last Modified : 16-1-2018, Rinsha
// Desc          :
this._companyService.getLoggedUSerDetails().subscribe(info =>{
  if(info == null || info == ''){
    this.routes.navigate(['/clogin']); 
  }
  if(info.role == "admin"){
    this.routes.navigate(['/admin-dashboard']);
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
  }
});
// ---------------------------------End-------------------------------------------
    this.getThemes();
  }


  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }



  //  ---------------------------------Start-------------------------------------------
  // Function      : getThemes
  // Params        : 
  // Returns       : 
  // Author        : Manu Prasad
  // Date          : 1-1-2018
  // Last Modified : 1-1-2018, Manu Prasad 
  // Desc          : Get Themes from database


getThemes(){
  this._companyService.getThemes().subscribe(themes =>{
   
      // console.log(themes);
    if(themes.length <= 0 ){
      // console.log("theme is empty");
      this.existStatus = true;
    }
    else{
      this.existStatus = false;
    }
    //  else {
    // console.log(themes);
    // console.log("theme is not empty");
    //  console.log(this.existStatus);
      this.displatStat = true;
      this.dataSource = new MatTableDataSource(themes);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    
  // }  
  });

  }
//  ---------------------------------end-----------------------------------------------

  //  ---------------------------------Start-------------------------------------------
  // Function      : getThemeId
  // Params        : 
  // Returns       : 
  // Author        : Manu Prasad
  // Date          : 1-1-2018
  // Last Modified : 1-1-2018, Manu Prasad 
  // Desc          : pass id to modal for deleting


getThemeId(id){
  this.themeId = id;
  console.log(id)

  }
//  ---------------------------------end-----------------------------------------------



 //  ---------------------------------Start-------------------------------------------
  // Function      : getThemeId
  // Params        : 
  // Returns       : 
  // Author        : Manu Prasad
  // Date          : 1-1-2018
  // Last Modified : 1-1-2018, Manu Prasad 
  // Desc          : pass id to modal for deleting


  deleteTheme(id){
  console.log(id)
  
    this._companyService.deleteTheme(id).subscribe(res =>{
      console.log(res);
      if(res.status == 2){
        let snackBarRef =  this.snackBar.open('Deleted Successfully', '', {
          duration: 2000
       });
        this.getThemes();
      }
      else if(res.status == 0){
        let snackBarRef =  this.snackBar.open('Cant delete, This theme is currently used for in a survey!', '', {
          duration: 2000
       });
        // $('#myModal .modal-body h4').text('Theme is currently used for a survey!')
        // $('#myModal').modal('show')    
      }
      else{
        let snackBarRef =  this.snackBar.open('* Error in deleting theme!', '', {
          duration: 2000
       });
        // $('#myModal .modal-body h4').text('Error in deleting theme!')
        // $('#myModal').modal('show')    
      }
    });
  
    }
  //  ---------------------------------end-----------------------------------------------


}
