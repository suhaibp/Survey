const mongoose = require("mongoose");
const config = require("../config/database");
var Schema = mongoose.Schema;

const FontFamilySchema = mongoose.Schema({
    name : {
        type : String,
        require : true,
    },
    value : {
        type : String,
        require : true,
    },
});

const FontFamily = module.exports = mongoose.model('FontFamily', FontFamilySchema, 'font_family');