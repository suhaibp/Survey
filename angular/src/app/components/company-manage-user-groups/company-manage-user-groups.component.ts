
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CompanyService } from '../../services/company.service';
import { FormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../../services/admin.service';
import { MatPaginator, MatSort, MatTableDataSource, MatSnackBar } from '@angular/material';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'company-manage-user-groups',
  templateUrl: './company-manage-user-groups.component.html',
  styleUrls: ['./company-manage-user-groups.component.css']
})
export class CompanyManageUserGroupsComponent implements OnInit {
  existStatus: boolean = false;
  id: any;
  displayedColumns = ['id', 'name', 'action'];
  userData: any;
  groupName: any;
  newGroup = { group: '', email: [], id: '' };
  newGrouparray = [];
  selUserEmail: any;
  btnDisbled: boolean = false;
  catgId: any;
  atleastOneitem: boolean = false;
  showSpinner :boolean = false;
  showSpinnerDelete :boolean = false;
  isSuccess: boolean = false
  isError: Boolean = false;
  errorMsg: '';
  @ViewChild('f') f: any;
  @ViewChild('f1') f1: any;
  @ViewChild('closeBtn') closeBtn: ElementRef;
  @ViewChild('closeBtn1') closeBtn1: ElementRef;

  Updaterequired: boolean = false;
  UpdatealreadyExist: boolean = false;
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private companyService: CompanyService, private _flashMessagesService: FlashMessagesService, private routes: Router,public snackBar: MatSnackBar) { }

  ngOnInit() {
    // ---------------------------------Start-------------------------------------------
    // Function      : get logged company details
    // Params        : 
    // Returns       : company details
    // Author        : Rinsha
    // Date          : 16-1-2018
    // Last Modified : 16-1-2018, Rinsha
    // Desc          :
    this.companyService.getLoggedUSerDetails().subscribe(info => {
      if (info == null || info == '') {
        this.routes.navigate(['/clogin']);
      }
      if (info.role == "admin") {
        this.routes.navigate(['/admin-dashboard']);
      }
      if (info.role == "user") {
        if (info.delete_status == true || info.block_status == true) {
          this.routes.navigate(['/404']);
        }
        this.routes.navigate(['/survey', info.surveyId]);
      }
      if (info.role == "company") {
        if (info.delete_status == true || info.block_status == true || info.cmp_status == "Not Verified") {
          this.routes.navigate(['/clogin']);
        }
        if (info.cmp_status == "Expired") {
          this.routes.navigate(['/expired']);
        }
        if (info.is_profile_completed == false) {
          this.routes.navigate(['/additnInfo', info._id]);
        }
      }
    });
    // ---------------------------------End-------------------------------------------
    this.loadData();
    this.companyService.getMyUsers().subscribe(userDatas => {
      this.userData = userDatas;
    });
  }
  //  ---------------------------------Start-------------------------------------------
  // Function      : applyFilter
  // Params        : 
  // Returns       : 
  // Author        : Jooshifa
  // Date          : 08-01-2018
  // Last Modified : 08-01-2018, Jooshifa 
  // Desc          :filter data in angular table

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  //  ---------------------------------End-------------------------------------------

  //  ---------------------------------Start-------------------------------------------
  // Function      : loadData
  // Params        : 
  // Returns       : 
  // Author        : Jooshifa
  // Date          : 08-01-2018
  // Last Modified : 08-01-2018, Jooshifa 
  // Desc          : to get all user groups

  loadData() {
  
    this.showSpinnerDelete  = true;
    const users: any[] = [];
    this.companyService.getAllUserGroup().subscribe(data1 => {
      this.showSpinnerDelete  = false;
    if(data1.group.length <=0){
      // this.showSpinnerDelete  = false;
      this.existStatus =true;
    }
    else{
      this.existStatus =false;
    }

     data1.group.forEach((item, index) => {
      
        users.push({
          name: item.name,
          id: item._id
        });
      });
   
      this.dataSource = new MatTableDataSource(users);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    
   
    });
  }
  //  ---------------------------------end---------------------------------------------

  //  ---------------------------------Start-------------------------------------------
  // Function      : getId
  // Params        : 
  // Returns       : 
  // Author        : Jooshifa
  // Date          : 08-01-2018
  // Last Modified : 08-01-2018, Jooshifa 
  // Desc          :fget id of a group

  getId(id) {
    this.showSpinnerDelete  = false;
    this.showSpinner  = false;
    this.id = id
    
  }
  //  ---------------------------------end---------------------------------------------

  //  ---------------------------------Start-------------------------------------------
  // Function      : getEditId,getSingleUserGroup
  // Params        : 
  // Returns       : 
  // Author        : Jooshifa
  // Date          : 08-01-2018
  // Last Modified : 08-01-2018, Jooshifa 
  // Desc          :get name and id of group and get single user group

  getEditId(id, name) {
    this.showSpinnerDelete  = false;
    this.showSpinner  = false;
    //  console.log(id);
    this.id = id
    this.newGroup.group = name;
    this.companyService.getSingleUserGroup(this.id).subscribe(singleGroupUsers => {
      this.newGroup.email = singleGroupUsers;
      // this.newGrouparray.push(singleGroupUsers);
    });
    //   this.companyService.getMyUsers().subscribe(userData=>{
    //     userData.forEach(useremail=>{
    //     this.newGrouparray.push(userData.email)
    //     // console.log(useremail.email);
    //     })
    //     // console.log(userData);
    //     // console.log(userData)
    //     // this.userData =userData
    // });
  }
  //  ---------------------------------end---------------------------------------------

  //  ---------------------------------Start-------------------------------------------
  // Function      : getId
  // Params        : 
  // Returns       : 
  // Author        : Jooshifa
  // Date          : 08-01-2018
  // Last Modified : 08-01-2018, Jooshifa 
  // Desc          :fget id of a group
  updateUserGroup(newGroup, id) {
    this.showSpinner  = true;
    this.newGroup.id = id;
    // console.log(id)
    // console.log(newGroup);
    this.companyService.updateUserGroup(this.newGroup).subscribe(updateData => {

      if (!updateData.success) {
        // this.isError = true;
        this.errorMsg = updateData.msg;
        this.showSpinner  = false;
         let snackBarRef =  this.snackBar.open(this.errorMsg, '', {
          duration: 2000
        });
        // this.btnDisbled = false;
        setTimeout(() => {
          // this.isError = false;
          // this.errorMsg = '';
        }, 2000);
      }
      else if (updateData.success) {
        // this.btnDisbled = true
        this.loadData();
        this.closeBtn1.nativeElement.click();
        // this.isSuccess = true;
        this.showSpinner  = false;
        // this._flashMessagesService.show('Update User Group Successfully!', { cssClass: 'alert-success', timeout: 1000 });
        let snackBarRef =  this.snackBar.open('Update User Group Successfully', '', {
          duration: 2000
        });
        // this.closeBtn.nativeElement.click();
        this.newGroup = { group: '', email: [], id: '' };

      }

    });

  }
  //  ---------------------------------end---------------------------------------------

  //  ---------------------------------Start-------------------------------------------
  // Function      : deleteUserGroup
  // Params        : id
  // Returns       : 
  // Author        : Jooshifa
  // Date          : 08-01-2018
  // Last Modified : 08-01-2018, Jooshifa 
  // Desc          :gelete a usergroup
  deleteUserGroup(id) {
    this.showSpinnerDelete  = true;
    this.companyService.deleteUserGroup(id).subscribe(data2 => {

      if (data2.success == false) {
        this.showSpinnerDelete  = false;
        // this._flashMessagesService.show('Failed! ', { cssClass: 'alert-danger', timeout: 3000 });
        let snackBarRef =  this.snackBar.open('* Failed! ', '', {
          duration: 2000
        });
      }
      else {
       
        this.loadData();
        this.showSpinnerDelete  = false;
        // this._flashMessagesService.show('Delete User group Successfully!', { cssClass: 'alert-success', timeout: 1000 });
        let snackBarRef =  this.snackBar.open('Delete User group Successfully ', '', {
          duration: 2000
        });
      }

    });
  }
  //  ---------------------------------end---------------------------------------------

  //  ---------------------------------Start-------------------------------------------
  // Function      : addGroup
  // Params        : newGroup
  // Returns       : 
  // Author        : Jooshifa
  // Date          : 08-01-2018
  // Last Modified : 08-01-2018, Jooshifa 
  // Desc          :add a user group
  addGroup(newGroup) {
    this.showSpinner  = true;
    //  console.log(newGroup);
    this.companyService.addUserGroupsInCompany(this.newGroup).subscribe(addGroup => {

      if (!addGroup.success) {
        // this.isError = true;
        this.errorMsg = addGroup.msg;
        this.showSpinner  = false;
        let snackBarRef =  this.snackBar.open(this.errorMsg, '', {
          duration: 2000
        });
        this.btnDisbled = false
        setTimeout(() => {
          // this.isError = false;
          // this.errorMsg = '';
        }, 2000);
      }
      else if (addGroup.success) {
        this.btnDisbled = true
        this.loadData();
        this.closeBtn.nativeElement.click();
        // this.isSuccess = true;
        this.showSpinner  = false;
        // this._flashMessagesService.show('Add User Groups Successfully!', { cssClass: 'alert-success', timeout: 1000 });
        let snackBarRef =  this.snackBar.open('Add User Groups Successfully', '', {
          duration: 2000
        });
        // this.closeBtn.nativeElement.click();
        this.newGroup = { group: '', email: [], id: '' };
        this.btnDisbled = false
      }

    });
    //  console.log("componennt");
    //  console.log(newGroup);
  }
  //  ---------------------------------end---------------------------------------------
}
