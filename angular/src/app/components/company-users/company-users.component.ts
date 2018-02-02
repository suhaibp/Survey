<body>

              <div id="wrapper">
          
                  <!-- Navigation -->
      <app-company-top-bar></app-company-top-bar>            
      <app-company-sidebar></app-company-sidebar>
          
                  <div id="">
                      <div class="container-fluid">
                              
                                          <!-- Page Heading -->
                                        
                                    
                                          <!-- /.row -->
                          
                                      </div>
                      <div class="col-md-2">
                            <nav class="nav-sidebar">
                                <ul class="nav tabs buttonleft">
                                      <li >
                                        <button  class="btn btn-danger addnewbtn" (click)="openModal()" data-backdrop="static" data-keyboard="false" data-toggle="modal" data-target="#myModal">Add New</button>
                                      </li>
                                      <!-- <li *ngIf="loggedInCompany.plans[loggedInCompany.plans.length-1].excel_import"> -->
                                      <li *ngIf="excelImport">
                                        <button  class="btn btn-danger addnewbtn" (click)="openModal()" data-backdrop="static" data-keyboard="false" data-toggle="modal" data-target="#importModal" >Import from Excel</button>
                                      </li>
                                      <!-- <li [ngClass]="{'active1': viewComp == 'Active'}"><a (click)="updateView('Active')" href="#tab4" data-toggle="tab">Active Users</a></li> 
                                      <li [ngClass]="{'active1': viewComp == 'Blocked'}"><a (click)="updateView('Blocked')" href="#tab2" data-toggle="tab">Blocked Users</a></li>
                                      <li [ngClass]="{'active1': viewComp == 'Delete'}"><a (click)="updateView('Delete')" href="#tab3" data-toggle="tab">Delete Users</a></li>   -->
                                                                   
                                </ul>
                              </nav>
                      </div>
                      <div class="col-md-10">

                          <div *ngIf="viewComp == 'All'">
                            <!-- <all-users></all-users> -->
                          </div>
                          <div *ngIf="viewComp == 'Active'">
                              <!-- <active-users></active-users> -->
                            </div>
                          <div *ngIf="viewComp == 'Blocked'">
                            <!-- <disabled-users></disabled-users> -->
                          </div>
                          <div *ngIf="viewComp == 'Delete'">
                            <!-- <deleted-users></deleted-users> -->
                          </div>
                      </div>
                      
                    </div>
                    <!-- /#page-wrapper -->
                    
                               
                    </div>

            <div id="deleteModal" class="modal fade" role="dialog">
                <div class="modal-dialog">
              
                  <!-- Modal content-->
                  <div class="modal-content">
                    <!-- <div class="modal-header"> -->
                      <!-- <h4 class="modal-title">Are you sure to delete?</h4> -->
                    <!-- </div> -->
                    <div class="modal-body">
                        <h4>Are you sure to delete?</h4>
                    
                    </div>
                  
                    <div class="modal-footer">
                      <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                      <button type="button" (click)="deleteUser(userId)" class="btn btn-default" data-dismiss="modal">Delete</button>
                    </div>
                  </div>
              
                </div>
              </div>

              <div id="myModal2"  class="modal fade">
                  <div class="modal-dialog"> 
          <!-- Modal content-->
                    <div class="modal-content">
                       <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                            <h4 class="modal-title">User Block Request </h4>
                       </div>
                       <br>
                       <!-- <div *ngIf="isError" class="alert alert-danger">
                        {{errorMsg}}
                     </div>
                     <div *ngIf="isSuccess" class="alert alert-danger">
                         {{errorMsg}}
                      </div> -->
                     
                        
                      <div class="modal-body">
                           <form  role="form"  #f1="ngForm" (ngSubmit)="sendBlockRequest(newBlock)">
                                <p>User Name :  {{newBlock.email}}</p>
                                
                                   
                          <br>
                                 <div class="form-group" >
                                   <textarea class="form-control" rows="5" name = "reason" id="comment" placeholder="Reason" [(ngModel)]="newBlock.reason"></textarea>
                               </div>
                               <!-- <div *ngIf="showSpinner">
                                  <mat-spinner></mat-spinner>
                                 </div> -->
                                      



                                      <div class="row">
                                          <div class="col-md-4">
                                              <input type="submit" class="btn btn-danger" value="Send"  [disabled]="btnDisbled">
                                                </div>
                                                <div class="col-md-8" *ngIf="showSpinner" >
                                                       <svg class="svgclass" version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                       width="40px" height="40px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
                                                   <path fill="#000" d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z">
                                                     <animateTransform attributeType="xml"
                                                       attributeName="transform"
                                                       type="rotate"
                                                       from="0 25 25"
                                                       to="360 25 25"
                                                       dur="0.6s"
                                                       repeatCount="indefinite"/>
                                                     </path>
                                                   </svg>
                                                </div>
                                                 
                                              </div>
                               </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal" #closeBtn>Close</button>
                    </div>
                 </div>
              </div>
        </div>
    
              <flash-messages></flash-messages>
         
                <br>
                    <div class="col-md-8">
                       
                        <div class="col-md-12">
                            <div class="row">
                            <div class="col-md-12 preloader2" *ngIf="showSpinnerDelete">
                                <div class=""  >
                                    <svg class="svgclass" version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                    width="50%" height="59px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
                                <path fill="#000" d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z">
                                  <animateTransform attributeType="xml"
                                    attributeName="transform"
                                    type="rotate"
                                    from="0 25 25"
                                    to="360 25 25"
                                    dur="0.6s"
                                    repeatCount="indefinite"/>
                                  </path>
                                </svg>
                            </div>
                            </div>
                            <flash-messages></flash-messages>
                           
                                  <div class="example-header" >
                                      <div class="col-md-8">
                                      <mat-form-field>
                                        <input matInput (keyup)="applyFilter($event.target.value)" placeholder="Filter">
                                      </mat-form-field>
                                      </div>
                                      <div class="col-md-4">
                                        <div *ngIf="userGroups && userGroups.length > 0">
                                        <mat-form-field class="filter">
                                            <mat-select   (change)="updateUserList()" name="xyz" [(ngModel)]="selectedUserGroup"  >
                                              <mat-option value="all">All</mat-option>
                                              <mat-option value="{{grp._id}}" *ngFor="let grp of userGroups">{{grp.name}}</mat-option>
                                            </mat-select>
                                    </mat-form-field>
                                  </div>
                                    </div>
                                  </div>
                               <div class="clearfix"></div>
                            <div class="example-container mat-elevation-z8 ">
                        <mat-table [dataSource]="dataSource" matSort>
                             <ng-container matColumnDef="id">
                        <mat-header-cell *matHeaderCellDef mat-sort-header> SL NO. </mat-header-cell>
                        <mat-cell *matCellDef="let row; let i = index"> {{i+1}} </mat-cell>
                      </ng-container>
                                <ng-container matColumnDef="email">
                                   <mat-header-cell *matHeaderCellDef mat-sort-header> NAME</mat-header-cell>
                                     <mat-cell *matCellDef="let row"> {{row.email}}</mat-cell>
                                 </ng-container>
                                  <ng-container  matColumnDef="action">
                                      <mat-header-cell *matHeaderCellDef mat-sort-header > ACTION</mat-header-cell>
                                      <mat-cell *matCellDef="let row"><button mat-icon-button [matMenuTriggerFor]="menu" ><mat-icon>more_vert</mat-icon> </button>
                                        <mat-menu #menu="matMenu">
                                          <div>
                                           
                                            <button *ngIf="row.block_req_status==false"  mat-menu-item (click)="getUserEmail(row.id,row.email)" data-toggle="modal" data-target="#myModal2">
                                                <mat-icon><i class="material-icons">block</i></mat-icon>
                                                <span>Sent Block Request</span>
                                                </button>
                                                <button *ngIf="row.block_req_status==true"  mat-menu-item >
                                                    <mat-icon><i class="material-icons">block</i></mat-icon>
                                                    <span>Already sent Block request</span>
                                                    </button>
                                                </div>
                                            <button  mat-menu-item (click)="bindEditUser(row.item)" data-toggle="modal" data-target="#editModal">
                                                  <mat-icon><i class="material-icons">mode_edit</i></mat-icon>
                                                  <span>Edit</span>
                                                  </button>
                                              <button mat-menu-item  (click)="getUserId(row.id)" data-toggle="modal" data-target="#deleteModal"> 
                                                  <mat-icon><i class="material-icons">delete</i></mat-icon>
                                                  <span>Delete</span>
                                              </button>
                                        </mat-menu> </mat-cell>
                              
                                     </ng-container>
                       
                    
                
                                  <mat-header-row *matHeaderRowDef="displayedColumns"></mat-header-row>
                                   <mat-row *matRowDef="let row; columns: displayedColumns;">
                                   </mat-row>
                                 
                                  </mat-table>
                                     <!-- <div class="col-md-15 "> -->
                    <!-- <div *ngIf="showSpinnerDelete" class="deletespinner">
                        <mat-spinner></mat-spinner>
                     </div> -->
                    
                <!-- </div> -->
         
                <div class="col-md-12 noItemFound" *ngIf="!existStatus">
                    <div class="col-md-4 col-md-offset-4">
                        <mat-toolbar   class="back-color">No item found!</mat-toolbar>
                    </div>
                    </div>
            <mat-paginator [pageSizeOptions]="[5, 10, 25, 100]"></mat-paginator>
      </div>
    </div>
 </div>
 </div>    

