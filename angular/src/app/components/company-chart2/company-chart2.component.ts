import { Component, OnInit,ViewChild, OnChanges} from '@angular/core';
// import * as d3 from 'd3-selection';
// import * as d3Scale from 'd3-scale';
// import * as d3Array from 'd3-array';
// import * as d3Axis from 'd3-axis';
// import * as d3Shape from 'd3-shape';
import { CompanyService } from './../../services/company.service';
import { CanActivate,ActivatedRoute,Router } from '@angular/router';
import { Config } from './../../config/config';
import * as socketIo from 'socket.io-client';
import {MatTableDataSource,MatPaginator, MatSort} from '@angular/material';

declare var $:any;
declare var d3: any;

@Component({
  selector: 'company-chart2',
  templateUrl: './company-chart2.component.html',
  styleUrls: ['./company-chart2.component.css'],
  inputs:['surveyid']
})
// ---------------------------------Start-------------------------------------------
// Function      : Admin dashboard
// Params        : 
// Returns       : 
// Author        : sudha
// Date          : 09-01-2018 
// Last Modified : 11-01-2018
// Desc          : company vs survey
export class CompanyChart2Component implements OnChanges {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns = ['slno','email','date_time', 'answer'];
  dataSource: MatTableDataSource<any>;
  surveyQuestion: any;
  title = 'Questions vs Answers';
  socket: any;
  // subtitle = 'Bar Chart';
  public barchart: count[] = [];
  widthb: number;
  heightb: number;
  marginb = { top: 20, right: 20, bottom: 30, left: 40 };

  x: any;
  y: any;
  svg1: any;
  g: any;
  survey: any;
  margin = { top: 80, right: 20, bottom: 30, left: 50 };
  width: number;
  height: number;
  radius: number;

  arc: any;
  answer_type : any;
  labelArc: any;
  pie: any;
  color: any;
  svg: any;
  quest: any;
  sId: any;
  piechart = [];
  surveyid:any;
  undefnd = false;
  constructor(public companyService: CompanyService,
    router: Router, config: Config) {
    this.socket = socketIo(config.siteUrl);
    this.width = 400 - this.margin.left - this.margin.right;
    this.height = 500 - this.margin.top - this.margin.bottom;
    this.radius = Math.min(this.width, this.height) / 2;
  }

