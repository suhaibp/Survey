const express = require("express");
const router = express.Router();
async = require("async");
// const mongoose = require('mongoose');
const config = require('../config/database');
const User = require("../model/user");
const jwt = require("jsonwebtoken");
const passport = require("passport");
'use strict';

// ---------------------------------Start-------------------------------------------
// Function      : Get user email from user collection
// Params        : user email registered by company
// Returns       : staus and global user id
// Author        : Rinsha
// Date          : 05-01-2018
// Last Modified : 05-01-2018, Rinsha
// Desc          : Check whether the company registered email id is registered globally

router.get('/checkEmail/:email', function(req, res){
    User.findOne({email : req.params.email}, function(err, user) {
            if(err){
                throw err;
            }
            else if(user && user.length == 0){
                res.json({success: false, msg : "User is not registered "});
            }
            else if(user && user.length != 0 ){
                res.json({success: true, msg : "User registered", user_id:user._id});
            }
            else{
                res.json({success: false, msg : "User is not registered "});
            }
    });
});

// ----------------------------------End-------------------------------------------

// ---------------------------------Start-------------------------------------------
// Function      : Register user
// Params        : user data from the form
// Returns       : status and token
// Author        : Rinsha
// Date          : 08-01-2018
// Last Modified : 08-01-2018, Rinsha
// Desc          : 

router.post('/register', (req, res)=>{
    if(!req.body.name || !req.body.password){
        res.json({success: false, msg : "All fields are mandatory"});
    }
    else{
        let newUser = new User({
            email : req.body.email,
            name : req.body.name,
            password : req.body.password,
        });
        User.findOne({ email: req.body.email} , function(err, doc){
            if(err){
                console.log("Error " + err);
            }
            if(doc){
                res.json({success: false, msg : "Failed"});
            }
            else{
                User.addUser(newUser,(err, user)=>{
                    if(err){
                        console.log("Error " + err);
                    }else{
                        user= {
                            email: user.email,
                            name: user.name,
                            password: user.password,
                            _id: user._id,
                            block_status: user.block_status,
                            delete_status: user.delete_status,
                            role: user.role
                        }
                        const token = jwt.sign(user, config.secret,{
                            expiresIn: 60400 // sec 1 week
                        });
                        return res.json({
                        success:true, 
                        token : 'JWT '+ token,
                        user:{
                            id:user._id,
                            role: user.role,
                        }
                        });
                    }
                });
            }
        }).lean();
    }
});

// ----------------------------------End-------------------------------------------

// ---------------------------------Start-------------------------------------------
// Function      : User Login
// Params        : user username,user password from form
// Returns       : Token, user id and role
// Author        : Rinsha
// Date          : 08-01-2018
// Last Modified : 08-01-2018, Rinsha
// Desc          : 

router.post('/login',(req,res,next)=>{
    const email = req.body.email;
    const password = req.body.password;
    User.findOne({email : email}, (err, user)=>{
        if(err){
            throw err;
        }
        if(!user){
            return res.json({success:false, msg: 'User Not found'});
        }
        User.comparePassword(password, user.password, (err, isMatch)=>{
            if(err){
                throw err;
            }
            if(isMatch){
                if(user.block_status == true){
                    return res.json({success:false, msg: 'Account blocked'});
                }
                if(user.delete_status == true){
                    return res.json({success:false, msg: 'Account deleted'});
                }
                else if(user.block_status == false && user.delete_status == false){
                    const token = jwt.sign(user, config.secret,{
                        expiresIn: 60400 // sec 1 week
                    });
                        return res.json({
                        success:true, 
                        token : 'JWT '+ token,
                        user:{
                            id:user._id,
                            role: user.role,
                        }
                        });
                }
            }else{
                return res.json({success:false, msg: 'Wrong Password'});
            }
        });
    }).lean();
});

// ------------------------------End--------------------------------------------------

// ---------------------------------Start-------------------------------------------
// Function      : Get user email from user collection
// Params        : user id
// Returns       : user email
// Author        : Rinsha
// Date          : 08-01-2018
// Last Modified : 05-01-2018, Rinsha
// Desc          : 

router.get('/getUserEmailByID/:id', function(req, res){
    User.findById(req.params.id, function(err, user) {
            if(err){
                throw err;
            }
            else{
                res.json(user.email);
            }
    });
});

// ----------------------------------End-------------------------------------------
module.exports = router;