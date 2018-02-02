import { Component, OnInit } from '@angular/core';
import { CompanyService } from './../../services/company.service';

@Component({
  selector: 'app-home-nav',
  templateUrl: './home-nav.component.html',
  styleUrls: ['./home-nav.component.css']
})
export class HomeNavComponent implements OnInit {
  plans : any;
  sliced_array : any;
  constructor(private companyService: CompanyService,) { }

  ngOnInit() {
    // ---------------------------------Start-------------------------------------------
    // Function      : Get All  plans
    // Params        : 
    // Returns       : All plans
    // Author        : Rinsha
    // Date          : 28-12-2017
    // Last Modified : 28-12-2017, Rinsha
    // Desc          :  
    this.companyService.getAllPlans().subscribe(res => {
      // console.log(res);
      this.plans = [];
      res.forEach(element => {
        // if(element.is_default_plan == false){
          this.plans.push(element);
          this.sliced_array = this.plans.slice(0, 4);
        // }
      });
      // console.log(this.plans);
      // console.log(this.sliced_array)
    });
    // ---------------------------------End-------------------------------------------
  }

}
