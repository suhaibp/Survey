const express = require("express");
const router = express.Router();
// const mongoose = require('mongoose');
const config = require('../config/database');
const UserGroup = require("../model/user_group");
const Company = require("../model/company");
const Users = require("../model/user");
const SurveyCategory = require("../model/survey_category");
const Theme = require("../model/theme");
const AnswerType = require("../model/answer_type");
const Survey = require("../model/survey");
const Images = require("../model/images");
const emailTemplate = require('../template/verification_email');
var geoip = require('geoip-lite');
async = require("async");


// const mongoose = require("mongoose");

// mongoose.connect(config.database);
// mongoose.Promise = global.Promise;
// mongoose.connection.on('connected',()=>{
//     console.log("database connected");
// });
// mongoose.connection.on('error',(err)=>{
//     console.log("database Error" + err);
// });
//  var Grid = require('gridfs-stream'); //import Gridfs stream
// //  var mongo = require("mongodb");

//  var mongo = require('mongodb');

//  // Connect MongoDB
// var db = new mongo.Db('survey', new mongo.Server('localhost', '27017',{}), {safe:false});
// db.open(function(error){

//   console.log("Server is listening @ ");

// });
// var url = "mongodb://localhost:27017/survey";
 //var db = new mongo.Db('survey', new mongo.Server('localhost:27017', '27017',{}), {safe:false});
//  var db;
//  mongo.connect(url, function(err, db) {
//     db = db;
//    if (err) throw err;
//    console.log("Database created!");

// //    db.collection("company").findOne({}, function(err, result) {
// //     if (err) throw err;
// //     console.log(result);
// //     db.close();
// //   });
//    //db.close();
//  });

// var db = new mongo.Db('survey', new mongo.Server('http://192.168.1.17', '27017',{}), {safe:false});
// db.open(function(error){
// //   db.authenticate("", "", function(err, res) {
 
// //     console.log("Server is listening @ " );
// //     });
// });



'use strict';
 
// ---------------------------------Start-------------------------------------------
// Function      : get-all-groups
// Params        : 
// Returns       : all user groups
// Author        : Yasir Poongadan
// Date          : 29-12-2017
// Last Modified : 29-12-2017, Yasir Poongadan
// Desc          : sample

router.get('/get-all-groups',(req,res,next)=>{
        // if (req.headers && req.headers.authorization) {
    //     var authorization = req.headers.authorization.substring(4), decoded;
    //     try {
    //         decoded = jwt.verify(authorization, config.secret);
          //   cmp_id = ObjectId("5a44dc30fdb3ea09ec91ff82");
            cmp_id = "5a4b61e2a2f0028c1a46274a";
            UserGroup.find({cmp_id:cmp_id}, (err,userGroup)=>{
                var users = {};
                var ret = {group:userGroup,groupById : users};
                //   console.log(user);
                userGroup.forEach((grp, i) => {
                       users[grp._id] = grp;
                   });

                if(err) {
                    throw err;
                }else{
                    return res.json(ret);
                }
            });
      //     } catch (e) {
    //         return res.status(401).send('unauthorized 123');
    //     }
    // }else{
    //     return res.status(401).send('Invalid User');
    // } 
});

// ----------------------------------End-------------------------------------------

// ---------------------------------Start-------------------------------------------
// Function      : add-user-group
// Params        : 
// Returns       : all user groups
// Author        : Yasir Poongadan
// Date          : 29-12-2017
// Last Modified : 29-12-2017, Yasir Poongadan
// Desc          : sample

router.post('/add-user-group',(req,res,next)=>{
    
    // if (req.headers && req.headers.authorization) {
    //     var authorization = req.headers.authorization.substring(4), decoded;
    //     try {
    //         decoded = jwt.verify(authorization, config.secret);
          //   cmp_id = ObjectId("5a44dc30fdb3ea09ec91ff82");
            cmp_id = "5a4b61e2a2f0028c1a46274a";
            // var cmp_id  = decoded._id;
            console.log(req.body.group);
            UserGroup.find({name : req.body.group,cmp_id: cmp_id}, function (err, docs) {
              //  console.log(docs);
                if (docs.length){
                    res.json({success: false, msg : "Group Already Exists"});
                }else{
                    var userGroup = new UserGroup();
                    userGroup.name = req.body.group;
                    userGroup.cmp_id = cmp_id;
                    userGroup.save(function(err,insertedGroup){
                        if(!req.body.emails){
                          res.json({success: true, msg : "Group created Successfully",data : insertedGroup});
                        }else{

                        }
                    });
                }
            });
    //     } catch (e) {
    //         return res.status(401).send('unauthorized 123');
    //     }
    // }else{
    //     return res.status(401).send('Invalid User');
    // }        
    
   
});



// ----------------------------------End-------------------------------------------