<!-- -------------------------------------------------------------------------------------------edit------------------------- -->
                    <div id="editModal"  class="modal fade" >
                      <div class="modal-dialog">
                      
                        <!-- Modal content-->
                        <div class="modal-content">
                          <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" #closeBtn1>&times;</button>
                            <h4 class="modal-title">Edit User</h4>
                          </div>
                          <div class="modal-body">
                            
                        <form  role="form"  #f1="ngForm" (ngSubmit)="f1.form.valid && updateUsers(f1);" novalidate>
                             
                            <div class="form-group" >
                                <label > Email </label>
                                <br>
                                <!-- <div *ngIf="isError1" class="text-danger text-left">
                                    {{msg1}}
                               </div>
                               <div *ngIf="isSuccess1" class="text-success text-left">
                                  {{msg1}}
                            </div> -->
                               
                                <div  >
                                  <div class="inputitem">
                                  <mat-form-field *ngIf="!selUser.is_registered" class="inputfileds">
                                    <input matInput  [value]="selUser.email" placeholder="Email address" required email  #email="ngModel" name="email" [(ngModel)]="selUser.newEmail"  >
                                    <!-- <input matInput placeholder="Email address" [formControl]="emailFormControl" name="emails_{{i}}" [(ngModel)]="newUser.email[i]"  required > -->
                                  
                                  </mat-form-field>
                                  <div *ngIf="selUser.is_registered">
                                  <label >{{selUser.email}}</label>
                                  </div>
                                  </div>
                                </div>
                                <div style="clear: both;"></div>
                                <br/>
                         
                                <br/>
                                <div class="inputitem">
                                    <mat-form-field class="inputfileds">
                                      <mat-select placeholder="Groups" name='editgrup' [(ngModel)]="selUserGroups" multiple>
                                        <mat-option [value]="grp._id" *ngFor="let grp of groups;" >{{grp.name}}</mat-option>
                                      </mat-select>
                                    </mat-form-field>
                                </div>
                            
                                <br>
                                <div style="clear: both;"></div>
                            </div>
                            <br>
                            <!-- <div *ngIf="showSpinner">
                                <mat-spinner></mat-spinner>
                               </div> -->
                          

                            <div class="row">
                                <div class="col-md-4">
                                    <button type= "submit" [disabled]="updateBtnDisbled" class="btn btn-danger ourbutton" >Update</button>
                                      </div>
                                      <div class="col-md-8" *ngIf="showSpinner" >
                                             <svg class="svgclass" version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                             width="40px" height="40px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
                                         <path fill="#000" d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z">
                                           <animateTransform attributeType="xml"
                                             attributeName="transform"
                                             type="rotate"
                                             from="0 25 25"
                                             to="360 25 25"
                                             dur="0.6s"
                                             repeatCount="indefinite"/>
                                           </path>
                                         </svg>
                                      </div>
                                       
                                    </div>
                           
                        </form>
                          </div>
                          <div class="modal-footer">
                          </div>
                        </div>
                        
                      </div>
                    </div>

