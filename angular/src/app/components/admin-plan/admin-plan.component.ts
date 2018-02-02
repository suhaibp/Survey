import { Component, ViewChild, OnInit,ElementRef } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { AdminService} from './../../services/admin.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';
@Component({
  selector: 'admin-plan',
  templateUrl: './admin-plan.component.html',
  styleUrls: ['./admin-plan.component.css']
})
export class AdminPlanComponent implements OnInit {
  displayedColumns = [ 'slno','planname','price','bestvalue','action'];
  dataSource: MatTableDataSource<any>;
  notExist =false;
  id :any;
  numofsurvey:any;
  numofqtn:any;
  numofsurveyattn:any;
  disablePrice:boolean =false;
  showSpinner :boolean = false;
  showSpinnerDelete :boolean = false;

  plan ={

    plan_name: '',
    plan_price: '',
    no_survey:'',
    numofsurvey:'',
    no_question: '',
    numofqtn:'',
    no_survey_attenders: '',
    numofsurveyattn:'',
    excel_import: '',
    survey_logic:''
    
    
  };
  newPlan={planname:'',
  planprice:'',
  surveyno:'',
  surveyqtno:'',
  surveyattno:'',
  value1:'',
  value2:'',
  value3:'',
  skip :false,
  eximport : false}

  @ViewChild('closeBtn') closeBtn: ElementRef;
  @ViewChild('closeBtn1') closeBtn1: ElementRef;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  selected:any;
  constructor(private adminService : AdminService, private routes: Router,public snackBar: MatSnackBar) { }

  // ---------------------------------Start-------------------------------------------
// Function      : admin plan 
// Params        : id
// Returns       : 
// Author        : sudha
// Date          : 25-01-2018
// Last Modified : 
// Desc          : All plan,add plan, delete plan,edit plan


  ngOnInit() {
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
    this.refresh();
  }

  refresh(){
    this.showSpinnerDelete =true;
    const users = [];
        this.adminService.getAllplans().subscribe(data=>{
          this.showSpinnerDelete =false;
          console.log(data);
          if(data.length == 0){
            this.notExist = true;
          }
        this.dataSource = new MatTableDataSource(data);
        console.log(this.dataSource);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  addNewplan(){
    this.showSpinner =false;
    this.showSpinnerDelete =false;
    this.newPlan={planname:'',
    planprice:'',
    surveyno:'',
    surveyqtno:'',
    surveyattno:'',
    value1:'',
    value2:'',
    value3:'',
    skip :false,
    eximport : false}


   }

  addPlan(newPlan){
    this.showSpinner =true;
   // console.log(newPlan);
      
      this.adminService.addPlan(this.newPlan).subscribe(addPlan=>{
        if(!addPlan.success){
          this.showSpinner =false
          let snackBarRef =  this.snackBar.open(addPlan.msg, '', {
            duration: 2000
        });
          
          this.refresh();
        
      }
      else if(addPlan.success){
        this.showSpinner =false
        let snackBarRef =  this.snackBar.open(addPlan.msg, '', {
          duration: 2000
          
      });
      this.closeBtn.nativeElement.click();
      this.refresh(); 
      }
  
    });
  
   }
   getId(id){
    this.showSpinner =false
    this.showSpinnerDelete =false
    this.id = id
   //  console.log(this.id)
  }
                  onChange(id,value){
                
                this.adminService.bestPlan(id,value).subscribe(data2=>{
                  // console.log(data2.success);
                      if(data2.success==true){
                        this.refresh();
                    
                    }
                    else{
                     // this.refresh();
                      
                    }
                  });
                }
 
  deletePlan(id){
    this.showSpinnerDelete =true;
    console.log(id);
    this.adminService.deletePlan(id).subscribe(data2=>{
  
      if(data2.success==false){
        this.showSpinnerDelete =false
        let snackBarRef =  this.snackBar.open(data2.msg, '', {
          duration: 2000
      });
        this.refresh();
    
    }
    else{
      this.refresh();
      this.showSpinnerDelete =false;
      let snackBarRef =  this.snackBar.open(data2.msg, '', {
        duration: 2000
    });
    }
  
  });
   }

            getEditId(id){
              this.showSpinner =false;
                this.adminService.getSingleplan(id).subscribe(data=>{
               
                  console.log(data);
                  if(data.is_default_plan ==true){
                    this.disablePrice = true
                  }
                  else if(data.is_default_plan ==false){
                    this.disablePrice = false
                  }
                  //console.log(data);
                  if(data.success==false){
                    let snackBarRef =  this.snackBar.open(data.msg, '', {
                      duration: 2000
                  });
                    this.refresh();
                
                }
                else{
                 
                }
                this.plan = data;
                this.plan.numofsurvey = (data.no_survey!='Unlimited') ? "limited" : "Unlimited";
                this.plan.numofqtn = (data.no_question!='Unlimited') ? "limited" : "Unlimited";
                this.plan.numofsurveyattn = (data.no_survey_attenders!='Unlimited') ? "limited" : "Unlimited";
                });
            
            }
  updatePlan(plan){
    this.showSpinner =true;
    this.adminService.updatePlan(this.plan).subscribe(data=>{
     
      if(!data.success){
        this.showSpinner =false;
        let snackBarRef =  this.snackBar.open(data.msg, '', {
          duration: 2000
      });
 
    }
    else if(data.success){
      this.showSpinner =false;
      let snackBarRef =  this.snackBar.open(data.msg, '', {
        duration: 2000
    });
    this.closeBtn1.nativeElement.click();
    this.refresh();
     
   }
       
   });
  
  }
}
