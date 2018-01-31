import {Component, ViewChild, OnInit} from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatSnackBar } from '@angular/material';
import { CompanyService } from './../../services/company.service';
import {Router,ActivatedRoute, Params} from '@angular/router';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
declare var $:any;

@Component({
  selector: 'app-company-edit-theme',
  templateUrl: './company-edit-theme.component.html',
  styleUrls: ['./company-edit-theme.component.css']
})
export class CompanyEditThemeComponent implements OnInit {
  Theme : any;
  displatStat = false;
  titleFormControl = new FormControl('', [
    Validators.required,
  ]);
  fonts : any;
  fontSize: any;
  submitBtnDisabled = false;
  showSpinner :boolean = false
  themeId;
  stat4 =false;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _companyService: CompanyService,
    private routes: Router,
    public snackBar: MatSnackBar) { }

  ngOnInit() {
// ---------------------------------Start-------------------------------------------
// Function      : get logged company details
// Params        : 
// Returns       : company details
// Author        : Rinsha
// Date          : 16-1-2018
// Last Modified : 16-1-2018, Rinsha
// Desc          :
this._companyService.getLoggedUSerDetails().subscribe(info =>{
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
  }
});
// ---------------------------------End-------------------------------------------
    this.getFontProperties();
    this.getTheme();
    
  }
//  ---------------------------------end-----------------------------------------------


  //  ---------------------------------Start-------------------------------------------
  // Function      : getTheme
  // Params        : 
  // Returns       : 
  // Author        : Manu Prasad
  // Date          : 1-1-2018
  // Last Modified : 1-1-2018, Manu Prasad 
  // Desc          : Get Theme details using id from parameter in router from database


getTheme(){
  
  this._activatedRoute.params.subscribe((params: Params) => {
    this.themeId = params['id'];
    
  });
  this._companyService.getTheme(this.themeId).subscribe(theme =>{
    // console.log(theme);
    if(theme){
      this.Theme = theme;
      this.displatStat = true;
    }
    
  });

  }
//  ---------------------------------end-----------------------------------------------

  //  ---------------------------------Start-------------------------------------------
  // Function      : getFontProperties
  // Params        : 
  // Returns       : 
  // Author        : Manu Prasad
  // Date          : 4-1-2018
  // Last Modified : 4-1-2018, Manu Prasad 
  // Desc          : Get fonts and font sizes from database


  getFontProperties(){
    this._companyService.getFonts().subscribe(fonts =>{
      // console.log(fonts);
     this.fonts = fonts;
      
    });
    this._companyService.getFontSize().subscribe(fontSize =>{
      // console.log(fontSize);
      this.fontSize = fontSize;
      
    });
  }
  //  ---------------------------------end-----------------------------------------------

//  ---------------------------------Start-------------------------------------------
  // Function      : updateTheme
  // Params        : 
  // Returns       : 
  // Author        : Manu Prasad
  // Date          : 1-1-2018
  // Last Modified : 1-1-2018, Manu Prasad 
  // Desc          : update theme properties in  database


  updateTheme(){
    this.showSpinner  = true
    // console.log(this.Theme);
    this.submitBtnDisabled = true;
    if(this.Theme.title != ""){
      this._companyService.updateTheme(this.themeId, this.Theme).subscribe(res =>{
        console.log(res.status);
       if(res.status == 0){
        this.showSpinner  = false
        let snackBarRef =  this.snackBar.open('* Error in updation!', '', {
          duration: 2000
       });
        // $('#myModal .modal-body h4').text('Error in updating!');
        // $('#myModal').modal('show');  
       }
        else if(res.status == 1){
          this.showSpinner  = false
          let snackBarRef =  this.snackBar.open('* Title is empty!', '', {
            duration: 2000
         });
          // $('#myModal .modal-body h4').text('Title is empty!');
          // $('#myModal').modal('show');  
        }
        else if(res.status == 2){
          this.showSpinner  = false
          this.routes.navigate(['./create-theme']);
          let snackBarRef =  this.snackBar.open('Successfully updated!', '', {
            duration: 2000
         });
          // $('#myModal .modal-body h4').text('Successfully updated!');
          // $('#myModal .modal-title').text('Message');
          // $('#myModal').modal('show');
        }
        else if(res.status == 4){
          this.showSpinner  = false
          this.stat4 = true;
          let snackBarRef =  this.snackBar.open('Theme name already exist', '', {
            duration: 2000
         });
          // $('#myModal .modal-body h4').text('Theme name already exist!');
          // $('#myModal .modal-title').text('Message');
          // $('#myModal').modal('show');
          // $('#upbtn').prop('disabled', false);
        }
        else{
          this.showSpinner  = false
          let snackBarRef =  this.snackBar.open('Error in updation', '', {
            duration: 2000
         });
          // $('#myModal .modal-body h4').text('Error in updating!');
          // $('#myModal').modal('show');  
        }
      });
    }
    else{
      this.submitBtnDisabled = false;
      
    }
    
  }
  //  ---------------------------------end-----------------------------------------------

    //  ---------------------------------Start-------------------------------------------
  // Function      : redirect
  // Params        : 
  // Returns       : 
  // Author        : Manu Prasad
  // Date          : 2-1-2018
  // Last Modified : 2-1-2018, Manu Prasad 
  // Desc          : redirect to manage theme page


  redirect(){
    
    this.routes.navigate(['./create-theme']);
      }
    //  ---------------------------------end-----------------------------------------------
}
