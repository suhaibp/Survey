const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const config = require('../config/database');
const Theme = require("../model/theme");
const Font = require("../model/font_family");
const FontSizes = require("../model/font_size");
const Survey = require("../model/survey");

const UserGroup = require("../model/user_group");
const Company = require("../model/company");
const Users = require("../model/user");
const SurveyCategory = require("../model/survey_category");
const AnswerType = require("../model/answer_type");
async = require("async");
'use strict';
 
// ---------------------------------Start-------------------------------------------
// Function      : sample
// Params        : sample
// Returns       : sample
// Author        : Rinsha
// Date          : 4-12-2017
// Last Modified : 4-12-2017, Rinsha Desc
// Desc          : sample

// code here

// ----------------------------------End-------------------------------------------


// ---------------------------------Start-------------------------------------------
// Function      : get themes
// Params        : 
// Returns       : list of themes with details
// Author        : Manu Prasad
// Date          : 27-12-2017
// Last Modified : 01-01-2018, Manu Prasad, Desc: Added index no. to show it in the table in angular
// Desc          : routing used to get all the themes from database

router.get('/get-themes',(req,res)=>{
    // console.log('yes');
    Theme.find({}).lean()
    .exec(function(err, res1){
        if(err){
            console.log("Error retrieving polls");
            res.json({
                "status":false
            })
        }else{
            res1.forEach((element, index) => {
                res1[index].indexno = index+1;
            });
            res.json(res1);
        }
    });
});


// ---------------------------------Start-------------------------------------------

// Function      : get fonts
// Params        : 
// Returns       : list of fonts with details
// Author        : Manu Prasad
// Date          : 28-12-2017
// Last Modified : 28-12-2017, Manu Prasad, Desc:
// Desc          : routing used to get all the fonts from database

router.get('/get-fonts',(req,res)=>{
    // console.log('yes');
    Font.find({})
    .exec(function(err, res1){
        if(err){
            console.log("Error retrieving polls");
            res.json({
                "status":false
            })
        }else{
            res.json(res1);
        }
    });
});
// ----------------------------------End-------------------------------------------


// ---------------------------------Start-------------------------------------------

// Function      : get fonts size
// Params        : 
// Returns       : list of fonts sizes with details
// Author        : Manu Prasad
// Date          : 28-12-2017
// Last Modified : 28-12-2017, Manu Prasad, Desc:
// Desc          : routing used to get all the fonts sizes from database

router.get('/get-font-sizes',(req,res)=>{
    // console.log('yes');
    FontSizes.find({})
    .exec(function(err, res1){
        if(err){
            console.log("Error retrieving polls");
            res.json({
                "status":false
            })
        }else{
            res.json(res1);
        }
    });
});
// ----------------------------------End-------------------------------------------


// ---------------------------------Start-------------------------------------------

// Function      : Save Theme
// Params        : 
// Returns       : save theme with all its properties por erro status if error
// Author        : Manu Prasad
// Date          : 29-12-2017
// Last Modified : 29-12-2017, Manu Prasad, Desc:
// Desc          : routing used to save a theme

router.post('/save-theme',(req,res)=>{
    var newTheme = new Theme();
    if(req.body.title != '')
    {
    // if (req.headers && req.headers.authorization) {
        //     var authorization = req.headers.authorization.substring(4), decoded;
        //     try {
        //         decoded = jwt.verify(authorization, config.secret);
            //   cmp_id = ObjectId("5a44dc30fdb3ea09ec91ff82");
            cmp_id = "5a44dcbefdb3ea09ec91ff8f";
            // var cmp_id  = decoded._id;

            Theme.findOne({"cmp_id" : cmp_id,title:req.body.title}, function(err,surveyTheme){
                console.log(req.params.id);
                
                if(surveyTheme){
                    res.json({
                        status:0
                    });
                }
                else if(!surveyTheme){
                    newTheme.title = req.body.title;
                    newTheme.h_font_color = req.body.h_font_color;
                    newTheme.h_font_bold = req.body.h_font_bold;
                    newTheme.h_font_italic = req.body.h_font_italic;
                    newTheme.h_font_family = req.body.h_font_family;
                    newTheme.h_font_size = req.body.h_font_size;
                    newTheme.h_bg_color = req.body.h_bg_color;
                    newTheme.f_font_color = req.body.f_font_color;
                    newTheme.f_font_bold = req.body.f_font_bold;
                    newTheme.f_font_italic = req.body.f_font_italic;
                    newTheme.f_font_family = req.body.f_font_family;
                    newTheme.f_font_size = req.body.f_font_size;
                    newTheme.f_bg_color = req.body.f_bg_color;
                    newTheme.q_font_color = req.body.q_font_color;
                    newTheme.q_font_bold = req.body.q_font_bold;
                    newTheme.q_font_italic = req.body.q_font_italic;
                    newTheme.q_font_family = req.body.q_font_family;
                    newTheme.q_font_size = req.body.q_font_size;
                    newTheme.q_bg_color = req.body.q_bg_color;
                    newTheme.b_bg_color = req.body.body_bg_color;
                    newTheme.progress_text_color = req.body.progress_text_color;
                    newTheme.progress_color = req.body.progress_bar_color;
                    newTheme.cmp_id = cmp_id;
                    
                    // console.log(newTheme);
                    newTheme.save(function(err, insertedTheme){
                        if(err){
                            res.json({status:1})
                        }else{
                            // res.json(insertedTheme);
                            res.json({status:2});
                        }
                    });
                      
                }
            });




    // }
    }
    
});
// ----------------------------------End-------------------------------------------




