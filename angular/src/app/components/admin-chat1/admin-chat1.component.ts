import { Component, OnInit } from '@angular/core';
import { AdminService} from './../../services/admin.service';
import {Router} from '@angular/router';
@Component({
  selector: 'admin-chat1',
  templateUrl: './admin-chat1.component.html',
  styleUrls: ['./admin-chat1.component.css']
})
export class AdminChat1Component implements OnInit {
  value = Object;
// Pie
public pieChartLabels:string[] = ['Active', 'Block', 'Delete'];
// public pieChartData:number[];
public pieChartData:number[] = [0, 0, 0];
public pieChartType:string = 'pie';

// events
public chartClicked(e:any):void {
  console.log(e);
}

public chartHovered(e:any):void {
  console.log(e);
}
  constructor( private adminService : AdminService,
    private router: Router) {

     
     }

  ngOnInit() {
    this.refresh();

  }
  refresh(){
   
    this.adminService.getchart1().subscribe(data=>{
      console.log(data);
    //this.value = data;
    this.pieChartData = [data.activeCount,data.blockCount,data.deleteCount];
  //  console.log(data);
  });
      
  }

}
