import { Component, OnInit, OnChanges } from '@angular/core';
// import * as d3 from 'd3-selection';
// import * as d3Scale from 'd3-scale';
// import * as d3Shape from 'd3-shape';
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

  private margin1 = {top: 20, right: 20, bottom: 30, left: 50};
  private width1: number;
  private height1: number;
  private radius1: number;

  private arc1: any;
  private labelArc1: any;
  private pie1: any;
  private color1: any;
  private svg2: any;

  constructor(private companyService : CompanyService, private route: ActivatedRoute, private config: Config) {
    this.width1 = 900 - this.margin1.left - this.margin1.right;
    this.height1 = 500 - this.margin1.top - this.margin1.bottom;
    this.radius1 = Math.min(this.width1, this.height1) / 2;
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
                    this.initSvgDia();
                    this.drawPieDia();
              });
          });
      });
  });
  }
// ---------------------------------End-------------------------------------------
  private initSvgDia() {
    // this.color1 = d3Scale.scaleOrdinal()
    //                     .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b"]);
    // this.arc1 = d3Shape.arc()
    //                   .outerRadius(this.radius1 - 10)
    //                   .innerRadius(0);
    // this.labelArc1 = d3Shape.arc()
    //                        .outerRadius(this.radius1 - 40)
    //                        .innerRadius(this.radius1 - 40);
    // this.pie1 = d3Shape.pie()
    //                   .sort(null)
    //                   .value((d: any) => d.count);
    // this.svg2 = d3.select("svg")
    //              .append("g")
    //              .attr("transform", "translate(" + this.width1 / 2 + "," + this.height1 / 2 + ")");
  }

  private drawPieDia() {
    let g = this.svg2.selectAll("#piedia")
                    .data(this.pie1(this.Stats))
                    .enter().append("g")
                    .attr("class", "arc");
    g.append("path").attr("d", this.arc1)
                    .style("fill", (d: any) => this.color1(d.data.case) );
    g.append("text").attr("transform", (d: any) => "translate(" + this.labelArc1.centroid(d) + ")")
                    .attr("dy", ".35em")
                    .text((d: any) => d.data.case);                  
  }

  refreshDia(){
    // d3.select("svg").remove(); 
    // var svg = d3.select("body").append("svg").attr("width1","960").attr("height1", "500"),
    // inner = svg.append("g");
    // this.loadData();
  }

}

  


  