// ---------------------------------Start-------------------------------------------
// Function      : add-users
// Params        : users and assigned groups
// Returns       : status and message
// Author        : Yasir Poongadan
// Date          : 01-01-2018
// Last Modified : 01-01-2018, Yasir Poongadan
// Desc          : add users

router.post('/add-users',(req,res,next)=>{
    // console.log(req.body);
    // if (req.headers && req.headers.authorization) {
    //     var authorization = req.headers.authorization.substring(4), decoded;
    //     try {
    //         decoded = jwt.verify(authorization, config.secret);
            cmp_id = "5a4b61e2a2f0028c1a46274a";
            // var cmp_id  = decoded._id;
                var isErr = false;
                var errMsg = '';

                req.body.email.forEach(function(val,key) {
                    if(!isErr){
                        val = myTrim(val.toString());
                        if(!validateEmail(val) && !isErr){
                            errMsg = val + " is not a valid email";
                            isErr = true;
                        }
                    }
                    
                });

                if(isErr){
                    res.json({success: false, msg : errMsg});
                }else{
                    async.eachOfSeries(req.body.email, function(email, key, callback) {

                        Company.findOne({"users.email":email, _id : cmp_id}, function(err, respEmail) {
                            if (respEmail  && !isErr) { // Insert If user not exist
                                errMsg = email + " Already Exists";
                                isErr = true;
                            } 

                            Users.findOne(
                                {$and: [
                                {email:email},
                                { $or: [{ block_status : true}, { delete_status : true}] }
                                ]}, 
                                function(err, respemail) {
                                  
                                    if (respemail ) { // Insert If user not exist
                                        errMsg = 'Failed, ' + email + " blocked by admin";
                                        isErr = true;
                                    } 
                                    callback();
                            });

                        })
                    }, function(err) {

                        if (err) console.error(err.message);
                        if (isErr){
                            res.json({success: false, msg : errMsg});
                        }else{
                           // console.log(req.body);
                            var users = [];
                            var groups = [];
                            req.body.groups.forEach(function(val,key) {
                                groups.push({g_id:val._id,group_name:val.name});
                            });
                            req.body.email.forEach(function(val,key) {
                                users.push({email:val,group:groups});
                            });
                            
                            Company.findOneAndUpdate({"_id" : cmp_id},
                            {
                                $pushAll:{"users": users}
                            },
                            { new : true },
                            (err, company)=>{
                                if(err){
                                    res.json({success: false, msg : "Failed, somthing went wrong "});
                                }else{
                                    res.json({success: true, msg : "User saved successfully", company:company});
                                }
                            });
                           
                      
                        }
                    });
                }

    //     } catch (e) {
    //         return res.status(401).send('unauthorized 123');
    //     }
    // }else{
    //     return res.status(401).send('Invalid User');
    // }        
    
   
});
// ----------------------------------End-------------------------------------------



// ---------------------------------Start-------------------------------------------
// Function      : validateEmail
// Params        : email
// Returns       : boolean true or false
// Author        : Yasir Poongadan
// Date          : 01-01-2017
// Last Modified : 01-01-2017, Yasir Poongadan
// Desc          : for validate an email

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
}

// ----------------------------------End-------------------------------------------

// ---------------------------------Start-------------------------------------------
// Function      : myTrim
// Params        : string
// Returns       : string
// Author        : Yasir Poongadan
// Date          : 01-01-2017
// Last Modified : 01-01-2017, Yasir Poongadan
// Desc          : For removing unwanted space from left and right

function myTrim(x) {
    return x.replace(/^\s+|\s+$/gm,'');
}

// ----------------------------------End-------------------------------------------

// ---------------------------------Start-------------------------------------------
// Function      : get-my-company
// Params        : 
// Returns       : logged in company details
// Author        : Yasir Poongadan
// Date          : 02-01-2018
// Last Modified : 02-01-2018, Yasir Poongadan
// Desc          : to get logged in company details 

router.get('/get-my-company',(req,res,next)=>{
    // if (req.headers && req.headers.authorization) {
//     var authorization = req.headers.authorization.substring(4), decoded;
//     try {
//         decoded = jwt.verify(authorization, config.secret);
      //   cmp_id = ObjectId("5a44dc30fdb3ea09ec91ff82");
        cmp_id = "5a4b61e2a2f0028c1a46274a";
        Company.findOne({_id:cmp_id}, (err,company)=>{
            if(err) {
                throw err;
            }else{
                return res.json(company);
            }
        });
  //     } catch (e) {
//         return res.status(401).send('unauthorized 123');
//     }
// }else{
//     return res.status(401).send('Invalid User');
// } 
});

// ----------------------------------End-------------------------------------------


// ---------------------------------Start-------------------------------------------
// Function      : update-users
// Params        : user and assigned groups
// Returns       : status and message
// Author        : Yasir Poongadan
// Date          : 03-01-2018
// Last Modified : 03-01-2018, Yasir Poongadan
// Desc          : update user and groups