// ---------------------------------Start-------------------------------------------

// Function      : Delete Theme
// Params        : 
// Returns       : save theme with all its properties por erro status if error
// Author        : Manu Prasad
// Date          : 29-12-2017
// Last Modified : 29-12-2017, Manu Prasad, Desc:
// Desc          : routing used to save a theme

router.delete('/delete-theme/:id',(req,res)=>{
    


    Survey.findOne({"theme.id" : req.params.id}, function(err,surveyTheme){
        console.log(req.params.id);
        
        if(surveyTheme){
            res.json({
                status:0,
                message: "Theme is being used! Try again later."
            })
        }
        else if(!surveyTheme){
            Theme.findByIdAndRemove(req.params.id, function(err, deletedTheme){
                if(err){
                    res.json({
                        status:1,
                        message: "Error in deleting! Try again later."
                    })
                }else{
                    res.json({
                        status:2,
                        message : "Theme deleted!"
                    });
                }
            });
              
        }
    });
    
});
// ----------------------------------End-------------------------------------------


// ---------------------------------Start-------------------------------------------

// Function      : Get Theme
// Params        : 
// Returns       : details of a theme
// Author        : Manu Prasad
// Date          : 1-1-2018
// Last Modified : 1-1-2018, Manu Prasad, Desc:
// Desc          : routing used to get details of a theme

router.get('/get-theme/:id',(req,res)=>{
    


    Theme.findOne({"_id" : req.params.id}, function(err,theme){
        
        if(theme){
            res.json(theme);
        }
        else if(!theme){
            
            res.json({
                status:0,
                message: "Theme not found!"
            })  
        }
    });
    
});
// ----------------------------------End-------------------------------------------


// ---------------------------------Start-------------------------------------------

// Function      : update Theme
// Params        : 
// Returns       : details of a updated theme
// Author        : Manu Prasad
// Date          : 1-1-2018
// Last Modified : 1-1-2018, Manu Prasad, Desc:
// Desc          : routing used to updated details of a theme

router.put('/update-theme/:id',(req,res)=>{
    
    if(req.body.title != '')
    {
        // if (req.headers && req.headers.authorization) {
    //     var authorization = req.headers.authorization.substring(4), decoded;
    //     try {
    //         decoded = jwt.verify(authorization, config.secret);
          //   cmp_id = ObjectId("5a44dc30fdb3ea09ec91ff82");
          cmp_id = "5a44dcbefdb3ea09ec91ff8f";
          // var cmp_id  = decoded._id;
        Theme.findByIdAndUpdate(req.body._id, 
            {
                $set:{
                    "title": req.body.title, 
                    "h_font_color": req.body.h_font_color,
                    "h_font_bold": req.body.h_font_bold,
                    "h_font_italic": req.body.h_font_italic,
                    "h_font_family": req.body.h_font_family,
                    "h_font_size": req.body.h_font_size,
                    "h_bg_color": req.body.h_bg_color,
                    "f_font_color": req.body.f_font_color,
                    "f_font_bold": req.body.f_font_bold,
                    "f_font_italic": req.body.f_font_italic,
                    "f_font_family": req.body.f_font_family,
                    "f_font_size": req.body.f_font_size,
                    "f_bg_color": req.body.f_bg_color,
                    "q_font_color": req.body.q_font_color,
                    "q_font_bold": req.body.q_font_bold,
                    "q_font_italic": req.body.q_font_italic,
                    "q_font_family": req.body.q_font_family,
                    "q_font_size": req.body.q_font_size,
                    "q_bg_color": req.body.q_bg_color,
                    "progress_text_color": req.body.progress_text_color,
                    "progress_color": req.body.progress_color,
                    "b_bg_color": req.body.b_bg_color,
                    "cmp_id": cmp_id
                    // "b_bg_color": true,
                    // "b_bg_color": true,
                    // "b_bg_color": true,
                    // "b_bg_color": true,
    
                }
            },function(err,theme){
            
            if(err){
                res.json({
                    status:0,
                    message: "Error in updating! Try again."
                });
            }
            else {
                
                res.json({
                    status:2,
                    message: "Success!"
                })  
            }
        });
    }else{
        res.json({
            status:1,
            message: "Title is empty!"
        })  
    }
    
// }
});
// ----------------------------------End-------------------------------------------


