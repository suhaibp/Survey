const mongoose = require("mongoose");
const config = require("../config/database");
var Schema = mongoose.Schema;

const SurveyAttenderTypeSchema = mongoose.Schema({
    name : {
        type : String,
        require : true,
    },
});

const SurveyAttenderType = module.exports = mongoose.model('SurveyAttenderType', SurveyAttenderTypeSchema, 'survey_attender_type');