import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormsModule, FormControl, FormGroup, Validators }   from '@angular/forms';
import { AdminService } from '../../services/admin.service';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'manage-survey-category',
  templateUrl: './admin-manage-survey-category.component.html',
  styleUrls: ['./admin-manage-survey-category.component.css']
})
export class AdminManageSurveyCategoryComponent implements OnInit {
      displayedColumns = [ 'id','name','action'];
      btnDisbled:boolean = false;
      catgId :any;
      atleastOneitem :boolean = false;
      isSuccess : boolean = false
      isError : Boolean = false;
      errorMsg :'';
      existStatus :Boolean =false;
      Updatechange:Boolean =false;
      Updaterequired :boolean = false;
      UpdatealreadyExist :boolean = false;
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
  constructor(private _adminService : AdminService,private _flashMessagesService: FlashMessagesService,private routes : Router,private route: ActivatedRoute) {}

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
  // Desc          : to get all survey category

  loadData(){
     const users: any[] = [];
     this._adminService.getCategory().subscribe(data1=>{
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
              this.atleastOneitem = true;
              setTimeout(()=>{ 
                      this.atleastOneitem = false;
              }, 2000);
                // this._flashMessagesService.show('Atleast one item required!', { cssClass: 'alert-danger', timeout: 1000 });
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
      this._adminService.addCategory(this.newCategory).subscribe(data => {
            if(!data.success){
                this.isError = true;
                this.errorMsg = data.msg;
                this.btnDisbled = false
                setTimeout(()=>{ 
                      this.isError = false;
                      this.errorMsg = '';
                }, 2000);
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
                this._flashMessagesService.show('Add Category Successfully!', { cssClass: 'alert-success', timeout: 1000 });
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
          this._adminService.deleteCategory(id).subscribe(data2=>{
                if(data2.success==false){
                    this._flashMessagesService.show('Failed! This survey category is currently used in a survey ', { cssClass: 'alert-danger', timeout: 3000 });
                }
                else{
                    this.loadData();
                    this._flashMessagesService.show('Delete Category Successfully!', { cssClass: 'alert-success', timeout: 1000 });
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
        this._adminService.updateCategory(category).subscribe(data4 => {
          if(data4.success==false && data4.msg == 'required'){
                this.Updaterequired = true
                setTimeout(()=>{ 
                    this.Updaterequired = false;
                  }, 2000);
            }
            else{
                if(data4.success==false && data4.msg == 'alreadyexist'){
                    this.UpdatealreadyExist = true
                    setTimeout(()=>{ 
                      this.UpdatealreadyExist = false;
                      }, 2000);
                
                }
                else{
                  if(data4.success==false && data4.msg == 'nochange'){
                      this.Updatechange = true
                      setTimeout(()=>{ 
                        this.Updatechange = false;
                        }, 2000);
                  
                  }
                else{
                    this.loadData();
                    this.closeBtn1.nativeElement.click();
                    this._flashMessagesService.show('Update Category Successfully!', { cssClass: 'alert-success', timeout: 1000 });
                  
              }
          }
        }
        
      });
}
   //  ---------------------------------end-----------------------------------------------
}