// ---------------------------------Start-------------------------------------------

// Function      : get Locations(longitude & latitude)
// Params        : 
// Returns       : locations of attended users in a comnpnay
// Author        : Manu Prasad
// Date          : 3-1-2018
// Last Modified : 3-1-2018, Manu Prasad, Desc:
// Desc          : routing used to get locations of attended users in a comnpnay

router.get('/get-locations',(req,res)=>{
    
// if (req.headers && req.headers.authorization) {
    //     var authorization = req.headers.authorization.substring(4), decoded;
    //     try {
    //         decoded = jwt.verify(authorization, config.secret);
          //   cmp_id = ObjectId("5a44dc30fdb3ea09ec91ff82");
          cmp_id = mongoose.Types.ObjectId("5a432162fcaf01ec6274ecc6");
          // var cmp_id  = decoded._id;
          Survey.find({"company_id" : cmp_id})
          .exec(function(err, res1){
              if(err){
                  console.log("Error retrieving polls");
                  res.json({
                      "status":0
                  })
              }else{
                  res.json(res1);
              }
          });
    // Survey.aggregate([
    //     {
    //         "$unwind": "$answers"
    //      },
    //      { "$match" : { "company_id" : cmp_id } },
    //      {
    //         "$group": {
    //             "_id": '$answers',
    //             "count": {"$sum": 1}
    //         }
    //      },
         
    // ],
    // function(err,result){
        
    //     res.json(result)
    // })
// }
});
// ----------------------------------End-------------------------------------------




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
        cmp_id = "5a432162fcaf01ec6274ecc6";
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
        cmp_id = "5a432162fcaf01ec6274ecc6";
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
                    res.json({success: true, msg : "Group created Successfully",data : insertedGroup});
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

