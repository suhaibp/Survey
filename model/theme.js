const mongoose = require("mongoose");
const config = require("../config/database");
var Schema = mongoose.Schema;

const ThemeSchema = mongoose.Schema({
    title : {
        type : String,
        require : true,
    },
    h_font_color : {
        type : String,
    },
    h_font_style : {
        type : String,
    },
    h_font_family : {
        type : String,
    },
    h_font_size : {
        type : String,
    },
    h_bg_color : {
        type : String,
    },
    f_font_color : {
        type : String,
    },
    f_font_style : {
        type : String,
    },
    f_font_family : {
        type : String,
    },
    f_font_size : {
        type : String,
    },
    f_bg_color : {
        type : String,
    },
    q_font_color : {
        type : String,
    },
    q_font_style : {
        type : String,
    },
    q_font_family : {
        type : String,
    },
    q_font_size : {
        type : String,
    },
    q_bg_color : {
        type : String,
    },
    b_bg_color : {
        type : String,
    },
    progress_text_color : {
        type : String,
    },
    progress_color : {
        type : String,
    },
    cmp_id : {
        type : String,
    },
    delete_status : {
        type : String,
    }
});

const Theme = module.exports = mongoose.model('Theme', ThemeSchema, 'theme');