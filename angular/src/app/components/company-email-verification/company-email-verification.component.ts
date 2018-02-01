import { Component, OnInit } from '@angular/core';
import { CanActivate,ActivatedRoute, Router } from '@angular/router';
import { CompanyService} from './../../services/company.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'company-email-verification',
  templateUrl: './company-email-verification.component.html',
  styleUrls: ['./company-email-verification.component.css']
})
export class CompanyEmailVerificationComponent implements OnInit {
  verif_id: number;
  private sub: any;
  constructor(private companyService : CompanyService, private routes: Router, private _flashMessagesService: FlashMessagesService, private route: ActivatedRoute,public snackBar: MatSnackBar) { }

  ngOnInit() {
// ---------------------------------Start-------------------------------------------
// Function      : Company verification
// Params        : verification id
// Returns       : 
// Author        : Rinsha
// Date          : 29-12-2017
// Last Modified : 29-12-2017, Rinsha
// Desc          : 
    this.sub = this.route.params.subscribe(params => {
      this.companyService.verifyCompany(params.id).subscribe(data => {
        if(data.success){
        // this._flashMessagesService.show('Success...', { cssClass: 'alert-success', timeout: 4000 });
        let snackBarRef =  this.snackBar.open('Successfully verified...', '', {
          duration: 2000
        });
        setTimeout(() => {  
          this.routes.navigate(['/clogin']);
        }, 4000);
      }
      else{
        // this._flashMessagesService.show('Error...', { cssClass: 'alert-danger', timeout: 4000 });
        let snackBarRef =  this.snackBar.open('Error...', '', {
          duration: 2000
        });
        setTimeout(() => {  
          this.routes.navigate(['/clogin']);
        }, 4000);
      }
      });
  });
// -----------------------------------End------------------------------------------
}
}
