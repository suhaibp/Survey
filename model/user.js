const mongoose = require("mongoose");
const config = require("../config/database");
const bcrypt = require("bcryptjs");
var Schema = mongoose.Schema;

const UserSchema = mongoose.Schema({
    name : {
        type : String,
        require : true,
    },
    password : {
        type : String,
        require : true,
    },
    email : {
        type : String,
        require : true,
    },
    role : {
        type : String,
        default : "user",
    },
    block_request : [{
        companies : [{
            company_id : {
                type : Schema.ObjectId,
            },
            organization : {
                type : String,
            },  
            email : {
                type : String,
            },
            is_viewed : {
                type : Boolean,
                default : false,
            },
            reason : {
                type : String
            },
            date : {
                type : Date,
            }
        }],
        action_status : {
            type : String,
            default : "Pending"
            //  Accepted, Rejected
        }
    }],
    delete_status : { 
        type: Boolean, 
        default: false 
    },
    block_status : { 
        type: Boolean, 
        default: false 
    },
});

const User = module.exports = mongoose.model('User', UserSchema, 'user');

module.exports.addUser = function(newUser,callback){
    bcrypt.genSalt(10,(err, salt)=>{
        bcrypt.hash(newUser.password,salt,(err, hash) =>{
            if(err) throw err;
            newUser.password = hash;
            newUser.save(callback);
        })
    })
}

module.exports.comparePassword = function(candPass,hash,callback){
    bcrypt.compare(candPass,hash, (err, isMatch)=>{
        if(err) throw err;
        callback(null,isMatch);
    })
}