import {Component, ViewChild, OnInit} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
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
  themeId;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _companyService: CompanyService,
    private _router: Router) { }

  ngOnInit() {
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
    // console.log(this.Theme);
    this.submitBtnDisabled = true;
    if(this.Theme.title != ""){
      this._companyService.updateTheme(this.themeId, this.Theme).subscribe(res =>{
        console.log(res);
       if(res.status == 0){
        $('#myModal .modal-body h4').text('Error in updating!');
        $('#myModal').modal('show');  
       }
        else if(res.status == 1){
          $('#myModal .modal-body h4').text('Title is empty!');
          $('#myModal').modal('show');  
        }
        else if(res.status == 2){
          $('#myModal .modal-body h4').text('Successfully updated!');
          $('#myModal .modal-title').text('Message');
          $('#myModal').modal('show');
        }
        else{
          $('#myModal .modal-body h4').text('Error in updating!');
          $('#myModal').modal('show');  
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
    
    this._router.navigate(['./create-theme']);
      }
    //  ---------------------------------end-----------------------------------------------
}
