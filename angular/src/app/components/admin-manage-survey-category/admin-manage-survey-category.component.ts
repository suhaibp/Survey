import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormsModule, FormControl, FormGroup, Validators }   from '@angular/forms';
import { AdminService } from '../../services/admin.service';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute } from '@angular/router';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'manage-survey-category',
  templateUrl: './admin-manage-survey-category.component.html',
  styleUrls: ['./admin-manage-survey-category.component.css']
})
export class AdminManageSurveyCategoryComponent implements OnInit {
      displayedColumns = [ 'id','name','action'];
      catgId :any;
      atleastOneitem :boolean = false;
      isSuccess : boolean = false
      isError : Boolean = false;
      errorMsg :'';
      existStatus :Boolean =true;
      Updatechange:Boolean =false;
      Updaterequired :boolean = false;
      UpdatealreadyExist :boolean = false;
      showSpinner :boolean = false;
      showSpinnerDelete :boolean = false;
      private sub: any;
      dataSource: MatTableDataSource<any>;
      @ViewChild(MatPaginator) paginator: MatPaginator;
      @ViewChild(MatSort) sort: MatSort;
      newCategory =  [{name: ''}];
      category ={
        name: String
      };
      categoryName: any;
      categoryArray :Array<any>;
      @ViewChild('f') f: any;
      @ViewChild('f1') f1: any;
      @ViewChild('closeBtn') closeBtn: ElementRef;
      @ViewChild('closeBtn1') closeBtn1: ElementRef;
      showAddSuccess : Boolean = false;
      trackByIndex(index: number, value: number) {
      return index;
  }
  constructor(private _adminService : AdminService,private _flashMessagesService: FlashMessagesService,private routes : Router,private route: ActivatedRoute,public snackBar: MatSnackBar) {}

  ngOnInit( ) {
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
  addNew(){
    this.newCategory =  [{name: ''}];
    this.showSpinner = false;


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
      const pattern = /[a-z A-Z]/;
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
  // Desc          : to get all survey category

  loadData(){
    this.showSpinnerDelete =true
     const users: any[] = [];
     this._adminService.getCategory().subscribe(data1=>{
       
         if(data1 == '')
          {
            this.showSpinnerDelete =false
              this.existStatus = false;
          }
         else if(data1 != '')
          {
            this.showSpinnerDelete =false
              this.existStatus = true;
          }
            data1.forEach((item, index) => {
              this.showSpinnerDelete =false
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
  // Function      : addMoreCategory
  // Params        : 
  // Returns       : 
  // Author        : Jooshifa
  // Date          : 29-12-2017
  // Last Modified : 29-12-2017, Jooshifa 
  // Desc          : Add more category
  addMoreCategory(){
      this.newCategory.push({name: ''});
  }
//  ---------------------------------end-----------------------------------------------

 //  ---------------------------------Start-------------------------------------------
  // Function      : closeMoreOption
  // Params        : 
  // Returns       : 
  // Author        : Jooshifa
  // Date          : 29-12-2017
  // Last Modified : 29-12-2017, Jooshifa 
  // Desc          : close category

  closeMoreCategory(index){
        if(this.newCategory.length > 1){
            this.newCategory.splice(index, 1);
        }else{
              // this.atleastOneitem = true;
              
              // setTimeout(()=>{ 
              //         this.atleastOneitem = false;
              // }, 3000);
              
              let snackBarRef =  this.snackBar.open('* Atleast one item required!', '', {
                duration: 2000
              });
              return false;
        }
    }
//  ---------------------------------end-----------------------------------------------

 //  ---------------------------------Start-------------------------------------------
  // Function      : closeMoreOption
  // Params        : 
  // Returns       : 
  // Author        : Jooshifa
  // Date          : 29-12-2017
  // Last Modified : 29-12-2017, Jooshifa 
  // Desc          : close a category

insertCategory(){
  this.showSpinner = true;
      this._adminService.addCategory(this.newCategory).subscribe(data => {
        // console.log(data);
            if(!data.success){
              this.showSpinner =false
              let snackBarRef =  this.snackBar.open(data.msg, '', {
                duration: 2000
              });
            }
            else if(data.success){
                this.loadData();
                this.closeBtn.nativeElement.click();
          
              //   setTimeout(()=>{ 
              //     this.showSpinner = false;
              //  }, 2000);
              this.showSpinner = false;
                  let snackBarRef =  this.snackBar.open('Create Survey Category Successfully', '', {
                    duration: 2000
                  });
                
              // this.closeBtn.nativeElement.click();
                this.newCategory =  [{name: ''}];
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
  // Function      : deleteCategory
  // Params        : 
  // Returns       : 
  // Author        : Jooshifa
  // Date          : 29-12-2017
  // Last Modified : 29-12-2017, Jooshifa 
  // Desc          : delete survey category

  deleteCategory(id){ 
    this.showSpinnerDelete =true
          this._adminService.deleteCategory(id).subscribe(data2=>{
                if(data2.success==false){
                  this.showSpinnerDelete =false
                    // this._flashMessagesService.show('Failed! This survey category is currently used in a survey ', { cssClass: 'alert-danger', timeout: 3000 });
                    let snackBarRef =  this.snackBar.open('Failed! This Industry is currently used by a company', '', {
                      duration: 2000
                  });
                }
                else{
                    this.loadData();
                    this.showSpinnerDelete =false
                    let snackBarRef =  this.snackBar.open('Delete Survey category Successfully', '', {
                      duration: 2000
                    });
                }
          });
    }

//  ---------------------------------end-----------------------------------------------

//  ---------------------------------Start-------------------------------------------
  // Function      : getCategoryId
  // Params        : 
  // Returns       : 
  // Author        : Jooshifa
  // Date          : 29-12-2017
  // Last Modified : 29-12-2017, Jooshifa 
  // Desc          : pass id from modal and get it for the purpuse edit
getCategoryId(id){
  this.showSpinner = false;
      this.catgId = id;
        this.sub = this.route.params.subscribe(params => {
              this._adminService.getSinglecategory(this.catgId).subscribe(data3 => {
                this.category = data3
            
                // this.categoryName =this.category.name
              
                });
  
          });
      }
//  ---------------------------------end-----------------------------------------------

//  ---------------------------------Start-------------------------------------------
  // Function      : updateCategory
  // Params        : 
  // Returns       : 
  // Author        : Jooshifa
  // Date          : 29-12-2017
  // Last Modified : 29-12-2017, Jooshifa 
  // Desc          : Update Category

updateCategory(category){ 
  this.showSpinner = true;
        this._adminService.updateCategory(category).subscribe(data4 => {
          if(data4.success==false && data4.msg == 'required'){
            this.showSpinner =false
            let snackBarRef =  this.snackBar.open('* It is a required field!', '', {
              duration: 2000
            });
            }
            else{
                if(data4.success==false && data4.msg == 'alreadyexist'){
                  this.showSpinner =false
                  let snackBarRef =  this.snackBar.open('* This category already exist!', '', {
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
                    this.showSpinner = false;
                    let snackBarRef =  this.snackBar.open('Update Survey category successfully', '', {
                      duration: 2000
                    });
                  
              }
          }
        }
        
      });
}
   //  ---------------------------------end-----------------------------------------------
 


  
}
