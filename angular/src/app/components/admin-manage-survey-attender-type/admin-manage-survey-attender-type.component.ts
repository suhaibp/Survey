import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormsModule, FormControl, FormGroup, Validators }   from '@angular/forms';
import { AdminService } from '../../services/admin.service';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute } from '@angular/router';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'admin-manage-survey-attender-type',
  templateUrl: './admin-manage-survey-attender-type.component.html',
  styleUrls: ['./admin-manage-survey-attender-type.component.css']
})
export class AdminManageSurveyAttenderTypeComponent implements OnInit {
  displayedColumns = [ 'id','name','action'];
  atleastOneitem : boolean = false;
  btnDisbled:boolean = false;
  isSuccess : boolean = false
  isError : Boolean = false;
  errorMsg :'';
  existStatus : boolean= false
  Updatechange:Boolean =false;
  showSpinner :boolean = false;
  showSpinnerDelete :boolean = false;
  Updaterequired :boolean = false;
  UpdatealreadyExist :boolean = false;
  attenderId :any;
  private sub: any;
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  newAttender =  [{name: ''}];
  attender ={
     name: String
  };
  attenderName: any;
  attenderArray :Array<any>;
  @ViewChild('f') f: any;
  @ViewChild('f1') f1: any;
  @ViewChild('closeBtn') closeBtn: ElementRef;
  @ViewChild('closeBtn1') closeBtn1: ElementRef;
  showAddSuccess : Boolean = false;
  trackByIndex(index: number, value: number) {
  return index;
}


  constructor(private _adminService : AdminService,private _flashMessagesService: FlashMessagesService,private routes : Router,private route: ActivatedRoute,public snackBar: MatSnackBar) { }

  ngOnInit() {
// ---------------------------------Start-------------------------------------------
// Function      : get logged user details
// Params        : 
// Returns       : user details
// Author        : Rinsha
// Date          : 16-1-2018
// Last Modified : 16-1-2018, Rinsha
// Desc          :
this._adminService.getLoggedUSerDetails().subscribe(info =>{
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
      this.loadData();
  }

//  ---------------------------------Start-------------------------------------------
  // Function      : keypress
  // Params        : 
  // Returns       : 
  // Author        : Jooshifa
  // Date          : 29-12-2017
  // Last Modified : 29-12-2017, Jooshifa 
  // Desc          : to avoid space and special characters in name field


  _keyPress(event: any) {
    const pattern = /[a-z A-Z1-9]/;
        let inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar) && event.charCode != 0) {
              // invalid character, prevent input
              event.preventDefault();
        }
  }
   //  ---------------------------------end-------------------------------------------
  
   //  ---------------------------------Start-------------------------------------------
  // Function      : loadData
  // Params        : 
  // Returns       : 
  // Author        : Jooshifa
  // Date          : 29-12-2017
  // Last Modified : 29-12-2017, Jooshifa 
  // Desc          : to get all survey survey attender type

  loadData(){
    this.showSpinner = true
    const users: any[] = [];
    this._adminService.getAttenderType().subscribe(data1=>{
      if(data1 == '')
      {
        this.showSpinner = false
        this.existStatus = false;
      }
        else if(data1 != '')
        {
          this.showSpinner = false
          this.existStatus = true;
        }
          data1.forEach((item, index) => {
            this.showSpinner = false
              users.push({
              name: item.name,
              id :item._id
              });
          });
        this.dataSource = new MatTableDataSource(users);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
  });
}
 //  ---------------------------------end---------------------------------------------

 //  ---------------------------------Start-------------------------------------------
 // Function      : addMoreAttendertype
 // Params        : 
 // Returns       : 
 // Author        : Jooshifa
 // Date          : 29-12-2017
 // Last Modified : 29-12-2017, Jooshifa 
 // Desc          : Add more survey attender type
 addMoreAttendertype(){
     this.newAttender.push({name: ''});
}
//  ---------------------------------end-----------------------------------------------

//  ---------------------------------Start-------------------------------------------
 // Function      : closeMoreattenderType
 // Params        : 
 // Returns       : 
 // Author        : Jooshifa
 // Date          : 29-12-2017
 // Last Modified : 29-12-2017, Jooshifa 
 // Desc          : close survey attender type

