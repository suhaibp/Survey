import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Array from 'd3-array';
import * as d3Axis from 'd3-axis';
import { AdminService} from './../../services/admin.service';
import {Router} from '@angular/router';
import { Config } from './../../config/config';
import * as socketIo from 'socket.io-client';
@Component({
  selector: 'admin-chatd3',
  templateUrl: './admin-chatd3.component.html',
  styleUrls: ['./admin-chatd3.component.css']
})
// ---------------------------------Start-------------------------------------------
// Function      : Admin dashboard
// Params        : 
// Returns       : 
// Author        : sudha
// Date          : 09-01-2018 
// Last Modified : 11-01-2018
// Desc          : company vs survey

export class AdminChatd3Component implements OnInit {
 

  title = 'Company Vs Survey';
  private socket: any;
  // subtitle = 'Bar Chart';
  public barchart: count[] =[ ] ;
  private width: number;
  private height: number;
  private margin = {top: 20, right: 20, bottom: 30, left: 40};

  private x: any;
  private y: any;
  private svg: any;
  private g: any;
  constructor( private adminService : AdminService,
    private routes: Router,private config: Config ) {
      this.socket = socketIo(config.siteUrl);
    }
  refresh(){
    
    
     this.adminService.getchartbar().subscribe(data=>{
      
    
    this.barchart= [];
    data.forEach(elm =>{
      console.log(elm);
      if (elm.count != 0){
        this.barchart.push({company: elm._id, count:(elm.count)});
        this.initSvg();
        this.initAxis();
        this.drawAxis();
        this.drawBars();
      }
    });
    
  
   //  console.log(data);
   });
       
   }
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
    this.refresh();
    this.socket.on('new survey created', (data) => {
      
        this.refresh();
       
      });
    // this.initSvg();
    // this.initAxis();
    // this.drawAxis();
    // this.drawBars();
  }

  private initSvg() {
    this.svg = d3.select("svg");
    this.width = +this.svg.attr("width") - this.margin.left - this.margin.right;
    this.height = +this.svg.attr("height") - this.margin.top - this.margin.bottom;
    this.g = this.svg.append("g")
                     .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");
  }

  private initAxis() {
    this.x = d3Scale.scaleBand().rangeRound([0, this.width]).padding(0.1);
    this.y = d3Scale.scaleLinear().rangeRound([this.height, 0]);
    this.x.domain(this.barchart.map((d) => d.company));
    this.y.domain([0, d3Array.max(this.barchart, (d) => d.count)]);
  }

  private drawAxis() {
    this.g.append("g")
          .attr("class", "axis axis--x")
          .attr("transform", "translate(0," + this.height + ")")
          .call(d3Axis.axisBottom(this.x));
    this.g.append("g")
          .attr("class", "axis axis--y")
          .call(d3Axis.axisLeft(this.y))
          .append("text")
          .attr("class", "axis-title")
          .attr("transform", "rotate(-90)")
          .attr("y", 6)
          .attr("dy", "0.71em")
          .attr("text-anchor", "end")
          .text("count");
  }

  private drawBars() {
    this.g.selectAll(".bar")
          .data(this.barchart)
          .enter().append("rect")
          .attr("class", "bar")
          .attr("x", (d) => this.x(d.company) )
          .attr("y", (d) => this.y(d.count) )
          .attr("width", this.x.bandwidth())
          .attr("height", (d) => this.height - this.y(d.count) );
  }
}
export interface count {
  company: string,
  count: number
}

// -----------------------------------End------------------------------------------