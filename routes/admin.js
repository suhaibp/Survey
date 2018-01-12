const express = require("express");
const router = express.Router();
//  const mongoose = require('mongoose');
const passport = require("passport");
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
        if(admin){
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
        else{
            res.json({success: false, msg : "Failed"});
        }
    }).lean();
});

// ----------------------------------End-------------------------------------------

// ---------------------------------Start-------------------------------------------
// Function      : get logged user details
// Params        : 
// Returns       : user details
// Author        : Rinsha
// Date          : 12-1-2018
// Last Modified : 12-1-2018, Rinsha
// Desc          :

router.get('/getLoggedinUser', function(req, res){
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
        return res.status(401).send('Invalid User');
    }   
});
// ----------------------------------End-------------------------------------------

module.exports = router;
