import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {
  viewComp : string='All';
  title : any;
  constructor() { }

  ngOnInit() {
    console.log(this.viewComp);
  }
updateView(page){
    this.viewComp = page;
    this.title = page + ' Users List';

  }

}
