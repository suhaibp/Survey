const mongoose = require("mongoose");
const config = require("../config/database");
var Schema = mongoose.Schema;

const SurveyCategorySchema = mongoose.Schema({
    name : {
        type : String,
        require : true,
    },
});

const SurveyCategory = module.exports = mongoose.model('SurveyCategory', SurveyCategorySchema, 'survey_category');