<!-- --------------------------------------------------------------------import-------------------------------------------------------------------------------------------------- -->
<div id="importModal"  class="modal fade">
<div class="modal-dialog">
  <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" #closeBtn2>&times;</button>
        <h4 class="modal-title">Import From Excel</h4>
      </div>
      <div class="modal-body">
        <form  role="form"  #f2="ngForm" (ngSubmit)="f2.form.valid && import(f2);" novalidate>
         <div class="form-group" >
           <div class="row">
           <div class="col-md-6">
              <label > File </label>
              <!-- <br> -->
              <input #myInput type="file" (change)="handleFile($event)" accept=".xlsx"/>
          </div>
          <div class="col-md-6">
            <br>
            Sample Excel :   <a href="/assets/sampleFile/sample.xlsx" target="_self" download>
              <i class="fa fa-download"></i>
            </a>
          </div>
          </div>
            <br>
            <!-- <div *ngIf="isError" class="text-danger text-left">
              {{msg}}
         </div>
         <div *ngIf="isSuccess" class="text-success text-left">
            {{msg}}
      </div> -->
            <div class="inputitem">
              <mat-form-field class="inputfileds">
                <mat-select placeholder="Groups" name='selected' #group="ngModel" [(ngModel)]="newUser.groups" multiple>
                  <mat-option [value]="grp" *ngFor="let grp of groups;"  >{{grp.name}}</mat-option>
                </mat-select>
              </mat-form-field>
            </div>
            <div style="float: left;">
              <button  class="btn btn-danger ourbutton" (click)="showGroupAddOption()">Add Group</button>
            </div>
            <br>
            <div style="clear: both;"></div>
            <div *ngIf="showAddGroup">
            <mat-form-field class="inputfileds" >
              <input matInput placeholder="Group Name" [(ngModel)]="newGroup" name="newGroup" >
            </mat-form-field>
            <button  class="btn btn-danger ourbutton" (click)="addGroup()">Add</button>
            </div>
          </div>
          <!-- <div *ngIf="showSpinner">
              <mat-spinner></mat-spinner>
             </div> -->
      


        <div class="row">
            <div class="col-md-4">
                <button type= "submit" [disabled]="updateBtnDisbled1" class="btn btn-danger ourbutton" >Update</button>
                  </div>
                  <div class="col-md-8" *ngIf="showSpinner" >
                         <svg class="svgclass" version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                         width="40px" height="40px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
                     <path fill="#000" d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z">
                       <animateTransform attributeType="xml"
                         attributeName="transform"
                         type="rotate"
                         from="0 25 25"
                         to="360 25 25"
                         dur="0.6s"
                         repeatCount="indefinite"/>
                       </path>
                     </svg>
                  </div>
                   
                </div>
       
    </form>
    </div>

     
      
      <div class="modal-footer">
        </div>
        </div>
      </div>
    </div>
