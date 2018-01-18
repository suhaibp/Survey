import { Component, OnInit, ElementRef ,ViewChild } from '@angular/core';
import { CompanyService } from '../../services/company.service';
import { DragulaService } from 'ng2-dragula/ng2-dragula';
import {MatTableDataSource,MatPaginator, MatSort} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import { CanActivate,ActivatedRoute, Router } from '@angular/router';
import {Config} from '../../config/config';

@Component({
  selector: 'app-company-edit-survey',
  templateUrl: './company-edit-survey.component.html',
  styleUrls: ['./company-edit-survey.component.css']
})
export class CompanyEditSurveyComponent implements OnInit {

  @ViewChild('closeBtn1') closeBtn1: ElementRef;
  @ViewChild('invitePopUp') invitePopUp : ElementRef;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  preview = false;
  displayType = [{value:'Single',label : 'Single Page'}, {value:'Multiple',label : 'Multiple Page'}];
  surveyCategory : any;
  themes : any;
  answerType : any;

  isError = false;
  isSuccess = false;
  msg = '';

  isError1 = false;
  isSuccess1 = false;
  msg1 = '';

  isError2 = false;
  isSuccess2 = false;
  msg2 = '';

  isError3 = false;
  isSuccess3 = false;
  msg3 = '';

  selectedUserGroup = 'all';
  userGroups :any;
  users :any;
  newUser = '';
  
  btnDisbled:boolean = false;
  updateBtnDisbled:boolean = false;
  saveBtnDisbled:boolean = false;
  addUserBtnDisbled:boolean = false;
  inviteBtnDisbled:boolean = false;
  tmplogoSrc = '';
  survey ={
    id: '',
    name: '',
    category:'',
    display_type : {ui :'', randomization  :  false ,skip :false, pageno : false},
    start_date : '',
    end_date : '',
    logo:'',
    showHeader:true,
    showFooter:true,
    showTitleInput:false,
    showFooterInput:false,
    header:'',
    footer:'',
    logoSrc:'',
    numbStar : 5,
    selectedTheme:'',
    questions:[],
  };
  quest = {question:'',opts:['',''],answerType:'',showStarLabel : false,starOpts:['','','','','']};
  editQuest = {question:'',opts:['',''],answerType:'',showStarLabel : false,starOpts:['','','','','']};
  editIndex = 0;
  deleteIndex = 0;

  displayedColumns = ['select','email'];
  selectedSurvey:any;
  // displayedColumns = ['select', 'position', 'name', 'weight', 'symbol'];
  // dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  dataSource: MatTableDataSource<any>;
  selection = new SelectionModel<Element>(true, []);
  invitedEmailds = [];

