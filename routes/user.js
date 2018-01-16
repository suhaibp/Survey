

const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const config = require('../config/database');
const Theme = require("../model/theme");
const Font = require("../model/font_family");
const FontSizes = require("../model/font_size");
const Survey = require("../model/survey");
const User = require("../model/user");
const Company = require("../model/company");
var async = require('async');
var geoip = require('geoip-lite');
var http = require('http');
'use strict';
// ---------------------------------Start-------------------------------------------

// Function      : get Survey
// Params        : 
// Returns       : survey
// Author        : Manu Prasad
// Date          : 4-1-2018
// Last Modified : 4-1-2018, Manu Prasad, Desc:
// Desc          : checks whether survey is assigned for the current user and  check start time and end time. if ok return survey else return a messsage

router.get('/get-survey/:id',(req,res)=>{
    
// if (req.headers && req.headers.authorization) {
    //     var authorization = req.headers.authorization.substring(4), decoded;
    //     try {
    //         decoded = jwt.verify(authorization, config.secret);
          //   cmp_id = ObjectId("5a44dc30fdb3ea09ec91ff82");
          user_id = mongoose.Types.ObjectId("5a432162fcaf01ec6274ecc0");
          // var cmp_id  = decoded._id;
    // console.log(Date());
        //   Survey.find({"inv_users.cmp_user_id" : user_id,"_id":req.params.id}, function(err,theme){
            Survey.findOne({"_id":req.params.id}, {"inv_users":{$elemMatch : {"cmp_user_id":user_id, "survey_completed":false}},name:1}, function(err,survey1){
                if(survey1.inv_users == '' ||survey1.questions == []){
                    res.json({
                        status: 4
                    })
                }
                else{

                    Survey.findOne(
                        // {"start_datetime": {"$lte":  Date()}}, function(err,theme){
                            {"_id":req.params.id}, {inv_users:{$elemMatch : {  cmp_user_id:user_id}},name:1, company_id:1, theme:1,display_type:1,start_datetime:1, end_datetime:1,logo:1,is_header:1,is_footer:1,header_title:1,footer_title:1,questions:1,answers:1,}, function(err,survey){
                                // "start_datetime": {"$lte": new Date()},"end_datetime": {"$gt": new Date()}
                                console.log(survey);
                                // console.log(new Date())
                    if(survey){
                        
                        if(survey.start_datetime <= new Date()){
                            if(survey.end_datetime < new Date()){
                                 //closed survey   
                                res.json({
                                    status : 0,
                                    header : survey.header_title,
                                    footer : survey.footer_title,
                                    theme  : survey.theme
                                });
                            }
                            else{
                                // console.log(survey);
                                survey.questions.sort(function (a, b) {return Math.random() - 0.5;});
                                // survey.questions.forEach((element, index) => {
                                //    // survey.questions[index].push({"answer":""});
                                //     survey.questions[index].answer = '';
                                // });
                                res.json(survey);
                            }
                            // console.log("x")
                           
                            // newres.status = 2; //for upcoming survey                    
                            // newres.start_time = start_datetime
                            // if(is_header == true){
                            //     newres.;
                            //     newres.logo = logo;
                            // }
                            // if(is_header == true){
                            //     newres.footer = footer_title;
                                
                            // }
                            // res.json(newres);
                        }
                        else if(survey.start_datetime > new Date()){
                             //upcoming 
                            res.json({
                                status : 1,
                                start_time : survey.start_datetime,
                                header : survey.header_title,
                                footer : survey.footer_title,    
                                theme  : survey.theme
                                
                            });
                        }
                        else{
                            res.json(
                            {status : 2} //error
                            );
                            
                        }
                    }
                    else if(!survey){
                        
                        res.json({
                            status:3,
                            message: "Survey doesn't exist!"
                        })  
                    }
                }).lean();
                }
            });
            
// }
});
// ----------------------------------End------------------------------------------- 





// ---------------------------------Start-------------------------------------------

// Function      : get Survey that is not running currently
// Params        : 
// Returns       : survey
// Author        : Manu Prasad
// Date          : 4-1-2018
// Last Modified : 4-1-2018, Manu Prasad, Desc:
// Desc          : get Survey that is not running currently

router.get('/get-not-run-survey/:id',(req,res)=>{
    
// if (req.headers && req.headers.authorization) {
    //     var authorization = req.headers.authorization.substring(4), decoded;
    //     try {
    //         decoded = jwt.verify(authorization, config.secret);
          //   cmp_id = ObjectId("5a44dc30fdb3ea09ec91ff82");
          user_id = mongoose.Types.ObjectId("5a432162fcaf01ec6274ecc0");
          // var cmp_id  = decoded._id;
    // console.log(Date());
        //   Survey.find({"inv_users.cmp_user_id" : user_id,"_id":req.params.id}, function(err,theme){
            Survey.findOne({"_id":req.params.id}, function(err,survey){
                
                if(err){
                    res.json({status:0})
                }else{
                    console.log("SSSSSS\n"+survey);
                    res.json(survey)
                }
            });
            
// }
});
// ----------------------------------End------------------------------------------- 


// ---------------------------------Start-------------------------------------------

// Function      : update Survey with answers
// Params        : 
// Returns       : status
// Author        : Manu Prasad
// Date          : 9-1-2018
// Last Modified : 9-1-2018, Manu Prasad, Desc:
// Desc          : routing used to update survey withn answers

