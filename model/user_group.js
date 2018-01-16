const mongoose = require("mongoose");
const config = require("../config/database");
var Schema = mongoose.Schema;

const GroupSchema = mongoose.Schema({
    name : {
        type : String,
        require : true,
    },
    survey_assigned : {
        type : Boolean,
        default : false,
    },
    cmp_id : {
        type :String
   }
});

const Group = module.exports = mongoose.model('Group', GroupSchema, 'user_group');