router.put('/update-users',(req,res,next)=>{
    // console.log(req.body);
    // if (req.headers && req.headers.authorization) {
    //     var authorization = req.headers.authorization.substring(4), decoded;
    //     try {
    //         decoded = jwt.verify(authorization, config.secret);
            cmp_id = "5a4b61e2a2f0028c1a46274a";
            // var cmp_id  = decoded._id;
                var isErr = false;
                var errMsg = '';
                if(req.body.is_registered == false){
                    if(!validateEmail(req.body.newEmail) && !isErr){
                        errMsg = val + " is not a valid email";
                        isErr = true;
                    }
                }

                if(isErr){
                    res.json({success: false, msg : errMsg});
                }else{

                    async.parallel([
                        function(callback) {
                                
                            if(req.body.newEmail != req.body.email){
                                console.log('email changed');
                                Company.findOne({"users.email":req.body.newEmail, _id : cmp_id}, function(err, respEmail) {
                                   // console.log(respEmail);   
                                    if (respEmail  && !isErr) { // Insert If user not exist
                                        console.log('in already exists if');
                                        errMsg = req.body.newEmail + " Already Exists";
                                        isErr = true;
                                    } 
                                    callback();
                                });
                            }else{
                                callback();
                            }
                         },
                        function(callback) { 
                            console.log('functon to check admin block');      
                            Users.findOne(
                                    {$and: [
                                    {email:req.body.newEmail},
                                    { $or: [{ block_status : true}, { delete_status : true}] }
                                    ]}, 
                                    function(err, respemail) {
                                      //  console.log(respEmail);   
                                        if (respemail ) { // Insert If user not exist
                                            console.log('in admin block if');
                                            errMsg = 'Failed, ' + req.body.newEmail + " blocked by admin";
                                            isErr = true;
                                        } 
                                        callback();    

                            });
                        }    
                   // } 
                    ], function(err) { //This is the final callback
                        if (isErr){
                            res.json({success: false, msg : errMsg});
                        }else{
                            var groups = [];
                            req.body.groups.forEach(function(val,key) {
                                groups.push({g_id:val._id,group_name:val.name});
                            });
                            Company.findOneAndUpdate({"_id" : cmp_id, "users.email" : req.body.email},
                            {
                                $set:{"users.$.email" : req.body.newEmail,"users.$.group" :groups }
                            },
                            { new : true },
                            (err, company)=>{
                                if(err){
                                    res.json({success: false, msg : "Failed, somthing went wrong "});
                                }else{
                                    res.json({success: true, msg : "User Updated successfully", company:company});
                                }
                            });
                            
                        
                        }
                    });   

                    
                }

    //     } catch (e) {
    //         return res.status(401).send('unauthorized 123');
    //     }
    // }else{
    //     return res.status(401).send('Invalid User');
    // }        
    
   
});
// ----------------------------------End-------------------------------------------

// ---------------------------------Start-------------------------------------------
// Function      : get-all-survey-type
// Params        : 
// Returns       : list of Survey type
// Author        : Yasir Poongadan
// Date          : 04-01-2017
// Last Modified : 04-01-2017, Yasir Poongadan
// Desc          : all user Survey type

router.get('/get-all-survey-type',(req,res,next)=>{

    SurveyCategory.find({}, (err,surveyCategory)=>{
        if(err) {
            throw err;
        }else{
            return res.json(surveyCategory);
        }
    });
                 
});

// ----------------------------------End-------------------------------------------

// ---------------------------------Start-------------------------------------------
// Function      : get-all-themes
// Params        : 
// Returns       : list of Survey Themes
// Author        : Yasir Poongadan
// Date          : 04-01-2017
// Last Modified : 04-01-2017, Yasir Poongadan
// Desc          : all user Survey Themes

router.get('/get-all-themes',(req,res,next)=>{

    // if (req.headers && req.headers.authorization) {
    //     var authorization = req.headers.authorization.substring(4), decoded;
    //     try {
    //         decoded = jwt.verify(authorization, config.secret);
                    cmp_id = "5a4b61e2a2f0028c1a46274a";
                    // var cmp_id  = decoded._id;

                    Theme.find({ cmp_id : cmp_id}, (err,themes)=>{
                        if(err) {
                            throw err;
                        }else{
                            return res.json(themes);
                        }
                    });
    //     } catch (e) {
    //         return res.status(401).send('unauthorized 123');
    //     }
    // }else{
    //     return res.status(401).send('Invalid User');
    // }         

});

// ----------------------------------End-------------------------------------------

// ---------------------------------Start-------------------------------------------
// Function      : get-all-answer-type
// Params        : 
// Returns       : list of all answer type
// Author        : Yasir Poongadan
// Date          : 08-01-2017
// Last Modified : 08-01-2017, Yasir Poongadan
// Desc          : all answer type

