import { Component, OnInit, ElementRef ,ViewChild} from '@angular/core';
import { CompanyService } from '../../services/company.service';
import {Validators, FormControl} from '@angular/forms';
import { XlsxToJsonService} from './../../services/xlsx-to-json.service';

@Component({
  selector: 'company-users',
  templateUrl: './company-users.component.html',
  styleUrls: ['./company-users.component.css']
})
export class CompanyUsersComponent implements OnInit {
  @ViewChild('f') f: any;
  @ViewChild('closeBtn') closeBtn: ElementRef;
  @ViewChild('closeBtn1') closeBtn1: ElementRef;
  @ViewChild('closeBtn2') closeBtn2: ElementRef;
  @ViewChild('myInput')myInputVariable: any;
  newUser =  {email: [''], groups:[]};
  // newUserImport =  {email: [''], groups:[]};
  isError = false;
  isSuccess = false;
  msg = '';
  isError1 = false;
  isSuccess1 = false;
  msg1 = '';
  public result: any;
  emailArr : any;
  private xlsxToJsonService: XlsxToJsonService = new XlsxToJsonService();
  showAddGroup = false;
  newGroup = '';
  groups: any;
  btnDisbled:boolean = false;
  updateBtnDisbled:boolean = false;
  selUser = {email: '', groups:[],newEmail:'',is_registered:false};
  selUserGroups= [];
  //selGroups = [];
  groupsObject : any;
  constructor(private companyService: CompanyService) { 


  }

  ngOnInit() {
   // this.selGroups = ['Symptots'];

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

   // console.log(this.selGroups);
    this.companyService.getAllUserGroup().subscribe(data=>{
        this.groups = data.group;
        console.log(this.groups);
        this.groupsObject = data.groupById;
    });
   
  }

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
      return false;
  }

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

