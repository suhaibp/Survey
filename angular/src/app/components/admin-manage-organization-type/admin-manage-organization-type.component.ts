import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormsModule, FormControl, FormGroup, Validators }   from '@angular/forms';
import { AdminService } from '../../services/admin.service';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute } from '@angular/router';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'admin-manage-organization-type',
  templateUrl: './admin-manage-organization-type.component.html',
  styleUrls: ['./admin-manage-organization-type.component.css']
})
export class AdminManageOrganizationTypeComponent implements OnInit {
  displayedColumns = [ 'id','name','action'];
  atleastOneitem :boolean = false;
  btnDisbled:boolean = false;
  isSuccess : boolean = false
  isError : Boolean = false;
  errorMsg :'';
  existStatus : boolean= true
  Updaterequired :boolean = false;
  Updatechange:boolean = false;
  UpdatealreadyExist :boolean = false;
  showSpinner :boolean = false;
  showSpinnerDelete :boolean = false;
  organizationId :any;
  private sub: any;
  dataSource: MatTableDataSource<any>;
   @ViewChild(MatPaginator) paginator: MatPaginator;
   @ViewChild(MatSort) sort: MatSort;
   newOrganization =  [{name: ''}];
   organization ={
     name: String
   };
   organizationName: any;
   organizationArray :Array<any>;
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
   addNew(){
    this.newOrganization =  [{name: ''}];
    this.showSpinner = false
   }

   //  ---------------------------------Start-------------------------------------------
  // Function      : loadData
  // Params        : 
  // Returns       : 
  // Author        : Jooshifa
  // Date          : 29-12-2017
  // Last Modified : 29-12-2017, Jooshifa 
  // Desc          : to get all survey organization type

  loadData(){
    this.showSpinner = true
    const users: any[] = [];
    this._adminService.getOrganizationType().subscribe(data1=>{
        if(data1 == '')
        {
            this.showSpinner = false
            this.existStatus = false;
        }
        if(data1 != '')
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
 // ---------------------------------end---------------------------------------------

 //  ---------------------------------Start-------------------------------------------
 // Function      : addMoreOrganizationtype
 // Params        : 
 // Returns       : 
 // Author        : Jooshifa
 // Date          : 29-12-2017
 // Last Modified : 29-12-2017, Jooshifa 
 // Desc          : Add more Organization type
 addMoreOrganizationtype(){
     this.newOrganization.push({name: ''});
  }
//  ---------------------------------end-----------------------------------------------

//  ---------------------------------Start-------------------------------------------
 // Function      : closeMoreOrganizationType
 // Params        : 
 // Returns       : 
 // Author        : Jooshifa
 // Date          : 29-12-2017
 // Last Modified : 29-12-2017, Jooshifa 
 // Desc          : close Organization type

 closeMoreOrganizationType(index){
      if(this.newOrganization.length > 1){
          this.newOrganization.splice(index, 1);
      }else{
        let snackBarRef =  this.snackBar.open('* Atleast one item required!', '', {
            duration: 2000
        });
        // console.log("test");
          setTimeout(()=>{ 
              this.atleastOneitem = false;
          }, 2000);
          return false;
      }
 }
//  ---------------------------------end-----------------------------------------------

//  ---------------------------------Start-------------------------------------------
 // Function      : insertOrganizationType
 // Params        : 
 // Returns       : 
 // Author        : Jooshifa
 // Date          : 29-12-2017
 // Last Modified : 29-12-2017, Jooshifa 
 // Desc          : close a Organization type
 insertOrganizationType(message: string){
    this.showSpinner = true
   this._adminService.addOrganizationType(this.newOrganization).subscribe(data => {
        if(!data.success){
            this.showSpinner = false
            // this.isError = true;
            // this.errorMsg = data.msg;
            let snackBarRef =  this.snackBar.open(data.msg, '', {
                duration: 2000
              });
            this.btnDisbled = false
            setTimeout(()=>{ 
                  this.isError = false;
                  this.errorMsg = '';
            }, 2000);
         }
          else if(data.success){
            this.showSpinner = false
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
              let snackBarRef =  this.snackBar.open('Create  Organization type Successfully', '', {
                duration: 2000
              });
            // this.closeBtn.nativeElement.click();
              this.newOrganization =  [{name: ''}];
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
 // Desc          : filter in angular material table


applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
}
//  ---------------------------------end-----------------------------------------------

//  ---------------------------------Start-------------------------------------------
 // Function      : deleteOrganizationType
 // Params        : id
 // Returns       : 
 // Author        : Jooshifa
 // Date          : 29-12-2017
 // Last Modified : 29-12-2017, Jooshifa 
 // Desc          : delete survey Organization type

 deleteOrganizationType(id){ 
    this.showSpinnerDelete = true
        this._adminService.deleteOrganizationType(id).subscribe(data2=>{
            if(data2.success==false){
                this.showSpinnerDelete = false
                // this._flashMessagesService.show('Failed! This Organization type is currently used by a company ', { cssClass: 'alert-danger', timeout: 3000 });
                let snackBarRef =  this.snackBar.open('Failed! This Industry is currently used by a company', '', {
                    duration: 2000
                });
            }
            else{
                this.loadData();
                this.showSpinnerDelete = false
                let snackBarRef =  this.snackBar.open('Delete  Organization type Successfully', '', {
                    duration: 2000
                });
             }
        });
}

//  ---------------------------------end-----------------------------------------------

//  ---------------------------------Start-------------------------------------------
 // Function      : getOrganizationTypeId
 // Params        : 
 // Returns       : 
 // Author        : Jooshifa
 // Date          : 29-12-2017
 // Last Modified : 29-12-2017, Jooshifa 
 // Desc          : pass id from modal and get it for the purpuse edit


getOrganizationTypeId(id){
    this.showSpinner = false
      this.organizationId = id;
      this.sub = this.route.params.subscribe(params => {
          this._adminService.getSingleOrganizationType(this.organizationId).subscribe(data3 => {
                this.organization = data3
          });
      });
 }
//  ---------------------------------end-----------------------------------------------

//  ---------------------------------Start-------------------------------------------
 // Function      : updateOrganizationType
 // Params        : 
 // Returns       : 
 // Author        : Jooshifa
 // Date          : 29-12-2017
 // Last Modified : 29-12-2017, Jooshifa 
 // Desc          : update Organization type

updateOrganizationType(organization){ 
    this.showSpinner = true
      this._adminService.updateOrganizationType(organization).subscribe(data4 => {
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
                    this.showSpinner = false
                    let snackBarRef =  this.snackBar.open('Update  Organization type Successfully', '', {
                        duration: 2000
                    });
                 }
          }
        }
      });
}

  //  ---------------------------------end-----------------------------------------------


}