router.get('/get-all-answer-type',(req,res,next)=>{

    AnswerType.find({}, (err,answerTypes)=>{
        if(err) {
            throw err;
        }else{
            return res.json(answerTypes);
        }
    });

});

// ----------------------------------End-------------------------------------------



// ---------------------------------Start-------------------------------------------
// Function      : add-users
// Params        : users and assigned groups
// Returns       : status and message
// Author        : Yasir Poongadan
// Date          : 01-01-2018
// Last Modified : 01-01-2018, Yasir Poongadan
// Desc          : add users

router.get('/logo/:id', function (req, res, next) {
    Images.findOne({file_name : req.params.id}, function (err, img) {
      if (err) return next(err);
      console.log(img);
      if(img){
        res.set("Content-Type", img.logo.contentType);
        //   res.contentType(img.logo.contentType);
        res.send(img.logo.data);
      }
    });
  });

// ----------------------------------End-------------------------------------------

// ---------------------------------Start-------------------------------------------
// Function      : create-survey
// Params        : survey details
// Returns       : status and message
// Author        : Yasir Poongadan
// Date          : 02-01-2018
// Last Modified : 02-01-2018, Yasir Poongadan
// Desc          : To create new survey

router.post('/create-survey',(req,res,next)=>{
    // console.log(req.body);
    // if (req.headers && req.headers.authorization) {
    //     var authorization = req.headers.authorization.substring(4), decoded;
    //     try {
    //          decoded = jwt.verify(authorization, config.secret);
                cmp_id = "5a4b61e2a2f0028c1a46274a";
                organization = "symptots";
                // var cmp_id  = decoded._id;
                // var organization  = decoded.organization;
                isErr = false;
                start = '';
                end = '';
                errMsg = '';

                if(req.body.start_date == ''){
                    errMsg = "Failed, Please Select Start Date";
                    isErr = true;
                }else{
                    var start = new Date(req.body.start_date);
                    start.setHours(00,00,00,000);
                }

                if(req.body.end_date == ''){
                    errMsg = "Failed, Please Select End Date";
                    isErr = true;
                }else{
                    var end = new Date(req.body.end_date);
                    end.setHours(23,59,59,999);
                }

                if(!isErr &&  end <= start){
                    errMsg = "Failed, End Date shold be greater than start date";
                    isErr = true;
                }

            
                if(!isErr && myTrim(req.body.name) == ''){
                    errMsg = "Failed, Please Enter Survay Name";
                    isErr = true;
                }
                if(!isErr && myTrim(req.body.category.name) == '' || req.body.category._id == ''){
                    errMsg = "Failed, Please Select Category";
                    isErr = true;
                }
                if(!isErr && !req.body.selectedTheme){
                    errMsg = "Failed, Please Select Any Theme";
                    isErr = true;
                }
                if(!isErr && !req.body.display_type){
                    errMsg = "Failed, Please Select Display Type";
                    isErr = true;
                }
                if(!isErr && !req.body.display_type){
                    errMsg = "Failed, Please Select Display Type";
                    isErr = true;
                }
                if(!isErr && req.body.questions.length == 0){
                    errMsg = "Failed, Please Add Atleast OneQuestion";
                    isErr = true;
                }
            

                var logoName = '';    
                if(req.body.logoSrc != ''){
                    ext = ['gif','png','jpg','jpeg']
                    var base64 = decodeBase64Image(req.body.logoSrc);

                    if(!isErr && ext.indexOf(base64.ext.toLowerCase()) < 0) {
                        errMsg = "Failed, Invalid Logo";
                        isErr = true;
                    }
                    if(!isErr){
                        console.log(base64.type);
                        console.log(base64.ext);
                        logoName = new String(new Date().getTime()) +'_'+  (Math.floor(100000 + Math.random() * 900000)+'.'+ base64.ext);
                        var images = new Images();
                        var buf = new Buffer(base64.data, 'base64');
                        images.file_name = logoName;
                        images.logo.data = buf;
                        images.logo.contentType = base64.type;
                        images.save(function (err) {
                        });
                    }
                }  

                if(!isErr){
                    var survey = new Survey();
                    survey.name = req.body.name;
                    survey.category = {id:req.body.category._id,name:req.body.category.name};
                    survey.company_id = cmp_id;
                    survey.organization = organization;
                    survey.theme = req.body.selectedTheme._id;
                    survey.display_type = req.body.display_type;

                    survey.start_datetime = start;
                    survey.end_datetime = end;
                    survey.logo = logoName;

                    survey.is_header = req.body.showHeader;
                    survey.is_footer = req.body.showFooter;
                    survey.header_title = req.body.header;
                    survey.footer_title = req.body.footer;

                    survey.header_title = req.body.header;
                    survey.header_title = req.body.header;

                    req.body.questions.forEach((qtn, i) => {
                        let question = {
                            question:qtn.question,
                            ans_type:qtn.answerType,
                        }
                        if(qtn.answerType == 'Multiple choice'){
                            question.options = qtn.opts
                        }
                        if(qtn.answerType == 'star rating' && qtn.showStarLabel == true){
                            question.options = qtn.starOpts
                        }
                        survey.questions.push(question);
                    });

                    survey.save(function (err, newSurvey) {
                        if (err) throw new Error(err);
                        res.json({success: true, msg : "Survey Created Successfully", survey: newSurvey});
                    });
        
                }else{
                    res.json({success: false, msg : errMsg});
                }
    //      } catch (e) {
    //         return res.status(401).send('unauthorized 123');
    //     }
    // }else{
    //     return res.status(401).send('Invalid User');
    // }        
    
   
});
// ----------------------------------End-------------------------------------------

