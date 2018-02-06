import { Component, OnInit, ViewChild } from '@angular/core';
// import { AgmCoreModule, MapsAPILoader } from '@agm/core';
import { CompanyService } from './../../services/company.service';
import { CanActivate, ActivatedRoute, Router } from '@angular/router';
import * as socketIo from 'socket.io-client';
import { Config } from './../../config/config';
// import * as d3 from 'd3-selection';
// import * as d3Scale from 'd3-scale';
// import * as d3Array from 'd3-array';
// import * as d3Axis from 'd3-axis';
// import * as d3Shape from 'd3-shape';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

declare var $: any;
declare var d3: any;


@Component({
  selector: 'app-company-dashboard',
  templateUrl: './company-dashboard.component.html',
  styleUrls: ['./company-dashboard.component.css']
})
export class CompanyDashboardComponent implements OnInit {
  lat: number = 51.678418;
  lng: number = 7.809007;
  private socket: any;
  locations = [];
  allSurveys: any;
  surveyId:any;
  //chart2 start
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns = ['slno', 'email', 'date_time'];
  dataSource: MatTableDataSource<any>;
  surveyQuestion: any;
  title = 'Questions vs Answers';
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
  //chart2 end
  private margin1 = {top: 20, right: 20, bottom: 30, left: 50};
  private width1: number;
  private height1: number;
  private radius1: number;

  private arc1: any;
  private labelArc1: any;
  private pie1: any;
  private color1: any;
  private svg2: any;

  sub: any;
  survey_id: any;
  list = {
    survey: ''
  }
  allSurvey: any;
  Stats = [];
  mail_response_count: number = 0;
  mail_viewed_count: number = 0;
  survey_completed_count: number = 0;
  invited_user_count: number = 0;
  mail_not_readed_count: number = 0;
  surveyList: any;
  noPositionAvailable= false;
  constructor(private _companyService: CompanyService,
    private routes: Router,
    private config: Config,
    private route: ActivatedRoute) {
    this.surveyId = 'all';
      
    this.socket = socketIo(config.socketURL);
    // this.socket = socketIo(config.siteUrl);
    this.width = 900 - this.margin.left - this.margin.right;
    this.height = 500 - this.margin.top - this.margin.bottom;
    this.radius = Math.min(this.width, this.height) / 2;
    this.width1 = 900 - this.margin1.left - this.margin1.right;
    this.height1 = 500 - this.margin1.top - this.margin1.bottom;
    this.radius1 = Math.min(this.width1, this.height1) / 2;

    this.route.params.subscribe(params => {
      if(params['id'] != ''){
        this.surveyId= params['id'];
      }
    });
    
  }

 

  ngOnInit() {
    this.route.params.subscribe(params => {
      if(params['id'] == '' || params['id'] == null){
        this.surveyId = 'all';
        // console.log(this.surveyId + "surveyid");
      }
    });
    // console.log('surveyId');
    // console.log(this.surveyId);
    // ---------------------------------Start-------------------------------------------
    // Function      : get logged company details
    // Params        : 
    // Returns       : company details
    // Author        : Rinsha
    // Date          : 16-1-2018
    // Last Modified : 16-1-2018, Rinsha
    // Desc          :
    this._companyService.getLoggedUSerDetails().subscribe(info => {
      if(info == null || info == ''){
        this.routes.navigate(['/clogin']); 
      }
      if (info.role == "admin") {
        this.routes.navigate(['/admin-dashboard']);
      }
      if (info.role == "user") {
        if (info.delete_status == true || info.block_status == true) {
          this.routes.navigate(['/404']);
        }
        this.routes.navigate(['/survey', info.surveyId]);
      }
      if (info.role == "company") {
        if (info.delete_status == true || info.block_status == true || info.cmp_status == "Not Verified") {
          this.routes.navigate(['/clogin']);
        }
        if (info.cmp_status == "Expired") {
          this.routes.navigate(['/expired']);
        }
        if (info.is_profile_completed == false) {
          this.routes.navigate(['/additnInfo', info._id]);
        }
      }
    });
    // ---------------------------------End-------------------------------------------
   
    // -----------------Pie Start-------------------
    this.loadData();
    this.socket.on('Mail Responsed', (data) => {
      this.loadData();
    });
    this.socket.on('Mail Viewed', (data) => {
      this.loadData();
    });
    this.socket.on('Survey Completed', (data) => {
      this.loadData();
    });
    this.socket.on('Invite Users', (data) => {
      this.loadData();
    });
    // -----------------Pie End-------------------

    this.getMapPositions();
    this.socket.on('closebid', (data) => {
      // console.log(data);
      this.getMapPositions();
    })

    //chart2
    // this.refresh();
    // this.socket.on('new survey created', (data) => {
    //   this.refresh();
    // });

    // this.pierefresh();
  }


  //  ---------------------------------Start-------------------------------------------
  // Function      : getTheme
  // Params        : 
  // Returns       : 
  // Author        : Manu Prasad
  // Date          : 1-1-2018
  // Last Modified : 1-1-2018, Manu Prasad 
  // Desc          : Get Theme details using id from parameter in router from database


  getMapPositions() {
    

    this._companyService.getPositions().subscribe(survey => {
      
      if(survey.length <=0){
        this.noPositionAvailable = true;
      }
      this.locations = survey;
      this.allSurveys = survey;

    });


  }
  //  ---------------------------------end-----------------------------------------------


