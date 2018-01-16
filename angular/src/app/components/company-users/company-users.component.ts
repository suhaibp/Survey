import { Component, OnInit, ElementRef ,ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { CompanyService } from '../../services/company.service';
import {Validators, FormControl} from '@angular/forms';
import {MatPaginator, MatSort} from '@angular/material';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute } from '@angular/router';
import { XlsxToJsonService} from './../../services/xlsx-to-json.service';

@Component({
  selector: 'company-users',
  templateUrl: './company-users.component.html',
  styleUrls: ['./company-users.component.css']
})
export class CompanyUsersComponent implements OnInit {
newBlock ={
  id :String,
  email : String,
  reason : '',
  groups : ''
}
  displayedColumns = ['id','email','action'];
  dataSource: MatTableDataSource<any>;
  userData:any;
  userId :any;
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
}
  private sub: any;
  comp_id1 :any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('f') f: any;
  @ViewChild('closeBtn') closeBtn: ElementRef;
  @ViewChild('closeBtn1') closeBtn1: ElementRef;
  @ViewChild('closeBtn2') closeBtn2: ElementRef;
  @ViewChild('myInput')myInputVariable: any;
  newUser =  {email: [''], groups:[]};
  isError = false;
  isSuccess = false;
  msg = '';
  errorMsg = '';
  isError1 = false;
  isSuccess1 = false;
  msg1 = '';
  existStatus :boolean = false;
  showAddGroup = false;
  newGroup = '';
  groups: any;
  public result: any;
  emailArr : any;
  private xlsxToJsonService: XlsxToJsonService = new XlsxToJsonService();
  btnDisbled:boolean = false;
  updateBtnDisbled:boolean = false;
  selUser = {email: '', groups:[],newEmail:'',is_registered:false};
  selUserGroups= [];
  //selGroups = [];
  groupsObject : any;
  getSingleData : any;
  email :any;
  constructor(private companyService: CompanyService, private _flashMessagesService: FlashMessagesService, private routes: Router ) { 
}
ngOnInit() {
// ---------------------------------Start-------------------------------------------
// Function      : get logged company details
// Params        : 
// Returns       : company details
// Author        : Rinsha
// Date          : 16-1-2018
// Last Modified : 16-1-2018, Rinsha
// Desc          :
this.companyService.getLoggedUSerDetails().subscribe(info =>{
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
   // this.selGroups = ['Symptots'];
   this.loadData();
   this.companyService.getAllUserGroup().subscribe(data=>{
    this.groups = data.group;
    this.groupsObject = data.groupById;
    });
    
    this.companyService.getMyCompany().subscribe(data=>{
      // var index = 5;
      // this.selUser.email = data.users[index].email;
      // this.selUser.newEmail = data.users[index].email;
      // this.selUser.is_registered = data.users[index].is_registered;
      // data.users[index].group.forEach(val => {
      //   this.selUserGroups.push(val.g_id);
      // });
      
      // console.log(this.selUser.groups);
    });

}
//  ---------------------------------Start-------------------------------------------
  // Function      : loadData
  // Params        : 
  // Returns       : 
  // Author        : Jooshifa
  // Date          : 04-12-2018
  // Last Modified : 04-12-2018, Jooshifa 
  // Desc          : to load saved user email
loadData(){
    const users: any[] = [];
    this.companyService.getMyUsers().subscribe(data1=>{
      this.userData = data1;
      this.comp_id1 = this.userData._id 
  
      // console.log(data.users)
      
        //  data1.forEach((item, index) => {
        //   //  console.log(item)
        //            users.push({
        //            email: item,
        //            id :item._id
        //            });
        //   });
        //    this.dataSource = new MatTableDataSource(users);
        //    this.dataSource.paginator = this.paginator;
        //    this.dataSource.sort = this.sort;
        // data1.forEach(element => {
        //   element.users.forEach((item, index) => {
        //     // console.log(item)
        //     users.push({
        //           email: item.email,
        //           id :item._id
        //           });
        //   });
        // });
            this.dataSource = new MatTableDataSource(data1);
           this.dataSource.paginator = this.paginator;
           this.dataSource.sort = this.sort;
           
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
 getUserId(id){
    this.userId = id;
    // console.log(this.userId)

    }
//  ---------------------------------end----------------------------------------------

getUserEmail(id,email){
  this.newBlock.id = id;
  this.newBlock.email = email;
}
//  ---------------------------------end----------------------------------------------

//  ---------------------------------Start-------------------------------------------
  // Function      : filterGroup
  // Params        : 
  // Returns       : 
  // Author        : Jooshifa
  // Date          : 08-01-2018
  // Last Modified : 08-01-2018, Jooshifa 
  // Desc          : to filter based on groups
filterGroup(groups){
    // console.log(groups)
     this.companyService.getUserByGroup(groups).subscribe(data2=>{
       if(data2.success ==false){
            //  console.log("data not exist")
             this.existStatus = true 
       }
       else{
        console.log(data2)
        if(data2){
          // console.log("data exist")
       this.userData = data2;
       this.comp_id1 = this.userData._id 
      
             this.dataSource = new MatTableDataSource(data2);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        }
     }
  })
}
//  ---------------------------------end----------------------------------------------

 //  ---------------------------------Start-------------------------------------------
  // Function      : deleteUser
  // Params        : 
  // Returns       : 
  // Author        : Jooshifa
  // Date          : 04-01-2018
  // Last Modified : 04-01-2018, Jooshifa 
  // Desc          : Delete a user
deleteUser(userId){
  this.companyService.deleteUser(userId).subscribe(deleteData=>{
    console.log(deleteData)
    if(deleteData.success==false){
        this._flashMessagesService.show(' Survey invitation is  already sent, cant delete! ', { cssClass: 'alert-danger', timeout: 3000 });
        // console.log("error")
    }
    else{
        this.loadData();
        this._flashMessagesService.show('Delete User Successfully!', { cssClass: 'alert-success', timeout: 1000 });
        // console.log("success")
    }
});
}
// -----------------------------------end----------------------------------------------------

 addMoreOption(){
    this.newUser.email.push('');
    return false;
  }

  removeOption(index){

      if(this.newUser.email.length > 1){
          this.newUser.email.splice(index, 1);
      }else{
          this.isError = true;
          this.msg = "Atleast one item required";
          setTimeout(()=>{ 

              this.isError = false;
              this.msg = '';
              
          }, 3000);
      }
      return false;

  }

  trackByIndex(index: number, value: number) {
    return index;
  }

  showGroupAddOption(){
    this.showAddGroup = true;
    return false;
  }

  updateUsers(){
    this.updateBtnDisbled= true;
    console.log(this.selUser.groups);
    this.selUserGroups.forEach((val,key) => {
      this.selUser.groups[key] = this.groupsObject[val];
    });
    console.log(this.selUser);
    this.companyService.updateUser(this.selUser).subscribe(data=>{
      if(data.success){
        this.selUser = {email: '', groups:[],newEmail:'',is_registered:false};
        this.isSuccess1 = true;
        this.msg1 = data.msg;
         
        //update company = data.company
        setTimeout(()=>{ 
          this.closeBtn1.nativeElement.click();
          this.isSuccess1 = false;
          this.msg1 = '';
          this.updateBtnDisbled = false;
        }, 2000);
      }else{
        this.isError1 = true;
        this.msg1 = data.msg;
        this.updateBtnDisbled = false;
        setTimeout(()=>{ 
          this.isError1 = false;
          this.msg1 = '';
        }, 3000);
      }
    });
  }

  addUsers(){
    this.btnDisbled = true;
    console.log(this.newUser);
    this.companyService.addUsers(this.newUser).subscribe(data=>{
        if(data.success){
          this.newUser =  {email: [''], groups:[]};
          this.isSuccess = true;
          this.msg = data.msg;
           
          //update company = data.company
          setTimeout(()=>{ 
            this.closeBtn.nativeElement.click();
            this.closeBtn2.nativeElement.click();
            this.isSuccess = false;
            this.msg = '';
            this.btnDisbled = false;
          }, 2000);
        }else{
          this.isError = true;
          this.msg = data.msg;
          this.btnDisbled = false;
          setTimeout(()=>{ 
            this.isError = false;
            this.msg = '';
          }, 3000);
        }
       
    });
    
  }

  addGroup(){
      this.companyService.addUserGroup(this.newGroup).subscribe(data=>{
        console.log(data);
        if(data.success){
            this.showAddGroup = false;
            this.groups.push(data.data);
            this.newGroup = '';
            this.isSuccess = true;
            this.msg = "Group Created Successfully";
            setTimeout(()=>{ 
                this.isSuccess = false;
                this.msg = '';
            }, 3000);
        }else{
          this.isError = true;
          this.msg = "Faild, Group Already Exists";
          setTimeout(()=>{ 
              this.isError = false;
              this.msg = '';
          }, 3000);
        }
      });
 }

 //  ---------------------------------Start-------------------------------------------
  // Function      : sendBlockRequest
  // Params        : request
  // Returns       : 
  // Author        : Jooshifa
  // Date          : 04-12-2018
  // Last Modified : 04-12-2018, Jooshifa 
  // Desc          : send block request to admin to block a user
 sendBlockRequest(request){ 
   this.companyService.sendBlockRequest(request).subscribe(data4 => {
  if(!data4.success){
      console.log(data4);
      this.isError = true;
      this.errorMsg = data4.msg;
      this.btnDisbled = false
      setTimeout(()=>{ 
            this.isError = false;
            this.errorMsg = '';
      }, 2000);
  }
  else if(data4.success){
      this.btnDisbled = true
      this.loadData();
      this.closeBtn.nativeElement.click();
      // this.isSuccess = true;
      this.errorMsg = data4.msg;
      setTimeout(()=>{ 
              this.isSuccess = false;
              this.errorMsg = '';
              this.btnDisbled = false
      }, 2000);
      this._flashMessagesService.show('Sent Block request successfully!', { cssClass: 'alert-success', timeout: 1000 });
    // this.closeBtn.nativeElement.click();
   }
  });
}
//  ---------------------------------End-------------------------------------------
  handleFile(event) {
    this.emailArr = [];
    let file = event.target.files[0];
    this.xlsxToJsonService.processFileToJson({}, file).subscribe(data => {
      // this.result = JSON.stringify(data['sheets'].Sheet1);
      this.result = data['sheets'].Sheet1;
      this.result.forEach(element => {
        this.emailArr.push(element.Email);
      });
      if(typeof(this.emailArr.email == "undefined")){
        this.emailArr = [];
      }
    })
  }

  import(){
    this.newUser.email = this.emailArr;
    this.addUsers();
  }

  openModal(){
    this.newUser.email =  [''];
    this.myInputVariable.nativeElement.value = "";
  }

}