// ---------------------------------Start-------------------------------------------
// Function      : to get saved logo
// Params        : filename
// Returns       : image
// Author        : Yasir Poongadan
// Date          : 12-01-2018
// Last Modified : 12-01-2018, Yasir Poongadan
// Desc          : to show logo

router.get('/logo/:id', function (req, res, next) {
    Images.findOne({file_name : req.params.id}, function (err, img) {
      if (err) return next(err);
     // console.log(img);
      res.set("Content-Type", img.logo.contentType);
    //   res.contentType(img.logo.contentType);
      res.send(img.logo.data);
    });
  });

// ----------------------------------End-------------------------------------------


// ---------------------------------Start-------------------------------------------
// Function      : decodeBase64Image
// Params        : base64encoded image
// Returns       : image type, extension, data
// Author        : Yasir Poongadan
// Date          : 12-01-2018
// Last Modified : 12-01-2018, Yasir Poongadan
// Desc          : for decoding base64encoded image

function decodeBase64Image(dataString) {
    console.log(dataString);
     var matches = dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
     console.log(matches);
     var response = {};

     if (matches.length !== 3) 
     {
       return new Error('Invalid input string');
     }

     response.type = matches[1];
     ext = matches[1].split("/");
     response.ext = ext[1];
     response.data = new Buffer(matches[2], 'base64');

     return response;
}   
// ----------------------------------End-------------------------------------------


// ---------------------------------Start-------------------------------------------
// Function      : get-my-users
// Params        : 
// Returns       : get a company's users
// Author        : Jooshifa
// Date          : 04-01-2018
// Last Modified : 04-01-2018, Jooshifa, 12-01-2018 Yasir Poongadan
// Desc          : to get users of a purticular company whoes not blocked by admin and deleted

router.get('/get-my-users',(req,res,next)=>{
// if (req.headers && req.headers.authorization) {
//     var authorization = req.headers.authorization.substring(4), decoded;
//     try {
//          decoded = jwt.verify(authorization, config.secret);
//          var cmp_id  = decoded._id;
              cmp_id = "5a4b61e2a2f0028c1a46274a";
              // Company.find({ users: {$elemMatch : {delete_status: false, admin_block : false}}},(err,companyUsers )=>{
              //     console.log(companyUsers)
              // })
              // Company.find({_id:cmp_id},{users:{$elemMatch : {delete_status:false}}},(err,companyUsers)=>{
              Company.find({_id:cmp_id},(err,companyUsers)=>{
                  // console.log(companyUsers)
                  var users = [];
                  companyUsers.forEach(element => {
                      element.users.forEach((item, index) => {
                          if(item.delete_status == false && item.admin_block == false){
                              users.push({
                                  email: item.email,
                                  id :item._id,
                                  block_req_status : item.block_req_status,
                                  item : item
                              });
                          }
                      });
                  });
  
                  if(err) {
                      throw err;
         
                  }else{
                      return res.json(users);
                  }
              });
//      } catch (e) {
//         return res.status(401).send('unauthorized 123');
//     }
// }else{
//     return res.status(401).send('Invalid User');
// }        
            
     }); 
// ----------------------------------End-----------------------------------



router.get('/getsingleGroupuser/:id',(req,res,next)=>{
    cmp_id = "5a4b61e2a2f0028c1a46274a";
    array=[];
    Company.findOne({_id  :cmp_id }, (err,company)=>{
        company.users.forEach(companyUsers=>{
            companyUsers.group.forEach(userGroup=>{
                if(userGroup.g_id == req.params.id){
                     array.push(companyUsers.email);
                }
                
            })
            
        })
            if(err){
                res.json({success: false, msg : "Failed, somthing went wrong "}); 
            }
            else{
                return res.json(array);
            }
        // console.log(array);
        // console.log(company);
    })

    });


// ---------------------------------Start-------------------------------------------
// Function      : getUsersInAGroups
// Params        : group id
// Returns       : get a company's users within the group
// Author        : Yasir Poongadan
// Date          : 15-01-2018
// Last Modified : 15-01-2018 Yasir Poongadan
// Desc          : to get users of a purticular Group of a company whoes not blocked by admin and deleted

