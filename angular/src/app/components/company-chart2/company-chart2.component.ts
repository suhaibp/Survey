import { Component, OnInit,ViewChild, OnChanges} from '@angular/core';
import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Array from 'd3-array';
import * as d3Axis from 'd3-axis';
import * as d3Shape from 'd3-shape';
import { CompanyService } from './../../services/company.service';
import { CanActivate,ActivatedRoute,Router } from '@angular/router';
import { Config } from './../../config/config';
import * as socketIo from 'socket.io-client';
import {MatTableDataSource,MatPaginator, MatSort} from '@angular/material';

declare var $:any;
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

  displayedColumns = ['slno','email','date_time'];
  dataSource: MatTableDataSource<any>;
  surveyQuestion: any;
  title = 'Questions Vs Answers';
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
  labelArc: any;
  pie: any;
  color: any;
  svg: any;
  quest: any;
  sId: any;
  piechart = [];
  surveyid:any;
  constructor(public companyService: CompanyService,
    router: Router, config: Config) {
    this.socket = socketIo(config.siteUrl);
    this.width = 400 - this.margin.left - this.margin.right;
    this.height = 500 - this.margin.top - this.margin.bottom;
    this.radius = Math.min(this.width, this.height) / 2;
  }
  refresh() {
    // d3.select("#br-1").remove();
    console.log("yasir");
    // this.svg1.remove()
    
    this.getAllsurvey();
    this.companyService.getSurveyQuestions(this.surveyid).subscribe(data => {
      // this.surveyQuestion = data;
      this.quest = data;
      console.log(data + " data");
      this.barchart = [];

      data.forEach(element => {

        this.barchart.push({ company: element.question, count: element.totalCount, id: element.id, surveyid: this.sId });

      });

      this.initSvg1();
      this.initAxis();
      this.drawAxis();
      this.drawBars();
      // console.log(data);
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

  pierefresh() {

    this.companyService.getSurveyQuestions(this.surveyid).subscribe(data => {
     
      this.initSvg();
      this.drawPie();
    });

  }


  
  ngOnChanges() {
    if(this.surveyid!= undefined){
      console.log("______"+this.surveyid)
    d3.selectAll("svg > *").remove();
    // this.svg.remove();
   console.log("xxxxxx");
    //if(this.surveyid != 'all'){
      this.refresh();
      this.pierefresh();
    //}


    this.socket.on('new survey created', (data) => {

      this.refresh();

    });
    //piechat
    
    // this.initSvg();
    // this.drawPie();

    // this.svg.remove();
  }

  }
 

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  initSvg1() {
    this.svg1 = d3.select("#br-1");
    this.widthb = +this.svg1.attr("width") - this.marginb.left - this.marginb.right;
    this.heightb = +this.svg1.attr("height") - this.marginb.top - this.marginb.bottom;
    this.g = this.svg1.append("g")
      .attr("transform", "translate(" + this.marginb.left + "," + this.marginb.top + ")");
  }

  initAxis() {
    this.x = d3Scale.scaleBand().rangeRound([0, this.widthb]).padding(0.1);
    this.y = d3Scale.scaleLinear().rangeRound([this.heightb, 0]);
    this.x.domain(this.barchart.map((d) => d.company));
    this.y.domain([0, d3Array.max(this.barchart, (d) => d.count)]);
  }

  drawAxis() {
    this.g.append("g")
      .attr("class", "axis axis--x")
      .attr("transform", "translate(0," + this.heightb + ")")
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

  drawBars() {
    this.g.selectAll(".bar")
      .data(this.barchart)
      .enter().append("rect")
      .attr("class", "bar")
      .attr("x", (d) => this.x(d.company))
      .attr("y", (d) => this.y(d.count))
      .attr("data-id", (d) => this.y(d.id))
      .attr("width", this.x.bandwidth())
      .attr("height", (d) => this.heightb - this.y(d.count))
      // .on("click", this.mouseclick)  
      .on('click', (d, i) => {
            this.svg.remove();
            this.piechart = []
            this.quest[i].ans.forEach((val) => {
            if (val.count != 0) {
                this.piechart.push({ status: val.value, count: val.count,answeredUser:val.answeredUser });
            }
        });
        this.initSvg();
        this.drawPie();
        console.log(i);
        // this.companyService.getSingleQA(d).subscribe(data1=>{
        //   console.log(data1);
        // });
      })
  }

  //piechart
  initSvg() {
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

  drawPie() {
    let g = this.svg.selectAll(".arc")
      .data(this.pie(this.piechart))
      .enter().append("g")
      .attr("class", "arc");
    g.append("path").attr("d", this.arc)
      .style("fill", (d: any) => this.color(d.data.status))
      .on('click', (d,i) => {
        this.dataSource = new MatTableDataSource(d.data.answeredUser);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
         $('#answeredUsers').modal('show'); 
      });
    g.append("text").attr("transform", (d: any) => "translate(" + this.labelArc.centroid(d) + ")")
      .attr("dy", ".35em")
      .text((d: any) => d.data.status)
      
    }

 

}
export interface count {
  company: string,
  count: number,
  id: string,
  surveyid: string
}

// -----------------------------------End------------------------------------------

