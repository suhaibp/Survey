import { Component, OnInit } from '@angular/core';
import { CanActivate,ActivatedRoute, Router } from '@angular/router';
import { CompanyService} from './../../services/company.service';
import { UserService} from './../../services/user.service';

@Component({
  selector: 'user-response-email',
  templateUrl: './user-response-email.component.html',
  styleUrls: ['./user-response-email.component.css']
})
export class UserResponseEmailComponent implements OnInit {
  private sub: any;
  surveyId :any;
  userId : any;
  userEmail : any;
  constructor(private route: ActivatedRoute, private companyService : CompanyService, private userService : UserService, private routes: Router) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.surveyId = params['id1'];
       this.userId = params['id2'];
    });

// ---------------------------------Start-------------------------------------------
// Function      : change mail response status 
// Params        : company user id and survey id
// Returns       : 
// Author        : Rinsha
// Date          : 09-01-2018
// Last Modified : 09-01-2018, Rinsha
// Desc          : change mail response status when the user click the link in email
  this.companyService.changeMailResponseStatus(this.userId, this.surveyId).subscribe(data =>{
  });
// ---------------------------------End-------------------------------------------

// ---------------------------------Start-------------------------------------------
// Function      : Get user email 
// Params        : company user id
// Returns       : user details
// Author        : Rinsha
// Date          : 05-01-2018
// Last Modified : 05-01-2018, Rinsha
// Desc          : Get company user id from url and fetch the email from 'company' collections
    this.companyService.getuserEmail(this.userId).subscribe(data =>{
    this.userEmail = data;
// ---------------------------------Start-------------------------------------------
// Function      : Get user email from user collection
// Params        : user email registered by company
// Returns       : staus and global user id
// Author        : Rinsha
// Date          : 05-01-2018
// Last Modified : 05-01-2018, Rinsha
// Desc          : Check whether the company registered email id is registered globally
      this.userService.checkEmail(this.userEmail).subscribe(data =>{
        console.log(data);
        if(data.success){
          this.routes.navigate(['/user-login', data.user_id, this.surveyId]);
        }
        else{
          this.routes.navigate(['/user-register', this.userId, this.surveyId]);
        }
      });
// -----------------------------------End------------------------------------------
    });
// -----------------------------------End------------------------------------------
    
  }

}

