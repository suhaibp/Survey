import {Component, ViewChild, OnInit, EventEmitter} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { CompanyService } from './../../services/company.service';
import {Router} from '@angular/router';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
declare var $:any;

@Component({
  selector: 'app-company-create-theme-container',
  templateUrl: './company-create-theme-container.component.html',
  styleUrls: ['./company-create-theme-container.component.css'],
  outputs: ['themeCreated']
})
export class CompanyCreateThemeContainerComponent implements OnInit {
  public themeCreated = new EventEmitter();
  newTheme = {
  title: "",
  h_font_color: "#ffffff",
  f_font_color: "#ffffff",
  q_font_color: "#333333",
  h_bg_color: "#1f7a90",
  f_bg_color: "#195961",
  q_bg_color: "#ffffff",
  h_font_family: "Sans-Serif",
  f_font_family: "Sans-Serif",
  q_font_family: "Sans-Serif",
  h_font_size: "18px",
  f_font_size: "15px",
  q_font_size: "14px",
  progress_text_color: "#333333",
  progress_bar_color: "#0e88ff",
  body_bg_color: "#ffffff",
  h_font_italic:false,
  h_font_bold:false,
  f_font_bold:false,
  f_font_italic: false,
  q_font_bold: false,
  q_font_italic: false
};
titleFormControl = new FormControl('', [
  Validators.required,
]);
fonts : any;
fontSize: any;
// public colorx : string = "#ffffff";
// public color2x : string = "#1f7a90";
// public color3x : string = "#ffffff";
// public color4x : string = "#195961";
// public color5x : string = "#333333";
// public color6x : string = "#ffffff";
// public color7x : string = "#333333";
// public color8x : string = "#0e88ff";
// public color9x : string = "#ffffff";
submitBtnDisabled = false;
themeSaved = false;
  constructor(
    private _companyService: CompanyService,
    private routes: Router) { }
  
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
  }

  submitTheme(){
    this.submitBtnDisabled = true;
    if(this.newTheme.title != ""){
      this._companyService.saveTheme(this.newTheme).subscribe(theme =>{
        if(theme.status == 0){
        this.submitBtnDisabled = false;
    
          $('#myModal .modal-body h4').text("Theme name already exist!");
          $('#myModal').modal('show'); 
        }
        else if(theme.status == 1){
          $('#myModal .modal-body h4').text("Error occured!");
          $('#myModal').modal('show'); 
          this.submitBtnDisabled = false;
        
        }
        else{
          // window.location.reload();
          // this.routes.navigate(['/create-theme']);
          this.themeSaved =true;
          $('#myModal .modal-body h4').text("Theme saved!");
          $('#myModal').modal('show'); 
        }
        
      });
    }
    else{
    this.submitBtnDisabled = false;
    
    }
    
  }
// ---------------------------------Start-------------------------------------------
// Function      : getFontProperties()
// Params        : name of the view to be shown
// Returns       : 
// Author        : Manu Prasad
// Date          : 28-12-2017
// Last Modified : 28-12-2017, Manu Prasad, Desc:
// Desc          : get font properties like size and font family
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
// ----------------------------------End-------------------------------------------


  thmSaved(){
          // window.location.reload();
              this.themeCreated.emit(true);
          // this.routes.navigate(['/create-theme']);   
          // this.routes.navigate(["/create-theme?refresh=1"]); 
          // this.routes.navigate(['/create-theme'], { queryParams: { 'refresh': 1 } });
  }
}