  constructor(private companyService: CompanyService,private dragulaService: DragulaService, private routes: Router, private route: ActivatedRoute,private config: Config) { }
  
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.survey.id= params['id'];
      this.companyService.getSurvey(this.survey.id).subscribe(data=>{

        console.log(data);
        this.survey.name= data.name;
        this.survey.category=data.category.id;
        this.survey.display_type = data.display_type;
        this.survey.start_date = data.start_datetime;
        this.survey.end_date = data.end_datetime;
        this.survey.logo=data.logo;
        this.survey.showHeader=data.is_header;
        this.survey.showFooter=data.is_footer;
        this.survey.showTitleInput=false;
        this.survey.showFooterInput=false;
        this.survey.header=data.header_title;
        this.survey.footer=data.footer_title;
        this.survey.logoSrc='';
        this.survey.selectedTheme= data.theme;

        this.tmplogoSrc = (data.logo != '') ?  this.config.siteUrl + '/company/logo/' + data.logo : '';

        //this.survey.questions= data.questions;
        let questions = [];
        data.questions.forEach((val)=>{
           var qtn = {
            question : val.question,
            answerType : val.ans_type,
            starOpts:[],
            opts:[],
           };
           if(val.ans_type =='star rating'){
              qtn.starOpts = val.options;
           }else{
              qtn.opts = val.options;
           }
           questions.push(qtn);
        });
        this.survey.questions= questions;

        data.inv_users.forEach((val)=>{
          this.invitedEmailds.push(val.email);
        });

        console.log(this.tmplogoSrc);
          this.companyService.getAllSurveyCategory().subscribe(data=>{
            data.forEach(category=>{
                  if(category._id == this.survey.category){
                    this.survey.category = category;
                  }
              });
                this.surveyCategory = data;
          });
          this.companyService.getAllThemes().subscribe(data=>{
            data.forEach(theme=>{
                if(theme._id == this.survey.selectedTheme){
                  this.survey.selectedTheme = theme;
                }
            });
                this.themes = data;
          });
          
          this.companyService.getAnswerType().subscribe(data=>{
                this.answerType = data;
              //  console.log(this.answerType);
          });
          this.companyService.getAllUserGroup().subscribe(data=>{
            this.userGroups = data.group;;
              //  console.log(this.answerType);
          });
          this.updateUserList();
          // this.companyService.getMyUsers().subscribe(data=>{
          //     this.users = data;
          //   //    console.log(this.users);
          //       this.dataSource = new MatTableDataSource(this.users);
          //       this.dataSource.paginator = this.paginator;
          //       //this.selection.select();
          // });
      });
   });
    

  }
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    // console.log(numRows);
    // console.log(numSelected);
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => {
          // if(!row.invited){
            this.selection.select(row)
          // }
        });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  updateUserList() {
   console.log(this.selectedUserGroup);
   if(this.selectedUserGroup == 'all'){
        this.companyService.getMyUsers().subscribe(data=>{
          this.users = this.updateAlreadyInvitedUsers(data);
          console.log(this.users);
            this.dataSource = new MatTableDataSource(this.users);
            this.dataSource.paginator = this.paginator;
            this.selection.clear();
      });
   }else{
      this.companyService.getUsersInAGroups(this.selectedUserGroup).subscribe(data=>{
        this.users = this.updateAlreadyInvitedUsers(data);
        console.log(this.users);
        this.dataSource = new MatTableDataSource(this.users);
        this.dataSource.paginator = this.paginator;
        this.selection.clear();
      });
  }
   
  }

 updateAlreadyInvitedUsers(data){
   console.log(data);
   data.forEach((user,i)=>{
      if(this.invitedEmailds.indexOf(user.email) > -1){
        data[i].invited = true;
      }else{
        data[i].invited = false;
      }
  });
  return data;
 }



  showTitleInput(){
    this.survey.showTitleInput=true;
  }
  updateHeaderText(){
    this.survey.showTitleInput=false;
  }
  showFooterInput(){
    this.survey.showFooterInput=true;
  }
  updateFooterText(){
    this.survey.showFooterInput=false;
  }

  displayPhoto(fileInput){
    
    var ext = fileInput.target.files[0].name.split('.').pop().toLowerCase();
    if (['gif','png','jpg','jpeg'].indexOf(ext) < 0) {
     // fileInput.target.files.remove(0);
      this.survey.logoSrc = '';
      alert('Please select a valid image [ jpg | jpeg | gif | png ]');
      return false;
    }
    console.log(fileInput);
    //this.survey.imgFile = fileInput.target.files[0];
    
    if (fileInput.target.files && fileInput.target.files[0]) {
      const reader = new FileReader();
    
      reader.onload = ((e) => {
        this.survey.logoSrc = e.target['result'];
      });
    
      reader.readAsDataURL(fileInput.target.files[0]);
    }
  }

  counter(length){
    return new Array(length);
  }

  removeOption(index){
    
          if(this.quest.opts.length > 2){
            this.quest.opts.splice(index, 1);
          }else{
              this.isError = true;
              this.msg = "Atleast two options required";
              setTimeout(()=>{ 
    
                  this.isError = false;
                  this.msg = '';
                  
              }, 3000);
          }
          return false;
    
  }
  removeOptionEdit(index){
    
          if(this.editQuest.opts.length > 2){
            this.editQuest.opts.splice(index, 1);
          }else{
              this.isError1 = true;
              this.msg1 = "Atleast two options required";
              setTimeout(()=>{ 
    
                  this.isError1 = false;
                  this.msg1 = '';
                  
              }, 3000);
          }
          return false;
    
  }

  deleteQuestionConfirm(index){
    this.deleteIndex = index;
    console.log(this.deleteIndex);
  }

  deleteQuestion(){
    console.log(this.deleteIndex);
    this.survey.questions.splice(this.deleteIndex , 1);
  }

  addMoreOption(){
    this.quest.opts.push('');
    return false;
  }    

  addMoreOptionEdit(){
    this.editQuest.opts.push('');
    return false;
  }    

  trackByIndex(index: number, value: number) {
    return index;
  }
  addQuestion(form){
   // console.log(this.quest);
   this.btnDisbled = true;
   this.isSuccess = true;
   if(this.quest.answerType == 'star rating' && !this.quest.showStarLabel){
    this.quest.starOpts = ['1','2','3','4','5']
   }
   this.survey.questions.push(this.quest); 
   this.msg = "Question Added Successfully";
   this.quest = {question:'',opts:['',''], answerType:'', showStarLabel : false, starOpts:['','','','','']};
   this.btnDisbled = false;
   form.resetForm();
   setTimeout(()=>{ 
     this.isSuccess = false;
     this.msg = '';
   }, 2000);
    
   
  }

  editQuestion(index){
    this.editIndex = index;
    this.editQuest = this.survey.questions[index];
    console.log(this.editQuest);
  }

  updateQuestion(form){
    this.updateBtnDisbled = true;
    this.isSuccess1 = true;
    this.survey.questions[this.editIndex] = this.editQuest;
    this.editIndex = 0;
    this.msg1 = "Question Updated Successfully";
    setTimeout(()=>{ 
      this.closeBtn1.nativeElement.click();
      this. editQuest = {question:'',opts:['',''],answerType:'',showStarLabel : false,starOpts:['','','','','']};
      form.resetForm();
      this.isSuccess1 = false;
      this.msg1 = '';
      this.updateBtnDisbled = false;
    }, 2000);
  }

  saveBtnClick(form){

    console.log(this.survey);

    this.saveBtnDisbled = true;
    console.log(this.survey);
    this.companyService.updateSurvey(this.survey).subscribe(data=>{
      console.log(data);
      if(data.success){
        this.selectedSurvey = data.survey;
        this.isSuccess2 = true;
        this.msg2 = "Survey Updated Successfully";
       // this.invitePopUp.nativeElement.click();
        setTimeout(()=>{ 
          this.saveBtnDisbled = false;
          this.isSuccess2 = false;
          this.msg2 = '';
        }, 2000);

      }else{
        this.saveBtnDisbled = false;
        this.isError2 = true;
        this.msg2 = data.msg;
        setTimeout(()=>{ 
          //this.closeBtn1.nativeElement.click();
        //  form.resetForm();
          this.isError2 = false;
          this.msg2 = '';
         // this.saveBtnDisbled = ;
        }, 2000);
      }
    });
  }

  addUser(){
    var newUser =  {email: [this.newUser], groups:[]};
    this.addUserBtnDisbled = true;
    this.companyService.addUsers(newUser).subscribe(data=>{
        if(data.success){
          this.updateUserList();
          this.newUser =  '';
          this.isSuccess3 = true;
          this.msg3 = data.msg;
          //update company = data.company
          setTimeout(()=>{ 
            this.isSuccess3 = false;
            this.msg3 = '';
            this.addUserBtnDisbled = false;
          }, 2000);
        }else{
          this.isError3 = true;
          this.msg3 = data.msg;
          this.addUserBtnDisbled = false;
          setTimeout(()=>{ 
            this.isError3 = false;
            this.msg3 = '';
          }, 3000);
        }
       
    });
  }
  
  inviteUser(){
   // this.inviteBtnDisbled = true;
    console.log(this.selection.selected);
    let data = {users:this.selection.selected,survey:{_id: this.survey.id}}
    this.companyService.inviteUsers(data).subscribe(data=>{
      if(data.success){
        let val = {};
        this.selection.selected.forEach(val=>{
        //  this.invitedEmailds.push(val.email);
        });
        this.updateUserList();
        this.isSuccess3 = true;
        this.msg3 = data.msg;
        setTimeout(()=>{ 
          this.isSuccess3 = false;
          this.msg3 = '';
        }, 2000);
      }else{
        this.isError3 = true;
        this.msg3 = data.msg;
        this.inviteBtnDisbled = false;
        setTimeout(()=>{ 
          this.isError3 = false;
          this.msg3 = '';
        }, 3000);
      }
    });
  }

  showPreview(){
    this.preview = true;
  }
  onBackToSurevyClick(){
    this.preview = false;
  }

}