router.get('/getUsersInAGroups/:id',(req,res,next)=>{
    cmp_id = "5a4b61e2a2f0028c1a46274a";
    array=[];
    Company.findOne({_id  :cmp_id }, (err,company)=>{
        company.users.forEach(companyUsers=>{
            if(companyUsers.delete_status == false && companyUsers.admin_block == false){
                companyUsers.group.forEach(userGroup=>{
                    if(userGroup.g_id == req.params.id){
                        companyUsers.id = companyUsers._id;
                        array.push(companyUsers);
                    }
                    
                })
            }
        })
            if(err){
                res.json({success: false, msg : "Failed, somthing went wrong "}); 
            }
            else{
                return res.json(array);
            }
        // console.log(array);
        // console.log(company);
    }).lean();

    });
    

// ----------------------------------End-------------------------------------------

// ---------------------------------Start-------------------------------------------
// Function      : Invite Users
// Params        : users list and survey id
// Returns       : get a company's users within the group
// Author        : Yasir Poongadan
// Date          : 15-01-2018
// Last Modified : 15-01-2018 Yasir Poongadan
// Desc          : to get users of a purticular Group of a company whoes not blocked by admin and deleted

router.post('/invite-users',(req,res,next)=>{
    console.log(req.body)
    // if (req.headers && req.headers.authorization) {
    //     var authorization = req.headers.authorization.substring(4), decoded;
    //     try {
    //          decoded = jwt.verify(authorization, config.secret);
    //          var cmp_id  = decoded._id;
                //companyName = decoded.organization
                cmp_id = "5a4b61e2a2f0028c1a46274a";
                companyName = "Symptots"
                //console.log(req.body);
                isErr = false;
                errMsg = '';
                if(!req.body.survey || !req.body.survey._id){
                    errMsg = "Failed, Please Save survey before invite";
                    isErr = true;
                }
                if(!isErr && !req.body.users){
                    errMsg = "Failed, please select atleast One Email";
                    isErr = true;
                }
                if(!isErr && req.body.users.length ==0){
                    errMsg = "Failed, please select atleast One Email";
                    isErr = true;
                }

                if(!isErr){

                    let invUser = [];

                    req.body.users.forEach((user, index) => {

                        imgCode = new String(new Date().getTime()) +'_'+  (Math.floor(100000 + Math.random() * 900000));
                        info = {
                            cmp_user_id:user.id,
                            email: user.email,
                            img_read_code: imgCode
                        }
                        invUser.push(info);
                    
                    });

                    Survey.findOneAndUpdate({"_id" : req.body.survey._id},
                    {
                        $pushAll:{"inv_users" : invUser}
                    },
                    { new : true },
                    (err, survey)=>{
                        if(err){
                            res.json({success: false, msg : "Failed, somthing went wrong "});
                        }else{
                        // res.json({success: true, msg : "User Updated successfully", company:company});
                            invUser.forEach(user => {
                                data ={
                                    email : user.email,
                                    company_name: companyName,
                                    survey_name: survey.name,
                                    start_date: survey.start_datetime,
                                    end_date: survey.end_datetime,
                                    link: config.siteUrl +'user-response-email/'+ survey._id + '/' + user.cmp_user_id,
                                    imgeLink: config.siteUrl +'company/show-mail-image/' + user.img_read_code
                                } 
                                emailTemplate.sendInvitationMail(data);
                            }); 
                            res.json({success: true, msg : "User Invited successfully"});
                      
                        }
                    });

                    console.log(invUser);

                }else{
                    res.json({success: false, msg : errMsg});
                }
    //      } catch (e) {
    //         return res.status(401).send('unauthorized 123');
    //     }
    // }else{
    //     return res.status(401).send('Invalid User');
    // }   
    });
// ----------------------------------End-------------------------------------------  


// ---------------------------------Start-------------------------------------------
// Function      : Invite Users
// Params        : users list and survey id
// Returns       : get a company's users within the group
// Author        : Yasir Poongadan
// Date          : 15-01-2018
// Last Modified : 15-01-2018 Yasir Poongadan
// Desc          : to get users of a purticular Group of a company whoes not blocked by admin and deleted

router.get('/show-mail-image/:id',(req,res,next)=>{

   // var ip = req.header['x-forwarded-for'] || req.connection.remoteAddress;
    var ip = "59.92.233.134";
    // console.log("ip:"+ip);
    var geo = geoip.lookup(ip);
    lat = geo.ll[0];
    long = geo.ll[1];
    console.log(lat);
    console.log(long);
    console.log(geo);
    Survey.findOneAndUpdate({"inv_users.img_read_code" : req.params.id},
    {
        $set:{"inv_users.$.ip" : ip, "inv_users.$.latitude" : lat,"inv_users.$.longitude" : long,"inv_users.$.mail_viewed" : true}
    },
    { new : true },
    (err, survey)=>{
        res.set("Content-Type", 'image/jpeg');
        res.send('/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCAAHAAEDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9/KKKKAP/2Q==');

    });
});

