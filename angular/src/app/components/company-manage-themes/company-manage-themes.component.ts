import {Component, ViewChild, OnInit, ElementRef} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
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
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(
    private _companyService: CompanyService,
    private _router: Router) { }

  ngOnInit() {
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
    console.log(themes);
    if(themes){
      this.displatStat = true;
      this.dataSource = new MatTableDataSource(themes);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
    
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
        this.getThemes();
      }
      else if(res.status == 0){
        $('#myModal .modal-body h4').text('Theme is currently used for a survey!')
        $('#myModal').modal('show')    
      }
      else{
        $('#myModal .modal-body h4').text('Error in deleting theme!')
        $('#myModal').modal('show')    
      }
    });
  
    }
  //  ---------------------------------end-----------------------------------------------


}
