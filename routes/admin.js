const express = require("express");
const router = express.Router();
//  const mongoose = require('mongoose');
// const passport = require("passport");
const jwt = require("jsonwebtoken");
const config = require('../config/database');
const Admin = require("../model/super_admin");
'use strict';
 
// ---------------------------------Start-------------------------------------------
// Function      : Admin Login
// Params        : admin username,admin password
// Returns       : Token, admin id and role
// Author        : Rinsha
// Date          : 27-12-2017
// Last Modified : 27-12-2017, Rinsha
// Desc          : Admin login

router.post('/login',(req,res,next)=>{
    const username = req.body.username;
    const password = req.body.password;
    Admin.findOne({username:username, password: password, role : "admin"}, (err,admin)=>{
        if(err) {
            throw err;
        }
        if(admin == null){
            res.json({success: false, msg : "Failed"});
        }
        else{
            const token = jwt.sign(admin, config.secret,{
                expiresIn: 60400 // sec 1 week
            });
            return res.json({
                success:true, 
                token : 'JWT '+ token,
                admin:{
                    id:admin._id,
                    role: admin.role
                }
            });
        }
    }).lean();
});

// ----------------------------------End-------------------------------------------

module.exports = router;