// ----------------------------------End-------------------------------------------


// ---------------------------------Start-------------------------------------------
// Function      : Invite Users
// Params        : users list and survey id
// Returns       : get a company's users within the group
// Author        : Yasir Poongadan
// Date          : 15-01-2018
// Last Modified : 15-01-2018 Yasir Poongadan
// Desc          : to get users of a purticular Group of a company whoes not blocked by admin and deleted

router.get('/get-company-survey',(req,res,next)=>{
    // if (req.headers && req.headers.authorization) {
//     var authorization = req.headers.authorization.substring(4), decoded;
//     try {
//         decoded = jwt.verify(authorization, config.secret);
      //   cmp_id = ObjectId("5a44dc30fdb3ea09ec91ff82");
            cmp_id = "5a4b61e2a2f0028c1a46274a";
            Survey.find({company_id : cmp_id}, (err,survey)=>{
                if(err) {
                    throw err;
                }else{
                    survey.forEach((val,i)=>{
                        dateNow = new Date();
                        if(val.start_datetime < dateNow && val.end_datetime < dateNow){
                            survey[i].status = 'Closed';
                        }
                        if(val.start_datetime < dateNow && val.end_datetime > dateNow){
                            survey[i].status = 'Running';
                        }
                        if(val.start_datetime > dateNow && val.end_datetime > dateNow){
                            survey[i].status = 'Upcoming';
                        }
                    });
                  //  console.log(survey);
                    return res.json(survey);
                }
            }).lean();
//     } catch (e) {
//         return res.status(401).send('unauthorized 123');
//     }
// }else{
//     return res.status(401).send('Invalid User');
// } 
   
});

// ----------------------------------End-------------------------------------------


// ---------------------------------Start-------------------------------------------
// Function      : delete-survey
// Params        : survey id
// Returns       : boolen success or not
// Author        : Yasir Poongadan
// Date          : 16-01-2018
// Last Modified : 16-01-2018 Yasir Poongadan
// Desc          : for deleting a upcoming survey

router.delete('/delete-survey/:id',(req,res,next)=>{
    // if (req.headers && req.headers.authorization) {
//     var authorization = req.headers.authorization.substring(4), decoded;
//     try {
//         decoded = jwt.verify(authorization, config.secret);
      //   cmp_id = ObjectId("5a44dc30fdb3ea09ec91ff82");
            cmp_id = "5a4b61e2a2f0028c1a46274a";

            Survey.remove({ _id: req.params.id, "start_datetime" : {"$gt" : new Date()}}, function(err,removeResult) {
                if (err) {
                    res.json({success: false, msg : "Failed, Somthing went wrong"});
                }else {
                    if (removeResult.result.n == 0) {
                        res.json({success: true, msg : "Failed, Survey already started"});
                    }else{
                        res.json({success: true, msg : "Survey deleted successfully"});
                    }
                }
            });

//     } catch (e) {
//         return res.status(401).send('unauthorized 123');
//     }
// }else{
//     return res.status(401).send('Invalid User');
// } 
   
});

// ----------------------------------End-------------------------------------------

// ---------------------------------Start-------------------------------------------
// Function      : delete-survey
// Params        : survey id
// Returns       : boolen success or not
// Author        : Yasir Poongadan
// Date          : 16-01-2018
// Last Modified : 16-01-2018 Yasir Poongadan
// Desc          : for deleting a upcoming survey

router.get('/get-survey/:id',(req,res,next)=>{
    // if (req.headers && req.headers.authorization) {
//     var authorization = req.headers.authorization.substring(4), decoded;
//     try {
//         decoded = jwt.verify(authorization, config.secret);
      //   cmp_id = ObjectId("5a44dc30fdb3ea09ec91ff82");
            cmp_id = "5a4b61e2a2f0028c1a46274a";
            Survey.findOne({_id:req.params.id,company_id:cmp_id}, (err,survey)=>{
                if(err) {
                    throw err;
                }else{
                    return res.json(survey);
                }
            });

//     } catch (e) {
//         return res.status(401).send('unauthorized 123');
//     }
// }else{
//     return res.status(401).send('Invalid User');
// } 
   
});

// ----------------------------------End-------------------------------------------


// ---------------------------------Start-------------------------------------------
// Function      : create-survey
// Params        : survey details
// Returns       : status and message
// Author        : Yasir Poongadan
// Date          : 02-01-2018
// Last Modified : 02-01-2018, Yasir Poongadan
// Desc          : To create new survey