<!-- ------------------------------------------------------------------------add---------------------------------------------------------------------------------------------- -->
                    
                    <div id="myModal"  class="modal fade">
                        <div class="modal-dialog">
                        
                          <!-- Modal content-->
                          <div class="modal-content">
                            <div class="modal-header">
                              <button type="button" class="close" data-dismiss="modal" #closeBtnAdd>&times;</button>
                              <h4 class="modal-title">Add User</h4>
                            </div>
                            <div class="modal-body">
                              
                          <form  role="form"  #f="ngForm" (ngSubmit)="f.form.valid && addUsers(f);" novalidate>
                          
                              <div class="form-group" >
                                  <label > Email </label>
                                  <br>
                                  <!-- <div *ngIf="isError" class="text-danger text-left">
                                      {{msg}}
                                 </div>
                                 <div *ngIf="isSuccess" class="text-success text-left">
                                    {{msg}}
                              </div> -->
                                 
                                  <div  *ngFor="let item of newUser.email; let i = index; trackBy:trackByIndex" >
                                    <div class="inputitem">
                                    <mat-form-field class="inputfileds">
                                      <input matInput placeholder="Email address" required email  #email{{i}}="ngModel" name="emails_{{i}}" [(ngModel)]="newUser.email[i]" >
                                      <!-- <input matInput placeholder="Email address" [formControl]="emailFormControl" name="emails_{{i}}" [(ngModel)]="newUser.email[i]"  required > -->
                                    
                                    </mat-form-field>
                                    
                                    </div>
                                    <div style="float: left;padding-top: 14px;width:220px;">
                                        <button class="btn-danger" (click)="removeOption(i)" style="float: left;" >X</button>
                                    </div>
                                  </div>
                                  <div style="clear: both;"></div>
                                  <br/>
                                  <button  class="btn btn-danger ourbutton" (click)="addMoreOption()" >Add More</button>
                                  <br/>
                                  <br/>
                                  <div class="inputitem">
                                      <mat-form-field class="inputfileds">
                                        <mat-select placeholder="Groups" name='selected' #group="ngModel" [(ngModel)]="newUser.groups" multiple>
                                          <mat-option [value]="grp" *ngFor="let grp of groups;"  >{{grp.name}}</mat-option>
                                        </mat-select>
                                      </mat-form-field>
                                  </div>
                                  <div style="float: left;">
                                      <button  class="btn btn-danger ourbutton" (click)="showGroupAddOption()">Add Group</button>
                                  </div>
                                  <br>
                                  <div style="clear: both;"></div>
                                  <div *ngIf="showAddGroup">
                                  <mat-form-field class="inputfileds" >
                                      <input matInput placeholder="Group Name" [(ngModel)]="newGroup" name="newGroup" >
                                    </mat-form-field>
                                    <button  class="btn btn-danger ourbutton" (click)="addGroup()">Add</button>
                                    </div>
                                    
                              </div>
                              <br>
                              <!-- <div *ngIf="showSpinner">
                                  <mat-spinner></mat-spinner>
                                 </div> -->
                            
                             <div class="row">
                                  <div class="col-md-4">
                                      <button type= "submit" [disabled]="btnDisbled" class="btn btn-danger ourbutton" >Submit</button>
                                        </div>
                                        <div class="col-md-8" *ngIf="showSpinner" >
                                               <svg class="svgclass" version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                               width="40px" height="40px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
                                           <path fill="#000" d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z">
                                             <animateTransform attributeType="xml"
                                               attributeName="transform"
                                               type="rotate"
                                               from="0 25 25"
                                               to="360 25 25"
                                               dur="0.6s"
                                               repeatCount="indefinite"/>
                                             </path>
                                           </svg>
                                        </div>
                                         
                                      </div>
                             
                          </form>
                            </div>
                            <div class="modal-footer">
                            </div>
                          </div>
                          
                        </div>
                      </div>


                      
                    
                    <footer></footer> 
                      
                    </body>

