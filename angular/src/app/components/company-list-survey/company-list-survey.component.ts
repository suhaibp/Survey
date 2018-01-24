import { Component, OnInit, ElementRef ,ViewChild  } from '@angular/core';
import { CompanyService } from '../../services/company.service';
import {MatTableDataSource,MatPaginator, MatSort} from '@angular/material';
import { CanActivate, Router } from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-company-list-survey',
  templateUrl: './company-list-survey.component.html',
  styleUrls: ['./company-list-survey.component.css']
})
export class CompanyListSurveyComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns = ['slno','name','start_datetime', 'end_datetime', 'status','action'];
  dataSource: MatTableDataSource<any>;
  dateNow = new Date();
  editId = '';
  existStatus: boolean = false;
  constructor(private companyService: CompanyService, private routes: Router) { }

  ngOnInit() {
// ---------------------------------Start-------------------------------------------
// Function      : get logged company details
// Params        : 
// Returns       : company details
// Author        : Rinsha
// Date          : 17-1-2018
// Last Modified : 17-1-2018, Rinsha
// Desc          :
this.companyService.getLoggedUSerDetails().subscribe(info =>{
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
    this.loadSurvey();
  }

  loadSurvey(){
    this.companyService.getAllSurvey().subscribe(data=>{
      if(data.length <= 0 ){
        // console.log("theme is empty");
        this.existStatus = true;
      }
      else{
        this.existStatus = false;
      }
      // console.log(data);
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
       
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  deleteSurvey(){
    this.companyService.deleteSurvey(this.editId).subscribe(data=>{
      console.log(data);
      if(data.success){
        this.loadSurvey();
        $('#myModal .modal-body h4').text(data.msg)
        $('#myModal').modal('show');
      }else{
        $('#myModal .modal-body h4').text(data.msg)
        $('#myModal').modal('show'); 
      }
    });
  }
  setEditId(id){
    this.editId = id;
  }

}
