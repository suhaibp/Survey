const mongoose = require("mongoose");
const config = require("../config/database");
var Schema = mongoose.Schema;

const FontSizeSchema = mongoose.Schema({
    name : {
        type : String,
        require : true,
    },
    value : {
        type : Number,
        require : true,
    },
});

const FontSize = module.exports = mongoose.model('FontSizes', FontSizeSchema, 'font_size');