-----------------------------------------------------------------------------------------------------
import { Component, OnInit, ElementRef ,ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { CompanyService } from '../../services/company.service';
import {Validators, FormControl} from '@angular/forms';
import { MatPaginator, MatSort, MatSnackBar } from '@angular/material';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute } from '@angular/router';
import { XlsxToJsonService} from './../../services/xlsx-to-json.service';
import {SelectionModel} from '@angular/cdk/collections';
import { Config } from './../../config/config';
import * as socketIo from 'socket.io-client';
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
excelImport : Boolean ;
dataSource: MatTableDataSource<any>;
selection = new SelectionModel<Element>(true, []);
userData:any;
userId :any;
selectedUserGroup = 'all';
showSpinner :boolean = false;
showSpinnerDelete :boolean = false;
userGroups :any;
users :any;
existStatus : boolean= false
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
@ViewChild('closeBtnAdd') closeBtnAdd: ElementRef;
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

showAddGroup = false;
newGroup = '';
groups: any;
public result: any;
emailArr : any;
private xlsxToJsonService: XlsxToJsonService = new XlsxToJsonService();
btnDisbled:boolean = false;
updateBtnDisbled:boolean = false;
updateBtnDisbled1:boolean = false;
selUser = {email: '', groups:[],newEmail:'',is_registered:false};
selUserGroups= [];
//selGroups = [];
groupsObject : any;
getSingleData : any;
email :any;
loggedInCompany : any;
private socket:any;
constructor(private companyService: CompanyService, private _flashMessagesService: FlashMessagesService, private routes: Router,public snackBar: MatSnackBar,private config: Config ) { 
  this.socket = socketIo(config.siteUrl);
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
if(info == null || info == ''){
  this.routes.navigate(['/clogin']); 
}
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
  this.loggedInCompany = info;
  this.excelImport = this.loggedInCompany.plans[this.loggedInCompany.plans.length-1].excel_import
  // console.log(this.loggedInCompany.plans[this.loggedInCompany.plans.length-1].excel_import);
}
});
// ---------------------------------End-------------------------------------------
 // this.selGroups = ['Symptots'];
 this.loadData();
 this.companyService.getAllUserGroup().subscribe(data=>{
  //  console.log('getting all groups');
  //  console.log(data);
  this.groups = data.group;
  this.groupsObject = data.groupById;
  });

  // this.companyService.getMyCompany().subscribe(data=>{
  //   var index = 1;
  //   this.selUser.email = data.users[index].email;
  //   this.selUser.newEmail = data.users[index].email;
  //   this.selUser.is_registered = data.users[index].is_registered;
  //   this.selUserGroups =[];
  //   data.users[index].group.forEach(val => {
  //     this.selUserGroups.push(val.g_id);
  //   });
  // });
  this.loadGroup();
  this.socket.on('rejectuser', (data) => {
    this.loadData();
   });

}

