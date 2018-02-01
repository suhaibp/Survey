import { Component, OnInit } from '@angular/core';
import { AdminService} from './../../services/admin.service';
import {Router,ActivatedRoute,Params} from '@angular/router';

@Component({
  selector: 'admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {
  viewComp : string='All';
  title : any;
  constructor(private adminService : AdminService, private routes: Router, private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
// ---------------------------------Start-------------------------------------------
// Function      : get logged user details
// Params        : 
// Returns       : user details
// Author        : Rinsha
// Date          : 16-1-2018
// Last Modified : 16-1-2018, Rinsha
// Desc          :
this.adminService.getLoggedUSerDetails().subscribe(info =>{
  if(info == null || info == ''){
    this.routes.navigate(['/admin-login']); 
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
    this.routes.navigate(['/dashboard']);
  }
});
// ---------------------------------End-------------------------------------------
    console.log(this.viewComp);
    this._activatedRoute.params.subscribe((params: Params) => {
      this.viewComp = (params['id'] == 'block_request') ? 'Request': 'All';
      
    });

  }
updateView(page){
    this.viewComp = page;
    this.title = page + ' Users List';

  }

}