 closeMoreattenderType(index){
  if(this.newAttender.length > 1){
        this.newAttender.splice(index, 1);
        }else{
          let snackBarRef =  this.snackBar.open('* Atleast one item required!', '', {
            duration: 2000
          });
        }
    }
//  ---------------------------------end-----------------------------------------------

//  ---------------------------------Start-------------------------------------------
 // Function      : insertAttenderType
 // Params        : 
 // Returns       : 
 // Author        : Jooshifa
 // Date          : 29-12-2017
 // Last Modified : 29-12-2017, Jooshifa 
 // Desc          : close a survey attender  type
 insertAttenderType(){
  this.showSpinner = true
   this._adminService.addAttenderType(this.newAttender).subscribe(data => {
        if(!data.success){
             this.btnDisbled = false
            this.showSpinner = false
            let snackBarRef =  this.snackBar.open(data.msg, '', {
              duration: 2000
          });
        }
             
        else if(data.success){
         
            this.btnDisbled = true
            this.loadData();
            this.closeBtn.nativeElement.click();
              // this.isSuccess = true;
            this.errorMsg = data.msg;
            setTimeout(()=>{ 
                this.isSuccess = false;
                this.errorMsg = '';
                this.btnDisbled = false
          }, 2000);
          this.showSpinner = false
          let snackBarRef =  this.snackBar.open('Create  Category Successfully', '', {
            duration: 2000
          });
          // this.closeBtn.nativeElement.click();
            this.newAttender =  [{name: ''}];
      }
  })
}
//  ---------------------------------end-----------------------------------------------

//  ---------------------------------Start-------------------------------------------
 // Function      : applyFilter
 // Params        : 
 // Returns       : 
 // Author        : Jooshifa
 // Date          : 29-12-2017
 // Last Modified : 29-12-2017, Jooshifa 
 // Desc          :filter in angular material table
applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
}

//  ---------------------------------end-----------------------------------------------
addNew(){
  this.newAttender =  [{name: ''}];
  this.showSpinner = false

 }

//  ---------------------------------Start-------------------------------------------
 // Function      : deleteattenderType
 // Params        : id
 // Returns       : 
 // Author        : Jooshifa
 // Date          : 29-12-2017
 // Last Modified : 29-12-2017, Jooshifa 
 // Desc          : delete survey survey attender type

 deleteattenderType(id){ 
  this.showSpinnerDelete = true
   
        this._adminService.deleteAttenderType(id).subscribe(data2=>{
        if(data2.success==false){
          this.showSpinnerDelete = false
            // this._flashMessagesService.show('Failed! This Servey attender type is currently used by a company ', { cssClass: 'alert-danger', timeout: 3000 });
            let snackBarRef =  this.snackBar.open('Failed! This Industry is currently used by a company', '', {
              duration: 2000
          });
        }
        else{
            this.loadData();
            this.showSpinnerDelete = false
            let snackBarRef =  this.snackBar.open('Delete Survey attender type Successfully', '', {
              duration: 2000
            });
        }
   });
}
//  ---------------------------------end-----------------------------------------------

//  ---------------------------------Start-------------------------------------------
 // Function      : getAttenderTypeId
 // Params        : 
 // Returns       : 
 // Author        : Jooshifa
 // Date          : 29-12-2017
 // Last Modified : 29-12-2017, Jooshifa 
 // Desc          : pass id from modal and get it for the purpuse edit


getAttenderTypeId(id){
  this.showSpinner = false
     this.attenderId = id;
     this.sub = this.route.params.subscribe(params => {
         this._adminService.getSingleAttenderType(this.attenderId).subscribe(data3 => {
              this.attender = data3
        });

    });
}
//  ---------------------------------end-----------------------------------------------

//  ---------------------------------Start-------------------------------------------
 // Function      : updateattenderType
 // Params        : 
 // Returns       : 
 // Author        : Jooshifa
 // Date          : 29-12-2017
 // Last Modified : 29-12-2017, Jooshifa 
 // Desc          : update serevey attender type


 updateattenderType(attender){
  this.showSpinner = true 
    this._adminService.updateAttenderType(attender).subscribe(data4 => {
        if(data4.success==false && data4.msg == 'required'){
          this.showSpinner = false
          let snackBarRef =  this.snackBar.open('* It is a required field!', '', {
            duration: 2000
          });
        }
        else{
        if(data4.success==false && data4.msg == 'alreadyexist'){
          this.showSpinner = false
          let snackBarRef =  this.snackBar.open('* This type is already exist!', '', {
            duration: 2000
          });
          }
          else{
            if(data4.success==false && data4.msg == 'nochange'){
              this.showSpinner = false
              let snackBarRef =  this.snackBar.open('* No changes to update!', '', {
                duration: 2000
              });
            
            }
          else{
                this.loadData();
                this.closeBtn1.nativeElement.click();
                let snackBarRef =  this.snackBar.open('Update Survey attender type Successfully', '', {
                  duration: 2000
                });
        }
      }
    }
  });
}
  //  ---------------------------------end-----------------------------------------------
}

