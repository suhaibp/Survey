import { Component, OnInit, ViewChild } from '@angular/core';
// import { AgmCoreModule, MapsAPILoader } from '@agm/core';
import { CompanyService } from './../../services/company.service';
import { CanActivate, ActivatedRoute, Router } from '@angular/router';
import * as socketIo from 'socket.io-client';
import { Config } from './../../config/config';
import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Array from 'd3-array';
import * as d3Axis from 'd3-axis';
import * as d3Shape from 'd3-shape';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

declare var $: any;


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
  title = 'Questions Vs Answers';
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

  // refresh() {

  //   // this.getAllsurvey();
  //   console.log(this.surveyId)
  //   if(this.surveyId){
  //     this._companyService.getSurveyQuestions(this.surveyId).subscribe(data => {
  //       this.quest = data;
  //       this.barchart = [];
  //       data.forEach(element => {
  //         this.barchart.push({ company: element.question, count: element.totalCount});
  //       });
  
  //       this.initSvg1();
  //       this.initAxis();
  //       this.drawAxis();
  //       this.drawBars();
  
  //     });
  //   }
    

  // }

  // getAllsurvey() {
  //   this._companyService.getAllsurveyDashboard().subscribe(data => {
  //     this.survey = data;
  //     this.sId = data[0]._id;
  //   });
  // }

  // pierefresh() {
  //   // this._companyService.getSurveyQuestions(this.surveyId).subscribe(data => {
  //   //   this.initSvg();
  //   //   this.drawPie();
  //   // });

  // }

  ngOnInit() {

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
    // this.locations.push({lat:27.56,long:-82.68});
    // this.locations.push({lat:37.56,long:-72.68});

    this._companyService.getPositions().subscribe(survey => {
      // console.log(survey);
      this.locations = survey;
      this.allSurveys = survey;

      // console.log(this.locations);
      // survey.questions.forEach((element,i) => {
      //   // this.locations[i].question = element.question;
      //   // this.locations[i].answer = element.question;
      //   // this.locations[i].question = element.question;

      //   element.forEach((ele,j) => {
      //     console.log(element._id.longitude);
      //     this.locations.push({lat:parseFloat(element._id.latitude),long:parseFloat(element._id.longitude)});
      //   })

      // });
      // console.log(this.locations);
      // this.locations.push({lat:27.56,long:-82.68});
      // this.locations.push({lat:37.56,long:-72.68});
      // console.log(this.locations);
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
    // this.locations.push({lat:27.56,long:-82.68});
    // this.locations.push({lat:37.56,long:-72.68});
    console.log("reee"+this.surveyId)
    if (this.surveyId == 'all' || typeof(this.surveyId)  == undefined || this.surveyId == null || this.surveyId == '') {
      this.getMapPositions();
      console.log("ff");
    }
    else {
      // console.log("poooooo"); 
      
      this._companyService.getSurveyforDash(this.surveyId).subscribe(survey => {
        // console.log(theme);
        this.locations = survey;
        // console.log(this.locations);
        // survey.questions.forEach((element,i) => {
        //   // this.locations[i].question = element.question;
        //   // this.locations[i].answer = element.question;
        //   // this.locations[i].question = element.question;

        //   element.forEach((ele,j) => {
        //     console.log(element._id.longitude);
        //     this.locations.push({lat:parseFloat(element._id.latitude),long:parseFloat(element._id.longitude)});
        //   })

        // });
        // console.log(this.locations);
        // this.locations.push({lat:27.56,long:-82.68});
        // this.locations.push({lat:37.56,long:-72.68});
        // console.log(this.locations);
      });
    }



  }
  //  ---------------------------------end-----------------------------------------------

  ConvertString(value) {
    return parseFloat(value)
  }
  // //chart2
  // applyFilter(filterValue: string) {
  //   filterValue = filterValue.trim(); // Remove whitespace
  //   filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
  //   this.dataSource.filter = filterValue;
  // }

  // initSvg1() {
  //   this.svg1 = d3.select("#bar1");
  //   this.widthb = +this.svg1.attr("width") - this.marginb.left - this.marginb.right;
  //   this.heightb = +this.svg1.attr("height") - this.marginb.top - this.marginb.bottom;
  //   this.g = this.svg1.append("g")
  //     .attr("transform", "translate(" + this.marginb.left + "," + this.marginb.top + ")");
  // }

  // initAxis() {
  //   this.x = d3Scale.scaleBand().rangeRound([0, this.widthb]).padding(0.1);
  //   this.y = d3Scale.scaleLinear().rangeRound([this.heightb, 0]);
  //   this.x.domain(this.barchart.map((d) => d.company));
  //   this.y.domain([0, d3Array.max(this.barchart, (d) => d.count)]);
  // }

  // drawAxis() {
  //   this.g.append("g")
  //     .attr("class", "axis axis--x")
  //     .attr("transform", "translate(0," + this.heightb + ")")
  //     .call(d3Axis.axisBottom(this.x));
  //   this.g.append("g")
  //     .attr("class", "axis axis--y")
  //     .call(d3Axis.axisLeft(this.y))
  //     .append("text")
  //     .attr("class", "axis-title")
  //     .attr("transform", "rotate(-90)")
  //     .attr("y", 6)
  //     .attr("dy", "0.71em")
  //     .attr("text-anchor", "end")
  //     .text("count");
  // }

  // drawBars() {
  //   this.g.selectAll(".bar")
  //     .data(this.barchart)
  //     .enter().append("rect")
  //     .attr("class", "bar")
  //     .attr("x", (d) => this.x(d.company))
  //     .attr("y", (d) => this.y(d.count))
  //     .attr("data-id", (d) => this.y(d.id))
  //     .attr("width", this.x.bandwidth())
  //     .attr("height", (d) => this.heightb - this.y(d.count))
  //     // .on("click", this.mouseclick)  
  //     .on('click', (d, i) => {
  //       this.svg.remove();
  //       this.piechart = []
  //       this.quest[i].ans.forEach((val) => {
  //         if (val.count != 0) {
  //           this.piechart.push({ status: val.value, count: val.count, answeredUser: val.answeredUser });
  //         }
  //       });
  //       this.initSvg();
  //       this.drawPie();
  //       console.log(i);
  //       // this.companyService.getSingleQA(d).subscribe(data1=>{
  //       //   console.log(data1);
  //       // });
  //     })
  // }

  //piechart
  // initSvg() {
  //   this.color = d3Scale.scaleOrdinal()
  //     .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);
  //   this.arc = d3Shape.arc()
  //     .outerRadius(this.radius - 10)
  //     .innerRadius(0);
  //   this.labelArc = d3Shape.arc()
  //     .outerRadius(this.radius - 40)
  //     .innerRadius(this.radius - 40);
  //   this.pie = d3Shape.pie()
  //     .sort(null)
  //     .value((d: any) => d.count);
  //   this.svg = d3.select("#sd")
  //     .append("g")
  //     .attr("transform", "translate(" + this.width / 2 + "," + this.height / 2 + ")");

  // }

  // drawPie() {
  //   let g = this.svg.selectAll(".arc")
  //     .data(this.pie(this.piechart))
  //     .enter().append("g")
  //     .attr("class", "arc");
  //   g.append("path").attr("d", this.arc)
  //     .style("fill", (d: any) => this.color(d.data.status))
  //     .on('click', (d, i) => {
  //       this.dataSource = new MatTableDataSource(d.data.answeredUser);
  //       this.dataSource.paginator = this.paginator;
  //       this.dataSource.sort = this.sort;
  //       $('#answeredUsers').modal('show');
  //     });
  //   g.append("text").attr("transform", (d: any) => "translate(" + this.labelArc.centroid(d) + ")")
  //     .attr("dy", ".35em")
  //     .text((d: any) => d.data.status)

  // }
  // -------------------Pie Start------------------
  private initSvgDia() {
    this.color1 = d3Scale.scaleOrdinal()
      .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b"]);
    this.arc1 = d3Shape.arc()
      .outerRadius(this.radius1 - 10)
      .innerRadius(0);
    this.labelArc1 = d3Shape.arc()
      .outerRadius(this.radius1 - 40)
      .innerRadius(this.radius1 - 40);
    this.pie1 = d3Shape.pie()
      .sort(null)
      .value((d: any) => d.count);
    this.svg2 = d3.select("svg")
      .append("g")
      .attr("transform", "translate(" + this.width1 / 2 + "," + this.height1 / 2 + ")");
  }

  private drawPieDia() {
    let g = this.svg2.selectAll("#piedia")
      .data(this.pie1(this.Stats))
      .enter().append("g")
      .attr("class", "arc");
    g.append("path").attr("d", this.arc1)
      .style("fill", (d: any) => this.color1(d.data.case));
    g.append("text").attr("transform", (d: any) => "translate(" + this.labelArc1.centroid(d) + ")")
      .attr("dy", ".35em")
      .text((d: any) => d.data.case);
  }

  refreshDia() {
    // console.log("------------------------");
    // console.log(this.surveyId);
    // console.log("------------------------");
    d3.select("svg").remove();
    var svg = d3.select(".svg-div").append("svg").attr("width", "960").attr("height", "500"),
      inner = svg.append("g");
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
              this.Stats.push({ case: "Mail Readed", count: this.mail_viewed_count });
            }
            if (this.mail_not_readed_count != 0) {
              this.Stats.push({ case: "Mail Not Readed", count: this.mail_not_readed_count });
            }
            if (this.mail_response_count != 0) {
              this.Stats.push({ case: "Mail Responsed", count: this.mail_response_count });
            }
            if (this.survey_completed_count != 0) {
              this.Stats.push({ case: "Survey Completed", count: this.survey_completed_count });
            }
            this.initSvgDia();
            this.drawPieDia();
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