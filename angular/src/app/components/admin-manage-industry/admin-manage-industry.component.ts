
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormsModule, FormControl, FormGroup, Validators }   from '@angular/forms';
import { AdminService } from '../../services/admin.service';
import { MatPaginator, MatSort, MatTableDataSource, MatSnackBar } from '@angular/material';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'admin-manage-industry',
  templateUrl: './admin-manage-industry.component.html',
  styleUrls: ['./admin-manage-industry.component.css']
})
export class AdminManageIndustryComponent implements OnInit {
  displayedColumns = [ 'id','name','action'];
  atleastOneitem : boolean = false
  btnDisbled:boolean = false;
  isSuccess : boolean = false
  isError : Boolean = false;
  showSpinner :boolean = false;
  showSpinnerDelete :boolean = false;
  errorMsg :'';
  existStatus :Boolean =true;
  Updatechange:Boolean =false;
  Updaterequired :boolean = false;
  UpdatealreadyExist :boolean = false;
  industryId :any;
  private sub: any;
  dataSource: MatTableDataSource<any>;
   @ViewChild(MatPaginator) paginator: MatPaginator;
   @ViewChild(MatSort) sort: MatSort;
   newIndustry =  [{name: ''}];
   industry ={
     name: String
   };
   industryName: any;
   industryArray :Array<any>;
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
  // Desc          : to get all survey Industry

  loadData(){
    this.showSpinner = true;
      const users: any[] = [];
      this._adminService.getIndustry().subscribe(data1=>{
        this.showSpinner = false;
        if(data1 == '')
        {
            this.existStatus = false;
        }
          if(data1 != '')
          {
              this.existStatus = true;
          }
          data1.forEach((item, index) => {
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
 // Function      : addMoreIndustry
 // Params        : 
 // Returns       : 
 // Author        : Jooshifa
 // Date          : 29-12-2017
 // Last Modified : 29-12-2017, Jooshifa 
 // Desc          : Add more Industry
 addMoreIndustry(){
     this.newIndustry.push({name: ''});
    
    
 }
//  ---------------------------------end-----------------------------------------------

//  ---------------------------------Start-------------------------------------------
 // Function      : closeMoreOption
 // Params        : 
 // Returns       : 
 // Author        : Jooshifa
 // Date          : 29-12-2017
 // Last Modified : 29-12-2017, Jooshifa 
 // Desc          : close industry

 closeMoreIndustry(index){
    if(this.newIndustry.length > 1){
         this.newIndustry.splice(index, 1);
      }
      else{
        let snackBarRef =  this.snackBar.open('* Atleast one item required!', '', {
            duration: 2000
        });
            // this._flashMessagesService.show('Atleast one item required!', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
      }
  }
//  ---------------------------------end-----------------------------------------------

//  ---------------------------------Start-------------------------------------------
 // Function      : insertIndustry
 // Params        : 
 // Returns       : 
 // Author        : Jooshifa
 // Date          : 29-12-2017
 // Last Modified : 29-12-2017, Jooshifa 
 // Desc          : close a industry
 insertIndustry(){
    this.showSpinner = true;
      this._adminService.addIndustry(this.newIndustry).subscribe(data => {
          if(!data.success){
            this.showSpinner = false;
              this.btnDisbled = false
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
                //   this.isSuccess = false;
                //   this.errorMsg = '';
                  this.btnDisbled = false
              }, 2000);
              this.showSpinner = false;
              let snackBarRef =  this.snackBar.open('Create  Industry Successfully', '', {
                duration: 2000
              });
            // this.closeBtn.nativeElement.click();
              this.newIndustry =  [{name: ''}];
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
addNew(){
    this.newIndustry =  [{name: ''}];
    this.showSpinner = false;
}

//  ---------------------------------Start-------------------------------------------
 // Function      : deleteIndustry
 // Params        : 
 // Returns       : 
 // Author        : Jooshifa
 // Date          : 29-12-2017
 // Last Modified : 29-12-2017, Jooshifa 
 // Desc          : delete survey Industry

 deleteIndustry(id){ 
    this.showSpinnerDelete = true
    this._adminService.deleteIndustry(id).subscribe(data2=>{
        if(data2.success==false){
            this.showSpinnerDelete = false
            let snackBarRef =  this.snackBar.open('Failed! This Industry is currently used by a company', '', {
                duration: 2000
            });
            // this._flashMessagesService.show('Failed! This Industry is currently used by a company ', { cssClass: 'alert-danger', timeout: 3000 });
         }
        else{
            this.loadData();
            this.showSpinnerDelete = false
            let snackBarRef =  this.snackBar.open('Delete Industry successfully', '', {
                duration: 2000
            });
        }
   });
}

//  ---------------------------------end-----------------------------------------------

//  ---------------------------------Start-------------------------------------------
 // Function      : getIndustryId
 // Params        : 
 // Returns       : 
 // Author        : Jooshifa
 // Date          : 29-12-2017
 // Last Modified : 29-12-2017, Jooshifa 
 // Desc          : pass id from modal and get it for the purpuse edit


getIndustryId(id){
    this.showSpinner = false;
    this.industryId = id;
    this.sub = this.route.params.subscribe(params => {
        this._adminService.getSingleindustry(this.industryId).subscribe(data3 => {
               this.industry = data3
        });
     });
}
//  ---------------------------------end-----------------------------------------------

//  ---------------------------------Start-------------------------------------------
 // Function      : updateIndustry
 // Params        : 
 // Returns       : 
 // Author        : Jooshifa
 // Date          : 29-12-2017
 // Last Modified : 29-12-2017, Jooshifa 
 // Desc          : Update industry


 updateIndustry(industry){
    this.showSpinner =true
        this._adminService.updateIndustry(industry).subscribe(data4 => {
            if(data4.success==false && data4.msg == 'required'){
                this.Updaterequired = true
                this.showSpinner =false
                let snackBarRef =  this.snackBar.open('* It is a required Field!', '', {
                    duration: 2000
                });
            }
            else{
                if(data4.success==false && data4.msg == 'alreadyexist'){
                    this.showSpinner =false
                    let snackBarRef =  this.snackBar.open('* This Industry is already exist!', '', {
                        duration: 2000
                    });
                }
                else{
                    if(data4.success==false && data4.msg == 'nochange'){
                        this.showSpinner =false
                        let snackBarRef =  this.snackBar.open('* No changes to update!', '', {
                            duration: 2000
                        });
                    
                    }
                else{
                    this.loadData();
                    this.closeBtn1.nativeElement.click();
                    this.showSpinner =false
                    let snackBarRef =  this.snackBar.open('Update Industry Successfully', '', {
                        duration: 2000
                    });
                }
            }
        }
      });
}
  //  ---------------------------------end------------------------------

}