  //  ---------------------------------Start-------------------------------------------
  // Function      : getTheme
  // Params        : 
  // Returns       : 
  // Author        : Manu Prasad
  // Date          : 1-1-2018
  // Last Modified : 1-1-2018, Manu Prasad 
  // Desc          : Get Theme details using id from parameter in router from database


  getMapPositionsforId() {
   // console.log("reee"+this.surveyId)
    if (this.surveyId == 'all' || typeof(this.surveyId)  == undefined || this.surveyId == null || this.surveyId == '') {
      this.getMapPositions();
  //    console.log("ff");
    }
    else {
      // console.log("poooooo"); 
      
      this._companyService.getSurveyforDash(this.surveyId).subscribe(survey => {
        // console.log(theme);
        this.locations = survey;
      });
    }



  }
  //  ---------------------------------end-----------------------------------------------

  ConvertString(value) {
    return parseFloat(value)
  }
  /*__________________________________NEW PIE___________________________________*/

  setgraph(){
    var dataset = this.Stats;

    if(this.Stats.length != 0){
    d3.select("#chart").selectAll("svg").remove();
      
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
   
  var w=500,h=500;
   
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
            return color(d.data.name);
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
              return d.data.percent;
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
  // -------------------Pie Start------------------
  private initSvgDia() {
    // this.color1 = d3Scale.scaleOrdinal()
    //   .range(["#623470", "#22A984", "#0189A9", '#97AC38', '#623470']);
    // this.arc1 = d3Shape.arc()
    //   .outerRadius(this.radius1 - 10)
    //   .innerRadius(60);
    // this.labelArc1 = d3Shape.arc()
    //   .outerRadius(this.radius1 - 90)
    //   .innerRadius(this.radius1 - 90);
    // this.pie1 = d3Shape.pie()
    //   .sort(null)
    //   .value((d: any) => d.count);
    // this.svg2 = d3.select("svg")
    //   .append("g")
    //   .attr("transform", "translate(" + this.width1 / 2 + "," + this.height1 / 2 + ")");
  }


   timeout = setTimeout(function() {
  }, 2000);

  private drawPieDia() {
    // let g = this.svg2.selectAll("#piedia")
    //   .data(this.pie1(this.Stats))
    //   .enter().append("g")
    //   .attr("class", "arc");
    // g.append("path").attr("d", this.arc1)
    //   .style("fill", (d: any) => this.color1(d.data.case));
    // g.append("text").attr("transform", (d: any) => "translate(" + this.labelArc1.centroid(d) + ")")
    //   .attr("dy", ".35em")
    //   .text((d: any) => d.data.case);
  }

  
  refreshDia() {
    // console.log("------------------------");
    // console.log(this.surveyId);
    // console.log("------------------------");
    d3.select("svg").remove();
    // var svg = d3.select(".svg-div").append("svg").attr("width", "960").attr("height", "500"),
    //   inner = svg.append("g");
    this.loadData();
  }

  loadData() {
    // ---------------------------------Start-------------------------------------------
    // Function      : get all Mail responsed users, mail viewed users, survey completed users
    // Params        : 
    // Returns       : count of mail responsed users, mail viewed users
    // Author        : Rinsha
    // Date          : 10-1-2018
    // Last Modified : 11-1-2018, Rinsha
    // Desc          : 
    var data = {};
    this.sub = this.route.params.subscribe(params => {
      this.survey_id = params.id;
    });
    if (this.survey_id) {
      data = { id: this.survey_id };
    }
    if (this.surveyId != '') {
      data = { id: this.surveyId };
    }
    if (this.surveyId == "all") {
      data = {};
    }
    this._companyService.getMailResponseCount(data).subscribe(res => {
      this.mail_response_count = res;
      this._companyService.getMailViewedCount(data).subscribe(res1 => {
        this.mail_viewed_count = res1;
        this._companyService.getSurveyCompletedCount(data).subscribe(res2 => {
          this.survey_completed_count = res2;
          this._companyService.getInvitedUserCount(data).subscribe(res3 => {
            this.invited_user_count = res3;
            this.mail_not_readed_count = this.invited_user_count - this.mail_viewed_count - this.mail_response_count - this.survey_completed_count;
            this.Stats = [];
            if (this.mail_viewed_count != 0) {
              this.Stats.push({ name: 'Mail Readed', percent: this.mail_viewed_count });
            }
            if (this.mail_not_readed_count != 0) {
              this.Stats.push({ name: 'Mail Not Readed', percent: this.mail_not_readed_count });
            }
            if (this.mail_response_count != 0) {
              this.Stats.push({ name: 'Mail Responsed', percent: this.mail_response_count });
            }
            if (this.survey_completed_count != 0) {
              this.Stats.push({ name: 'Survey Completed', percent: this.survey_completed_count });
            }
            // console.log(this.Stats);
            // this.initSvgDia();
            // this.drawPieDia();
            if(this.Stats.length > 0){
              this.setgraph();
            }
            
          });
        });
      });
      
    });
    
  }
  // -------------------------------End pie-----------------
}
export interface count {
  company: string,
  count: number,
  // id: string,
  // surveyid: string
}