  chart:any;
  drawBar(){
    // var mydata = 
    // [
    //   {
    //     "State":"Alaska",
    //     "Population":735132
    //   },
    //   {
    //     "State":"Arizona",
    //     "Population":6626624
    //   }
    // ]
    // d3.select("#pieChart2").selectAll("svg").remove();
    d3.select("#bchart").selectAll("svg").remove();
    var mydata = this.barchart;
    var dataMax = d3.max(mydata, function(d) {return d.count});
    
    var margin = { top: 15, right: 30, bottom: 85, left:45 }
    
    var width = 800 - margin.left - margin.right, 
        height = 450 - margin.top - margin.bottom,
        barWidth = 10;
    var tempColor;  //for mouseover effect
    
    var yScale = d3.scale.linear()
          .domain([0, dataMax])
          .range([0, height]);
    var xScale = d3.scale.ordinal()
          .domain(d3.range(0, mydata.length))
          .rangeBands([0, width],.2);
    
    var vGuideScale = d3.scale.linear()
          .domain([0, dataMax])  //guide numbering will be in the millions
          .range([height, 0]);
    var vAxis = d3.svg.axis()
          .scale(vGuideScale)
          .orient('left')
          .ticks(10);
    
    var hAxis = d3.svg.axis()
          .scale(xScale)
          .orient('bottom')
    
    var tooltip = d3.select('body').append('div')
          .style('position', 'absolute')
          .style('padding', '0 10px')
          .style('background', '#333')
          .style('opacity', '.7')
          .style('color', '#fff')
          .style('border-radius', '3px')
    
    ////CHART////
    this.chart = d3.select('#bchart').append('svg')
        .style('background', '#fff')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', 'translate('+ margin.left +', '+ margin.top +')');
        // chart.exit().remove()
    var bars = this.chart.selectAll('rect')
        .data(mydata).enter()
        .append('rect')
        // .style('fill', '#3EAE9A')
        .attr('width', xScale.rangeBand())
        .attr('x', function(d,i) { return xScale(i) })
        .attr('height', 0) 
        .attr('y', height) 
        .attr('class', 'barhvr')
        ////Mouseover effect
        .on('mouseover', function(d) {
          tempColor = this.style.fill;
          d3.select(this)
            // .attr('fill', '#0F7D80 !important')
            // .attr('opacity', .9)
            .attr('cursor', 'pointer')
          tooltip.html(d.company)
            .style('left', (d3.event.pageX +10) + 'px')
            .style('top', (d3.event.pageY -20) + 'px')
          tooltip
            .style('opacity', .9)
        })
        .on('mouseout', function(d) {
          d3.select(this)
            // .attr('fill', tempColor)
            // .attr('opacity', 1)
          tooltip.style('opacity', 0)
            .style('left', '0px')
            .style('top', '0px')
        })
          // .on("click", this.mouseclick)  
      .on('click', (d, i) => {
            // this.svg.remove();
            this.piechart = []
            this.quest[i].ans.forEach((val) => {
              // console.log("****************");
              
              // console.log(this.quest[i]);
              // console.log("****************");

            if (val.count != 0) {
                this.piechart.push({ name: val.value, percent: val.count,answeredUser:val.answeredUser, ans_type : this.quest[i].ans_type });
            }
        });
        this.setgraph();
      });
        
    var vGuide = d3.select('svg').append('g')
        vAxis(vGuide); 
        vGuide.attr('transform', 'translate('+ margin.left +','+ margin.top +')')
        vGuide.selectAll('path')
          .style({fill: 'none', stroke: '#000'})
        vGuide.selectAll('line')
          .style({stroke: '#000'})
        vGuide.selectAll('text')
          .attr('font-size', '.8em')
    
    var hGuide = d3.select('svg').append('g')
        hAxis(hGuide);
        hGuide.attr('transform', 'translate('+ margin.left +','+ (height+margin.top) +')')
        hGuide.selectAll('path')
          .style({fill: 'none', stroke: '#000'})
        hGuide.selectAll('line')
          .style({stroke: '#000'})
        hGuide.selectAll('text')
          .attr('transform', 'translate(12,5) rotate(55)')
          .attr('font-size', '12px')
          .style('text-anchor', 'start')
          .text(function(d) {
            return mydata[d].ind;
          })
    
        //Label on left of Y axis
        d3.select('svg').append('text')
          .text('Attended users')
          .style('text-anchor', 'middle')
          .style('font-weight', 'bold')
          .attr('transform', 'translate(12,'+ ((height+margin.top+margin.bottom)*.45) +') rotate(-90)')
          .attr('font-size', '12px').attr('letter-spacing',"4")
          
        //chart animation
        bars.transition()
          .attr('height', function(d){
            return yScale(d.count);
          })
          .attr('y', function(d){
            return height - yScale(d.count);
          })
          .delay(function(d,i) {
            return i*10
          })
          .duration(800)
          .ease('cubic-out') 
          
        // d3.select('#bchart').append('div').append('p')
        //   .html('* Data from 2013')
        //   .style('font-size', '.6em')
  }
  refresh() {
    // d3.select("#br-1").remove();
    // console.log("yasir");
    // this.svg1.remove()
    
    this.getAllsurvey();
    this.companyService.getSurveyQuestions(this.surveyid).subscribe(data => {
      // this.surveyQuestion = data;
      this.quest = data;
      // console.log(data + " data");
      this.barchart = [];

      data.forEach((element,index) => {
        let i = index+1
        this.barchart.push({ company: element.question, count: element.totalCount, id: element.id, surveyid: this.sId, ind:"Q"+i});

      });

      // this.initSvg1();
      // this.initAxis();
      // this.drawAxis();
      // this.drawBars();
      if(this.barchart.length > 0){
    this.drawBar()
    
      }
      console.log(this.barchart);
    });

  }

