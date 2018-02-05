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
const OrgType = require("../model/organization_type");
const Industry = require("../model/industry");
const SurveyAttenders = require("../model/survey_attender_type");
const Plan = require("../model/plan");
const Images = require("../model/images");
const emailTemplate = require('../template/verification_email');
var geoip = require('geoip-lite');
var CronJob = require('cron').CronJob;
const jwt = require("jsonwebtoken");
const passport = require("passport");
async = require("async");
'use strict';

var returnRouter = function (io) {

    // ---------------------------------Start-------------------------------------------
    // Function      : get-all-groups
    // Params        : 
    // Returns       : all user groups
    // Author        : Yasir Poongadan
    // Date          : 29-12-2017
    // Last Modified : 29-12-2017, Yasir Poongadan
    // Desc          : sample

    router.get('/get-all-groups', passport.authenticate('jwt', { session: false }), (req, res, next) => {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            //     try {
            decoded = jwt.verify(authorization, config.secret);
            cmp_id = decoded._id;
            UserGroup.find({ cmp_id: cmp_id }, (err, userGroup) => {
                var users = {};
                var ret = { group: userGroup, groupById: users };
                //   console.log(user);
                userGroup.forEach((grp, i) => {
                    users[grp._id] = grp;
                });

                if (err) {
                    throw err;
                } else {
                    return res.json(ret);
                }
            });
            //     } catch (e) {
            //         return res.status(401).send('unauthorized 123');
            //     }
        } else {
            return res.status(401).send('Invalid User');
        }
    });

    // ----------------------------------End-------------------------------------------

    // ---------------------------------Start-------------------------------------------
    // Function      : add-user-group
    // Params        : 
    // Returns       : all user groups
    // Author        : Yasir Poongadan, 
    // Date          : 29-12-2017
    // Last Modified : 29-12-2017, Jooshifa
    // Desc          : sample

    router.post('/add-user-group', passport.authenticate('jwt', { session: false }), (req, res, next) => {
        // console.log(req.body);

        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            //     try {
            decoded = jwt.verify(authorization, config.secret);
            var cmp_id = decoded._id;
            var isSuccess = false;
            msg = '';
            req.body.group = myTrim(req.body.group);
            UserGroup.find({ name: req.body.group, cmp_id: cmp_id }, function (err, docs) {
                //  console.log(docs);
                if (docs.length) {
                    res.json({ success: false, msg: "* Group Already Exists!" });
                } else {

                    var userGroup = new UserGroup();
                    userGroup.name = req.body.group;
                    userGroup.cmp_id = cmp_id;
                    userGroup.save(function (err, insertedGroup) {
                        if (err) {
                            res.json({ success: false, msg: "* Failed, somthing went wrong! " });
                        } else {

                            if (req.body.email == '' || req.body.email == null || !req.body.email) {
                                res.json({ success: true, msg: "Group created Successfully", data: insertedGroup });

                            } else {
                                UserGroup.findOne({ name: req.body.group, cmp_id: cmp_id }, (err, userId) => {

                                    async.eachOfSeries(req.body.email, function (element, key, callback) {
                                        var email = element.email;
                                        Company.findOneAndUpdate({ $and: [{ "_id": cmp_id }, { "users.email": email }] },
                                            {
                                                $push: { "users.$.group": { g_id: userId._id, group_name: req.body.group } }
                                            },
                                            { new: true },
                                            (err, userGroup) => {
                                                // console.log(userGroup)
                                                if (err) {
                                                    isSuccess = false;
                                                    msg = '* Something went wrong!';
                                                } else {
                                                    isSuccess = true;
                                                    msg = 'Add User group Successfully';
                                                }

                                                callback();
                                            });
                                    }, function (err) {

                                        if (err) console.error(err.message);
                                        if (!isSuccess) {
                                            res.json({ success: isSuccess, msg: msg });
                                        } else {
                                            res.json({ success: isSuccess, msg: msg });
                                        }

                                    });



                                    // res.json({success: isSuccess, msg : msg });

                                });
                            }
                        }
                    });
                }
            });
        } else {
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
        return x.replace(/^\s+|\s+$/gm, '');
    }

    // ----------------------------------End-------------------------------------------



    // ---------------------------------Start-------------------------------------------
    // Function      : get-all-survey-type
    // Params        : 
    // Returns       : list of Survey type
    // Author        : Yasir Poongadan
    // Date          : 04-01-2017
    // Last Modified : 04-01-2017, Yasir Poongadan
    // Desc          : all user Survey type

    router.get('/get-all-survey-type', (req, res, next) => {

        SurveyCategory.find({}, (err, surveyCategory) => {
            if (err) {
                throw err;
            } else {
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

    router.get('/get-all-themes', passport.authenticate('jwt', { session: false }), (req, res, next) => {

        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            //     try {
            decoded = jwt.verify(authorization, config.secret);

            var cmp_id = decoded._id;

            Theme.find({ cmp_id: cmp_id }, (err, themes) => {
                if (err) {
                    throw err;
                } else {
                    return res.json(themes);
                }
            });
            //     } catch (e) {
            //         return res.status(401).send('unauthorized 123');
            //     }
        } else {
            return res.status(401).send('Invalid User');
        }

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

    router.get('/get-all-answer-type', (req, res, next) => {

        AnswerType.find({}, (err, answerTypes) => {
            if (err) {
                throw err;
            } else {
                return res.json(answerTypes);
            }
        });

    });

    // ----------------------------------End-------------------------------------------



    // ---------------------------------Start-------------------------------------------
    // Function      : logo
    // Params        : users and assigned groups
    // Returns       : status and message
    // Author        : Yasir Poongadan
    // Date          : 01-01-2018
    // Last Modified : 01-01-2018, Yasir Poongadan
    // Desc          : add users

    router.get('/logo/:id', function (req, res, next) {
        Images.findOne({ file_name: req.params.id }, function (err, img) {
            if (err) return next(err);
            console.log(img);
            if (img) {
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

    router.post('/create-survey', passport.authenticate('jwt', { session: false }), (req, res, next) => {
        // console.log(req.body);
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            //     try {
            decoded = jwt.verify(authorization, config.secret);
            //console.log(decoded);

            var cmp_id = decoded._id;
            var organization = decoded.organization;
            var plans = (decoded.plans.length != 0) ? decoded.plans[decoded.plans.length - 1] : [];
            isErr = false;
            start = '';
            end = '';
            errMsg = '';

            Survey.find({ company_id: cmp_id, cmp_plan_id: plans._id }, function (err, survey) {
                // console.log(survey.length);
                // console.log(plans.no_survey);
                if (plans.no_survey != 'unlimited' && survey.length >= plans.no_survey) {
                    errMsg = "* Failed, Reached maximum survey limit of " + plans.no_survey;
                    isErr = true;
                }

                if ( plans.no_question != 'unlimited' && req.body.questions.length > plans.no_question) {
                    errMsg = "* Failed, maximum allowed question  " + plans.no_question;
                    isErr = true;
                }


                if (req.body.start_date == '') {
                    errMsg = "* Failed, Please Select Start Date!";
                    isErr = true;
                } else {
                    var start = new Date(req.body.start_date);
                    start.setHours(00, 00, 00, 000);
                }

                if (req.body.end_date == '') {
                    errMsg = "* Failed, Please Select End Date!";
                    isErr = true;
                } else {
                    var end = new Date(req.body.end_date);
                    end.setHours(23, 59, 59, 999);
                }

                if (!isErr && end <= start) {
                    errMsg = "* Failed, End Date shold be greater than start date!";
                    isErr = true;
                }

                if (!isErr && myTrim(req.body.name) == '') {
                    errMsg = "* Failed, Please Enter Survay Name!";
                    isErr = true;
                }
                if (!isErr && myTrim(req.body.category.name) == '' || req.body.category._id == '') {
                    errMsg = "* Failed, Please Select Category!";
                    isErr = true;
                }
                if (!isErr && !req.body.selectedTheme) {
                    errMsg = "* Failed, Please Select Any Theme!";
                    isErr = true;
                }
                if (!isErr && !req.body.display_type) {
                    errMsg = "* Failed, Please Select Display Type!";
                    isErr = true;
                }

                if (!isErr && req.body.questions.length == 0) {
                    errMsg = "* Failed, Please Add Atleast OneQuestion!";
                    isErr = true;
                }


                var logoName = '';
                if (req.body.logoSrc != '') {
                    ext = ['gif', 'png', 'jpg', 'jpeg']
                    var base64 = decodeBase64Image(req.body.logoSrc);

                    if (!isErr && ext.indexOf(base64.ext.toLowerCase()) < 0) {
                        errMsg = "Failed, Invalid Logo";
                        isErr = true;
                    }
                    if (!isErr) {
                        console.log(base64.type);
                        console.log(base64.ext);
                        logoName = new String(new Date().getTime()) + '_' + (Math.floor(100000 + Math.random() * 900000) + '.' + base64.ext);
                        var images = new Images();
                        var buf = new Buffer(base64.data, 'base64');
                        images.file_name = logoName;
                        images.logo.data = buf;
                        images.logo.contentType = base64.type;
                        images.save(function (err) {
                        });
                    }
                }

                if (!isErr) {
                    var survey = new Survey();
                    survey.name = req.body.name;
                    survey.category = { id: req.body.category._id, name: req.body.category.name };
                    survey.company_id = cmp_id;
                    survey.organization = organization;
                    survey.theme = req.body.selectedTheme._id;
                    req.body.display_type = (plans.survey_logic) ? req.body.display_type : { ui: "Single", randomization: false, skip: false, pageno: false };
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

                    survey.cmp_plan_id = plans._id;

                    req.body.questions.forEach((qtn, i) => {
                        let question = {
                            question: qtn.question,
                            ans_type: qtn.answerType,
                            show_star_label: qtn.showStarLabel,
                        }
                        if (qtn.answerType == 'Multiple choice') {
                            question.options = qtn.opts
                        }
                        if (qtn.answerType == 'star rating') {
                            question.options = qtn.starOpts
                        }
                        survey.questions.push(question);
                    });

                    survey.save(function (err, newSurvey) {
                        if (err) throw new Error(err);
                        res.json({ success: true, msg: "Survey Created Successfully", survey: newSurvey });
                    });

                } else {
                    res.json({ success: false, msg: errMsg });
                }
            });

            //      } catch (e) {
            //         return res.status(401).send('unauthorized 123');
            //     }
        } else {
            return res.status(401).send('Invalid User');
        }


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
        Images.findOne({ file_name: req.params.id }, function (err, img) {
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
        // console.log(dataString);
        var matches = dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
        //   console.log(dataString);
        var response = {};

        if (matches.length !== 3) {
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

    router.get('/get-my-users', passport.authenticate('jwt', { session: false }), (req, res, next) => {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            //     try {
            decoded = jwt.verify(authorization, config.secret);
            var cmp_id = decoded._id;
            // Company.find({ users: {$elemMatch : {delete_status: false, admin_block : false}}},(err,companyUsers )=>{
            //     console.log(companyUsers)
            // })
            // Company.find({_id:cmp_id},{users:{$elemMatch : {delete_status:false}}},(err,companyUsers)=>{
            Company.find({ _id: cmp_id }, (err, companyUsers) => {
                // console.log(companyUsers)
                var users = [];
                companyUsers.forEach(element => {
                    element.users.forEach((item, index) => {
                        if (item.delete_status == false && item.admin_block == false) {
                            users.push({
                                email: item.email,
                                id: item._id,
                                block_req_status: item.block_req_status,
                                item: item
                            });
                        }
                    });
                });

                if (err) {
                    throw err;

                } else {
                    return res.json(users);
                }
            });
            //      } catch (e) {
            //         return res.status(401).send('unauthorized 123');
            //     }
        } else {
            return res.status(401).send('Invalid User');
        }

    });
    // ----------------------------------End-----------------------------------



    // ---------------------------------Start-------------------------------------------
    // Function      : getUsersInAGroups
    // Params        : group id
    // Returns       : get a company's users within the group
    // Author        : Yasir Poongadan
    // Date          : 15-01-2018
    // Last Modified : 15-01-2018 Yasir Poongadan
    // Desc          : to get users of a purticular Group of a company whoes not blocked by admin and deleted

    router.get('/getUsersInAGroups/:id', passport.authenticate('jwt', { session: false }), (req, res, next) => {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, config.secret);
            var cmp_id = decoded._id;
            array = [];
            Company.findOne({ _id: cmp_id }, (err, company) => {
                company.users.forEach(companyUsers => {
                    if (companyUsers.delete_status == false && companyUsers.admin_block == false) {
                        companyUsers.group.forEach(userGroup => {
                            if (userGroup.g_id == req.params.id) {
                                companyUsers.id = companyUsers._id;
                                array.push(companyUsers);
                            }

                        })
                    }
                })
                if (err) {
                    res.json({ success: false, msg: "Failed, somthing went wrong " });
                }
                else {
                    return res.json(array);
                }
                // console.log(array);
                // console.log(company);
            }).lean();
        } else {
            return res.status(401).send('Invalid User');
        }
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

    router.post('/invite-users', passport.authenticate('jwt', { session: false }), (req, res, next) => {
        console.log(req.body)
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            //     try {
            decoded = jwt.verify(authorization, config.secret);
            var cmp_id = decoded._id;
            companyName = decoded.organization
            var plans = (decoded.plans.length != 0) ? decoded.plans[decoded.plans.length - 1] : [];
            //console.log(req.body);
            isErr = false;
            errMsg = '';
            if (!req.body.survey || !req.body.survey._id) {
                errMsg = "Failed, Please Save survey before invite";
                isErr = true;
            }
            if (!isErr && !req.body.users) {
                errMsg = "Failed, please select atleast One Email";
                isErr = true;
            }
            if (!isErr && req.body.users.length == 0) {
                errMsg = "Failed, please select atleast One Email";
                isErr = true;
            }

            if (!isErr) {

                Survey.findOne({ _id: req.body.survey._id, company_id: cmp_id }, (err, survey) => {
                    if (plans.no_survey_attenders != "unlimited" && (survey.inv_users.length + req.body.users.length) > plans.no_survey_attenders) {
                        errMsg = "Failed, Maximum Allowed Survey Attenders " + plans.no_survey_attenders;
                        isErr = true;
                        res.json({ success: false, msg: errMsg });
                    } else {
                        let invUser = [];

                        req.body.users.forEach((user, index) => {

                            imgCode = new String(new Date().getTime()) + '_' + (Math.floor(100000 + Math.random() * 900000));
                            info = {
                                cmp_user_id: user.id,
                                email: user.email,
                                img_read_code: imgCode
                            }
                            invUser.push(info);

                        });

                        Survey.findOneAndUpdate({ "_id": req.body.survey._id },
                            {
                                $pushAll: { "inv_users": invUser }
                            },
                            { new: true },
                            (err, survey) => {
                                if (err) {
                                    res.json({ success: false, msg: "Failed, somthing went wrong " });
                                } else {
                                    // res.json({success: true, msg : "User Updated successfully", company:company});
                                    invUser.forEach(user => {
                                        data = {
                                            email: user.email,
                                            company_name: companyName,
                                            survey_name: survey.name,
                                            start_date: formatDate(survey.start_datetime),
                                            end_date: formatDate(survey.end_datetime),
                                            link: config.siteUrl + 'user-response-email/' + survey._id + '/' + user.cmp_user_id,
                                            imgeLink: config.siteUrl + 'company/show-mail-image/' + user.img_read_code
                                        }
                                        emailTemplate.sendInvitationMail(data);
                                    });
                                    io.sockets.emit("Invite Users", {

                                    });
                                    res.json({ success: true, msg: "User Invited successfully" });

                                }
                            });

                        console.log(invUser);
                    }
                });



            } else {
                res.json({ success: false, msg: errMsg });
            }
            //      } catch (e) {
            //         return res.status(401).send('unauthorized 123');
            //     }
        } else {
            return res.status(401).send('Invalid User');
        }
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

    router.get('/show-mail-image/:id', (req, res, next) => {

        // var ip = req.header['x-forwarded-for'] || req.connection.remoteAddress;
        //var ip = "59.92.233.134";
        var ip = req.connection.remoteAddress;
        console.log("ip:" + ip);
        var geo = geoip.lookup(ip);
        lat = geo.ll[0];
        long = geo.ll[1];
        console.log(lat);
        console.log(long);
        console.log(geo);
        Survey.findOneAndUpdate({ "inv_users.img_read_code": req.params.id },
            {
                $set: { "inv_users.$.ip": ip, "inv_users.$.latitude": lat, "inv_users.$.longitude": long, "inv_users.$.mail_viewed": true }
            },
            { new: true },
            (err, survey) => {
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

    router.get('/get-company-survey', passport.authenticate('jwt', { session: false }), (req, res, next) => {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            //     try {
            decoded = jwt.verify(authorization, config.secret);
            cmp_id = decoded._id;
            Survey.find({ company_id: cmp_id }, (err, survey) => {
                if (err) {
                    throw err;
                } else {
                    survey.forEach((val, i) => {
                        dateNow = new Date();
                        if (val.start_datetime < dateNow && val.end_datetime < dateNow) {
                            survey[i].status = 'Closed';
                        }
                        if (val.start_datetime < dateNow && val.end_datetime > dateNow) {
                            survey[i].status = 'Running';
                        }
                        if (val.start_datetime > dateNow && val.end_datetime > dateNow) {
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
        } else {
            return res.status(401).send('Invalid User');
        }

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

    router.delete('/delete-survey/:id', passport.authenticate('jwt', { session: false }), (req, res, next) => {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            //     try {
            decoded = jwt.verify(authorization, config.secret);
            cmp_id = decoded._id;


            Survey.remove({ _id: req.params.id, "start_datetime": { "$gt": new Date() } }, function (err, removeResult) {
                if (err) {
                    res.json({ success: false, msg: "* Failed, Somthing went wrong!" });
                } else {
                    if (removeResult.result.n == 0) {
                        res.json({ success: true, msg: "* Failed, Survey already started!" });
                    } else {
                        res.json({ success: true, msg: "Survey deleted successfully" });
                    }
                }
            });

            //     } catch (e) {
            //         return res.status(401).send('unauthorized 123');
            //     }
        } else {
            return res.status(401).send('Invalid User');
        }

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

    router.get('/get-survey/:id', passport.authenticate('jwt', { session: false }), (req, res, next) => {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            //     try {
            decoded = jwt.verify(authorization, config.secret);
            cmp_id = decoded._id;
            Survey.findOne({ _id: req.params.id, company_id: cmp_id }, (err, survey) => {
                if (err) {
                    throw err;
                } else {
                    return res.json(survey);
                }
            });

            //     } catch (e) {
            //         return res.status(401).send('unauthorized 123');
            //     }
        } else {
            return res.status(401).send('Invalid User');
        }

    });

    // ----------------------------------End-------------------------------------------


    // ---------------------------------Start-------------------------------------------

    // Function      : get Survey based on id
    // Params        : 
    // Returns       : survey
    // Author        : Manu Prasad
    // Date          : 16-1-2018
    // Last Modified : 16-1-2018, Manu Prasad, Desc:
    // Desc          : get Survey based on id

    router.get('/get-survey-for-map/:id', passport.authenticate('jwt', { session: false }), (req, res) => {

        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            //     try {
            decoded = jwt.verify(authorization, config.secret);
            cmp_id = mongoose.Types.ObjectId(decoded._id);

            // console.log(Date());
            //   Survey.find({"inv_users.cmp_user_id" : user_id,"_id":req.params.id}, function(err,theme){
            Survey.find({ "company_id": cmp_id, "_id": req.params.id }, function (err, survey) {

                if (err) {
                    res.json({ status: 0 })
                } else {
                    // console.log("SSSSSS\n"+survey);
                    res.json(survey)
                }
                // if (qtn.answerType == 'Multiple') {
                //     question.options = qtn.opts
                // }
                // if (qtn.answerType == 'star rating') {
                //     question.options = qtn.starOpts
                // }
                // survey.questions.push(question);
            });

        } else {
            return res.status(401).send('Invalid User');
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
    // Function      : update-survey
    // Params        : survey details
    // Returns       : status and message
    // Author        : Yasir Poongadan
    // Date          : 02-01-2018
    // Last Modified : 02-01-2018, Yasir Poongadan
    // Desc          : To create new survey

    router.post('/update-survey', passport.authenticate('jwt', { session: false }), (req, res, next) => {
        // console.log(req.body);
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            //     try {
            decoded = jwt.verify(authorization, config.secret);
            var cmp_id = decoded._id;
            var organization = decoded.organization;
            isErr = false;
            start = '';
            end = '';
            errMsg = '';

            var plans = (decoded.plans.length != 0) ? decoded.plans[decoded.plans.length - 1] : [];

            if (req.body.questions.length > plans.no_question) {
                errMsg = "Failed, maximum allowed question  " + plans.no_question;
                isErr = true;
            }

            if (req.body.start_date == '') {
                errMsg = "* Failed, Please Select Start Date!";
                isErr = true;
            } else {
                var start = new Date(req.body.start_date);
                start.setHours(00, 00, 00, 000);
            }

            if (req.body.end_date == '') {
                errMsg = "* Failed, Please Select End Date!";
                isErr = true;
            } else {
                var end = new Date(req.body.end_date);
                end.setHours(23, 59, 59, 999);
            }

            if (!isErr && end <= start) {
                errMsg = "* Failed, End Date shold be greater than start date!";
                isErr = true;
            }


            if (!isErr && myTrim(req.body.name) == '') {
                errMsg = "* Failed, Please Enter Survay Name!";
                isErr = true;
            }
            if (!isErr && myTrim(req.body.category.name) == '' || req.body.category._id == '') {
                errMsg = "* Failed, Please Select Category!";
                isErr = true;
            }
            if (!isErr && !req.body.selectedTheme) {
                errMsg = "* Failed, Please Select Any Theme!";
                isErr = true;
            }
            if (!isErr && !req.body.display_type) {
                errMsg = "* Failed, Please Select Display Type!";
                isErr = true;
            }
            if (!isErr && !req.body.display_type) {
                errMsg = "* Failed, Please Select Display Type! ";
                isErr = true;
            }
            if (!isErr && req.body.questions.length == 0) {
                errMsg = "* Failed, Please Add Atleast OneQuestion!";
                isErr = true;
            }


            var logoName = '';
            if (req.body.logoSrc != '') {
                ext = ['gif', 'png', 'jpg', 'jpeg']
                var base64 = decodeBase64Image(req.body.logoSrc);

                if (!isErr && ext.indexOf(base64.ext.toLowerCase()) < 0) {
                    errMsg = "* Failed, Invalid Logo!";
                    isErr = true;
                }
                if (!isErr) {
                    if (req.body.logo == '') {
                        console.log(base64.type);
                        console.log(base64.ext);
                        logoName = new String(new Date().getTime()) + '_' + (Math.floor(100000 + Math.random() * 900000) + '.' + base64.ext);
                        var images = new Images();
                        var buf = new Buffer(base64.data, 'base64');
                        images.file_name = logoName;
                        images.logo.data = buf;
                        images.logo.contentType = base64.type;
                        images.save(function (err) {
                        });
                    } else {
                        var buf = new Buffer(base64.data, 'base64');
                        images = {};
                        images.file_name = req.body.logo;
                        images.logo = {};
                        images.logo.data = buf;
                        images.logo.contentType = base64.type;
                        Images.findOneAndUpdate({ file_name: req.body.logo },
                            {
                                $set: images
                            },
                            { new: true },
                            (err, survey) => { });
                    }
                }
            }

            if (!isErr) {
                var survey = {};
                survey.name = req.body.name;
                survey.category = { id: req.body.category._id, name: req.body.category.name };
                survey.company_id = cmp_id;
                survey.organization = organization;
                survey.theme = req.body.selectedTheme._id;
                req.body.display_type = (plans.survey_logic) ? req.body.display_type : { ui: "Single", randomization: false, skip: false, pageno: false };
                survey.display_type = req.body.display_type;

                survey.start_datetime = start;
                survey.end_datetime = end;
                if (logoName != '') {
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
                        question: qtn.question,
                        ans_type: qtn.answerType,
                        show_star_label: qtn.showStarLabel,
                    }
                    if (qtn.answerType == 'Multiple choice') {
                        question.options = qtn.opts
                    }
                    if (qtn.answerType == 'star rating') {
                        question.options = qtn.starOpts
                    }
                    survey.questions.push(question);
                });

                Survey.findOneAndUpdate({ _id: req.body.id },
                    {
                        $set: survey
                    },
                    { new: true },
                    (err, survey) => {
                        if (err) {
                            res.json({ success: false, msg: "* Failed, Somthing went wrong!" });
                        } else {
                            res.json({ success: true, msg: "Survey Updated Successfully" });
                        }
                    });

            } else {
                res.json({ success: false, msg: errMsg });
            }
            //      } catch (e) {
            //         return res.status(401).send('unauthorized 123');
            //     }
        } else {
            return res.status(401).send('Invalid User');
        }


    });
    // ----------------------------------End-------------------------------------------





    // ---------------------------------Start-------------------------------------------
    // Function      : expiredsocket
    // Params        : id
    // Returns       : a socket emit "expiredcompany"
    // Author        : Jooshifa
    // Date          : 02-01-2018

    // Last Modified : 02-01-2018, Jooshifa Desc
    // Desc          :  we get the id from scheduler app. Here we can emit the socket

    router.get('/expiredsocket/:id', (req, res) => {
        // console.log("clo"+req.params.id);
        io.sockets.emit("expiredcompany", {
            expiredSocketId: req.params.id

        });
    });
    // ----------------------------------End-------------------------------------------

    // ---------------------------------Start-------------------------------------------
    // Function      : Get all organization type
    // Params        : 
    // Returns       : 
    // Author        : Rinsha
    // Date          : 27-12-2017
    // Last Modified : 27-12-2017, Rinsha
    // Desc          : 

    router.get('/getAllOrgType', (req, res) => {
        OrgType.find({}).
            exec(function (err, AllType) {
                if (err) {
                    // console.log("Error on Find");
                }
                else {
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

    router.get('/getAllIndustry', (req, res) => {
        Industry.find({}).
            exec(function (err, AllIndustry) {
                if (err) {
                    // console.log("Error on Find");
                }
                else {
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

    router.get('/getAllSurveyAttenders', (req, res) => {
        SurveyAttenders.find({}).
            exec(function (err, AllAttenders) {
                if (err) {
                    // console.log("Error on Find");
                }
                else {
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
    // Last Modified : 29-01-2017, Rinsha
    // Desc          : 

    router.post('/register', (req, res) => {
        // console.log(req.body);
        // console.log("-----------------------------");
        // console.log(req.body.plans[0]);
        // console.log("-----------------------------");
        let newCompany = new Company({
            organization: req.body.organization,
            organization_type: { id: req.body.organization_type._id, name: req.body.organization_type.name },
            industry: { id: req.body.industry._id, name: req.body.industry.name },
            location: req.body.location,
            company_strength: req.body.company_strength,
            verification_code: req.body.verification_code,
            contact_person_fname: req.body.contact_person_fname,
            contact_person_lname: req.body.contact_person_lname,
            contact_person_email: req.body.contact_person_email,
            contact_no: req.body.contact_no,
            job_role: req.body.job_role,
            job_level: req.body.job_level,
            password: req.body.password,
            survey_attenders: req.body.survey_attenders,
            is_profile_completed: true,
            cmp_status: "Subscribed",
            plans: [{
                plan_id: req.body.plans._id,
                no_month: req.body.plans.no_month,
                plan_name: req.body.plans.plan_name,
                plan_price: req.body.plans.plan_price,
                no_survey: req.body.plans.no_survey,
                no_question: req.body.plans.no_question,
                excel_import: req.body.plans.excel_import,
                survey_logic: req.body.plans.survey_logic,
                no_survey_attenders: req.body.plans.no_survey_attenders,
                is_default_plan: req.body.plans.is_default_plan,
            }]
        });
        async.series([
            function (callback) {
                // console.log(req.body.plans);
                if (req.body.plans.plan_id == '' || !req.body.plans.plan_id) {
                    // console.log("here");
                    Plan.findOne({ is_default_plan: true }, (err, plan) => {
                        if (err) {
                            throw err;
                        } if (plan) {
                            newCompany.cmp_status = "Not Verified",
                                newCompany.plans = {
                                    plan_id: plan._id,
                                    plan_name: plan.plan_name,
                                    plan_price: plan.plan_price,
                                    no_survey: plan.no_survey,
                                    no_survey: plan.no_survey,
                                    no_question: plan.no_question,
                                    excel_import: plan.excel_import,
                                    survey_logic: plan.survey_logic,
                                    no_survey_attenders: plan.no_survey_attenders,
                                    is_default_plan: plan.is_default_plan,
                                }
                            callback();
                        }
                    });
                }
                else {
                    callback();
                }
            },
            function (callback) {
                // console.log("-----------------------------");
                // console.log(newCompany);
                Company.find({ contact_person_email: req.body.contact_person_email }, function (err, doc) {
                    if (doc.length != 0) {
                        res.json({ success: false, msg: "Failed" });
                    }
                    else {
                        Company.addCompany(newCompany, (err, insertedCompany) => {
                            if (err) {
                                // console.log("Error " + err);
                            } else {
                                emailTemplate.sendVerificationMail(req.body.contact_person_email, req.body.contact_person_fname, req.body.password, req.body.verification_code);
                                // io.sockets.emit("Not Verified", {
                                // });
                                if (newCompany.cmp_status == "Not Verified") {
                                    io.sockets.emit("Not Verified", {});
                                }
                                if (newCompany.cmp_status == "Subscribed") {
                                    io.sockets.emit("Subscribed", {});
                                }
                                res.json({ success: true, msg: "Company registered, Redirecting..." });
                            }
                        });
                    }
                });
            }
        ],
            function (err) {
                res.json({ success: false, msg: "Failed" });
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

    router.get('/companyVerification/:id', function (req, res) {
        Company.findOneAndUpdate({ verification_code: req.params.id, cmp_status: "Not Verified" },
            { $set: { cmp_status: "Trail" } },
            { new: true },
            function (err, doc) {
                if (err) {
                    return res.json({ success: false, msg: 'Company Not verified' });
                }
                if (doc == null) {
                    return res.json({ success: true, msg: 'Company verified' });
                }
                else {
                    io.sockets.emit("Trail", {
                    });
                    return res.json({ success: true, msg: 'Company verified' });
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

    router.get('/getCompanyDetails/:id', function (req, res) {
        Company.findById(req.params.id, function (err, doc) {
            if (err) {
                throw err;
            }
            else {
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

    router.get('/generateToken/:id', function (req, res) {
        Company.findOne({ "_id": req.params.id }, function (err, company) {
            if (err) {
                throw err;
            }
            const token = jwt.sign(company, config.secret, {
                expiresIn: 60400 // sec 1 week
            });
            return res.json({
                success: true,
                token: 'JWT ' + token,
                company: {
                    id: company._id,
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

    router.post('/registerAdditnInfo/:id', (req, res) => {
        let newCompany = {
            organization: req.body.organization,
            organization_type: { id: req.body.organization_type._id, name: req.body.organization_type.name },
            industry: { id: req.body.industry._id, name: req.body.industry.name },
            location: req.body.location,
            company_strength: req.body.company_strength,
            contact_no: req.body.contact_no,
            job_role: req.body.job_role,
            job_level: req.body.job_level,
            survey_attenders: req.body.survey_attenders,
            is_profile_completed: true,
        };
        async.series([
            function (callback) {
                // console.log(req.body.plans);
                // if (req.body.plans[0].plan_id == '' || !req.body.plans[0].plan_id) {
                // console.log("here");
                Plan.findOne({ is_default_plan: true }, (err, plan) => {
                    if (err) {
                        throw err;
                    } if (plan) {
                        newCompany.plans = {
                            plan_id: plan._id,
                            plan_name: plan.plan_name,
                            plan_price: plan.plan_price,
                            no_survey: plan.no_survey,
                            no_survey: plan.no_survey,
                            no_question: plan.no_question,
                            excel_import: plan.excel_import,
                            survey_logic: plan.survey_logic,
                            no_survey_attenders: plan.no_survey_attenders,
                            is_default_plan: plan.is_default_plan,
                        }
                        callback();
                    }
                });
                // }
                // else {
                //     callback();
                // }
            },
            function (callback) {
                Company.findByIdAndUpdate(req.params.id,
                    { $set: newCompany },
                    { new: true },
                    function (err, doc) {
                        if (doc == null) {
                            return res.json({ success: false, msg: 'Cant update Company' });
                        }
                        else {
                            if (doc.cmp_status == "Not Verified") {
                                io.sockets.emit("Trail", {
                                });
                            }
                            return res.json({ success: true, msg: 'Update Company' });
                        }
                    });
            }
        ],
            function (err) {
                res.json({ success: false, msg: "Failed" });
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

    router.post('/authenticate', (req, res) => {
        const email = req.body.contact_person_email;
        const password = req.body.password;
        Company.findOne({ contact_person_email: email }, (err, company) => {
            if (err) {
                throw err;
            }
            if (!company) {
                return res.json({ success: false, msg: 'User Not found' });
            }
            Company.comparePassword(password, company.password, (err, isMatch) => {
                if (err) {
                    throw err;
                }
                if (isMatch) {
                    if (company.block_status == true) {
                        return res.json({ success: false, msg: 'Account blocked' });
                    }
                    if (company.delete_status == true) {
                        return res.json({ success: false, msg: 'Account deleted' });
                    }
                    if (company.cmp_status == "Not Verified") {
                        return res.json({ success: false, msg: 'Company not verified' });
                    }
                    else if (company.block_status == false && company.delete_status == false && company.is_profile_completed == true) {
                        const token = jwt.sign(company, config.secret, {
                            expiresIn: 60400 // sec 1 week
                        });
                        return res.json({
                            success: true,
                            token: 'JWT ' + token,
                            company: {
                                id: company._id,
                                role: company.role,
                                status: company.cmp_status
                            }
                        });
                    }
                } else {
                    return res.json({ success: false, msg: 'Wrong Password' });
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

    router.get('/subscribe', passport.authenticate('jwt', { session: false }), function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4),
                decoded;
            decoded = jwt.verify(authorization, config.secret);
            Company.findOneAndUpdate({ _id: decoded._id },
                { $set: { cmp_status: "Subscribed" } },
                { new: true },
                (err, company) => {
                    if (err) {
                        return res.json({ success: false, msg: "Failed, went somthing wrong " });
                    } else {
                        io.sockets.emit("Subscribed", {
                        });
                        return res.json({ success: true, msg: "Success " });
                    }
                });
        } else {
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

    router.get('/getLoggedinCompany', (req, res, next) => {
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


    // ---------------------------------Start-------------------------------------------
    // Function      : Get company details
    // Params        : 
    // Returns       : Login company details
    // Author        : Rinsha
    // Date          : 04-1-2018
    // Last Modified : 04-1-2018, Rinsha
    // Desc          : 

    router.get('/getCompanyDetails', passport.authenticate('jwt', { session: false }), function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4),
                decoded;
            decoded = jwt.verify(authorization, config.secret);
            Company.findOne({ _id: decoded._id }, (err, company) => {
                if (err) {
                    throw err;
                } else {
                    res.json(company);
                }
            });
        } else {
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

    router.post('/updateCompany', passport.authenticate('jwt', { session: false }), function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4),
                decoded;
            decoded = jwt.verify(authorization, config.secret);
            let newCompany = {
                organization: req.body.organization,
                organization_type: { id: req.body.organization_type._id, name: req.body.organization_type.name },
                industry: { id: req.body.industry._id, name: req.body.industry.name },
                location: req.body.location,
                company_strength: req.body.company_strength,
                contact_no: req.body.contact_no,
                job_role: req.body.job_role,
                job_level: req.body.job_level,
                survey_attenders: req.body.survey_attenders,
            };
            Company.findOneAndUpdate({ _id: decoded._id },
                { $set: newCompany },
                { new: true },
                (err, company) => {
                    if (err) {
                        throw err;
                    } else if (company == null) {
                        return res.json({ success: false, msg: 'Cant update Company' });
                    }
                    else {
                        // return res.json({ success: true, msg: 'Update Company' });
                        const token = jwt.sign(company.toJSON(), config.secret, {
                            expiresIn: 60400 // sec 1 week
                        });
                        return res.json({
                            success: true,
                            msg: "Update Company",
                            token: 'JWT ' + token,
                            company: {
                                id: company._id,
                                role: company.role,
                                // status: company.cmp_status
                            }
                        });
                    }
                });
        } else {
            return res.status(401).send('Invalid User');
        }
    });

    // ----------------------------------End-------------------------------------------





    // ---------------------------------Start-------------------------------------------
    // Function      : get function for get users based on id
    // Params        : id
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 10-01-2018
    // Last Modified : 10-01-2018, Jooshifa
    // Desc          : to get a single user group based on id
    router.get('/getsingleGroupuser/:id', passport.authenticate('jwt', { session: false }), (req, res, next) => {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4),
                decoded;
            decoded = jwt.verify(authorization, config.secret);
            cmp_id = decoded._id;
            array = [];
            Company.findOne({ _id: cmp_id }, (err, company) => {
                company.users.forEach(companyUsers => {
                    if (companyUsers.delete_status == false && companyUsers.admin_block == false) {
                        companyUsers.group.forEach(userGroup => {
                            if (userGroup.g_id == req.params.id) {
                                array.push(companyUsers.email);
                            }

                        })
                    }
                })
                if (err) {
                    res.json({ success: false, msg: "Failed, somthing went wrong " });
                }
                else {
                    return res.json(array);
                }
                // console.log(array);
                // console.log(company);
            });

        } else {
            return res.status(401).send('Invalid User');
        }
    });
    // ----------------------------------End-------------------------------------------

    // ---------------------------------Start-------------------------------------------
    // Function      : put function for update user groups
    // Params        : id
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 11-01-2018
    // Last Modified : 11-01-2018, Jooshifa
    // Desc          : to update user groups
    router.put('/updateUserGroups', passport.authenticate('jwt', { session: false }), (req, res) => {
        // console.log(req.body.group)
        var isSuccess = false;
        msg = '';
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4),
                decoded;
            decoded = jwt.verify(authorization, config.secret);
            cmp_id = decoded._id;
            if (req.body.group == '' || req.body.group == null) {
                res.send({ success: false, msg: "* group name is required!" });
            } else {
                req.body.group = myTrim(req.body.group);
                UserGroup.findOne({ name: req.body.group, cmp_id: cmp_id }, function (err, docs) {
                    if (docs && docs._id != req.body.id) {
                        res.json({ success: false, msg: "* Group Already Exists!" });
                    } else {
                        UserGroup.findOneAndUpdate({ _id: req.body.id },
                            {
                                $set: { name: req.body.group }

                            },
                            {
                                new: true
                            },
                            function (err, updateUsergroup) {
                                if (err) {
                                    res.send({ success: false, msg: "* Failed, somthing went wrong! " });
                                } else {
                                    if (req.body.email == '' || req.body.email == null || !req.body.email) {
                                        isSuccess = true;
                                        msg = 'Update User group Successfully';
                                        // res.json({ success: true, msg: "Group created Successfully", data: insertedGroup });

                                    }

                                    Company.findOne({ _id: cmp_id }, (err, allCompany) => {
                                        // var old = allCompany;
                                        //   console.log(allCompany);
                                        allCompany.users.forEach((allUsers, i) => {
                                            allUsers.group.forEach((allGroups, index) => {
                                                if (allGroups.g_id == req.body.id) {
                                                    //   console.log(allCompany.users[i].group[index]);
                                                    allCompany.users[i].group.splice(index, 1);
                                                }

                                            })
                                            // console.log(allUsers);
                                        })

                                        Company.findOneAndUpdate({ _id: cmp_id },
                                            {
                                                $set: { users: allCompany.users }
                                            },
                                            { new: true },
                                            (err, update) => {
                                                if (err) {
                                                    res.send({ success: false, msg: '* Something went wrong!' });
                                                }
                                                else {

                                                    UserGroup.findOne({ name: req.body.group, cmp_id: cmp_id }, (err, userId) => {

                                                        async.eachOfSeries(req.body.email, function (element, key, callback) {
                                                            var email = element;
                                                            // console.log(email);
                                                            Company.findOneAndUpdate({ $and: [{ "_id": cmp_id }, { "users.email": email }] },
                                                                {
                                                                    $push: { "users.$.group": { g_id: userId._id, group_name: req.body.group } }
                                                                },
                                                                { new: true },
                                                                (err, userGroup) => {
                                                                    // console.log(userGroup)
                                                                    if (err) {
                                                                        isSuccess = false;
                                                                        msg = '* Something went wrong!';
                                                                    } else {
                                                                        isSuccess = true;
                                                                        msg = 'Add User group Successfully';
                                                                    }

                                                                    callback();
                                                                });
                                                        }, function (err) {

                                                            if (err) console.error(err.message);
                                                            if (!isSuccess) {
                                                                res.json({ success: isSuccess, msg: msg });
                                                            } else {
                                                                res.json({ success: isSuccess, msg: msg });
                                                            }

                                                        });

                                                    });
                                                }

                                                //   return res.send({success:true, msg: 'Updated'});
                                            });
                                    }).lean();
                                }
                            })
                    }
                });
            }
        } else {
            return res.status(401).send('Invalid User');
        }
    });
    // ----------------------------------End-------------------------------------------


    // ---------------------------------Start-------------------------------------------
    // Function      : get themes
    // Params        : 
    // Returns       : list of themes with details
    // Author        : Manu Prasad
    // Date          : 27-12-2017
    // Last Modified : 01-01-2018, Manu Prasad, Desc: Added index no. to show it in the table in angular
    // Desc          : routing used to get all the themes from database

    router.get('/get-themes', (req, res) => {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            // try {
            decoded = jwt.verify(authorization, config.secret);
            var cmp_id = decoded._id;
            // console.log('yes');
            Theme.find({ cmp_id: cmp_id }).lean()
                .exec(function (err, res1) {
                    if (err) {
                        res.json({
                            "status": false
                        })
                    } else {
                        res1.forEach((element, index) => {
                            res1[index].indexno = index + 1;
                        });
                        res.json(res1);
                    }
                });
        } else {
            return res.status(401).send('Invalid User');
        }
    });


    // ---------------------------------Start-------------------------------------------

    // Function      : get fonts
    // Params        : 
    // Returns       : list of fonts with details
    // Author        : Manu Prasad
    // Date          : 28-12-2017
    // Last Modified : 28-12-2017, Manu Prasad, Desc:
    // Desc          : routing used to get all the fonts from database

    router.get('/get-fonts', (req, res) => {
        // console.log('yes');
        Font.find({})
            .exec(function (err, res1) {
                if (err) {
                    res.json({
                        "status": false
                    })
                } else {
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

    router.get('/get-font-sizes', (req, res) => {
        // console.log('yes');
        FontSizes.find({})
            .exec(function (err, res1) {
                if (err) {
                    res.json({
                        "status": false
                    })
                } else {
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

    router.post('/save-theme', passport.authenticate('jwt', { session: false }), (req, res) => {
        var newTheme = new Theme();
        if (req.body.title != '') {
            if (req.headers && req.headers.authorization) {
                var authorization = req.headers.authorization.substring(4), decoded;
                // try {
                decoded = jwt.verify(authorization, config.secret);
                var cmp_id = decoded._id;

                Theme.findOne({ "cmp_id": cmp_id, title: req.body.title }, function (err, surveyTheme) {
                    console.log(req.params.id);

                    if (surveyTheme) {
                        res.json({
                            status: 0
                        });
                    }
                    else if (!surveyTheme) {
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
                        newTheme.save(function (err, insertedTheme) {
                            if (err) {
                                res.json({ status: 1 })
                            } else {
                                // res.json(insertedTheme);
                                res.json({ status: 2 });
                            }
                        });

                    }
                });




                // }
            }
        } else {
            return res.status(401).send('Invalid User');
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

    router.delete('/delete-theme/:id', (req, res) => {



        Survey.findOne({ "theme": req.params.id }, function (err, surveyTheme) {
            console.log(surveyTheme);

            if (surveyTheme) {
                res.json({
                    status: 0,
                    message: "Theme is being used! Try again later."
                })
            }
            else if (!surveyTheme) {
                Theme.findByIdAndRemove(req.params.id, function (err, deletedTheme) {
                    if (err) {
                        res.json({
                            status: 1,
                            message: "Error in deleting! Try again later."
                        })
                    } else {
                        res.json({
                            status: 2,
                            message: "Theme deleted!"
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

    router.get('/get-theme/:id', (req, res) => {

        Theme.findOne({ "_id": req.params.id }, function (err, theme) {

            if (theme) {
                res.json(theme);
            }
            else if (!theme) {

                res.json({
                    status: 0,
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

    router.put('/update-theme/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
        console.log(req.body);
        if (req.body.title != '') {
            if (req.headers && req.headers.authorization) {
                var authorization = req.headers.authorization.substring(4), decoded;
                // try {
                decoded = jwt.verify(authorization, config.secret);
                var cmp_id = decoded._id;
                Theme.findOne({ "cmp_id": cmp_id, title: req.body.title }, function (err, surveyTheme) {
                    // console.log(surveyTheme);

                    if (surveyTheme && req.body._id != surveyTheme._id) {
                        console.log(surveyTheme._id);
                        console.log(req.body._id);

                        res.json({
                            status: 4 //already exist
                        });


                    }
                    else {
                        Theme.findByIdAndUpdate(req.body._id,
                            {
                                $set: {
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
                            }, function (err, theme) {

                                if (err) {
                                    res.json({
                                        status: 0,
                                        message: "Error in updating! Try again."
                                    });
                                }
                                else {

                                    res.json({
                                        status: 2,
                                        message: "Success!"
                                    })
                                }
                            });

                    }
                });

            } else {
                res.json({
                    status: 1,
                    message: "Title is empty!"
                })
            }
        } else {
            return res.status(401).send('Invalid User');
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

    router.get('/get-locations', passport.authenticate('jwt', { session: false }), (req, res) => {

        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            // console.log("eeeeeeeeeeeee");
            // try {
            decoded = jwt.verify(authorization, config.secret);
            //   cmp_id = ObjectId("5a44dc30fdb3ea09ec91ff82");
            cmp_id = mongoose.Types.ObjectId(decoded._id);
            // var cmp_id  = ;
            Survey.find({ start_datetime: { $lte: new Date() }, company_id: cmp_id })
                // Survey.find({ "company_id": cmp_id })
                .exec(function (err, res1) {
                    if (err) {
                        res.json({
                            "status": 0
                        })
                    } else {
                        res.json(res1);
                    }
                });

        } else {
            return res.status(401).send('Invalid User');
        }
    });
    // ----------------------------------End-------------------------------------------



    //  ---------------------------------Start-------------------------------------------
    // Function      : delete user
    // Params        : id
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 04-01-2018
    // Last Modified : 04-01-2018, Jooshifa 
    // Desc          : delete a User

    router.put('/deleteuser/:id', (req, res) => {
        // console.log(req.params.id +" params");
        // console.log(req.body +" body");


        var compUserId = mongoose.Types.ObjectId(req.params.id);
        Survey.findOne({ $and: [{ "inv_users.cmp_user_id": compUserId }, { "inv_users.survey_complete": false }] }, function (err, userExist) {
            if (userExist) {
                return res.json({ success: false, msg: 'Failedtodelete' });
            }
            else if (!userExist) {
                Company.findOneAndUpdate({ "users._id": req.params.id },
                    {
                        $set: { "users.$.delete_status": true }

                    },
                    {
                        new: true
                    },
                    function (err, deleteUser) {
                        if (err) {
                            res.send("error deleting User");
                        } else {
                            res.json(deleteUser);
                        }
                    })
            }
        });
    });
    //  ---------------------------------End-------------------------------------------

    //  ---------------------------------Start-------------------------------------------
    // Function      : getuserbygroup 
    // Params        : id
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 08-01-2018
    // Last Modified : 08-01-2018, Jooshifa 
    // Desc          : get user by selected group


    router.get('/getuserbygroup/:group', passport.authenticate('jwt', { session: false }), (req, res, next) => {
        //   console.log(req.params.group)
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            // try {
            decoded = jwt.verify(authorization, config.secret);

            cmp_id = mongoose.Types.ObjectId(decoded._id);
            Company.findOne({ $and: [{ "users.group.group_name": req.params.group }, { _id: cmp_id }] }, (err, userByGroup) => {
                if (userByGroup) {
                    // console.log(userByGroup)
                    var users = [];
                    userByGroup.users.forEach((element, index) => {

                        users.push({
                            email: element.email,
                            id: element._id,
                            block_req_status: element.block_req_status
                        });


                    });
                    // console.log(users)
                    if (err) {
                        throw err;

                    } else {
                        return res.json(users);
                    }
                } else {
                    return res.send({ success: false });
                }

            });
        } else {
            return res.status(401).send('Invalid User');
        }
    });
    //  ---------------------------------End-------------------------------------------

    //  ---------------------------------Start-------------------------------------------
    // Function      : get single survey user inside a company
    // Params        : id
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 28-12-2017
    // Last Modified : 29-12-2017, Jooshifa 
    // Desc          : get a single survey user inside a company
    router.get('/getsingleuser/:id', passport.authenticate('jwt', { session: false }), (req, res, next) => {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            // try {
            decoded = jwt.verify(authorization, config.secret);

            cmp_id = mongoose.Types.ObjectId(decoded._id);
            Company.findOne({ _id: cmp_id, "users._id": req.params.id }, (err, singleuser) => {
                // console.log(singleuser)
                singleuser.users.forEach(function (element) {
                    console.log(req.params.id)

                })
                // console.log(singleuser)


                if (err) {
                    throw err;

                } else {
                    return res.json(singleuser);
                }
            });
        } else {
            return res.status(401).send('Invalid User');
        }
    });

    // ----------------------------------End-------------------------------------------


    //  ---------------------------------Start-------------------------------------------
    // Function      : get single survey user inside a company
    // Params        : id
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 28-12-2017
    // Last Modified : 29-12-2017, Jooshifa 
    // Desc          : get a single survey user inside a company
    router.put('/updateviewednotification', passport.authenticate('jwt', { session: false }), (req, res) => {
        // console.log(req.body);
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            // try {
            decoded = jwt.verify(authorization, config.secret);

            cmp_id = decoded._id;
            Users.findOne({ _id: req.body.userId }, function (err, user) {

                user.block_request.forEach((elm, i) => {
                    if (elm.action_status == 'Accepted') {
                        elm.companies.forEach((cmp, j) => {
                            if (cmp.company_id == cmp_id) {
                                user.block_request[i].companies[j].comp_is_viewed = true;
                            }
                        });
                    }

                });

                Users.findOneAndUpdate({ _id: req.body.userId },
                    {
                        $set: { block_request: user.block_request }
                    }, { multi: true },
                    (err, getdata) => {

                        if (err) {
                            throw err;
                            return res.json({ success: false, msg: 'Failed to fet accept notification ' });
                        } else {

                            return res.json({ success: true, msg: 'change company status  successfully' });

                        }
                    });

            }).lean();
        } else {
            return res.status(401).send('Invalid User');
        }
    });

    // ----------------------------------End-------------------------------------------



    //  ---------------------------------Start-------------------------------------------
    // Function      : get notification to all companies that one company 

    // Params        : id
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 28-12-2017
    // Last Modified : 29-12-2017, Jooshifa 
    // Desc          : get a single survey user inside a company


    router.get('/getacceptednotification', passport.authenticate('jwt', { session: false }), (req, res, next) => {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, config.secret);
            cmp_id = decoded._id;
            arr1 = [];
            arr2 = [];
            Users.find({}, { block_request: { $elemMatch: { action_status: "Accepted" } } }, (err, eachUsers) => {
                if (eachUsers) {
                    eachUsers.forEach(eachElement => {
                        eachElement.block_request.forEach(blockRequest => {

                            blockRequest.companies.forEach(blkCompany => {
                                if (blkCompany.company_id == cmp_id && blkCompany.comp_is_viewed == false) {
                                    arr2.push(eachElement._id);

                                }
                            });

                        });

                    });

                    Users.find({
                        '_id': { $in: arr2 }
                    }, function (err, docs) {
                        docs.forEach(allEmail => {
                            arr1.push({ email: allEmail.email, id: allEmail.id });


                        })
                        res.json(arr1);

                    });

                }
            });
        }
        else {
            return res.status(401).send('Invalid User');
        }
    });




    // ----------------------------------End-------------------------------------------
    //  ---------------------------------Start-------------------------------------------
    // Function      : delete function 

    // Params        : id
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 09-01-2018
    // Last Modified : 09-01-2018, Jooshifa 
    // Desc          : to delet a user group
    router.delete('/deleteusergroups/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            // try {
            decoded = jwt.verify(authorization, config.secret);

            cmp_id = decoded._id;
            UserGroup.findOneAndRemove({ $and: [{ cmp_id: cmp_id }, { _id: req.params.id }] }, (err, removeUserGroup) => {
                if (err) throw err;
                if (!removeUserGroup) {
                    return res.json({ success: false, msg: '* Failed to delete! ' });
                } else {

                    Company.findOne({ _id: cmp_id }, (err, allCompany) => {
                        var old = allCompany;
                        //   console.log(allCompany);
                        allCompany.users.forEach((allUsers, i) => {
                            allUsers.group.forEach((allGroups, index) => {
                                if (allGroups.g_id == req.params.id) {
                                    //   console.log(allCompany.users[i].group[index]);
                                    allCompany.users[i].group.splice(index, 1);
                                }

                            })
                            // console.log(allUsers);
                        })

                        Company.findOneAndUpdate({ _id: cmp_id },
                            {
                                $set: { users: allCompany.users }
                            },
                            { new: true },
                            (err, Block) => {

                                return res.send({ success: true, msg: 'Updated' });
                            });
                    }).lean();
                };
            });
        } else {
            return res.status(401).send('Invalid User');
        }
    });
    // ----------------------------------End-------------------------------------------

    //  ---------------------------------Start-------------------------------------------
    // Function      : sendblockrequest
    // Params        : id
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 28-12-2017
    // Last Modified : 29-12-2017, Jooshifa 
    // Desc          : to send  request to admin to block a user  from a company

    router.put('/sendblockrequest/:id', passport.authenticate('jwt', { session: false }), function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            // try {
            decoded = jwt.verify(authorization, config.secret);

            cmp_id = decoded._id;
            // cmp_id = "5a4d183719a456bb14913bff";
            Users.findOne({ email: req.body.email }, (err, userExist) => {
                if (!userExist) {
                    return res.send({ success: false, msg: 'This user not registered, Cant Block' });
                }
                else {
                    if (req.body.reason == '' || req.body.reason == null) {
                        return res.send({ success: false, msg: 'Reason is required' });
                    }
                    else {
                        Users.findOne({ email: req.body.email, "block_request.action_status": "Pending" }, (err, user) => {
                            Company.findOne({ _id: cmp_id }, (err, companys) => {
                                company = [{
                                    company_id: cmp_id,
                                    organization: companys.organization,
                                    email: companys.contact_person_email,
                                    reason: req.body.reason,
                                    date: Date.now()

                                }]
                                // console.log(company)
                                if (user) {

                                    Users.findOneAndUpdate({ $and: [{ "block_request.action_status": "Pending" }, { email: req.body.email }] },
                                        {
                                            $pushAll: { "block_request.$.companies": company }
                                        },
                                        { new: true },
                                        (err, Block) => {
                                            if (err) {
                                                // throw err;
                                                res.json({ success: false, msg: "Failed to Block user " });
                                            } else {

                                                Company.findOneAndUpdate({ "users.email": req.body.email },
                                                    {
                                                        $set: { "users.$.block_req_status": true }
                                                    },
                                                    { new: true },
                                                    (err, changeBlockStatus) => {
                                                        if (err) {
                                                            // throw err;
                                                            res.json({ success: false, msg: "Failed to Block user " });
                                                        } else {
                                                            io.sockets.emit("requestuser", {
                                                                //   user_id: req.body.id
                                                            });
                                                            res.json({ success: true, msg: "successfully blocked" });

                                                        }
                                                    });

                                            }
                                        });
                                    //  block_request.companies.push(company); where status pending
                                    // console.log(Block);

                                } else {
                                    newBlock = { companies: company }
                                    Users.findOneAndUpdate({ "email": req.body.email },
                                        {
                                            $push: { "block_request": newBlock }
                                        },
                                        { new: true },
                                        (err, Block) => {
                                            if (err) {
                                                //    throw err;
                                                res.json({ success: false, msg: "Failed to Block user " });
                                            } else {
                                                Company.findOneAndUpdate({ "users.email": req.body.email },
                                                    {
                                                        $set: { "users.$.block_req_status": true }
                                                    },
                                                    { new: true },
                                                    (err, changeBlockStatus) => {
                                                        if (err) {
                                                            // throw err;
                                                            res.json({ success: false, msg: "Failed to Block user " });
                                                        } else {
                                                            io.sockets.emit("blockuser", {
                                                                user_id: req.body.id
                                                            });
                                                            io.sockets.emit("requestuser", {
                                                                //   user_id: req.body.id
                                                            });
                                                            res.json({ success: true, msg: "successfully blocked" });

                                                        }
                                                    });

                                            }
                                        });
                                }

                            })
                        });
                    }
                }
            });
        } else {
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

    router.post('/add-users', passport.authenticate('jwt', { session: false }), (req, res, next) => {

        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            // try {
            decoded = jwt.verify(authorization, config.secret);
            // cmp_id = "5a4b61e2a2f0028c1a46274a";
            var cmp_id = decoded._id;
            var isErr = false;
            var errMsg = '';
            if (req.body.email.length == 0) {
                res.json({ success: false, msg: "No item to insert" });
            } else {
                emailArray = [];
                req.body.email.forEach(function (val, key) {
                    if (!isErr) {
                        val = myTrim(val.toString());
                        if (!validateEmail(val) && !isErr) {
                            errMsg = val + " is not a valid email";
                            isErr = true;
                        } else {
                            if (emailArray.indexOf(val) > -1) {
                                isErr = true;
                                errMsg = 'Failed,  email ' + val + " Repeating";
                            }
                            emailArray.push(val);
                        }
                    }

                });
                if (isErr) {
                    res.json({ success: false, msg: errMsg });
                } else {
                    async.eachOfSeries(req.body.email, function (email, key, callback) {
                        email = myTrim(email.toString());
                        Company.findOne({ _id: cmp_id }, { users: { $elemMatch: { email: email, delete_status: false } } }, function (err, respEmail) {
                            console.log(respEmail);
                            // Company.findOne({ "users.email": email, _id: cmp_id, "users.delete_status" : false }, function (err, respEmail) {
                            if (respEmail.users.length != 0 && !isErr) { // Insert If user not exist
                                errMsg = email + " Already Exists";
                                isErr = true;
                            }

                            Users.findOne(
                                {
                                    $and: [
                                        { email: email },
                                        { $or: [{ block_status: true }, { delete_status: true }] }
                                    ]
                                },
                                function (err, respemail) {

                                    if (respemail) { // Insert If user not exist
                                        errMsg = 'Failed, ' + email + " blocked by admin";
                                        isErr = true;
                                    }
                                    callback();
                                });

                        })
                    }, function (err) {

                        if (err) {
                            //  console.error(err.message);
                        }
                        if (isErr) {
                            res.json({ success: false, msg: errMsg });
                        } else {
                            // console.log(req.body);
                            var users = [];
                            var groups = [];
                            if (req.body.groups) {
                                req.body.groups.forEach(function (val, key) {
                                    groups.push({ g_id: val._id, group_name: val.name });
                                });
                            }
                            req.body.email.forEach(function (val, key) {
                                val = myTrim(val.toString());
                                users.push({ email: val, group: groups });
                            });

                            Company.findOneAndUpdate({ "_id": cmp_id },
                                {
                                    $pushAll: { "users": users }
                                },
                                { new: true },
                                (err, company) => {
                                    if (err) {
                                        res.json({ success: false, msg: "Failed, somthing went wrong " });
                                    } else {
                                        res.json({ success: true, msg: "User saved successfully", company: company });
                                    }
                                });


                        }
                    });
                }
            }
            // } catch (e) {
            //     return res.status(401).send('unauthorized 123');
            // }
        } else {
            return res.status(401).send('Invalid User');
        }
    });
    // ----------------------------------End-------------------------------------------



    // ---------------------------------Start-------------------------------------------
    // Function      : get-my-company
    // Params        : 
    // Returns       : logged in company details
    // Author        : Yasir Poongadan
    // Date          : 02-01-2018
    // Last Modified : 02-01-2018, Yasir Poongadan
    // Desc          : to get logged in company details 

    router.get('/get-my-company', (req, res, next) => {

        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            try {
                decoded = jwt.verify(authorization, config.secret);
                Company.findOne({ _id: decoded._id }, (err, company) => {
                    if (err) {
                        throw err;
                    } else {
                        return res.json(company);
                    }
                });
            } catch (e) {
                return res.status(401).send('unauthorized 123');
            }
        } else {
            return res.status(401).send('Invalid User');
        }
    });

    // ----------------------------------End-------------------------------------------



    // ---------------------------------Start-------------------------------------------
    // Function      : get function 
    // Params        : 
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 15-01-2018
    // Last Modified : 15-01-2018, Jooshifa
    // Desc          : to get all questions in each survey,no of choices,answers of users for each questions and no of responses for each questions

    // router.get('/getAllQuestions', (req, res) => {
    //     mainArray = [];
    //     options: [];
    //     // req.params.id = "5a432d81ac62130f16bbf2e6";
    //     req.params.id = "5a431d73fcaf01ec6274ecbc";
    //     // cmp_id = "5a4d183719a456bb14913bff";
    //     cmp_id = "5a432162fcaf01ec6274ecc6";
    //     Survey.find({ company_id: cmp_id }, function (err, survey) {

    //         survey.forEach(eachSurvey => {
    //             if (eachSurvey._id == req.params.id) {
    //                 eachSurvey.questions.forEach((eachQuestions, i) => {
    //                     mainArray.push({ question: eachQuestions.question, ans_type: eachQuestions.ans_type, options: eachQuestions.options, ans: [] });
    //                     ans = '';
    //                     eachQuestions.options.forEach((eachoption, j) => {
    //                         // if(eachAnswers.answer == eachQuestions.options){
    //                         count = 0;

    //                         eachQuestions.answers.forEach(eachanswer => {
    //                             if (eachoption == eachanswer.answer || eachanswer.answer == j) {
    //                                 count++;

    //                             }
    //                         })

    //                         // }
    //                         mainArray[i].ans.push({ value: eachoption, "count": count });
    //                         // console.log(eachAnswers);
    //                     });
    //                 });
    //             }
    //         });

    //         // console.log(mainArray);
    //         return res.json(mainArray);

    //     });
    // });
    // ----------------------------------End-------------------------------------------

    // ---------------------------------Start-------------------------------------------
    // Function      : update-users
    // Params        : user and assigned groups
    // Returns       : status and message
    // Author        : Yasir Poongadan
    // Date          : 03-01-2018
    // Last Modified : 03-01-2018, Yasir Poongadan
    // Desc          : update user and groups
    router.put('/update-users', passport.authenticate('jwt', { session: false }), (req, res, next) => {

        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            //try {
            decoded = jwt.verify(authorization, config.secret);
            // cmp_id = "5a4b61e2a2f0028c1a46274a";
            var cmp_id = decoded._id;
            var isErr = false;
            var errMsg = '';
            if (req.body.is_registered == false) {
                if (!validateEmail(req.body.newEmail) && !isErr) {
                    errMsg = val + " is not a valid email";
                    isErr = true;
                }
            }

            if (isErr) {
                res.json({ success: false, msg: errMsg });
            } else {

                async.parallel([
                    function (callback) {
                        req.body.newEmail = myTrim(req.body.newEmail);
                        if (req.body.newEmail != req.body.email) {
                            // console.log('email changed');

                            Company.findOne({ "users.email": req.body.newEmail, _id: cmp_id }, function (err, respEmail) {
                                // console.log(respEmail);   
                                if (respEmail && !isErr) { // Insert If user not exist
                                    // console.log('in already exists if');
                                    errMsg = req.body.newEmail + " Already Exists";
                                    isErr = true;
                                }
                                callback();
                            });
                        } else {
                            callback();
                        }
                    },
                    function (callback) {
                        // console.log('functon to check admin block'); 
                        req.body.newEmail = myTrim(req.body.newEmail);
                        Users.findOne(
                            {
                                $and: [
                                    { email: req.body.newEmail },
                                    { $or: [{ block_status: true }, { delete_status: true }] }
                                ]
                            },
                            function (err, respemail) {
                                //  console.log(respEmail);   
                                if (respemail) { // Insert If user not exist
                                    // console.log('in admin block if');
                                    errMsg = 'Failed, ' + req.body.newEmail + " blocked by admin";
                                    isErr = true;
                                }
                                callback();

                            });
                    }
                    // } 
                ], function (err) { //This is the final callback
                    if (isErr) {
                        res.json({ success: false, msg: errMsg });
                    } else {
                        var groups = [];
                        req.body.newEmail = myTrim(req.body.newEmail);
                        req.body.groups.forEach(function (val, key) {
                            groups.push({ g_id: val._id, group_name: val.name });
                        });
                        Company.findOneAndUpdate({ "_id": cmp_id, "users.email": req.body.email },
                            {
                                $set: { "users.$.email": req.body.newEmail, "users.$.group": groups }
                            },
                            { new: true },
                            (err, company) => {
                                if (err) {
                                    res.json({ success: false, msg: "Failed, somthing went wrong " });
                                } else {
                                    res.json({ success: true, msg: "User Updated successfully", company: company });
                                }
                            });
                    }
                });


            }

            // } catch (e) {
            //     return res.status(401).send('unauthorized 123');
            // }
        } else {
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

    router.get('/getUserEmailByID/:id', function (req, res) {
        Company.find({}, { users: { $elemMatch: { _id: req.params.id } } }, function (err, company) {
            if (err) {
                throw err;
            }
            else {
                company.forEach(element => {
                    if (element.users.length > 0 && typeof element.users !== 'undefined') {
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

    router.post('/changeMailResponseStatus/:id', (req, res) => {
        Survey.findOneAndUpdate({ _id: req.params.id, "inv_users.cmp_user_id": req.body.userId },
            { $set: { "inv_users.$.mail_responsed": true } },
            { new: true },
            function (err, doc) {
                if (doc == null) {
                    return res.json({ success: false, msg: 'Cant update Company' });
                }
                else {
                    io.sockets.emit("Mail Responsed", {
                        survey_id: req.params.id
                    });
                    return res.json({ success: true, msg: 'Update Company' });
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

    router.get('/getMailResponseCount/:id', passport.authenticate('jwt', { session: false }), function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4),
                decoded;
            decoded = jwt.verify(authorization, config.secret);
            decoded_id = mongoose.Types.ObjectId(decoded._id);
            match = { "company_id": decoded_id };
            if (req.params.id != 'undefined') {
                survey_id = mongoose.Types.ObjectId(req.params.id);
                match = { "company_id": decoded_id, _id: survey_id };
            }
            Survey.aggregate([
                { $match: match }, { "$group": { _id: "$inv_users", count: { $sum: 1 } } }]).exec((err, surveys) => {
                    if (err) {
                        return res.json({ success: false, msg: "Failed, went somthing wrong " });
                    } else {
                        count = 0;
                        surveys.forEach(survey => {
                            survey._id.forEach(MailResponse => {
                                if (MailResponse.survey_completed == false && MailResponse.mail_responsed == true) {
                                    count++;
                                }
                            });
                        });
                        return res.json(count);
                    }
                });
        } else {
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

    router.get('/getMailViewedCount/:id', passport.authenticate('jwt', { session: false }), function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4),
                decoded;
            decoded = jwt.verify(authorization, config.secret);
            decoded_id = mongoose.Types.ObjectId(decoded._id);
            match = { "company_id": decoded_id };
            if (req.params.id != 'undefined') {
                survey_id = mongoose.Types.ObjectId(req.params.id);
                match = { "company_id": decoded_id, _id: survey_id };
            }
            Survey.aggregate([
                { $match: match }, { "$group": { _id: "$inv_users", count: { $sum: 1 } } }]).exec((err, surveys) => {
                    if (err) {
                        return res.json({ success: false, msg: "Failed, went somthing wrong " });
                    } else {
                        count = 0;
                        surveys.forEach(survey => {
                            survey._id.forEach(mailViewed => {
                                if (mailViewed.mail_responsed == false && mailViewed.mail_viewed == true) {
                                    count++;
                                }
                            });
                        });
                        return res.json(count);
                    }
                });
        } else {
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

    router.get('/getSurveyCompletedCount/:id', passport.authenticate('jwt', { session: false }), function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4),
                decoded;
            decoded = jwt.verify(authorization, config.secret);
            // Survey.find({company_id : decoded._id, "inv_users.survey_completed" : true}, (err, survey)=>{
            decoded_id = mongoose.Types.ObjectId(decoded._id);
            match = { "company_id": decoded_id };
            if (req.params.id != 'undefined') {
                survey_id = mongoose.Types.ObjectId(req.params.id);
                match = { "company_id": decoded_id, _id: survey_id };
            }
            Survey.aggregate([
                { $match: match }, { "$group": { _id: "$inv_users", count: { $sum: 1 } } }]).exec((err, surveys) => {
                    if (err) {
                        return res.json({ success: false, msg: "Failed, went somthing wrong " });
                    } else {
                        count = 0;
                        surveys.forEach(survey => {
                            survey._id.forEach(surveyCompleted => {
                                if (surveyCompleted.survey_completed == true) {
                                    count++;
                                }
                            });
                        });
                        return res.json(count);
                    }
                });
        } else {
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

    router.get('/getInvitedUserCount/:id', passport.authenticate('jwt', { session: false }), function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4),
                decoded;
            email = [];
            decoded = jwt.verify(authorization, config.secret);
            decoded_id = mongoose.Types.ObjectId(decoded._id);
            match = { "company_id": decoded_id };
            if (req.params.id != 'undefined') {
                survey_id = mongoose.Types.ObjectId(req.params.id);
                match = { "company_id": decoded_id, _id: survey_id };
            }
            Survey.aggregate([
                { $match: match }, { "$group": { _id: "$inv_users", count: { $sum: 1 } } }]).exec((err, surveys) => {
                    if (err) {
                        return res.json({ success: false, msg: "Failed, went somthing wrong " });
                    } else {
                        count = 0;
                        surveys.forEach(survey => {
                            survey._id.forEach(invitedUsers => {
                                email.push(invitedUsers.email);
                            });
                        });
                        return res.json(email.length);
                    }
                });

        } else {
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

    router.post('/googleLogin', function (req, res) {
        Company.findOne({ "contact_person_email": req.body.email, "google.id": req.body.googleId }, function (err, company) {
            if (err) {
                return res.json({ "success": false });
            }
            if (company) {
                const token = jwt.sign(company, config.secret, {
                    expiresIn: 60400 // sec 1 week
                });
                return res.json({
                    success: true,
                    token: 'JWT ' + token,
                    company: {
                        id: company._id,
                        role: company.role,
                        status: company.cmp_status
                    }
                });
            }
            else {
                return res.json({ "success": false, "msg": "No such company" });
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

    router.post('/facebookLogin', function (req, res) {
        Company.findOne({ "contact_person_email": req.body.email, "facebook.id": req.body.faceBookId }, function (err, company) {
            if (err) {
                return res.json({ "success": false });
            }
            if (company) {
                const token = jwt.sign(company, config.secret, {
                    expiresIn: 60400 // sec 1 week
                });
                return res.json({
                    success: true,
                    token: 'JWT ' + token,
                    company: {
                        id: company._id,
                        role: company.role,
                        status: company.cmp_status
                    }
                });
            }
            else {
                return res.json({ "success": false, "msg": "No such company" });
            }
        }).lean();
    });
    // ----------------------------------End-------------------------------------------


    // ---------------------------------Start-------------------------------------------
    // Function      : get function 
    // Params        : 
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 15-01-2018
    // Last Modified : 15-01-2018, Jooshifa
    // Desc          : to get all surveys for displays in company dashboard

    router.get('/getAllSurveys', (req, res) => {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4),
                decoded;
            decoded = jwt.verify(authorization, config.secret);
            cmp_id = decoded._id;
            console.log(cmp_id)
            Survey.find({ start_datetime: { $lte: new Date() }, company_id: cmp_id }, function (err, survey) {

                return res.json(survey);

            });
        } else {
            return res.status(401).send('Invalid User');
        }
    });

    // ----------------------------------End-------------------------------------------


    // ---------------------------------Start-------------------------------------------
    // Function      : get function 
    // Params        : 
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 15-01-2018
    // Last Modified : 18-01-2018, Jooshifa
    // Desc          : to get all questions in each survey,no of choices,answers of users for each questions and no of responses for each questions

    router.get('/getAllQuestions/:id', (req, res) => {
        mainArray = [];
        options: [];
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4),
                decoded;
            decoded = jwt.verify(authorization, config.secret);
            cmp_id = decoded._id;
            console.log(cmp_id);
            SurveyId = req.params.id;
            console.log("sudha:" + SurveyId);

            Survey.findOne({ _id: req.params.id, company_id: cmp_id }, function (err, eachSurvey) {
                console.log(eachSurvey);
                eachSurvey.questions.forEach((eachQuestions, i) => {
                    mainArray.push({ id: eachQuestions._id, question: eachQuestions.question, ans_type: eachQuestions.ans_type, options: eachQuestions.options, ans: [] });
                    count = 0;

                    if (eachQuestions.ans_type != 'Descriptive') {
                        eachQuestions.options.forEach((eachoption, j) => {
                            count = 0;
                            answeredUser = [];
                            eachQuestions.answers.forEach(eachanswer => {
                                if (eachoption == eachanswer.answer || eachanswer.answer == j + 1) {
                                    count++;
                                    answeredUser.push({ email: eachanswer.email, date_time: eachanswer.date_time });
                                }
                            })
                            mainArray[i].ans.push({ value: eachoption, "count": count, answeredUser: answeredUser });
                        });
                    } else {
                        answeredUser = [];
                        eachQuestions.answers.forEach(eachanswer => {
                            count++;

                            answeredUser.push({ email: eachanswer.email, date_time: eachanswer.date_time, answer: eachanswer.answer });

                        })
                        mainArray[i].ans.push({ value: 'Descriptive', "count": 1, answeredUser: answeredUser });

                    }

                    mainArray[i].totalCount = eachQuestions.answers.length;
                });

                mainArray.surveyId = SurveyId;

                return res.json(mainArray);

            }).lean();
        } else {
            return res.status(401).send('Invalid User');
        }
    });
    // ----------------------------------End-------------------------------------------

    // ---------------------------------Start-------------------------------------------
    // Function      : formatDate
    // Params        : date time with time zone
    // Returns       : date in d-m-y format
    // Author        : Yasir Poongadan
    // Date          : 18-01-2018
    // Last Modified : 18-01-2018, Yasir Poongadan
    // Desc          : 

    function formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        return [day, month, year].join('-');
    }

    // ----------------------------------End-------------------------------------------

    // ---------------------------------Start-------------------------------------------
    // Function      : Get all plans
    // Params        : 
    // Returns       : 
    // Author        : Rinsha
    // Date          : 29-01-2018
    // Last Modified : 29-01-2018, Rinsha
    // Desc          : 

    router.get('/getAllPlans', (req, res) => {
        Plan.find({ delete_status: false }).
            exec(function (err, AllType) {
                if (err) {
                    // console.log("Error on Find");
                }
                else {
                    res.json(AllType);
                }
            });
    });

    // ----------------------------------End-------------------------------------------

    // ---------------------------------Start-------------------------------------------
    // Function      : get plan details using id
    // Params        : 
    // Returns       : plan details
    // Author        : Rinsha
    // Date          : 29-1-2018
    // Last Modified : 29-1-2018, Rinsha
    // Desc          :

    router.get('/getPlanById/:id', function (req, res) {
        Plan.findOne({ _id: req.params.id }, (err, plan) => {
            if (err) {
                throw err;
            } else {
                return res.json(plan);
            }
        });
    });
    // ----------------------------------End-------------------------------------------

    // ---------------------------------Start-------------------------------------------
    // Function      : Upgrade
    // Params        : 
    // Returns       : 
    // Author        : Rinsha
    // Date          : 30-1-2018
    // Last Modified : 30-1-2018, Rinsha
    // Desc          : 

    router.post('/upgrade/:id', passport.authenticate('jwt', { session: false }), function (req, res) {
        // console.log(req.body);
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4),
                decoded;
            decoded = jwt.verify(authorization, config.secret);
            async.series([
                function (callback) {
                    Plan.findOne({ _id: req.params.id }, (err, plan) => {
                        if (err) {
                            throw err;
                        } else {
                            plans = {
                                plan_id: plan._id,
                                no_month: req.body.no,
                                plan_name: plan.plan_name,
                                plan_price: plan.plan_price,
                                no_survey: plan.no_survey,
                                no_question: plan.no_question,
                                excel_import: plan.excel_import,
                                survey_logic: plan.survey_logic,
                                no_survey_attenders: plan.no_survey_attenders,
                                is_default_plan: false
                            }
                            // console.log(plans);
                            // return res.json(plan);
                            callback();
                        }
                    });
                },
                function (callback) {
                    Company.findOneAndUpdate({ _id: decoded._id },
                        {
                            $push: { plans: plans },
                            $set: { cmp_status: "Subscribed" },
                        },
                        { new: true },
                        (err, company) => {
                            // console.log(company);
                            if (err) {
                                return res.json({ success: false, msg: "Failed, went somthing wrong " });
                            } else {
                                io.sockets.emit("Subscribed", {
                                });
                                const token = jwt.sign(company.toJSON(), config.secret, {
                                    expiresIn: 60400 // sec 1 week
                                });
                                return res.json({
                                    success: true,
                                    msg: "Success ",
                                    token: 'JWT ' + token,
                                    company: {
                                        id: company._id,
                                        role: company.role,
                                        // status: company.cmp_status
                                    }
                                });
                            }
                        });
                }
            ],
                function (err) {
                    res.json({ success: false, msg: "Failed" });
                });
        } else {
            return res.status(401).send('Invalid User');
        }
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

    router.get('/tokenUpdate', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4),
                decoded;
            decoded = jwt.verify(authorization, config.secret);
            Company.findOne({ "_id": decoded._id }, function (err, company) {
                if (err) {
                    throw err;
                }
                const token = jwt.sign(company, config.secret, {
                    expiresIn: 60400 // sec 1 week
                });
                return res.json({
                    success: true,
                    token: 'JWT ' + token,
                    company: {
                        id: company._id,
                        role: company.role,
                    }
                });
            }).lean();
        } else {
            return res.status(401).send('Invalid User');
        }
    });

    // ----------------------------------End-------------------------------------------

    module.exports = router;

    return router;
}
module.exports = returnRouter;