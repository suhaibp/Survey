import { Component, OnInit } from '@angular/core';
// import * as d3 from 'd3-selection';
// import * as d3Scale from 'd3-scale';
// import * as d3Shape from 'd3-shape';
import { AdminService} from './../../services/admin.service';
import {Router} from '@angular/router';
import { Config } from './../../config/config';
import * as socketIo from 'socket.io-client';
declare var d3: any;
declare var $:any;
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

  title: string = 'Company vs Status';
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
   graphData = true;
  
             
           
  constructor(private adminService : AdminService,
    private routes: Router,private config: Config) {
    this.socket = socketIo(config.siteUrl);
    this.width = 900 - this.margin.left - this.margin.right;
    this.height = 500 - this.margin.top - this.margin.bottom;
    this.radius = Math.min(this.width, this.height) / 2;
  }
  



    /*__________________________________NEW PIE___________________________________*/

    setgraph(){
      var dataset = this.piechart;
      d3.select("#chart").select('svg').remove();
      if(this.piechart.length != 0){
      console.log("this.Stats");
      /*_______________________________________________________________________________________*/
    
    //   var dataset = [
    //     { name: 'Data', percent: 100 },
    //     { name: 'Chrome', percent: 32.51 },
    //     { name: 'Safari', percent: 23.68 },
    //     { name: 'Opera', percent: 50.71 },
    //     { name: 'Firefox', percent: 8.71 },
    //     { name: 'Others', percent: 36.01 }
    // ];
     
    var pie=d3.layout.pie()
      .value(function(d){return d.count})
      .sort(null)
      .padAngle(.03);
     
    var w=350,h=350;
     
    var outerRadius=w/2;
    var innerRadius=w/3;
     
    var color = d3.scale.category10();
     
    var arc=d3.svg.arc()
      .outerRadius(outerRadius)
      .innerRadius(innerRadius);
     
    var svg=d3.select("#chart")
      .append("svg")
      .attr({
          width:w,
          height:h,
          class:'shadow'
      })
      //.style("filter", "url(#drop-shadow)")
      .append('g')
      .attr({
          transform:'translate('+w/2+','+h/2+')'
      });
    
    // filters go in defs element
    var defs = svg.append("defs");
    
    // create filter with id #drop-shadow
    // height=130% so that the shadow is not clipped
    var filter = defs.append("filter")
        .attr("id", "drop-shadow")
        .attr("height", "130%");
    
    // SourceAlpha refers to opacity of graphic that this filter will be applied to
    // convolve that with a Gaussian with standard deviation 3 and store result
    // in blur
    filter.append("feGaussianBlur")
        .attr("in", "SourceAlpha")
        .attr("stdDeviation", 15)
        .attr("result", "blur");
    
    // translate output of Gaussian blur to the right and downwards with 2px
    // store result in offsetBlur
    filter.append("feOffset")
        .attr("in", "blur")
        .attr("dx",100)
        .attr("dy", 100)
        .attr("result", "offsetBlur");
    
    // overlay original SourceGraphic over translated blurred opacity by using
    // feMerge filter. Order of specifying inputs is important!
    var feMerge = filter.append("feMerge");
    
    feMerge.append("feMergeNode")
        .attr("in", "offsetBlur")
    feMerge.append("feMergeNode")
        .attr("in", "SourceGraphic");
    
    
    var path=svg.selectAll('path')
      .data(pie(dataset))
      .enter()
      .append('path')
      .attr({
          d:arc,
          fill:function(d,i){
              return color(d.data.status);
          }
      });
     
    path.transition()
      .duration(1000)
      .attrTween('d', function(d) {
          var interpolate = d3.interpolate({startAngle: 0, endAngle: 0}, d);
          return function(t) {
              return arc(interpolate(t));
          };
      });
     
     
    var restOfTheData=function(){
        var text=svg.selectAll('text')
            .data(pie(dataset))
            .enter()
            .append("text")
            .transition()
            .duration(500)
            .attr("transform", function (d) {
                return "translate(" + arc.centroid(d) + ")";
            })
            .attr("dy", ".4em")
            .attr("text-anchor", "middle")
            .text(function(d){
                return d.data.count;
            })
            .style({
                fill:'#fff',
                'font-size':'12px'
            });
     
        var legendRectSize=20;
        var legendSpacing=7;
        var legendHeight=legendRectSize+legendSpacing;
     
     
        var legend=svg.selectAll('.legend')
            .data(color.domain())
            .enter()
            .append('g')
            .attr({
                class:'legend',
                transform:function(d,i){
                    //Just a calculation for x & y position
                    return 'translate(-35,' + ((i*legendHeight)-65) + ')';
                }
            });
        legend.append('rect')
            .attr({
                width:legendRectSize,
                height:legendRectSize,
                rx:20,
                ry:20
            })
            .style({
                fill:color,
                stroke:color
            });
     
        legend.append('text')
            .attr({
                x:30,
                y:15
            })
            .text(function(d){
                return d;
            }).style({
                fill:'#929DAF',
                'font-size':'14px'
            });
    };
     
    setTimeout(restOfTheData,2000);
      
         
      }
      
    
    }
    /*__________________________________NEW PIE END___________________________________*/



  refresh(){
    
     this.adminService.getchart1().subscribe(data=>{
      
       
      //  if(data.length <= 0){
      // }
    
       this.piechart= [];
      data.forEach(elm =>{
        // console.log(elm);
        if (elm.Count != 0){
        // this.graphData = false;
        
          this.piechart.push({status: elm.label, count:elm.Count});
        }
      });
      
      if (this.piechart.length > 0){
        
        this.graphData = true;
        this.setgraph();
        
      }else{
        this.graphData = false;
      }
    // console.log(this.piechart);
     
  });
  
   }
  // refresh(){
  //   this.graphData = true;
  // }
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
    console.log(this.graphData)
    
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
        if(this.graphData == true){
          this.initSvg();
          // this.drawPie();

        }
      
     });
    // this.initSvg();
    // this.drawPie();
  }

  private initSvg() {
  //   this.color = d3Scale.scaleOrdinal()
  //                       .range(["#623470", "#22A984", "#0189A9", '#97AC38', '#623470']);
  //   this.arc = d3Shape.arc()
  //                     .outerRadius(this.radius - 10)
  //                     .innerRadius(0);
  //   this.labelArc = d3Shape.arc()
  //                          .outerRadius(this.radius - 40)
  //                          .innerRadius(this.radius - 40);
  //   this.pie = d3Shape.pie()
  //                     .sort(null)
  //                     .value((d: any) => d.count);
  //   this.svg = d3.select("#sd")
  //                .append("g")
  //                .attr("transform", "translate(" + this.width / 2 + "," + this.height / 2 + ")");
  // }

  // private drawPie() {
  //   let g = this.svg.selectAll(".arc")
  //                   .data(this.pie(this.piechart))
  //                   .enter().append("g")
  //                   .attr("class", "arc");
  //   g.append("path").attr("d", this.arc)
  //                   .style("fill", (d: any) => this.color(d.data.status) );
  //   g.append("text").attr("transform", (d: any) => "translate(" + this.labelArc.centroid(d) + ")")
  //                   .attr("dy", ".35em")
  //                   .text((d: any) => d.data.status);
  }

}
// -----------------------------------End------------------------------------------