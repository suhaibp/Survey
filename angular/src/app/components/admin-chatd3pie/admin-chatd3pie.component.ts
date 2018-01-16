import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Shape from 'd3-shape';
import { AdminService} from './../../services/admin.service';
import {Router} from '@angular/router';
import { Config } from './../../config/config';
import * as socketIo from 'socket.io-client';
@Component({
  selector: 'admin-chatd3pie',
  templateUrl: './admin-chatd3pie.component.html',
  styleUrls: ['./admin-chatd3pie.component.css']
})
// ---------------------------------Start-------------------------------------------
// Function      : Admin dashboard
// Params        : 
// Returns       : 
// Author        : sudha
// Date          : 09-01-2018 
// Last Modified : 11-01-2018
// Desc          : company vs status

export class AdminChatd3pieComponent implements OnInit {

  title: string = 'Company Vs Status';
 // subtitle: string = 'Pie Chart';
 private socket: any;
 
 

  private margin = {top: 80, right: 20, bottom: 30, left: 50};
  private width: number;
  private height: number;
  private radius: number;

  private arc: any;
  private labelArc: any;
  private pie: any;
  private color: any;
  private svg: any;
  piechart = [];
             
           
  constructor(private adminService : AdminService,
    private routes: Router,private config: Config) {
    this.socket = socketIo(config.siteUrl);
    this.width = 900 - this.margin.left - this.margin.right;
    this.height = 500 - this.margin.top - this.margin.bottom;
    this.radius = Math.min(this.width, this.height) / 2;
  }
  
  refresh(){
    
     this.adminService.getchart1().subscribe(data=>{
       console.log(data);
       
       this.piechart= [];
      data.forEach(elm =>{
        console.log(elm);
        if (elm.Count != 0){
          this.piechart.push({status: elm.label, count:elm.Count});
        }
      });
    
    console.log(this.piechart);
    this.initSvg();
    this.drawPie();  
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
    this.socket.on('Not Verified', (data) => {
     
       this.refresh();
      
     });
     this.socket.on('Trail', (data) => {
      
        this.refresh();
      
     });
     this.socket.on('Subscribed', (data) => {
      
        this.refresh();
      
     });
     this.socket.on('Expired', (data) => {
      
        this.refresh();
      
     });
    // this.initSvg();
    // this.drawPie();
  }

  private initSvg() {
    this.color = d3Scale.scaleOrdinal()
                        .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);
    this.arc = d3Shape.arc()
                      .outerRadius(this.radius - 10)
                      .innerRadius(0);
    this.labelArc = d3Shape.arc()
                           .outerRadius(this.radius - 40)
                           .innerRadius(this.radius - 40);
    this.pie = d3Shape.pie()
                      .sort(null)
                      .value((d: any) => d.count);
    this.svg = d3.select("#sd")
                 .append("g")
                 .attr("transform", "translate(" + this.width / 2 + "," + this.height / 2 + ")");
  }

  private drawPie() {
    let g = this.svg.selectAll(".arc")
                    .data(this.pie(this.piechart))
                    .enter().append("g")
                    .attr("class", "arc");
    g.append("path").attr("d", this.arc)
                    .style("fill", (d: any) => this.color(d.data.status) );
    g.append("text").attr("transform", (d: any) => "translate(" + this.labelArc.centroid(d) + ")")
                    .attr("dy", ".35em")
                    .text((d: any) => d.data.status);
  }

}
// -----------------------------------End------------------------------------------