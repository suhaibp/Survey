const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require("passport");
const jwt = require("jsonwebtoken");
const config = require('../config/database');
const Admin = require("../model/super_admin");
const Company = require("../model/company");
const User = require("../model/user");
const Survey = require("../model/survey");
const Category = require("../model/survey_category");
const OrgType = require("../model/organization_type");
const SurveyAttenders = require("../model/survey_attender_type");
const Industry = require("../model/industry");
const Organization = require("../model/organization_type");
const Attender = require("../model/survey_attender_type");
const UserGroup = require("../model/user_group");
async = require("async");
'use strict';
var returnRouter = function (io) {
    // ---------------------------------Start-------------------------------------------
    // Function      : Admin Login
    // Params        : admin username,admin password
    // Returns       : Token, admin id and role
    // Author        : Rinsha
    // Date          : 27-12-2017
    // Last Modified : 27-12-2017, Rinsha
    // Desc          : Admin login

    router.post('/login', (req, res, next) => {
        const username = req.body.username;
        const password = req.body.password;
        Admin.findOne({ username: username, password: password, role: "admin" }, (err, admin) => {
            if (err) {
                throw err;
            }
            if (admin) {
                const token = jwt.sign(admin, config.secret, {
                    expiresIn: 60400 // sec 1 week
                });
                return res.json({
                    success: true,
                    token: 'JWT ' + token,
                    admin: {
                        id: admin._id,
                        role: admin.role
                    }
                });
            }
            else {
                res.json({ success: false, msg: "Failed" });
            }
        }).lean();
    });

    // ----------------------------------End-------------------------------------------

    // ---------------------------------Start-------------------------------------------
    // Function      : Allcompanies
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 28-12-2017
    // Last Modified : 
    // Desc          : all companies


    router.get('/allcompanies', (req, res, next) => {
        Company.getAllcompanies((err, company) => {
            //  console.log(company);
            if (err) throw err;
            return res.json(company);
        })
    });
    // ----------------------------------End-------------------------------------------

    // ---------------------------------Start-------------------------------------------
    // Function      : Allsubcompanies
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 29-12-2017
    // Last Modified : 
    // Desc          : all subscribedcompanies

    router.get('/allsubcompanies', (req, res, next) => {
        Company.getAllsubcompanies((err, company) => {
            //  console.log(company);
            if (err) throw err;
            return res.json(company);
        })
    });
    // ----------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : Allsubactivecompanies
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 03-01-2018
    // Last Modified : 
    // Desc          : all subscribedactivecompanies

    router.get('/allsubactivecompanies', (req, res, next) => {
        Company.getAllsubactivecompanies((err, company) => {
            //  console.log(company);
            if (err) throw err;
            return res.json(company);
        })
    });
    // ----------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : Allsubblockcompanies
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 03-01-2018
    // Last Modified : 
    // Desc          : all subscribedblockcompanies

    router.get('/allsubblockcompanies', (req, res, next) => {
        Company.getAllsubblockcompanies((err, company) => {
            //  console.log(company);
            if (err) throw err;
            return res.json(company);
        })
    });
    // ----------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : Allsubdeletecompanies
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 03-01-2018
    // Last Modified : 
    // Desc          : all subscribeddeletecompanies

    router.get('/allsubdeletecompanies', (req, res, next) => {
        Company.getAllsubdeletecompanies((err, company) => {
            //  console.log(company);
            if (err) throw err;
            return res.json(company);
        })
    });
    // ----------------------------------End-------------------------------------------


    // ---------------------------------Start-------------------------------------------
    // Function      : Alltrialcompanies
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 29-12-2017
    // Last Modified : 
    // Desc          : all trialcompanies
    //
    router.get('/alltrialcompanies', (req, res, next) => {
        Company.getAlltrialcompanies((err, company) => {
            //  console.log(company);
            if (err) throw err;
            return res.json(company);
        })
    });

    // ----------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : Alltrialactivecompanies
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 03-01-2018
    // Last Modified : 
    // Desc          : all trialactivecompanies

    router.get('/alltrialactivecompanies', (req, res, next) => {
        Company.getAlltrialactivecompanies((err, company) => {
            //  console.log(company);
            if (err) throw err;
            return res.json(company);
        })
    });
    // ----------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : Alltrialblockcompanies
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 03-01-2018
    // Last Modified : 
    // Desc          : all trialblockcompanies

    router.get('/alltrialblockcompanies', (req, res, next) => {
        Company.getAlltrialblockcompanies((err, company) => {
            //  console.log(company);
            if (err) throw err;
            return res.json(company);
        })
    });
    // ----------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : Alltrialdeletecompanies
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 03-01-2018
    // Last Modified : 
    // Desc          : all trialdeletecompanies

    router.get('/alltrialdeletecompanies', (req, res, next) => {
        Company.getAlltrialdeletecompanies((err, company) => {
            //  console.log(company);
            if (err) throw err;
            return res.json(company);
        })
    });
    // ----------------------------------End-------------------------------------------

    // ---------------------------------Start-------------------------------------------
    // Function      : Allexpiredcompanies
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 29-12-2017
    // Last Modified : 
    // Desc          : all expiredcompanies
    //
    router.get('/allexpiredcompanies', (req, res, next) => {
        Company.getAllexpiredcompanies((err, company) => {
            //  console.log(company);
            if (err) throw err;
            return res.json(company);
        })
    });

    // ----------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : Allexpiredactivecompanies
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 03-01-2018
    // Last Modified : 
    // Desc          : all expiredactivecompanies

    router.get('/allexpiredactivecompanies', (req, res, next) => {
        Company.getAllexpiredactivecompanies((err, company) => {
            //  console.log(company);
            if (err) throw err;
            return res.json(company);
        })
    });
    // ----------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : Allexpiredblockcompanies
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 03-01-2018
    // Last Modified : 
    // Desc          : all expiredblockcompanies

    router.get('/allexpiredblockcompanies', (req, res, next) => {
        Company.getAllexpiredblockcompanies((err, company) => {
            //  console.log(company);
            if (err) throw err;
            return res.json(company);
        })
    });
    // ----------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : Allexpireddeletecompanies
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 03-01-2018
    // Last Modified : 
    // Desc          : all expireddeletecompanies

    router.get('/allexpireddeletecompanies', (req, res, next) => {
        Company.getAllexpireddeletecompanies((err, company) => {
            //  console.log(company);
            if (err) throw err;
            return res.json(company);
        })
    });
    // ----------------------------------End-------------------------------------------

    // ---------------------------------Start-------------------------------------------
    // Function      : Allnotverficompanies
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 29-12-2017
    // Last Modified : 
    // Desc          : all notverifiedcompanies
    //
    router.get('/allnotverficompanies', (req, res, next) => {
        Company.getAllnotverficompanies((err, company) => {
            //  console.log(company);
            if (err) throw err;
            return res.json(company);
        })
    });
    // ----------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : Allnotverfiactivecompanies
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 03-01-2018
    // Last Modified : 
    // Desc          : all notverfiactivecompanies

    router.get('/allnotverfiactivecompanies', (req, res, next) => {
        Company.getAllnotverfiactivecompanies((err, company) => {
            //  console.log(company);
            if (err) throw err;
            return res.json(company);
        })
    });
    // ----------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : Allnotverfiblockcompanies
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 03-01-2018
    // Last Modified : 
    // Desc          : all notverfiblockcompanies

    router.get('/allnotverfiblockcompanies', (req, res, next) => {
        Company.getAllnotverfiblockcompanies((err, company) => {
            //  console.log(company);
            if (err) throw err;
            return res.json(company);
        })
    });
    // ----------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : Allnotverfideletecompanies
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 03-01-2018
    // Last Modified : 
    // Desc          : all notverfideletecompanies

    router.get('/allnotverfideletecompanies', (req, res, next) => {
        Company.getAllnotverfideletecompanies((err, company) => {
            //  console.log(company);
            if (err) throw err;
            return res.json(company);
        })
    });
    // ----------------------------------End-------------------------------------------

    // ---------------------------------Start-------------------------------------------
    // Function      : Allactivecompanies
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 29-12-2017
    // Last Modified : 
    // Desc          : all active companies
    //
    router.get('/allactivecompanies', (req, res, next) => {
        Company.getAllactivecompanies((err, company) => {
            //  console.log(company);
            if (err) throw err;
            return res.json(company);
        })
    });
    // ----------------------------------End-------------------------------------------

    // ---------------------------------Start-------------------------------------------
    // Function      : Allblockedcompanies
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 29-12-2017
    // Last Modified : 
    // Desc          : all blockedcompanies
    //
    router.get('/allblockedcompanies', (req, res, next) => {
        Company.getAllblockedcompanies((err, company) => {
            //  console.log(company);
            if (err) throw err;
            return res.json(company);
        })
    });
    // ----------------------------------End-------------------------------------------

    // ---------------------------------Start-------------------------------------------
    // Function      : Alldeletedcompanies
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 29-12-2017
    // Last Modified : 
    // Desc          : all deletedcompanies
    //
    router.get('/alldeletedcompanies', (req, res, next) => {
        Company.getAlldeletedcompanies((err, company) => {
            //  console.log(company);
            if (err) throw err;
            return res.json(company);
        })
    });
    // ----------------------------------End-------------------------------------------

    // ---------------------------------Start-------------------------------------------
    // Function      : deleteCompany
    // Params        : id
    // Returns       : 
    // Author        : sudha
    // Date          : 29-12-2017
    // Last Modified : 
    // Desc          : delete company
    //
    router.delete('/deletecompany/:id', (req, res, next) => {
        Company.deleteCompany(req.params.id, (err, company) => {
            if (err) throw err;
            if (!company) {
                return res.json({ success: false, msg: 'Faild to delete company' });
            } else {
                return res.json({ success: true, msg: 'deleted successfully' });
            }
        })
    });
    // ----------------------------------End-------------------------------------------

    // ---------------------------------Start-------------------------------------------
    // Function      : block company
    // Params        : id
    // Returns       : 
    // Author        : sudha
    // Date          : 29-12-2017
    // Last Modified : 
    // Desc          : block company
    //
    router.put('/blockcompany/:id', (req, res, next) => {
        Company.blockCompany(req.params.id, (err, company) => {
            if (err) throw err;
            if (!company) {
                return res.json({ success: false, msg: 'Faild to block company' });
            } else {
                return res.json({ success: true, msg: 'block successfully' });
            }
        })
    });
    // ----------------------------------End-------------------------------------------

    // ---------------------------------Start-------------------------------------------
    // Function      : unblock company
    // Params        : id
    // Returns       : 
    // Author        : sudha
    // Date          : 29-12-2017
    // Last Modified : 
    // Desc          : unblock company
    //
    router.put('/unblockcompany/:id', (req, res, next) => {
        Company.unblockCompany(req.params.id, (err, company) => {
            if (err) throw err;
            if (!company) {
                return res.json({ success: false, msg: 'Faild to unblock company' });
            } else {
                return res.json({ success: true, msg: 'unblock successfully' });
            }
        })
    });
    // ----------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : all users
    // Params        : id
    // Returns       : 
    // Author        : sudha
    // Date          : 29-12-2017
    // Last Modified : 
    // Desc          : all users
    //
    router.get('/allusers', (req, res, next) => {
        User.getAllusers((err, user) => {
            if (err) throw err;
            return res.json(user);
        })
    });
    // ----------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : all active users
    // Params        : id
    // Returns       : 
    // Author        : sudha
    // Date          : 29-12-2017
    // Last Modified : 
    // Desc          : all active users
    //
    router.get('/allactiveusers', (req, res, next) => {
        User.getAllactiveusers((err, user) => {
            if (err) throw err;
            return res.json(user);
        })
    });
    // ----------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : all block users
    // Params        : id
    // Returns       : 
    // Author        : sudha
    // Date          : 29-12-2017
    // Last Modified : 
    // Desc          : all block users
    //
    router.get('/allblockusers', (req, res, next) => {
        User.getAllblockusers((err, user) => {
            if (err) throw err;
            return res.json(user);
        })
    });
    // ----------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : all delete users
    // Params        : id
    // Returns       : 
    // Author        : sudha
    // Date          : 29-12-2017
    // Last Modified : 
    // Desc          : all delete users

    router.get('/alldeleteusers', (req, res, next) => {
        User.getAlldeleteusers((err, user) => {
            if (err) throw err;
            return res.json(user);
        })
    });
    // ----------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : deleteUser
    // Params        : id
    // Returns       : 
    // Author        : sudha
    // Date          : 29-12-2017
    // Last Modified : 09-01-2018
    // Desc          : delete user
    //
    router.delete('/deleteuser/:id', (req, res, next) => {
        User.deleteUser(req.params.id, (err, user) => {
            if (err) throw err;
            if (!user) {
                return res.json({ success: false, msg: 'Faild to delete user' });
            } else {
                Company.update({ "users.email": req.params.id },
                    {
                        $set: { "users.$.delete_status": true }
                    }, { multi: true },
                    (err, getdata) => {

                        if (err) {
                            throw err;
                            res.json({ success: false, msg: "Failed to delete user " });
                        } else {

                            res.json({ success: true, msg: "successfully deleted" });

                        }
                    });
            }
        })
    });
    // ----------------------------------End-------------------------------------------

    // ---------------------------------Start-------------------------------------------
    // Function      : block user
    // Params        : id
    // Returns       : 
    // Author        : sudha
    // Date          : 29-12-2017
    // Last Modified : 09-01-2018
    // Desc          : block user
    //
    router.put('/blockuser/:id', (req, res, next) => {
        // console.log(req.params.id);

        User.blockUser(req.params.id, (err, user) => {

            if (!user) {
                return res.json({ success: false, msg: 'Faild to block user' });
            } else {

                Company.update({ "users.email": req.params.id },
                    {
                        $set: { "users.$.admin_block": true }
                    }, { multi: true },
                    (err, getdata) => {

                        if (err) {
                            throw err;
                            res.json({ success: false, msg: "Failed to admin Block user " });
                        } else {

                            res.json({ success: true, msg: "successfully admin blocked" });

                        }
                    });


            }
        })
    });
    // ----------------------------------End-------------------------------------------

    // ---------------------------------Start-------------------------------------------
    // Function      : unblock user
    // Params        : id
    // Returns       : 
    // Author        : sudha
    // Date          : 29-12-2017
    // Last Modified : 09-01-2018
    // Desc          : unblock user
    //
    router.put('/unblockuser/:id', (req, res, next) => {
        User.unblockUser(req.params.id, (err, user) => {
            if (err) throw err;
            if (!user) {
                return res.json({ success: false, msg: 'Faild to unblock user' });
            } else {
                Company.update({ "users.email": req.params.id },
                    {
                        $set: { "users.$.admin_block": false }
                    }, { multi: true },
                    (err, getdata) => {

                        if (err) {
                            throw err;
                            res.json({ success: false, msg: "Failed to admin unBlock user " });
                        } else {

                            res.json({ success: true, msg: "successfully admin unblocked" });

                        }
                    });
            }
        })
    });
    // ----------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : all request user
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 01-01-2018
    // Last Modified : 
    // Desc          : all request user
    //
    router.get('/allrequsers', (req, res, next) => {
        User.getAllrequestusers((err, user) => {
            // user.forEach(function(arr) {
            // arr.block_request.forEach(function(elm) {
            if (err) throw err;
            return res.json(user);
            // });
            // });


        })
    });
    // ----------------------------------End-------------------------------------------


    // ---------------------------------Start-------------------------------------------
    // Function      : rejectUser user
    // Params        : user id
    // Returns       : 
    // Author        : sudha
    // Date          : 01-01-2018
    // Last Modified : 05-01-2018
    // Desc          : reject user
    //
    router.put('/rejectuser/:id', (req, res, next) => {

        User.rejectUser(req.params.id, (err, user) => {
            // console.log(user);
            if (err) throw err;
            if (!user) {
                return res.json({ success: false, msg: 'Faild to reject user' });
            } else {

                return res.json({ success: true, msg: 'rejected successfully' });
            }
        })
    });
    // ----------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : reuest user
    // Params        : user id
    // Returns       : 
    // Author        : sudha
    // Date          : 01-01-2018
    // Last Modified : 05-01-2018
    // Desc          : accept user
    //
    router.put('/acceptuser/:id', (req, res, next) => {

        User.acceptUser(req.params.id, (err, user) => {
            // console.log(user);
            if (err) throw err;
            if (!user) {
                return res.json({ success: false, msg: 'Faild to accept user' });
            } else {

                Company.update({ "users.email": req.params.id },
                    {
                        $set: { "users.$.admin_block": true }
                    }, { multi: true },
                    (err, getdata) => {

                        if (err) {
                            throw err;
                            res.json({ success: false, msg: "Failed to accept request and admin Block user " });
                        } else {
                            io.sockets.emit("acceptuser", {

                                //user_id : req.params.id
                            });
                            res.json({ success: true, msg: "successfully accept request and admin blocked" });

                        }
                    });


            }
        })
    });
    // ----------------------------------End-------------------------------------------

    // ---------------------------------Start-------------------------------------------
    // Function      : notification
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 02-01-2018
    // Last Modified : 
    // Desc          :  notification

    router.get('/notification', (req, res, next) => {
        var data = [];

        var users = [];
        var tmp = {};
        var info = [];
        var count = 0;

        User.getAdminnotification((err, user) => {


            user.forEach(function (arr) {
                arr.block_request.forEach(function (elm) {
                    // console.log(elm);
                    //  var info = [];
                    // if(elm.action_status == 'Pending'){
                    elm.companies.forEach(function (cmp) {
                        if (cmp.is_viewed != true) {
                            info.push(cmp);
                            count++;
                        }
                    });
                    // }
                    tmp = arr;
                    tmp.company = info;
                    users.push(tmp);
                    // console.log(i);
                    // user[i].push({'asdsa':'ASas'});
                    //users
                    //users.push();
                })
                //   user.push({companies:info});
                //userdetails = {user: user,companies : info} 
            })
            users.push(info);
            if (err) throw err;
            var data = { count: count, users: users };
            return res.json(data);
        })

        // data['count']  = 'sddasdsdf';
        // data.xyz  = 'sdsdf';

    });
    // ----------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : viewstatususer notification
    // Params        : user id
    // Returns       : 
    // Author        : sudha
    // Date          : 03-01-2018
    // Last Modified : 09-01-2018
    // Desc          : viewstatususer
    //
    router.put('/viewstatususer', (req, res, next) => {


        User.findOne({ _id: req.body.user_id }, function (err, user) {
            // console.log(user);
            user.block_request.forEach((elm, i) => {
                if (elm.action_status == 'Pending') {
                    elm.companies.forEach((cmp, j) => {
                        if (cmp.company_id == req.body.company_id) {
                            user.block_request[i].companies[j].is_viewed = true;
                        }
                    });
                }

            });

            User.findOneAndUpdate({ _id: req.body.user_id },
                {
                    $set: { block_request: user.block_request }
                }, { multi: true },
                (err, getdata) => {

                    if (err) {
                        throw err;
                        return res.json({ success: false, msg: 'Faild to viewstatususer ' });
                    } else {

                        return res.json({ success: true, msg: 'view status  successfully' });

                    }
                });

        }).lean();

    });
    // ----------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : admindashboard
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 05-01-2018
    // Last Modified : 11-01-2018
    // Desc          : admindashboard
    //
    router.get('/adminchart1', (req, res, next) => {



        var retData = [];
        async.parallel([

            function (callback) {

                Company.getAdminchart1notverified((err, count) => {

                    retData.push({ Count: count, label: "notverified:" + count });
                    callback();
                })
            },
            function (callback) {

                Company.getAdminchart1Trail((err, count) => {

                    retData.push({ Count: count, label: "trail:" + count });
                    callback();
                })
            },
            function (callback) {

                Company.getAdminchart1Subscribed((err, count) => {

                    retData.push({ Count: count, label: "subscribed:" + count });
                    callback();
                })
            },
            function (callback) {

                Company.getAdminchart1Expired((err, count) => {

                    retData.push({ Count: count, label: "expired:" + count });
                    callback();
                })
            }


            // } 
        ], function (err) { //This is the final callback
            //  if(err) throw err;
            //    console.log(retData);
            return res.json(retData);

        });
    });
    // ----------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : admindashboard
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 05-01-2018
    // Last Modified : 
    // Desc          : admind3dashboard
    router.get('/admind3', (req, res, next) => {
        Survey.aggregate([
            { "$group": { _id: "$organization", count: { $sum: 1 } } }
        ]).exec((err, data) => {
            if (err) throw err;
            return res.json(data);
            // console.log(data);
        })

    });
    // ----------------------------------End-------------------------------------------
    // Function      : get logged user details
    // Params        : 
    // Returns       : user details
    // Author        : Rinsha
    // Date          : 12-1-2018
    // Last Modified : 12-1-2018, Rinsha
    // Desc          :

    router.get('/getLoggedinUser', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4),
                decoded;
            decoded = jwt.verify(authorization, config.secret);
            res.json(decoded);
        } else {
            res.json('');
        }
    });
    // ----------------------------------End-------------------------------------------

    //  ---------------------------------Start-------------------------------------------
    // Function      : add survey category
    // Params        : 
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 27-12-2017
    // Last Modified : 29-12-2017, Jooshifa 
    // Desc          : post function for add survey category
    router.post('/addsurveycategory', function (req, res) {
        var isSuccess = true;
        var errMsg = '';
        req.body.forEach((element) => {

            if (element.name == '' || element.name == null) {
                isSuccess = false;
                errMsg = 'All field required';
            }
        });
        if (!isSuccess) {
            res.json({ success: isSuccess, msg: errMsg });
        } else {
            async.eachOfSeries(req.body, function (element, key, callback) {
                Category.findOne({ name: element.name }, (err, singlecat) => {
                    if (singlecat) {
                        isSuccess = false;

                        errMsg = 'Failed, ' + element.name + ' Already Exist';
                    }
                    callback();
                })
            }, function (err) {
                if (err) console.error(err.message);
                if (!isSuccess) {
                    res.json({ success: isSuccess, msg: errMsg });
                } else {

                    async.eachOfSeries(req.body, function (element, key, callback) {
                        var newCategory = new Category();
                        newCategory.name = element.name;
                        newCategory.save(function (err, insertedCatg) {
                            if (err) {
                                console.log("Error " + err);
                            } else {
                                isSuccess = true
                                errMsg = 'Saved successfully';
                            }
                            callback();
                        })

                    }, function (err) {

                        if (err) console.error(err.message);
                        if (!isSuccess) {
                            res.json({ success: isSuccess, msg: errMsg });
                        } else {
                            res.json({ success: isSuccess, msg: errMsg });
                        }

                    });


                }

            });

        }
    });
    // ----------------------------------End-------------------------------------------

    //  ---------------------------------Start-------------------------------------------
    // Function      : add industry
    // Params        : 
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 27-12-2017
    // Last Modified : 29-12-2017, Jooshifa 
    // Desc          : post function for add Industry

    router.post('/addindustry', function (req, res) {
        var isSuccess = true;
        var errMsg = '';
        req.body.forEach((element) => {

            if (element.name == '' || element.name == null) {
                isSuccess = false;
                errMsg = 'All field required';

            }
        });
        if (!isSuccess) {
            res.json({ success: isSuccess, msg: errMsg });
        } else {
            async.eachOfSeries(req.body, function (element, key, callback) {
                Industry.findOne({ name: element.name }, (err, single) => {
                    if (single) {
                        isSuccess = false;

                        errMsg = 'Failed, ' + element.name + ' Already Exist';
                    }
                    callback();
                })
            }, function (err) {
                if (err) console.error(err.message);
                if (!isSuccess) {
                    res.json({ success: isSuccess, msg: errMsg });
                } else {

                    async.eachOfSeries(req.body, function (element, key, callback) {
                        var newIndustry = new Industry();
                        newIndustry.name = element.name;
                        newIndustry.save(function (err, insertedIndus) {
                            if (err) {
                                console.log("Error " + err);
                            } else {
                                isSuccess = true
                                errMsg = 'Saved successfully';
                            }
                            callback();
                        })

                    }, function (err) {

                        if (err) console.error(err.message);
                        if (!isSuccess) {
                            res.json({ success: isSuccess, msg: errMsg });
                        } else {
                            res.json({ success: isSuccess, msg: errMsg });
                        }

                    });


                }

            });

        }
    });
    // ----------------------------------End-------------------------------------------

    //  ---------------------------------Start-------------------------------------------
    // Function      : add organization type
    // Params        : 
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 27-12-2017
    // Last Modified : 29-12-2017, Jooshifa 
    // Desc          : post function for add Organization type

    router.post('/addorganizationtype', function (req, res) {
        var isSuccess = true;
        var errMsg = '';
        req.body.forEach((element) => {

            if (element.name == '' || element.name == null) {
                isSuccess = false;
                errMsg = 'All field required';

            }
        });
        if (!isSuccess) {
            res.json({ success: isSuccess, msg: errMsg });
        } else {
            async.eachOfSeries(req.body, function (element, key, callback) {
                Organization.findOne({ name: element.name }, (err, single) => {
                    if (single) {
                        isSuccess = false;

                        errMsg = 'Failed, ' + element.name + ' Already Exist';
                    }
                    callback();
                })
            }, function (err) {
                if (err) console.error(err.message);
                if (!isSuccess) {
                    res.json({ success: isSuccess, msg: errMsg });
                } else {

                    async.eachOfSeries(req.body, function (element, key, callback) {
                        var newOrganizationType = new Organization();
                        newOrganizationType.name = element.name;
                        newOrganizationType.save(function (err, insertedOrg) {
                            if (err) {
                                console.log("Error " + err);
                            } else {
                                isSuccess = true
                                errMsg = 'Saved successfully';
                            }
                            callback();
                        })

                    }, function (err) {

                        if (err) console.error(err.message);
                        if (!isSuccess) {
                            res.json({ success: isSuccess, msg: errMsg });
                        } else {
                            res.json({ success: isSuccess, msg: errMsg });
                        }

                    });
                }
            });

        }
    });
    // ----------------------------------End-------------------------------------------

    //  ---------------------------------Start-------------------------------------------
    // Function      : add attender type
    // Params        : 
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 27-12-2017
    // Last Modified : 29-12-2017, Jooshifa 
    // Desc          : post function for add survey attender type

    router.post('/addattendertype', function (req, res) {
        var isSuccess = true;
        var errMsg = '';
        req.body.forEach((element) => {

            if (element.name == '' || element.name == null) {
                isSuccess = false;
                errMsg = 'All field required';

            }
        });
        if (!isSuccess) {
            res.json({ success: isSuccess, msg: errMsg });
        } else {
            async.eachOfSeries(req.body, function (element, key, callback) {
                Attender.findOne({ name: element.name }, (err, single) => {
                    if (single) {
                        isSuccess = false;

                        errMsg = 'Failed, ' + element.name + ' Already Exist';
                    }
                    callback();
                })
            }, function (err) {
                if (err) console.error(err.message);
                if (!isSuccess) {
                    res.json({ success: isSuccess, msg: errMsg });
                } else {

                    async.eachOfSeries(req.body, function (element, key, callback) {
                        var newAttender = new Attender();
                        newAttender.name = element.name;
                        newAttender.save(function (err, insertedattender) {
                            if (err) {
                                console.log("Error " + err);
                            } else {
                                isSuccess = true
                                errMsg = 'Saved successfully';
                            }
                            callback();
                        })

                    }, function (err) {

                        if (err) console.error(err.message);
                        if (!isSuccess) {
                            res.json({ success: isSuccess, msg: errMsg });
                        } else {
                            res.json({ success: isSuccess, msg: errMsg });
                        }

                    });


                }

            });

        }
    });
    // ----------------------------------End-------------------------------------------

    //  ---------------------------------Start-------------------------------------------
    // Function      : get survey category
    // Params        : 
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 28-12-2017
    // Last Modified : 29-12-2017, Jooshifa 
    // Desc          : get function for get all  survey category
    router.get('/getsurveycategory', (req, res, next) => {
        Category.find({}).exec(function (err, catg) {
            // console.log(catg);
            if (err) throw err;
            return res.json(catg);
        })

    });
    // ----------------------------------End-------------------------------------------

    //  ---------------------------------Start-------------------------------------------
    // Function      : get industry
    // Params        : 
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 28-12-2017
    // Last Modified : 29-12-2017, Jooshifa 
    // Desc          : get function for get all Industries
    router.get('/getindustry', (req, res, next) => {
        Industry.find({}).exec(function (err, indust) {
            if (err) throw err;
            return res.json(indust);
        })

    });
    // ----------------------------------End-------------------------------------------

    //  ---------------------------------Start-------------------------------------------
    // Function      : get organization type
    // Params        : 
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 28-12-2017
    // Last Modified : 29-12-2017, Jooshifa 
    // Desc          : get function for get all Organization types
    router.get('/getorganizationtype', (req, res, next) => {
        Organization.find({}).exec(function (err, org) {
            if (err) throw err;
            return res.json(org);
        })

    });
    // ----------------------------------End-------------------------------------------

    //  ---------------------------------Start-------------------------------------------
    // Function      : get attender type
    // Params        : 
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 28-12-2017
    // Last Modified : 29-12-2017, Jooshifa 
    // Desc          : get function for get all survey attender types
    router.get('/getattendertype', (req, res, next) => {
        Attender.find({}).exec(function (err, attender) {
            if (err) throw err;
            return res.json(attender);
        })

    });
    // ----------------------------------End-------------------------------------------

    //  ---------------------------------Start-------------------------------------------
    // Function      : delete survey category
    // Params        : id
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 28-12-2017
    // Last Modified : 29-12-2017, Jooshifa 
    // Desc          : delete a survey category

    router.delete('/deletesurveycategory/:id', (req, res) => {
        Survey.findOne({ "category.id": req.params.id }, function (err, surveyCatg) {
            if (surveyCatg) {
                return res.json({ success: false, msg: 'Failedtodelete' });

            }
            else if (!surveyCatg) {
                Category.findByIdAndRemove(req.params.id, (err, catg) => {
                    if (err) throw err;
                    if (!catg) {
                        return res.json({ success: false, msg: 'Faild to delete category' });
                    } else {
                        return res.json({ success: true, msg: 'deleted successfully' });
                    }
                });
            }
        });
    });
    // ----------------------------------End-------------------------------------------
    //  ---------------------------------Start-------------------------------------------
    // Function      : delete industry
    // Params        : id
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 28-12-2017
    // Last Modified : 29-12-2017, Jooshifa 
    // Desc          : delete an industry

    router.delete('/deleteindustry/:id', (req, res, next) => {
        Company.findOne({ "industry.id": req.params.id }, function (err, companyIndustry) {
            if (companyIndustry) {
                return res.json({ success: false, msg: 'Failedtodelete' });

            }
            else if (!companyIndustry) {
                Industry.findByIdAndRemove(req.params.id, (err, indus) => {
                    if (err) throw err;
                    if (!indus) {

                        return res.json({ success: false, msg: 'Faild to delete Industry' });
                    } else {
                        return res.json({ success: true, msg: 'deleted successfully' });
                    }
                });
            }
        });
    });


    // ----------------------------------End-------------------------------------------

    //  ---------------------------------Start-------------------------------------------
    // Function      : delete organization type
    // Params        : id
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 28-12-2017
    // Last Modified : 29-12-2017, Jooshifa 
    // Desc          : delete an Organization type

    router.delete('/deleteorganizationtype/:id', (req, res, next) => {
        Company.findOne({ "organization_type.id": req.params.id }, function (err, CompanyOrgType) {
            if (CompanyOrgType) {
                return res.json({ success: false, msg: 'Failedtodelete' });
            }
            else if (!CompanyOrgType) {
                Organization.findByIdAndRemove(req.params.id, (err, org) => {
                    if (err) throw err;
                    if (!org) {
                        return res.json({ success: false, msg: 'Faild to delete Organization type' });
                    } else {
                        return res.json({ success: true, msg: 'deleted successfully' });
                    }
                });
            }
        });
    });
    // ----------------------------------End-------------------------------------------

    //  ---------------------------------Start-------------------------------------------
    // Function      : delete attender type
    // Params        : id
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 28-12-2017
    // Last Modified : 29-12-2017, Jooshifa 
    // Desc          : delete an survey attender type

    router.delete('/deleteattendertype/:id', (req, res, next) => {
        Company.findOne({ "survey_attenders.id": req.params.id }, function (err, ComapanyAttender) {
            if (ComapanyAttender) {
                return res.json({ success: false, msg: 'Failedtodelete' });
            }
            else if (!ComapanyAttender) {
                Attender.findByIdAndRemove(req.params.id, (err, org) => {
                    if (err) throw err;
                    if (!org) {

                        return res.json({ success: false, msg: 'Faild to delete survey attender type' });
                    } else {
                        return res.json({ success: true, msg: 'deleted successfully' });
                    }
                });
            }
        });
    });
    // ----------------------------------End-------------------------------------------

    //  ---------------------------------Start-------------------------------------------
    // Function      : get single survey category
    // Params        : id
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 28-12-2017
    // Last Modified : 29-12-2017, Jooshifa 
    // Desc          : get a single survey category

    router.get('/getsinglesurveycategory/:id', (req, res, next) => {
        Category.findById(req.params.id, (err, singlecatg) => {
            if (err) throw err;
            // console.log(product);
            return res.json(singlecatg);
        })
    });

    // ----------------------------------End-------------------------------------------

    //  ---------------------------------Start-------------------------------------------
    // Function      : get single industry
    // Params        : id
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 28-12-2017
    // Last Modified : 29-12-2017, Jooshifa 
    // Desc          : get a single industry

    router.get('/getsingleindustry/:id', (req, res, next) => {
        Industry.findById(req.params.id, (err, singleindus) => {
            if (err) throw err;
            // console.log(product);
            return res.json(singleindus);
        })
    });

    // ----------------------------------End-------------------------------------------

    //  ---------------------------------Start-------------------------------------------
    // Function      : get single prganization type
    // Params        : id
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 28-12-2017
    // Last Modified : 29-12-2017, Jooshifa 
    // Desc          : get a single Organization type

    router.get('/getsingleorganizationtype/:id', (req, res, next) => {
        Organization.findById(req.params.id, (err, singleOrg) => {
            if (err) throw err;
            // console.log(product);
            return res.json(singleOrg);
        })
    });

    // ----------------------------------End-------------------------------------------

    //  ---------------------------------Start-------------------------------------------
    // Function      : get singale attender type
    // Params        : id
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 28-12-2017
    // Last Modified : 29-12-2017, Jooshifa 
    // Desc          : get a single survey attender type

    router.get('/getsingleattendertype/:id', (req, res, next) => {
        Attender.findById(req.params.id, (err, singleAttender) => {
            if (err) throw err;
            // console.log(product);
            return res.json(singleAttender);
        })
    });

    // ----------------------------------End---------------------------------------------

    //  ---------------------------------Start-------------------------------------------
    // Function      : update survey category
    // Params        : id
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 28-12-2017
    // Last Modified : 29-12-2017, Jooshifa 
    // Desc          : update function for edit surver category
    router.put('/updatesurveycategory/:id', function (req, res) {
        if (req.body.name == '' || req.body.name == null) {
            return res.send({ success: false, msg: 'required' });
        }
        else {
            Category.findOne({ name: req.body.name }, (err, singlecat) => {
                if (singlecat && singlecat) {
                    return res.json({ success: false, msg: 'alreadyexist' });

                }


                else {
                    Survey.findOne({ "category.id": req.params.id }, function (err, surveyCatg) {
                        if (!surveyCatg) {

                            Category.findByIdAndUpdate(req.params.id,
                                {
                                    $set: { name: req.body.name }

                                },
                                {
                                    new: true
                                },
                                function (err, updatedCatg) {
                                    if (err) {
                                        res.send("error Updating Category");
                                    } else {
                                        res.json(updatedCatg);
                                        // console.log(updatedPro);
                                    }
                                })
                        }

                        else if (surveyCatg) {
                            Category.findByIdAndUpdate(req.params.id,
                                {
                                    $set: { name: req.body.name }

                                },
                                {
                                    new: true
                                },
                                function (err, updatedCatg) {
                                    if (err) {
                                        res.send("error Updating Category");
                                    } else {

                                        // Survey.findOne({"category.id" : req.params.id}, function(err,test){
                                        //     console.log(test.category.name);
                                        // })

                                        Survey.findOneAndUpdate({ "category.id": req.params.id },
                                            {
                                                $set: { "category.name": req.body.name }

                                            },
                                            {
                                                new: true
                                            },
                                            function (err, updatedCatgory) {
                                                if (err) {
                                                    res.send("error Updating Category");
                                                } else {
                                                    res.json(updatedCatgory);

                                                }
                                            });

                                    }
                                })
                        }
                    })
                }
            })
        }
        // console.log(req.body.name);
    });

    // ----------------------------------End-------------------------------------------

    //  ---------------------------------Start-------------------------------------------
    // Function      : update industry
    // Params        : id
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 28-12-2017
    // Last Modified : 29-12-2017, Jooshifa 
    // Desc          : update function for an edit Industry



    router.put('/updateindustry/:id', function (req, res) {
        if (req.body.name == '' || req.body.name == null) {
            return res.send({ success: false, msg: 'required' });
        }
        else {
            Industry.findOne({ name: req.body.name }, (err, singleindustr) => {
                if (singleindustr) {
                    return res.json({ success: false, msg: 'alreadyexist' });

                }


                else {
                    Company.findOne({ "industry.id": req.params.id }, function (err, companyIndustry) {
                        if (!companyIndustry) {

                            Industry.findByIdAndUpdate(req.params.id,
                                {
                                    $set: { name: req.body.name }

                                },
                                {
                                    new: true
                                },
                                function (err, updatedIndustry) {
                                    if (err) {
                                        res.send("error Updating Industry");
                                    } else {
                                        res.json(updatedIndustry);
                                        // console.log(updatedPro);
                                    }
                                })
                        }

                        else if (companyIndustry) {
                            Industry.findByIdAndUpdate(req.params.id,
                                {
                                    $set: { name: req.body.name }

                                },
                                {
                                    new: true
                                },
                                function (err, updatedinds) {
                                    if (err) {
                                        res.send("error Updating Industry");
                                    } else {

                                        // Survey.findOne({"category.id" : req.params.id}, function(err,test){
                                        //     console.log(test.category.name);
                                        // })

                                        Company.findOneAndUpdate({ "industry.id": req.params.id },

                                            {
                                                $set: { "industry.name": req.body.name }

                                            },
                                            {
                                                new: true
                                            },
                                            function (err, updatedIndust) {
                                                if (err) {
                                                    res.send("error Updating Industry");
                                                } else {
                                                    res.json(updatedIndust);


                                                }
                                            });

                                    }
                                })
                        }
                    })
                }
            })
        }
        // console.log(req.body.name);
    });

    // ----------------------------------End-------------------------------------------

    //  ---------------------------------Start-------------------------------------------
    // Function      : update organization type
    // Params        : id
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 28-12-2017
    // Last Modified : 29-12-2017, Jooshifa 
    // Desc          : update function for an edit Organization type

    router.put('/updateorganizationtype/:id', function (req, res) {
        if (req.body.name == '' || req.body.name == null) {
            return res.send({ success: false, msg: 'required' });
        }
        else {
            Organization.findOne({ name: req.body.name }, (err, singleOrgnz) => {
                if (singleOrgnz) {
                    return res.json({ success: false, msg: 'alreadyexist' });

                }


                else {

                    Company.findOne({ "organization_type.id": req.params.id }, function (err, CompanyOrgType) {


                        if (!CompanyOrgType) {

                            Organization.findByIdAndUpdate(req.params.id,
                                {
                                    $set: { name: req.body.name }

                                },
                                {
                                    new: true
                                },
                                function (err, updatedOrg) {
                                    if (err) {
                                        res.send("error Updating Organization");
                                    } else {
                                        res.json(updatedOrg);
                                        // console.log(updatedPro);
                                    }
                                })
                        }

                        else if (CompanyOrgType) {
                            Organization.findByIdAndUpdate(req.params.id,
                                {
                                    $set: { name: req.body.name }

                                },
                                {
                                    new: true
                                },
                                function (err, updatedorgn) {
                                    if (err) {
                                        res.send("error Updating Organization type");
                                    } else {

                                        // Survey.findOne({"category.id" : req.params.id}, function(err,test){
                                        //     console.log(test.category.name);
                                        // })

                                        Company.findOneAndUpdate({ "organization_type.id": req.params.id },

                                            {
                                                $set: { "organization_type.name": req.body.name }

                                            },
                                            {
                                                new: true
                                            },
                                            function (err, updatedOrgnization) {
                                                if (err) {
                                                    res.send("error Updating Organization type");
                                                } else {
                                                    res.json(updatedOrgnization);

                                                }
                                            });

                                    }
                                })
                        }
                    })
                }
            })
        }
        // console.log(req.body.name);
    });
    // ----------------------------------End-------------------------------------------

    //  ---------------------------------Start-------------------------------------------
    // Function      : update attender type
    // Params        : id
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 28-12-2017
    // Last Modified : 29-12-2017, Jooshifa 
    // Desc          : update function for an edit survey attender type

    router.put('/updateattendertype/:id', function (req, res) {
        if (req.body.name == '' || req.body.name == null) {
            return res.send({ success: false, msg: 'required' });
        }
        else {
            Attender.findOne({ name: req.body.name }, (err, singleattnder) => {
                if (singleattnder) {
                    return res.json({ success: false, msg: 'alreadyexist' });

                }


                else {

                    // console.log(req.params.id)
                    Company.findOne({ "survey_attenders.id": req.params.id }, function (err, ComapanyAttender) {

                        if (!ComapanyAttender) {

                            Attender.findByIdAndUpdate(req.params.id,
                                {
                                    $set: { name: req.body.name }

                                },
                                {
                                    new: true
                                },
                                function (err, updatedAttender) {
                                    if (err) {
                                        res.send("error Updating Attender type");
                                    } else {
                                        res.json(updatedAttender);
                                        // console.log(updatedPro);
                                    }
                                })
                        }

                        else if (ComapanyAttender) {
                            Attender.findByIdAndUpdate(req.params.id,
                                {
                                    $set: { name: req.body.name }

                                },
                                {
                                    new: true
                                },
                                function (err, updatedattnder) {
                                    if (err) {
                                        res.send("error Updating servey attender type");
                                    } else {

                                        // Survey.findOne({"category.id" : req.params.id}, function(err,test){
                                        //     console.log(test.category.name);
                                        // })

                                        Company.findOneAndUpdate({ "survey_attenders.id": req.params.id },

                                            {
                                                $set: { "survey_attenders.name": req.body.name }

                                            },
                                            {
                                                new: true
                                            },
                                            function (err, updatedAttendertype) {
                                                if (err) {
                                                    res.send("error Updating Servey attender type");
                                                } else {
                                                    res.json(updatedAttendertype);

                                                }
                                            });

                                    }
                                })
                        }
                    })
                }
            })
        }
        // console.log(req.body.name);
    });
    // ----------------------------------End-------------------------------------------

    module.exports = router;
    return router;
}

module.exports = returnRouter;