  getAllsurvey() {
    this.companyService.getAllsurveyDashboard().subscribe(data => {
      this.survey = data;
      // console.log(this.survey);
      this.sId = data[0]._id;
      // console.log(this.sId);
    });
  }



/*_____________________________NEW PIE____________________________*/
setgraph(){
  var dataset = this.piechart;
  d3.select("#pieChart2").selectAll("svg").remove();
  
  if(this.piechart.length != 0){
  // console.log("this.Stats");
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
  .value(function(d){return d.percent})
  .sort(null)
  .padAngle(.03);
 
var w=250,h=250;
 
var outerRadius=w/2;
var innerRadius=w/3;
 
var color = d3.scale.category10();
 
var arc=d3.svg.arc()
  .outerRadius(outerRadius)
  .innerRadius(innerRadius);
 
var svg2=d3.select("#pieChart2")
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
var defs = svg2.append("defs");

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

var tempColor;
var path=svg2.selectAll('path')
  .data(pie(dataset))
  .enter()
  .append('path')
  .attr('cursor', 'pointer')  
  .attr('class', 'piehvr')  
  .attr({
      d:arc,
      fill:function(d,i){
          return color(d.data.name);
      }
  })
  .on('click', (dataset)=>{
    this.answer_type = dataset.data.ans_type;
        if(this.answer_type == "Descriptive"){
          this.displayedColumns = ['slno','email','date_time', 'answer'];
        }
        if(this.answer_type != "Descriptive"){
          this.displayedColumns = ['slno','email','date_time'];
        }
        this.dataSource = new MatTableDataSource(dataset.data.answeredUser);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
         $('#answeredUsers').modal('show'); 
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
    var text=svg2.selectAll('text')
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
            return d.data.percent;
        })
        .style({
            fill:'#fff',
            'font-size':'12px'
        });
 
    var legendRectSize=15;
    var legendSpacing=3;
    var legendHeight=legendRectSize+legendSpacing;
 
 
    var legend=svg2.selectAll('.legend')
        .data(color.domain())
        .enter()
        .append('g')
        .attr({
            class:'legend',
            transform:function(d,i){
                //Just a calculation for x & y position
                return 'translate(-35,' + ((i*legendHeight)-30) + ')';
            }
        });
    legend.append('rect')
        .attr({
            width:legendRectSize,
            height:legendRectSize,
            rx:15,
            ry:20
        })
        .style({
            fill:color,
            stroke:color
        });
 
    legend.append('text')
        .attr({
            x:22,
            y:10
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




  pierefresh() {

    this.companyService.getSurveyQuestions(this.surveyid).subscribe(data => {
     
      // this.initSvg();
      // this.drawPie();
    });

  }


  
  ngOnChanges() {
    // console.log(this.surveyid);
    if(this.surveyid!= undefined){
      // console.log("______"+this.surveyid)
    d3.selectAll("svg > *").remove();
    // this.svg.remove();
  //  console.log("xxxxxx");
    //if(this.surveyid != 'all'){
        this.refresh();
      // this.pierefresh();
    //}

    this.socket.on('new survey created', (data) => {

      this.refresh();

    });
    //piechat
    
    // this.initSvg();
    // this.drawPie();

    // this.svg.remove();
  }
  else{
    this.undefnd = true;
  }
  }
 

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  initSvg1() {
    // this.svg1 = d3.select("#br-1");
    // this.widthb = +this.svg1.attr("width") - this.marginb.left - this.marginb.right;
    // this.heightb = +this.svg1.attr("height") - this.marginb.top - this.marginb.bottom;
    // this.g = this.svg1.append("g")
    //   .attr("transform", "translate(" + this.marginb.left + "," + this.marginb.top + ")");
  }

  initAxis() {
    // this.x = d3Scale.scaleBand().rangeRound([0, this.widthb]).padding(0.1);
    // this.y = d3Scale.scaleLinear().rangeRound([this.heightb, 0]);
    // this.x.domain(this.barchart.map((d) => d.company));
    // this.y.domain([0, d3Array.max(this.barchart, (d) => d.count)]);
  }

  drawAxis() {
    // this.g.append("g")
    //   .attr("class", "axis axis--x")
    //   .attr("transform", "translate(0," + this.heightb + ")")
    //   .call(d3Axis.axisBottom(this.x));
    // this.g.append("g")
    //   .attr("class", "axis axis--y")
    //   .call(d3Axis.axisLeft(this.y))
    //   .append("text")
    //   .attr("class", "axis-title")
    //   .attr("transform", "rotate(-90)")
    //   .attr("y", 6)
    //   .attr("dy", "0.71em")
    //   .attr("text-anchor", "end")
    //   .text("count");
  }

  drawBars() {
    // this.g.selectAll(".bar")
    //   .data(this.barchart)
    //   .enter().append("rect")
    //   .attr("class", "bar")
    //   .attr("x", (d) => this.x(d.company))
    //   .attr("y", (d) => this.y(d.count))
    //   .attr("data-id", (d) => this.y(d.id))
    //   .attr("width", this.x.bandwidth())
    //   .attr("height", (d) => this.heightb - this.y(d.count))
    //   // .on("click", this.mouseclick)  
    //   .on('click', (d, i) => {
    //         this.svg.remove();
    //         this.piechart = []
    //         this.quest[i].ans.forEach((val) => {
    //           // console.log(this.quest[i]);
    //         if (val.count != 0) {
    //             this.piechart.push({ status: val.value, count: val.count,answeredUser:val.answeredUser, ans_type : this.quest[i].ans_type });
    //         }
    //     });
    //     this.initSvg();
    //     this.drawPie();
    //     console.log(i);
    //     // this.companyService.getSingleQA(d).subscribe(data1=>{
    //     //   console.log(data1);
    //     // });
    //   })
  }

  //piechart
  initSvg() {
    // this.color = d3Scale.scaleOrdinal()
    //   .range(["#623470", "#22A984", "#0189A9", '#97AC38', '#623470']);
    // this.arc = d3Shape.arc()
    //   .outerRadius(this.radius - 10)
    //   .innerRadius(60);
    // this.labelArc = d3Shape.arc()
    //   .outerRadius(this.radius - 70)
    //   .innerRadius(this.radius - 70);
    // this.pie = d3Shape.pie()
    //   .sort(null)
    //   .value((d: any) => d.count);
    // this.svg = d3.select("#sd")
    //   .append("g")
    //   .attr("transform", "translate(" + this.width / 2 + "," + this.height / 2 + ")");

  }

  drawPie() {
    // let g = this.svg.selectAll(".arc")
    //   .data(this.pie(this.piechart))
    //   .enter().append("g")
    //   .attr("class", "arc");
    // g.append("path").attr("d", this.arc) 
    //   .style("fill", (d: any) => this.color(d.data.status))
    //   .on('click', (d,i) => {
    //     // console.log(d.data.ans_type);
    //     this.answer_type = d.data.ans_type;
    //     if(this.answer_type == "Descriptive"){
    //       this.displayedColumns = ['slno','email','date_time', 'answer'];
    //     }
    //     if(this.answer_type != "Descriptive"){
    //       this.displayedColumns = ['slno','email','date_time'];
    //     }
    //     this.dataSource = new MatTableDataSource(d.data.answeredUser);
    //     this.dataSource.paginator = this.paginator;
    //     this.dataSource.sort = this.sort;
    //      $('#answeredUsers').modal('show'); 
    //   });
    // g.append("text").attr("transform", (d: any) => "translate(" + this.labelArc.centroid(d) + ")")
    //   .attr("dy", ".35em")
    //   .text((d: any) => d.data.status)
      
    }

 

}
export interface count {
  ind: string,
  company: string,
  count: number,
  id: string,
  surveyid: string
}

// -----------------------------------End------------------------------------------

