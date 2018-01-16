import { Component, OnInit, OnChanges } from '@angular/core';
import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Shape from 'd3-shape';
import { CompanyService} from './../../services/company.service';
import { CanActivate,ActivatedRoute, Router } from '@angular/router';
import * as socketIo from 'socket.io-client';
import { Config } from './../../config/config';

@Component({
  selector: 'newpie',
  templateUrl: './newpie.component.html',
  styleUrls: ['./newpie.component.css']
})
export class NewpieComponent implements OnInit {
  sub : any;
  private socket: any;
  survey_id : any;
  list = {
    survey : ''
  }
  allSurvey : any;
  Stats = [];
  mail_response_count : number  = 0;
  mail_viewed_count : number  = 0;
  survey_completed_count : number  = 0;
  invited_user_count : number  = 0;
  mail_not_readed_count :number  = 0;
  surveyList : any;
  title: string = '';
  subtitle: string = 'Pie Chart of Survey Response';

  private margin = {top: 20, right: 20, bottom: 30, left: 50};
  private width: number;
  private height: number;
  private radius: number;

  private arc: any;
  private labelArc: any;
  private pie: any;
  private color: any;
  private svg: any;

  constructor(private companyService : CompanyService, private route: ActivatedRoute, private config: Config) {
    this.width = 900 - this.margin.left - this.margin.right;
    this.height = 500 - this.margin.top - this.margin.bottom;
    this.radius = Math.min(this.width, this.height) / 2;
    this.socket = socketIo(config.siteUrl);
   }

  ngOnInit() {
// ---------------------------------Start-------------------------------------------
// Function      : get all survey
// Params        : 
// Returns       : list of all  survey
// Author        : Rinsha
// Date          : 16-1-2018
// Last Modified : 16-1-2018, Rinsha
// Desc          : 
  this.companyService.getAllSurvey().subscribe(info => {
    this.allSurvey = info;
  });
// ---------------------------------End-------------------------------------------
    this.loadData();
    this.socket.on('Mail Responsed', (data) => {
      this.loadData(); 
    }); 
  }

  loadData(){
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
if(this.survey_id){
  data = {id: this.survey_id};
}
if(this.list.survey != ''){
  data = {id: this.list.survey};
}
  this.companyService.getMailResponseCount(data).subscribe(res => {
    this.mail_response_count = res;
    this.companyService.getMailViewedCount(data).subscribe(res1 => { 
        this.mail_viewed_count = res1;
        this.companyService.getSurveyCompletedCount(data).subscribe(res2 => { 
            this.survey_completed_count = res2;
            this.companyService.getInvitedUserCount(data).subscribe(res3 => {
                this.invited_user_count = res3;
                this.mail_not_readed_count = this.invited_user_count - this.mail_viewed_count - this.mail_response_count - this.survey_completed_count;  
                this.Stats = []; 
                if(this.mail_viewed_count != 0){
                  this.Stats.push({case: "Mail Readed", count: this.mail_viewed_count});
                }
                if(this.mail_not_readed_count != 0){
                  this.Stats.push({case: "Mail Not Readed", count: this.mail_not_readed_count});
                }
                if(this.mail_response_count != 0){
                  this.Stats.push({case: "Mail Responsed", count: this.mail_response_count});
                }
                if(this.survey_completed_count != 0){
                  this.Stats.push({case: "Survey Completed", count: this.survey_completed_count});
                }
                    this.initSvg();
                    this.drawPie();
              });
          });
      });
  });
  }
// ---------------------------------End-------------------------------------------
  private initSvg() {
    this.color = d3Scale.scaleOrdinal()
                        .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b"]);
    this.arc = d3Shape.arc()
                      .outerRadius(this.radius - 10)
                      .innerRadius(0);
    this.labelArc = d3Shape.arc()
                           .outerRadius(this.radius - 40)
                           .innerRadius(this.radius - 40);
    this.pie = d3Shape.pie()
                      .sort(null)
                      .value((d: any) => d.count);
    this.svg = d3.select("svg")
                 .append("g")
                 .attr("transform", "translate(" + this.width / 2 + "," + this.height / 2 + ")");
  }

  private drawPie() {
    let g = this.svg.selectAll(".arc")
                    .data(this.pie(this.Stats))
                    .enter().append("g")
                    .attr("class", "arc");
    g.append("path").attr("d", this.arc)
                    .style("fill", (d: any) => this.color(d.data.case) );
    g.append("text").attr("transform", (d: any) => "translate(" + this.labelArc.centroid(d) + ")")
                    .attr("dy", ".35em")
                    .text((d: any) => d.data.case);                  
  }

  refresh(){
    d3.select("svg").remove(); 
    var svg = d3.select("body").append("svg").attr("width","960").attr("height", "500"),
    inner = svg.append("g");
    this.loadData();
  }

}

  


  

