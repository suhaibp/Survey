const mongoose = require("mongoose");
const config = require("../config/database");
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
                id : Schema.ObjectId,
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
});

const User = module.exports = mongoose.model('User', UserSchema, 'user');