const mongoose = require("mongoose");
const config = require("../config/database");
var Schema = mongoose.Schema;

const IndustrySchema = mongoose.Schema({
    name : {
        type : String,
        require : true,
    },
});

const Industry = module.exports = mongoose.model('Industry', IndustrySchema, 'industry');