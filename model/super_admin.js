const mongoose = require("mongoose");
const config = require("../config/database");
var Schema = mongoose.Schema;

const SuperAdminSchema = mongoose.Schema({
    user_name : {
        type : String,
        require : true,
    },
    password : {
        type : String,
        require : true,
    },
    role : {
        type : String,
        default : "admin",
    },
});

const SuperAdmin = module.exports = mongoose.model('SuperAdmin', SuperAdminSchema, 'super_admin');