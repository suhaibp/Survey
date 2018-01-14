const mongoose = require("mongoose");
const config = require("../config/database");
var Schema = mongoose.Schema;

const SurveySchema = mongoose.Schema({
    
    name : {
        type : String,
        require : true,
    },
    category : {
        id : Schema.ObjectId,
        name : {
            type : String,
            require : true,
        }
    },
    company_id: {
        type : Schema.ObjectId,
        require : true,
    },
    organization : {
        type : String,
    },
    theme : {
        type : Schema.ObjectId,
    },
    display_type : {
        ui : {
            type : String
        },
        randomization  : {
            type : Boolean,
            default : false,
        },
        skip  : {
            type : Boolean,
            default : false,
        },
        pageno : {
            type : Boolean,
            default : false,
        }
    },
    start_datetime : { 
        type: Date,
    },
    end_datetime : { 
        type: Date,
    },
    logo : { 
        type : String,
    },
    is_header  : {
        type : Boolean,
        default : false,
    },
    is_footer  : {
        type : Boolean,
        default : false,
    },
    header_title : { 
        type: String,
    },
    footer_title : { 
        type: String,
    },
    questions : [{
        question : {
            type : String,
        },
        ans_type : {
            type : String,
        },
        options : [{
            type : String,
        }],
    }],
    answers : [{   
        answer : {
            type : String,
        },
        cmp_user_id : {
            type : Schema.ObjectId,
        },
        global_user_id : {
            type : Schema.ObjectId,
        },
        date_time : {
            type : Date,
        },
        ip : {
            type : String,
        },
        latitude : {
            type : String,
        },
        longitude : {
            type : String,
        }
    }],
    inv_users : [{
        cmp_user_id : {
            type : Schema.ObjectId,
        },
        email : {
            type : String,
        },
        mail_viewed  : {
            type : Boolean,
            default : false,
        },
        ip : {
            type : String,
        },
        latitude : {
            type : String,
        },
        longitude : {
            type : String,
        },
        img_read_code : {
            type : String,
        },
        mail_responsed  : {
            type : Boolean,
            default : false,
        },
        survey_completed  : {
            type : Boolean,
            default : false,
        },

       
    }]
});

const Survey = module.exports = mongoose.model('Survey', SurveySchema, 'survey');