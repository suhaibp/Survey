const mongoose = require("mongoose");
const config = require("../config/database");
var Schema = mongoose.Schema;

const ImagesSchema = mongoose.Schema({
    file_name : {
        type : String,
        require : true,
    },logo : { 
        data: Buffer, contentType: String
    },
});

const Images = module.exports = mongoose.model('Images', ImagesSchema, 'images');