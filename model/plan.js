const mongoose = require("mongoose");
const config = require("../config/database");
var Schema = mongoose.Schema;

const PlanSchema = mongoose.Schema({
    plan_name:{
        type: String
    },
    plan_price:{
        type: String
    },
    no_survey:{
        type: String
    },
    no_question:{
        type: String
    },
    excel_import:{
        type: Boolean,
        default: false,
    },
    survey_logic:{
        type: Boolean,
        default: false,
    },
    no_survey_attenders:{
        type : String
    },
    is_best_value:{
        type: Boolean,
        default: false,
    },
    is_default_plan:{
        type: Boolean,
        default: false,
    },
    delete_status:{
        type: Boolean,
        default: false, 
    }
});

const Plan = module.exports = mongoose.model('Plan', PlanSchema, 'plan');