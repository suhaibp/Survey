const express = require("express");
const router = express.Router();
async = require("async");
const mongoose = require('mongoose');
const config = require('../config/database');
const OrgType = require("../model/organization_type");
const Industry = require("../model/industry");
const SurveyAttenders = require("../model/survey_attender_type");
const Company = require("../model/company");
const UserGroup = require("../model/user_group");
const Users = require("../model/user");
const Survey = require("../model/survey");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const emailTemplate = require('../template/verification_email');
'use strict';
var returnRouter = function(io) {
// ---------------------------------Start-------------------------------------------
// Function      : Get all organization type
// Params        : 
// Returns       : 
// Author        : Rinsha
// Date          : 27-12-2017
// Last Modified : 27-12-2017, Rinsha
// Desc          : 

router.get('/getAllOrgType', (req, res)=>{
  OrgType.find({}).
    exec(function(err, AllType){
        if(err){
            console.log("Error on Find");
        }
        else{
            res.json(AllType);
        }
    });
});

// ----------------------------------End-------------------------------------------

// ---------------------------------Start-------------------------------------------
// Function      : Get all industry
// Params        : 
// Returns       : 
// Author        : Rinsha
// Date          : 27-12-2017
// Last Modified : 27-12-2017, Rinsha
// Desc          : 

router.get('/getAllIndustry', (req, res)=>{
  Industry.find({}).
    exec(function(err, AllIndustry){
        if(err){
            console.log("Error on Find");
        }
        else{
            res.json(AllIndustry);
        }
    });
});

// ----------------------------------End-------------------------------------------

// ---------------------------------Start-------------------------------------------
// Function      : Get all survey attenders
// Params        : 
// Returns       : 
// Author        : Rinsha
// Date          : 27-12-2017
// Last Modified : 27-12-2017, Rinsha
// Desc          : 

router.get('/getAllSurveyAttenders', (req, res)=>{
    SurveyAttenders.find({}).
    exec(function(err, AllAttenders){
        if(err){
            console.log("Error on Find");
        }
        else{
            res.json(AllAttenders);
        }
    });
});

// ----------------------------------End-------------------------------------------

// ---------------------------------Start-------------------------------------------
// Function      : Registration
// Params        : Company data from the form
// Returns       : 
// Author        : Rinsha
// Date          : 29-12-2017
// Last Modified : 29-12-2017, Rinsha
// Desc          : 

router.post('/register', (req, res)=>{
    // console.log(req.body);
    let newCompany = new Company({
        organization: req.body.organization,
        organization_type : {id : req.body.organization_type._id, name :req.body.organization_type.name },
        industry : {id : req.body.industry._id, name :req.body.industry.name },
        location : req.body.location,
        company_strength : req.body.company_strength,
        verification_code : req.body.verification_code,
        contact_person_fname : req.body.contact_person_fname,
        contact_person_lname : req.body.contact_person_lname,
        contact_person_email : req.body.contact_person_email,
        contact_no : req.body.contact_no,
        job_role : req.body.job_role,
        job_level : req.body.job_level,
        password : req.body.password,
        survey_attenders : req.body.survey_attenders,
    });
    Company.find({ contact_person_email: req.body.contact_person_email} , function(err, doc){
        if(doc.length!=0){
            res.json({success: false, msg : "Failed"});
        }
        else{
            Company.addCompany(newCompany,(err, insertedCompany)=>{
                if(err){
                    console.log("Error " + err);
                }else{
                    emailTemplate.sendVerificationMail(req.body.contact_person_email, req.body.contact_person_fname, req.body.password, req.body.verification_code);
                    io.sockets.emit("Not Verified", {
                    });
                    res.json({success: true, msg : "Company registered, Redirecting..."});
                }
            });
        }
    });
});

// ----------------------------------End-------------------------------------------

// ---------------------------------Start-------------------------------------------
// Function      : Company verification
// Params        : verification id
// Returns       : 
// Author        : Rinsha
// Date          : 29-12-2017
// Last Modified : 29-12-2017, Rinsha
// Desc          : 

router.get('/companyVerification/:id', function(req, res){
    Company.findOneAndUpdate({verification_code : req.params.id, cmp_status : "Not Verified"}, 
        { $set: { cmp_status: "Trail", is_profile_completed : true } }, 
        { new: true }, 
        function(err, doc) {
            if(doc==null){
                return res.json({success:false, msg: 'Company Not verified'});
            }
            else{
                io.sockets.emit("Trail", {
                });
                return res.json({success:true, msg: 'Company verified'});
            }
        
        });
});

// ----------------------------------End-------------------------------------------

// ---------------------------------Start-------------------------------------------
// Function      : Get company details by id
// Params        : id
// Returns       : company details
// Author        : Rinsha
// Date          : 02-1-2018
// Last Modified : 02-1-2018, Rinsha
// Desc          : 

router.get('/getCompanyDetails/:id', function(req, res){
    Company.findById(req.params.id, function(err, doc) {
            if(err){
                throw err;
            }
            else{
                return res.json(doc);
            }
        });
    });

// ----------------------------------End-------------------------------------------

// ---------------------------------Start-------------------------------------------
// Function      : Generate token
// Params        : company id
// Returns       : jwt token
// Author        : Rinsha
// Date          : 28-12-2017
// Last Modified : 28-12-2017, Rinsha
// Desc          : 

router.get('/generateToken/:id', function(req, res){
    Company.findOne({"_id":req.params.id}, function(err, company) {
            if(err){
                throw err;
            }
            const token = jwt.sign(company, config.secret,{
                expiresIn: 60400 // sec 1 week
            });
            return res.json({
                success:true, 
                token : 'JWT '+ token,
                company:{
                    id:company._id,
                    role: company.role,
                }
            });
    }).lean();
});

// ----------------------------------End-------------------------------------------

// ---------------------------------Start-------------------------------------------
// Function      : Register additional information 
// Params        : Company id and data from the form
// Returns       : 
// Author        : Rinsha
// Date          : 03-01-2018
// Last Modified : 03-01-2018, Rinsha
// Desc          : 

router.post('/registerAdditnInfo/:id', (req, res)=>{
    let newCompany = {
        organization: req.body.organization,
        organization_type : {id : req.body.organization_type._id, name :req.body.organization_type.name },
        industry : {id : req.body.industry._id, name :req.body.industry.name },
        location : req.body.location,
        company_strength : req.body.company_strength,
        contact_no : req.body.contact_no,
        job_role : req.body.job_role,
        job_level : req.body.job_level,
        survey_attenders : req.body.survey_attenders,
        is_profile_completed : true,
    };
    Company.findByIdAndUpdate(req.params.id ,
        { $set: newCompany }, 
        { new: true }, 
        function(err, doc){ 
            if(doc==null){
                return res.json({success:false, msg: 'Cant update Company'});
            }
            else{
                if(doc.cmp_status == "Not Verified"){
                   io.sockets.emit("Trail", {
                    });
                }
                return res.json({success:true, msg: 'Update Company'});
            }
        });
});

// ----------------------------------End-------------------------------------------

// ---------------------------------Start-------------------------------------------
// Function      : Login
// Params        : username and password
// Returns       : token, company details and company status
// Author        : Rinsha
// Date          : 01-1-2018
// Last Modified : 01-1-2018, Rinsha
// Desc          : 

router.post('/authenticate', (req, res)=>{
    const email = req.body.contact_person_email;
    const password = req.body.password;
    Company.findOne({contact_person_email : email}, (err, company)=>{
        if(err){
            throw err;
        }
        if(!company){
            return res.json({success:false, msg: 'User Not found'});
        }
        Company.comparePassword(password, company.password, (err, isMatch)=>{
            if(err){
                throw err;
            }
            if(isMatch){
                if(company.block_status == true){
                    return res.json({success:false, msg: 'Account blocked'});
                }
                if(company.delete_status == true){
                    return res.json({success:false, msg: 'Account deleted'});
                }
                if(company.is_profile_completed == false){
                    return res.json({success:false, msg: 'Company not verified'});
                }
                else if(company.block_status == false && company.delete_status == false && company.is_profile_completed == true){
                    const token = jwt.sign(company, config.secret,{
                        expiresIn: 60400 // sec 1 week
                    });
                        return res.json({
                        success:true, 
                        token : 'JWT '+ token,
                        company:{
                            id:company._id,
                            role: company.role,
                            status : company.cmp_status
                        }
                        });
                }
            }else{
                return res.json({success:false, msg: 'Wrong Password'});
            }
        });
    }).lean();
});

// ----------------------------------End-------------------------------------------

// ---------------------------------Start-------------------------------------------
// Function      : Subscribe
// Params        : 
// Returns       : 
// Author        : Rinsha
// Date          : 03-1-2018
// Last Modified : 03-1-2018, Rinsha
// Desc          : 

router.get('/subscribe', passport.authenticate('jwt',{session:false}), function(req, res){
    if (req.headers && req.headers.authorization) {
        var authorization = req.headers.authorization.substring(4),
         decoded;
                decoded = jwt.verify(authorization, config.secret);
                Company.findOneAndUpdate({_id : decoded._id},
                        { $set: { cmp_status: "Subscribed"} }, 
                        { new : true },
                        (err, company)=>{
                            if(err){
                                 return res.json({success: false, msg : "Failed, went somthing wrong "});
                            }else{
                                io.sockets.emit("Subscribed", {
                                });
                                return res.json({success: true, msg : "Success "});
                            }
                        });
    }else{
        return res.status(401).send('Invalid User');
    }   
});
// ----------------------------------End-------------------------------------------

// ---------------------------------Start-------------------------------------------
// Function      : Get logged user details
// Params        : 
// Returns       : get details of logged in entity
// Author        : Rinsha
// Date          : 03-01-2018
// Last Modified : 03-01-2018, Rinsha
// Desc          : 

router.get('/getLoggedinCompany',(req,res,next)=>{
    if (req.headers && req.headers.authorization) {
        var authorization = req.headers.authorization.substring(4),
            decoded;
            try {
                decoded = jwt.verify(authorization, config.secret);
                res.json(decoded);
            } catch (e) {
                return res.json({success:false, msg: 'Invalid User'});
            }
    }else{
        return res.json({success:false, msg: 'Invalid User'});
    }
});

// ----------------------------------End-------------------------------------------


// ---------------------------------Start-------------------------------------------
// Function      : Get company details
// Params        : 
// Returns       : Login company details
// Author        : Rinsha
// Date          : 04-1-2018
// Last Modified : 04-1-2018, Rinsha
// Desc          : 

router.get('/getCompanyDetails', passport.authenticate('jwt',{session:false}), function(req, res){
    if (req.headers && req.headers.authorization) {
        var authorization = req.headers.authorization.substring(4),
         decoded;
                decoded = jwt.verify(authorization, config.secret);
                Company.findOne({_id : decoded._id}, (err, company)=>{
                    if(err){
                            throw err;
                    }else{
                        res.json(company);
                    }
                });
    }else{
        return res.status(401).send('Invalid User');
    }   
});
// ----------------------------------End-------------------------------------------

// ---------------------------------Start-------------------------------------------
// Function      : Update profile
// Params        : Data from form
// Returns       : 
// Author        : Rinsha
// Date          : 03-1-2018
// Last Modified : 03-1-2018, Rinsha
// Desc          : 

router.post('/updateCompany', passport.authenticate('jwt',{session:false}), function(req, res){
    if (req.headers && req.headers.authorization) {
        var authorization = req.headers.authorization.substring(4),
         decoded;
                decoded = jwt.verify(authorization, config.secret);
                let newCompany = {
                    organization: req.body.organization,
                    organization_type : {id : req.body.organization_type._id, name :req.body.organization_type.name },
                    industry : {id : req.body.industry._id, name :req.body.industry.name },
                    location : req.body.location,
                    company_strength : req.body.company_strength,
                    contact_no : req.body.contact_no,
                    job_role : req.body.job_role,
                    job_level : req.body.job_level,
                    survey_attenders : req.body.survey_attenders,
                };
                Company.findOneAndUpdate({_id : decoded._id},
                    { $set: newCompany }, 
                    { new: true }, 
                    (err, company)=>{
                    if(err){
                            throw err;
                    }else if(company==null){
                        return res.json({success:false, msg: 'Cant update Company'});
                    }
                    else{
                        return res.json({success:true, msg: 'Update Company'});
                    }
                });
    }else{
        return res.status(401).send('Invalid User');
    }   
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

router.get('/get-all-groups', passport.authenticate('jwt',{session:false}), (req,res,next)=>{
    if (req.headers && req.headers.authorization) {
    var authorization = req.headers.authorization.substring(4), decoded;
    try {
        decoded = jwt.verify(authorization, config.secret);
        // cmp_id = "5a4b61e2a2f0028c1a46274a";
        UserGroup.find({cmp_id:decoded._id}, (err,userGroup)=>{
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
      } catch (e) {
        return res.status(401).send('unauthorized 123');
    }
}else{
    return res.status(401).send('Invalid User');
} 
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

router.post('/add-user-group', passport.authenticate('jwt',{session:false}),(req,res,next)=>{
    
    if (req.headers && req.headers.authorization) {
        var authorization = req.headers.authorization.substring(4), decoded;
        // try {
            decoded = jwt.verify(authorization, config.secret);
            // cmp_id = ObjectId("5a44dc30fdb3ea09ec91ff82");
            // cmp_id = "5a4b61e2a2f0028c1a46274a";
            // var cmp_id  = decoded._id;
            console.log(req.body.group);
            UserGroup.find({name : req.body.group, cmp_id: decoded._id}, function (err, docs) {
              //  console.log(docs);
                if (docs.length){
                    res.json({success: false, msg : "Group Already Exists"});
                }else{
                    var userGroup = new UserGroup();
                    userGroup.name = req.body.group;
                    userGroup.cmp_id = decoded._id;
                    userGroup.save(function(err,insertedGroup){
                        res.json({success: true, msg : "Group created Successfully",data : insertedGroup});
                    });
                }
            });
        // } catch (e) {
        //     return res.status(401).send('unauthorized 123');
        // }
    }else{
        return res.status(401).send('Invalid User');
    }        
    
   
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

router.post('/add-users', passport.authenticate('jwt',{session:false}), (req,res,next)=>{
    
    if (req.headers && req.headers.authorization) {
        var authorization = req.headers.authorization.substring(4), decoded;
        // try {
            decoded = jwt.verify(authorization, config.secret);
            // cmp_id = "5a4b61e2a2f0028c1a46274a";
            var cmp_id  = decoded._id;
                var isErr = false;
                var errMsg = '';
                if(req.body.email.length == 0){
                    res.json({success: false, msg : "No item to insert"});
                }else{
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
                }
        // } catch (e) {
        //     return res.status(401).send('unauthorized 123');
        // }
    }else{
        return res.status(401).send('Invalid User');
    }        
    
   
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
    if (req.headers && req.headers.authorization) {
    var authorization = req.headers.authorization.substring(4), decoded;
    try {
        decoded = jwt.verify(authorization, config.secret);
        // cmp_id = ObjectId("5a44dc30fdb3ea09ec91ff82");
        // cmp_id = "5a4b61e2a2f0028c1a46274a";
        Company.findOne({_id:decoded._id}, (err,company)=>{
            if(err) {
                throw err;
            }else{
                return res.json(company);
            }
        });
      } catch (e) {
        return res.status(401).send('unauthorized 123');
    }
}else{
    return res.status(401).send('Invalid User');
} 
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

router.put('/update-users', passport.authenticate('jwt',{session:false}), (req,res,next)=>{
    
    if (req.headers && req.headers.authorization) {
        var authorization = req.headers.authorization.substring(4), decoded;
        try {
            decoded = jwt.verify(authorization, config.secret);
            // cmp_id = "5a4b61e2a2f0028c1a46274a";
            var cmp_id  = decoded._id;
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

        } catch (e) {
            return res.status(401).send('unauthorized 123');
        }
    }else{
        return res.status(401).send('Invalid User');
    }        
    
   
});
// ----------------------------------End-------------------------------------------


// ---------------------------------Start-------------------------------------------
// Function      : Get user email 
// Params        : company user id
// Returns       : user email
// Author        : Rinsha
// Date          : 05-01-2018
// Last Modified : 05-01-2018, Rinsha
// Desc          : 

router.get('/getUserEmailByID/:id', function(req, res){
    Company.find({},{users :{ $elemMatch : { _id:req.params.id}  }}  , function(err, company) {
            if(err){
                throw err;
            }
            else{
                company.forEach(element =>{
                    if(element.users.length > 0 && typeof element.users !== 'undefined'){
                        res.json(element.users[0].email);
                    }
                });
            }
    });
});

// ----------------------------------End-------------------------------------------

// ---------------------------------Start-------------------------------------------
// Function      : change mail response status 
// Params        : company user id and survey id
// Returns       : 
// Author        : Rinsha
// Date          : 09-01-2018
// Last Modified : 09-01-2018, Rinsha
// Desc          : change mail response status when the user click the link in email

router.post('/changeMailResponseStatus/:id', (req, res)=>{
    Survey.findOneAndUpdate({ _id :req.params.id, "inv_users.cmp_user_id" : req.body.userId },
        { $set: {"inv_users.$.mail_responsed" : true } }, 
        { new: true }, 
        function(err, doc){ 
            if(doc==null){
                return res.json({success:false, msg: 'Cant update Company'});
            }
            else{
                io.sockets.emit("Mail Responsed", {
                    survey_id : req.params.id
                });
                return res.json({success:true, msg: 'Update Company'});
            }
        });
});

// ----------------------------------End-------------------------------------------

// ---------------------------------Start-------------------------------------------
// Function      : get all Mail responsed users
// Params        : 
// Returns       : count of mail responsed users
// Author        : Rinsha
// Date          : 10-1-2018
// Last Modified : 11-1-2018, Rinsha
// Desc          : 

router.get('/getMailResponseCount/:id', passport.authenticate('jwt',{session:false}), function(req, res){
    if (req.headers && req.headers.authorization) {
        var authorization = req.headers.authorization.substring(4),
         decoded;
                decoded = jwt.verify(authorization, config.secret);
                decoded_id = mongoose.Types.ObjectId(decoded._id);
                match = { "company_id": decoded_id};
                if(req.params.id != 'undefined'){
                    survey_id = mongoose.Types.ObjectId(req.params.id);
                    match = { "company_id": decoded_id, _id : survey_id};
                }
                Survey.aggregate([
                        { $match: match },{"$group" : {_id:"$inv_users", count:{$sum:1}}}]).exec((err, surveys) => {
                            if(err){
                                 return res.json({success: false, msg : "Failed, went somthing wrong "});
                            }else{
                                count = 0;
                                surveys.forEach(survey =>{  
                                    survey._id.forEach(MailResponse => {
                                        if(MailResponse.survey_completed == false && MailResponse.mail_responsed == true ){
                                            count++;
                                        }
                                    });
                                });
                                return res.json(count);
                            }
                        });
    }else{
        return res.status(401).send('Invalid User');
    }   
});
// ----------------------------------End-------------------------------------------

// ---------------------------------Start-------------------------------------------
// Function      : get all Mail viewed users
// Params        : 
// Returns       : count of mail viewed users
// Author        : Rinsha
// Date          : 10-1-2018
// Last Modified : 11-1-2018, Rinsha
// Desc          : 

router.get('/getMailViewedCount/:id', passport.authenticate('jwt',{session:false}), function(req, res){
    if (req.headers && req.headers.authorization) {
        var authorization = req.headers.authorization.substring(4),
         decoded;
                decoded = jwt.verify(authorization, config.secret);
                decoded_id = mongoose.Types.ObjectId(decoded._id);
                match = { "company_id": decoded_id};
                if(req.params.id != 'undefined'){
                    survey_id = mongoose.Types.ObjectId(req.params.id);
                    match = { "company_id": decoded_id, _id : survey_id};
                }
                Survey.aggregate([
                        { $match: match },{"$group" : {_id:"$inv_users", count:{$sum:1}}}]).exec((err, surveys) => {
                            if(err){
                                 return res.json({success: false, msg : "Failed, went somthing wrong "});
                            }else{
                                count = 0;
                                surveys.forEach(survey =>{  
                                    survey._id.forEach(mailViewed => {
                                        if(mailViewed.mail_responsed == false && mailViewed.mail_viewed == true){
                                            count++;
                                        }
                                    });
                                });
                                return res.json(count);
                            }
                        });
    }else{
        return res.status(401).send('Invalid User');
    }   
});
// ----------------------------------End-------------------------------------------

// ---------------------------------Start-------------------------------------------
// Function      : get all survey completed users
// Params        : 
// Returns       : count of survey completed users
// Author        : Rinsha
// Date          : 10-1-2018
// Last Modified : 11-1-2018, Rinsha
// Desc          : 

router.get('/getSurveyCompletedCount/:id', passport.authenticate('jwt',{session:false}), function(req, res){
    if (req.headers && req.headers.authorization) {
        var authorization = req.headers.authorization.substring(4),
         decoded;
                decoded = jwt.verify(authorization, config.secret);
                // Survey.find({company_id : decoded._id, "inv_users.survey_completed" : true}, (err, survey)=>{
                decoded_id = mongoose.Types.ObjectId(decoded._id);
                match = { "company_id": decoded_id};
                if(req.params.id != 'undefined'){
                    survey_id = mongoose.Types.ObjectId(req.params.id);
                    match = { "company_id": decoded_id, _id : survey_id};
                }
                Survey.aggregate([
                        { $match: match},{"$group" : {_id:"$inv_users", count:{$sum:1}}}]).exec((err, surveys) => {
                            if(err){
                                 return res.json({success: false, msg : "Failed, went somthing wrong "});
                            }else{
                                count = 0;
                                surveys.forEach(survey =>{  
                                    survey._id.forEach(surveyCompleted => {
                                        if(surveyCompleted.survey_completed == true){
                                            count++;
                                        }
                                    });
                                });
                                return res.json(count);
                            }
                        });
    }else{
        return res.status(401).send('Invalid User');
    }   
});
// ----------------------------------End-------------------------------------------

// ---------------------------------Start-------------------------------------------
// Function      : get all invited users
// Params        : 
// Returns       : count of invited users
// Author        : Rinsha
// Date          : 10-1-2018
// Last Modified : 11-1-2018, Rinsha
// Desc          : 

router.get('/getInvitedUserCount/:id', passport.authenticate('jwt',{session:false}), function(req, res){
    if (req.headers && req.headers.authorization) {
        var authorization = req.headers.authorization.substring(4),
         decoded;
         email = [];
                decoded = jwt.verify(authorization, config.secret);
                    decoded_id = mongoose.Types.ObjectId(decoded._id);
                    match = { "company_id": decoded_id};
                    if(req.params.id != 'undefined'){
                        survey_id = mongoose.Types.ObjectId(req.params.id);
                        match = { "company_id": decoded_id, _id : survey_id};
                    }
                    Survey.aggregate([
                        { $match: match},{"$group" : {_id:"$inv_users", count:{$sum:1}}}]).exec((err, surveys) => {
                            if(err){
                                 return res.json({success: false, msg : "Failed, went somthing wrong "});
                            }else{
                                count = 0;
                                surveys.forEach(survey => {
                                    survey._id.forEach(invitedUsers =>{
                                        email.push(invitedUsers.email);
                                    });
                                });
                                return res.json(email.length);
                            }
                        });
                    
    }else{
        return res.status(401).send('Invalid User');
    }   
});
// ----------------------------------End-------------------------------------------

// ---------------------------------Start-------------------------------------------
// Function      : google login
// Params        : email id and google id
// Returns       : token and status
// Author        : Rinsha
// Date          : 11-1-2018
// Last Modified : 11-1-2018, Rinsha
// Desc          : 

router.post('/googleLogin', function(req, res){
    Company.findOne({"contact_person_email":req.body.email, "google.id" : req.body.googleId}, function(err, company) {
            if(err){
                return res.json({"success" : false});
            }
            if(company){
                const token = jwt.sign(company, config.secret,{
                    expiresIn: 60400 // sec 1 week
                });
                return res.json({
                    success:true, 
                    token : 'JWT '+ token,
                    company:{
                        id:company._id,
                        role: company.role,
                        status : company.cmp_status
                    }
                });
            }
            else{
                return res.json({"success" : false, "msg" : "No such company"});
            }
    }).lean();
});
// ----------------------------------End-------------------------------------------


// ---------------------------------Start-------------------------------------------
// Function      : facebook login
// Params        : email id and facebook id
// Returns       : token and status
// Author        : Rinsha
// Date          : 11-1-2018
// Last Modified : 11-1-2018, Rinsha
// Desc          : 

router.post('/facebookLogin', function(req, res){
    Company.findOne({"contact_person_email":req.body.email, "facebook.id" : req.body.faceBookId}, function(err, company) {
        if(err){
            return res.json({"success" : false});
        }
        if(company){
            const token = jwt.sign(company, config.secret,{
                expiresIn: 60400 // sec 1 week
            });
            return res.json({
                success:true, 
                token : 'JWT '+ token,
                company:{
                    id:company._id,
                    role: company.role,
                    status : company.cmp_status
                }
            });
        }
        else{
            return res.json({"success" : false, "msg" : "No such company"});
        }
    }).lean();
});
// ----------------------------------End-------------------------------------------

// ---------------------------------Start-------------------------------------------
// Function      : get all survey
// Params        : 
// Returns       : count of mail responsed users, mail viewed users
// Author        : Rinsha
// Date          : 16-1-2018
// Last Modified : 16-1-2018, Rinsha
// Desc          : 

router.get('/getAllSurvey', passport.authenticate('jwt',{session:false}), function(req, res){
    if (req.headers && req.headers.authorization) {
        var authorization = req.headers.authorization.substring(4),
         decoded;
                decoded = jwt.verify(authorization, config.secret);
                Survey.find({company_id : decoded._id}, (err, survey)=>{
                            if(err){
                                 return res.json({success: false, msg : "Failed, went somthing wrong "});
                            }else{
                                return res.json(survey);
                            }
                        });
    }else{
        return res.status(401).send('Invalid User');
    }   
});
// ----------------------------------End-------------------------------------------

module.exports = router;

return router;
}
module.exports = returnRouter;