loadGroup(){
this.showSpinnerDelete = true
this.companyService.getAllUserGroup().subscribe(data=>{
  this.showSpinnerDelete = false
  this.userGroups = data.group;;
   //  console.log(this.answerType);
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
this.showSpinnerDelete = true
  const users: any[] = [];
  this.companyService.getMyUsers().subscribe(data1=>{
    this.showSpinnerDelete = false
    if(data1 == '')
    {
      this.existStatus = false;
    }
      else if(data1 != '')
      {
        this.existStatus = true;
      }
    // console.log('list users');
    // console.log(data1);
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
bindEditUser(data){
  this.showSpinnerDelete = false
  this.showSpinner = false
     this.selUser.email = data.email;
     this.selUser.newEmail = data.email;
    this.selUser.is_registered = data.is_registered;
    this.selUserGroups = [];
  //  console.log(data.group);
    data.group.forEach(val => {
      this.selUserGroups.push(val.g_id);
    });
    //console.log(this.selUserGroups);
}
//  ---------------------------------end----------------------------------------------
//  ---------------------------------Start-------------------------------------------
// Function      : getCategoryId
// Params        : 
// Returns       : 
// Author        : Jooshifa
// Date          : 29-12-2017
// Last Modified : 29-12-2017, Jooshifa 
// Desc          : pass id from modal and get it for the purpuse edit
getUserId(id){
this.showSpinner = false
this.showSpinnerDelete = false
  this.userId = id;
  // console.log(this.userId)

}
//  ---------------------------------end----------------------------------------------

getUserEmail(id,email){
this.showSpinnerDelete = false
this.showSpinner = false
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
this.showSpinnerDelete = true
  // console.log(groups)
   this.companyService.getUserByGroup(groups).subscribe(data2=>{
     if(data2.success ==false){
      this.showSpinnerDelete = false
          //  console.log("data not exist")
           this.existStatus = true 
     }
     else{
      // console.log(data2)
      if(data2){
        this.showSpinnerDelete = false
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
this.showSpinnerDelete = true
this.companyService.deleteUser(userId).subscribe(deleteData=>{
  // console.log(deleteData)
  if(deleteData.success==false){
    this.showSpinnerDelete = false
      // this._flashMessagesService.show(' Survey invitation is  already sent, cant delete! ', { cssClass: 'alert-danger', timeout: 3000 });
      let snackBarRef =  this.snackBar.open('* Survey invitation is  already sent, cant delete!', '', {
        duration: 2000
      });
      // console.log("error")
  }
  else{
      this.loadData();
      this.showSpinnerDelete = false
      // this._flashMessagesService.show('Delete User Successfully!', { cssClass: 'alert-success', timeout: 1000 });
      let snackBarRef =  this.snackBar.open(' Delete User Successfully', '', {
        duration: 2000
      });
      // console.log("success")
  }
});
}
// -----------------------------------end----------------------------------------------------

//  ---------------------------------Start-------------------------------------------
// Function      : addMoreOption
// Params        : 
// Returns       : 
// Author        : Yasir Poongadan
// Date          : 01-01-2018
// Last Modified : 01-01-2018, Yasir Poongadan
// Desc          : For adding more emails in add user popup

addMoreOption(){
  this.newUser.email.push('');
  return false;
}

// -----------------------------------end---------------------------------------------------- 

//  ---------------------------------Start-------------------------------------------
// Function      : removeOption
// Params        : option index
// Returns       : 
// Author        : Yasir Poongadan
// Date          : 01-01-2018
// Last Modified : 01-01-2018, Yasir Poongadan
// Desc          : For remove emails in add user popup 
removeOption(index){

    if(this.newUser.email.length > 1){
        this.newUser.email.splice(index, 1);
    }else{
        this.isError = true;
        let snackBarRef =  this.snackBar.open('* Atleast one item required!', '', {
          duration: 2000
        });
        setTimeout(()=>{ 

            this.isError = false;
            this.msg = '';
            
        }, 3000);
    }
    return false;

}
// -----------------------------------end---------------------------------------------------- 

//  ---------------------------------Start-------------------------------------------
// Function      : trackByIndex
// Params        : 
// Returns       : 
// Author        : Yasir Poongadan
// Date          : 01-01-2018
// Last Modified : 01-01-2018, Yasir Poongadan
// Desc          : For multiple oprion email 

trackByIndex(index: number, value: number) {
  return index;
}

// -----------------------------------end---------------------------------------------------- 

//  ---------------------------------Start-------------------------------------------
// Function      : showGroupAddOption
// Params        : 
// Returns       : 
// Author        : Yasir Poongadan
// Date          : 01-01-2018
// Last Modified : 01-01-2018, Yasir Poongadan
// Desc          : For adding groups in  add user popup
showGroupAddOption(){
  this.showAddGroup = true;
  return false;
}
// -----------------------------------end---------------------------------------------------- 

//  ---------------------------------Start-------------------------------------------
// Function      : updateUsers
// Params        : 
// Returns       : 
// Author        : Yasir Poongadan
// Date          : 01-01-2018
// Last Modified : 01-01-2018, Yasir Poongadan
// Desc          : For update user details and assigned groups
updateUsers(form){
  this.showSpinner = true
  this.updateBtnDisbled= true;
  // console.log(this.selUser.groups);
  this.selUserGroups.forEach((val,key) => {
    this.selUser.groups[key] = this.groupsObject[val];
  });
  // console.log(this.selUser);
  this.companyService.updateUser(this.selUser).subscribe(data=>{
    if(data.success){
      this.selUser = {email: '', groups:[],newEmail:'',is_registered:false};
      // this.isSuccess1 = true;
      this.msg1 = data.msg;
      this.showSpinner = false
      let snackBarRef =  this.snackBar.open(this.msg1, '', {
        duration: 2000
      });
      form.resetForm();
      //update company = data.company
      this.loadData();
      // setTimeout(()=>{ 
        this.closeBtn1.nativeElement.click();
        // this.isSuccess1 = false;
        // this.msg1 = '';
        this.updateBtnDisbled = false;
      // }, 2000);
    }else{
      // this.isError1 = true;
      this.msg1 = data.msg;
      this.showSpinner = false
      let snackBarRef =  this.snackBar.open(this.msg1, '', {
        duration: 2000
      });
      this.updateBtnDisbled = false;
      setTimeout(()=>{ 
        // this.isError1 = false;
        // this.msg1 = '';
      }, 3000);
    }
  });
}
// -----------------------------------end---------------------------------------------------- 

//  ---------------------------------Start-------------------------------------------
// Function      : addUsers
// Params        : 
// Returns       : 
// Author        : Yasir Poongadan
// Date          : 01-01-2018
// Last Modified : 01-01-2018, Yasir Poongadan
// Desc          : For add new user emails and assigned groups

addUsers(form){
  this.showSpinner = true
  this.btnDisbled = true;
  // console.log(form);
  this.companyService.addUsers(this.newUser).subscribe(data=>{
      if(data.success){
        this.newUser =  {email: [''], groups:[]};
        // this.isSuccess = true;
        this.msg = data.msg;
        this.showSpinner = false
        let snackBarRef =  this.snackBar.open(this.msg, '', {
          duration: 2000
        });
        form.resetForm();
        this.loadData();
        //update company = data.company
        // setTimeout(()=>{ 
          this.closeBtnAdd.nativeElement.click();
          this.closeBtn2.nativeElement.click();
          // this.isSuccess = false;
          // this.msg = '';
          this.btnDisbled = false;
          this.updateBtnDisbled1 = false;
        // }, 2000);
      }else{
        // this.isError = true;
        this.msg = data.msg;
        this.showSpinner = false
        let snackBarRef =  this.snackBar.open(this.msg, '', {
          duration: 2000
        });
        this.btnDisbled = false;
        setTimeout(()=>{ 
          // this.isError = false;
          this.updateBtnDisbled1 = false;
          this.msg = '';
        }, 3000);
      }
     
  });
  
}
// -----------------------------------end---------------------------------------------------- 

//  ---------------------------------Start-------------------------------------------
// Function      : addGroup
// Params        : 
// Returns       : 
// Author        : Yasir Poongadan
// Date          : 01-01-2018
// Last Modified : 01-01-2018, Yasir Poongadan
// Desc          : For add new user group to db
addGroup(){
  this.showSpinner = true
    this.companyService.addUserGroup(this.newGroup).subscribe(data=>{
     
      // console.log(data);
      if(data.success){
          this.showAddGroup = false;
          this.groups.push(data.data);
          this.newGroup = '';
          // this.isSuccess = true;
          this.msg = "Group Created Successfully";
          this.showSpinner = false
          let snackBarRef =  this.snackBar.open(this.msg, '', {
            duration: 2000
          });
          this.loadGroup();
          setTimeout(()=>{ 
              this.isSuccess = false;
              this.msg = '';
          }, 3000);
      }else{
        // this.isError = true;
      
        this.msg = "* Faild, Group Already Exists!";
        this.showSpinner = false
        let snackBarRef =  this.snackBar.open(this.msg, '', {
          duration: 2000
        });
        setTimeout(()=>{ 
            // this.isError = false;
            // this.msg = '';
        }, 3000);
      }
    });
    return false;
}
// -----------------------------------end---------------------------------------------------- 

//  ---------------------------------Start-------------------------------------------
// Function      : sendBlockRequest
// Params        : request
// Returns       : 
// Author        : Jooshifa
// Date          : 04-12-2018
// Last Modified : 04-12-2018, Jooshifa 
// Desc          : send block request to admin to block a user
sendBlockRequest(request){ 
this.showSpinner = true
 this.companyService.sendBlockRequest(request).subscribe(data4 => {
if(!data4.success){
    // console.log(data4);
    // this.isError = true;
    this.errorMsg = data4.msg;
    this.showSpinner = false
    let snackBarRef =  this.snackBar.open(this.errorMsg, '', {
      duration: 2000
    });
    this.btnDisbled = false;
    this.newBlock.reason= '';
    setTimeout(()=>{ 
          // this.isError = false;
          // this.errorMsg = '';
    }, 2000);
}
else if(data4.success){
    this.btnDisbled = true
    this.loadData();
    this.closeBtn.nativeElement.click();
    // this.isSuccess = true;
    this.errorMsg = data4.msg;
  
    setTimeout(()=>{ 
            // this.isSuccess = false;
            // this.errorMsg = '';
            this.btnDisbled = false
    }, 2000);
    this.newBlock.reason= '';
    this.showSpinner = false
    // this._flashMessagesService.show('Sent Block request successfully!', { cssClass: 'alert-success', timeout: 1000 });
    let snackBarRef =  this.snackBar.open('Sent Block request successfully!', '', {
      duration: 2000
    });
    
  // this.closeBtn.nativeElement.click();
 }
});
}
//  ---------------------------------End-------------------------------------------
handleFile(event) {
  // console.log("________________")
  // console.log(event)
  this.emailArr = [];
  let file = event.target.files[0];
  this.xlsxToJsonService.processFileToJson({}, file).subscribe(data => {
    // this.result = JSON.stringify(data['sheets'].Sheet1);
    this.result = data['sheets'].Sheet1;
    
    if(typeof(this.result != undefined || this.result != null)){
      this.result.forEach(element => {
        if(element.Email != null || element.Email != undefined){
          this.emailArr.push(element.Email);
          
        }
      });
      // console.log((this.emailArr));
      // if(typeof(this.emailArr == undefined)){
      //   this.emailArr = [];
      // }
      if(this.emailArr.length == 0){
        this.msg = "no valid email address to insert!";
        
      }
    }
  })
}

import(form){
  

  this. updateBtnDisbled1  =true;
  this.newUser.email = this.emailArr;
  // console.log(this.newUser)
  this.addUsers(form);
}
cnclImprt(){
this. updateBtnDisbled1  =false;

}
openModal(){
  this.showSpinner = false
  this.showSpinner = false
  this.newUser.email =  [''];
  this.myInputVariable.nativeElement.value = "";
}
updateUserList() {
  this.showSpinnerDelete = true
  // console.log(this.selectedUserGroup);
  if(this.selectedUserGroup == 'all'){
       this.companyService.getMyUsers().subscribe(data=>{
        this.showSpinnerDelete = false
        if(data == '')
        {
          this.existStatus = false;
        }
          else if(data != '')
          {
            this.existStatus = true;
          }

        //  console.log(data);
         this.users = data;
           this.dataSource = new MatTableDataSource(data);
           this.dataSource.paginator = this.paginator;
           this.selection.clear();
     });
  }else{
     this.companyService.getUsersInAGroups(this.selectedUserGroup).subscribe(data=>{
      this.showSpinnerDelete = false
      if(data == '')
      {
        console.log("here");
        this.existStatus = false;
        
      }
        else if(data != '')
        {
          this.existStatus = true;
        }
       this.users = data;
       this.dataSource = new MatTableDataSource(this.users);
       this.dataSource.paginator = this.paginator;
       this.selection.clear();
     });
 }
  
 }

}