// if (req.headers && req.headers.authorization) {
//     var authorization = req.headers.authorization.substring(4), decoded;
//     try {
//         decoded = jwt.verify(authorization, config.secret);
        cmp_id = "5a432162fcaf01ec6274ecc6";
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
    cmp_id = "5a432162fcaf01ec6274ecc6";
    UserGroup.find({cmp_id:cmp_id}, (err,userGroup)=>{
        if(err) {
            throw err;
        }else{
            return res.json(userGroup);
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
    cmp_id = "5a432162fcaf01ec6274ecc6";
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

// if (req.headers && req.headers.authorization) {
//     var authorization = req.headers.authorization.substring(4), decoded;
//     try {
//         decoded = jwt.verify(authorization, config.secret);
        cmp_id = "5a432162fcaf01ec6274ecc6";
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

Theme.find({}, (err,themes)=>{
    if(err) {
        throw err;
    }else{
        return res.json(themes);
    }
});

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
// Function      : get-my-users
// Params        : 
// Returns       : get a company's users
// Author        : Jooshifa
// Date          : 04-01-2018
// Last Modified : 04-01-2018, Jooshifa
// Desc          : to get users of a purticular company whoes not blocked by admin and deleted

router.get('/get-my-users',(req,res,next)=>{
    
              cmp_id = "5a432162fcaf01ec6274ecc6";
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
     });
      
      
  // ----------------------------------End-------------------------------------------


  router.put('/sendblockrequest/:id',function(req,res){
    
           cmp_id = "5a432162fcaf01ec6274ecc6";
           Users.findOne({email : req.body.email},(err,userExist) => {
               if(!userExist){
                   return res.send({success:false, msg: 'This user not registered, Cant Block'});
               }
               else{
                   if(req.body.reason == '' || req.body.reason == null){
                       return res.send({success:false, msg: 'Reason is required'});
                   }
               else{
               Users.findOne({email : req.body.email,"block_request.action_status" : "Pending"},(err,user) => {
               Company.findOne({_id :cmp_id },(err,companys) => {
                       company = [{
                           company_id : cmp_id ,
                           organization :companys.organization ,            
                           email : companys.contact_person_email,
                           reason : req.body.reason,
                           date : Date.now()
                                               
                       }]
                                           // console.log(company)
                       if(user){
                                       
                           Users.findOneAndUpdate({  $and: [{"block_request.action_status" : "Pending"},{email : req.body.email} ] },
                           {
                               $pushAll:{"block_request.$.companies" : company}
                           },
                           { new : true },
                           (err, Block)=>{
                               if(err){
                                   // throw err;
                                   res.json({success: false, msg : "Failed to Block user "});
                               }else{
                                  
                                       Company.findOneAndUpdate({"users.email" : req.body.email},
                                       {
                                           $set:{"users.$.block_req_status" : true}
                                       },
                                       { new : true },
                                       (err, changeBlockStatus)=>{
                                           if(err){
                                               // throw err;
                                               res.json({success: false, msg : "Failed to Block user "});
                                           }else{
                                               io.sockets.emit("requestuser", {
                                                   user_id : req.body.id
                                               });
                                               res.json({success: true, msg : "successfully blocked"});
                                            
                                           }
                                       }); 
                                
                               }
                           }); 
                                               //  block_request.companies.push(company); where status pending
                                       // console.log(Block);
                                   
                       }else{
                           newBlock = { companies :company}
                               Users.findOneAndUpdate({"email" : req.body.email},
                           {
                               $pushAll:{"block_request": newBlock}
                           },
                           { new : true },
                           (err, Block)=>{
                               if(err){
                                   res.json({success: false, msg : "Failed to Block user "});
                               }else{
                                   Company.findOneAndUpdate({"users.email" : req.body.email},
                                       {
                                           $set:{"users.$.block_req_status" : true}
                                       },
                                       { new : true },
                                       (err, changeBlockStatus)=>{
                                           if(err){
                                               // throw err;
                                               res.json({success: false, msg : "Failed to Block user "});
                                           }else{
                                               io.sockets.emit("blockuser", {
                                                   user_id : req.body.id
                                               });
                                               res.json({success: true, msg : "successfully blocked"});
                                            
                                           }
                                       }); 
                                   
                               }
                           }); 
                       }
                       
                   })
               });
            }}
       });
   });

// ---------------------------------Start-------------------------------------------
// Function      : get function 
// Params        : 
// Returns       : 
// Author        : Jooshifa
// Date          : 15-01-2018
// Last Modified : 15-01-2018, Jooshifa
// Desc          : to get all questions in each survey,no of choices,answers of users for each questions and no of responses for each questions

router.get('/getAllQuestions', (req, res)=>{
    mainArray = [];
    options : [];
    // req.params.id = "5a432d81ac62130f16bbf2e6";
    req.params.id = "5a431d73fcaf01ec6274ecbc";
    // cmp_id = "5a4d183719a456bb14913bff";
    cmp_id = "5a432162fcaf01ec6274ecc6";
        Survey.find({company_id : cmp_id}, function(err, survey){
            
                 survey.forEach(eachSurvey=>{
                    if(eachSurvey._id == req.params.id){
                    eachSurvey.questions.forEach((eachQuestions, i)=>{
                        mainArray.push({question : eachQuestions.question, ans_type : eachQuestions.ans_type, options:eachQuestions.options, ans: [] });
                        ans = '';
                                eachQuestions.options.forEach((eachoption,j)=>{
                                    // if(eachAnswers.answer == eachQuestions.options){
                        count = 0;
                        
                                        eachQuestions.answers.forEach(eachanswer => {
                                            if(eachoption == eachanswer.answer || eachanswer.answer == j){
                                                count ++;
                            
                                            }
                                        })  
                                        
                                    // }
                                    mainArray[i].ans.push({value:eachoption,"count":count});
                                    // console.log(eachAnswers);
                                });
                        });
                    }       
            });
       
            // console.log(mainArray);
            return res.json(mainArray);
        
    });
});
// ----------------------------------End-------------------------------------------


module.exports = router;