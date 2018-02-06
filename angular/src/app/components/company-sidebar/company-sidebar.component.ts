import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-sidebar',
  templateUrl: './company-sidebar.component.html',
  styleUrls: ['./company-sidebar.component.css'],
})
export class CompanySidebarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    //let currentUrl = this.router.url;
    // console.log(this.router.url)
  }

}
