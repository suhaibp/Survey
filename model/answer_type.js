const mongoose = require("mongoose");
const config = require("../config/database");
var Schema = mongoose.Schema;

const AnsTypeSchema = mongoose.Schema({
    name : {
        type : String,
        require : true,
    },
});

const AnswerType = module.exports = mongoose.model('AnswerType', AnsTypeSchema, 'answer_type');