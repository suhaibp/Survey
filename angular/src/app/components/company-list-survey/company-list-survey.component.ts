import { Component, OnInit, ElementRef ,ViewChild  } from '@angular/core';
import { CompanyService } from '../../services/company.service';
import {MatTableDataSource,MatPaginator, MatSort} from '@angular/material';
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

  constructor(private companyService: CompanyService) { }

  ngOnInit() {
    this.loadSurvey();
  }

  loadSurvey(){
    this.companyService.getAllSurvey().subscribe(data=>{
      console.log(data);
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