router.post('/update-survey',(req,res,next)=>{
    // console.log(req.body);
    // if (req.headers && req.headers.authorization) {
    //     var authorization = req.headers.authorization.substring(4), decoded;
    //     try {
    //          decoded = jwt.verify(authorization, config.secret);
                cmp_id = "5a4b61e2a2f0028c1a46274a";
                organization = "symptots";
                // var cmp_id  = decoded._id;
                // var organization  = decoded.organization;
                isErr = false;
                start = '';
                end = '';
                errMsg = '';

                if(req.body.start_date == ''){
                    errMsg = "Failed, Please Select Start Date";
                    isErr = true;
                }else{
                    var start = new Date(req.body.start_date);
                    start.setHours(00,00,00,000);
                }

                if(req.body.end_date == ''){
                    errMsg = "Failed, Please Select End Date";
                    isErr = true;
                }else{
                    var end = new Date(req.body.end_date);
                    end.setHours(23,59,59,999);
                }

                if(!isErr &&  end <= start){
                    errMsg = "Failed, End Date shold be greater than start date";
                    isErr = true;
                }

            
                if(!isErr && myTrim(req.body.name) == ''){
                    errMsg = "Failed, Please Enter Survay Name";
                    isErr = true;
                }
                if(!isErr && myTrim(req.body.category.name) == '' || req.body.category._id == ''){
                    errMsg = "Failed, Please Select Category";
                    isErr = true;
                }
                if(!isErr && !req.body.selectedTheme){
                    errMsg = "Failed, Please Select Any Theme";
                    isErr = true;
                }
                if(!isErr && !req.body.display_type){
                    errMsg = "Failed, Please Select Display Type";
                    isErr = true;
                }
                if(!isErr && !req.body.display_type){
                    errMsg = "Failed, Please Select Display Type";
                    isErr = true;
                }
                if(!isErr && req.body.questions.length == 0){
                    errMsg = "Failed, Please Add Atleast OneQuestion";
                    isErr = true;
                }
            

                var logoName = '';    
                if(req.body.logoSrc != ''){
                    ext = ['gif','png','jpg','jpeg']
                    var base64 = decodeBase64Image(req.body.logoSrc);

                    if(!isErr && ext.indexOf(base64.ext.toLowerCase()) < 0) {
                        errMsg = "Failed, Invalid Logo";
                        isErr = true;
                    }
                    if(!isErr){
                        if(req.body.logo == ''){
                            console.log(base64.type);
                            console.log(base64.ext);
                            logoName = new String(new Date().getTime()) +'_'+  (Math.floor(100000 + Math.random() * 900000)+'.'+ base64.ext);
                            var images = new Images();
                            var buf = new Buffer(base64.data, 'base64');
                            images.file_name = logoName;
                            images.logo.data = buf;
                            images.logo.contentType = base64.type;
                            images.save(function (err) {
                            });
                        }else{
                            var buf = new Buffer(base64.data, 'base64');
                            images = {};
                            images.file_name = req.body.logo;
                            images.logo = {};
                            images.logo.data = buf;
                            images.logo.contentType = base64.type;
                            Images.findOneAndUpdate({file_name : req.body.logo},
                            {
                                $set:images
                            },
                            { new : true },
                            (err, survey)=>{});
                        }
                    }
                }  

                if(!isErr){
                    var survey = {};
                    survey.name = req.body.name;
                    survey.category = {id:req.body.category._id,name:req.body.category.name};
                    survey.company_id = cmp_id;
                    survey.organization = organization;
                    survey.theme = req.body.selectedTheme._id;
                    survey.display_type = req.body.display_type;

                    survey.start_datetime = start;
                    survey.end_datetime = end;
                    if(logoName != ''){
                        survey.logo = logoName;
                    }

                    survey.is_header = req.body.showHeader;
                    survey.is_footer = req.body.showFooter;
                    survey.header_title = req.body.header;
                    survey.footer_title = req.body.footer;

                    survey.header_title = req.body.header;
                    survey.header_title = req.body.header;
                    survey.questions = [];
                    req.body.questions.forEach((qtn, i) => {
                        let question = {
                            question:qtn.question,
                            ans_type:qtn.answerType,
                        }
                        if(qtn.answerType == 'Multiple choice'){
                            question.options = qtn.opts
                        }
                        if(qtn.answerType == 'star rating' && qtn.showStarLabel == true){
                            question.options = qtn.starOpts
                        }
                        survey.questions.push(question);
                    });

                    Survey.findOneAndUpdate({_id: req.body.id},
                    {
                            $set:survey
                    },
                    { new : true },
                    (err, survey)=>{
                        if (err){
                            res.json({success: false, msg : "Failed, Somthing went wrong"});    
                        }else{
                            res.json({success: true, msg : "Survey Updated Successfully"});
                        }
                    });
        
                }else{
                    res.json({success: false, msg : errMsg});
                }
    //      } catch (e) {
    //         return res.status(401).send('unauthorized 123');
    //     }
    // }else{
    //     return res.status(401).send('Invalid User');
    // }        
    
   
});
// ----------------------------------End-------------