router.put('/submit-survey/:id',(req,res)=>{
    
    // console.log(req);
    // if(req.body.title != '')
    // {
    //     // if (req.headers && req.headers.authorization) {
    // //     var authorization = req.headers.authorization.substring(4), decoded;
    // //     try {
    // //         decoded = jwt.verify(authorization, config.secret);
    //       //   cmp_id = ObjectId("5a44dc30fdb3ea09ec91ff82");
          user_id = "5a431dbafcaf01ec6274ecbf";
    //       // var cmp_id  = decoded._id;
    // console.log(req.body);
    // console.log(req.headers['x-forwarded-for'])
    // console.log(req.connection.remoteAddress)
    // console.log(req.socket.remoteAddress)
    // console.log(req.connection.socket)

    var ip = "59.92.233.134";
    // console.log("ip:"+ip);
    var geo = geoip.lookup(ip);
    // console.log(geo.ll[0]+"//"+geo.ll[1]);
    var blank = false;
    var cmp_id;
    var email;
    var cmp_user_id;
    isSuccess = true;
    msg = '';
    Survey.findOne(
        // {"start_datetime": {"$lte":  Date()}}, function(err,theme){
            {"_id":req.params.id}, function(err,survey){
                cmp_id = survey.company_id;
                if(survey.display_type.skip == false){
                    req.body.questions.forEach((element, i) => {
                        if(element.ans == "" || !element.ans){
                            blank = true;
                        }
                    });
                    if(blank == true){
                        res.json({"status": 0}); //No skip but a blank answer
                        
                    }
                    else{

                        User.findOne({"_id":user_id},(err, user) => {
                            email = user.email;
                            // console.log("em:"+email);
                            // Company.find({"_id":cmp_id}, {users:{$elemMatch : {  "email":email}}},(err, cmp) => {
                            Company.findOne({"_id":cmp_id, "users.email":email}, {users:{$elemMatch : {  "email":email}}, _id:1},(err, cmp) => {
                                
                                // res.json(cmp);
                                if(err){
                                    res.json({
                                        status:1
                                    })
                                }else{

                                    cmp_user_id = cmp.users[0]._id;
                                    async.eachOfSeries(req.body.questions, function(element, key, callback) {
                                        var email =element.email;
                                        // console.log("c"+element.ans);
                                        console.log(element._id);
                                        // console.log({ "answer":element.ans, "cmp_user_id":cmp_user_id});


                                        Survey.findOneAndUpdate({"questions._id":element._id},
                                            {
                                                    $push:{ "questions.$.answers" : {
                                                        "answer":element.ans,
                                                        "cmp_user_id":cmp_user_id,
                                                        "global_user_id":user_id,
                                                        "ip":ip,
                                                        "latitude":geo.ll[0],
                                                        "longitude":geo.ll[1]
        
                                                    }}
                                                },{ new : true}, function(err,surveyx){
                                            
                                            if(err){
                                                isSuccess = false;
                                                msg = 'Somthing went wrong';
                                            }else{
                                                // console.log(surveyx);
                                                isSuccess = true;
                                                msg = 'Success';
                                            }callback();
                                        });

                                 
                                    }, function(err) {
                                        
                                        if (err) console.error(err.message); 
                                        if(!isSuccess){
                                            res.json({status:3, msg: msg});  //error
                                        }else{
                                            Survey.findOneAndUpdate({"_id":req.params.id,"inv_users.cmp_user_id":cmp_user_id},
                                            {
                                                    $set:{ "inv_users.$.survey_completed":true}
                                                }, function(err,surveyc){
                                            
                                            if(err){
                                                res.json({status:3, msg: msg}); //error
                                                
                                            }else{
                                                res.json({status:4, msg: msg}); //success
                                            }
                                        });
                                            
                                        }
                    
                                    }); 










                                }
                            });
                        });
                        
        
                    }
                }
                else{
                    console.log("SKIP");
                    User.findOne({"_id":user_id},(err, user) => {
                        email = user.email;
                        console.log(email);
                        Company.findOne({"_id":cmp_id, }, {users:{$elemMatch : {  "email":email}}, _id:1}, (err, cmp) => {
                            if(!err){
                                cmp_user_id = cmp.users[0]._id;
                                async.eachOfSeries(req.body.questions, function(element, key, callback) {
                                    var email =element.email;
                                    // console.log("c"+element.ans);
                                    // console.log({ "answer":element.ans, "cmp_user_id":cmp_user_id});


                                    Survey.findOneAndUpdate({"_id":req.params.id,"questions._id":element._id},
                                        {
                                                $push:{ "questions.$.answers" : {
                                                    "answer":element.ans,
                                                    "cmp_user_id":cmp_user_id,
                                                    "global_user_id":user_id,
                                                    "ip":ip,
                                                    "latitude":geo.ll[0],
                                                    "longitude":geo.ll[1]
    
                                                }}
                                            },{ new : true}, function(err,surveyx){
                                        
                                        if(err){
                                            isSuccess = false;
                                            msg = 'Somthing went wrong';
                                        }else{
                                            // console.log(surveyx);
                                            isSuccess = true;
                                            msg = 'Success';
                                        }callback();
                                    });

                             
                                }, function(err) {
                                    
                                    if (err) console.error(err.message); 
                                    if(!isSuccess){
                                        res.json({status:3, msg: msg});  //error
                                    }else{
                                        
                                        Survey.findOneAndUpdate({"_id":req.params.id,"inv_users.cmp_user_id":cmp_user_id},
                                        {
                                                $set:{ "inv_users.$.survey_completed":true}
                                            }, function(err,surveyc){
                                        
                                        if(err){
                                            res.json({status:3, msg: msg}); //error
                                            
                                        }else{
                                            res.json({status:4, msg: msg}); //success
                                        }
                                    });
                                    }
                
                                }); 
                               
                            }
                            else{
                                //err
                                res.json({
                                    status: 1, 
                                })
                            }
                        });
                    });

                    
                    
                   
                        }
            });
    
// }
});
// ----------------------------------End-------------------------------------------
module.exports = router;