const mongoose = require("mongoose");
const config = require("../config/database");
var Schema = mongoose.Schema;

const CompanySchema = mongoose.Schema({
    organization : {
        type : String,
        require : true,
    },
    organization_type : {
        id : Schema.ObjectId ,
        name : {
            type : String,
            require : true,
        }
    },
    industry : {
        id : Schema.ObjectId ,
        name : {
            type : String,
            require : true,
        }
    },
    location : {
        type : String,
        require : true,
    },
    contact_person_email : {
        type : String,
        require : true,
        unique : true,
    },
    contact_person_fname : {
        type : String,
        require : true,
    },
    contact_person_lname : {
        type : String,
        require : true,
    },
    contact_no : {
        type : Number,
        require : true,
    },
    job_role : {
        type : String,
        require : true,
    },
    job_level : {
        type : String,
        require : true,
    },
    survey_attenders : [{
        id : Schema.ObjectId ,
        name : {
            type : String,
            require : true,
        }
    }],
    company_strength : {
        type : String,
        require : true,
    },
    facebook         : {
        id           : String,
        token        : String,
        name         : String,
        email        : String
    },
    google         : {
        id           : String,
        token        : String,
        name         : String,
        email        : String
    },
    verification_code : {
        type : String,
    },
    delete_status : { 
        type: Boolean, 
        default: false 
    },
    block_status : { 
        type: Boolean, 
        default: false 
    },
    cmp_status : { 
        type: String, 
        default: "Not Verified", 
        // Trail, Subscribed, Expired
    },
    reg_datetime : { 
        type: Date, 
        default: Date.now 
    },
    paid_datetime : { 
        type: Date, 
    },
    subscribed_datetime : { 
        type: Date,
    },
    is_profile_completed : { 
        type: Boolean, 
        default: false 
    },
    password : {
        type : String,
    },
    role : {
        type : String,
        default : "company",
    },
    users : [{
        email : {
            type : String
        },
        group : 
            [ {g_id :Schema.ObjectId,group_name:String}]
        ,
        is_registered : {
            type : Boolean,
            default : false,
        },
        delete_status : {
            type : Boolean,
            default : false,
        },
        admin_block : {
            type : Boolean,
            default : false,
        },
        block_req_status : {
            type : Boolean,
            default : false,
        },
    }]
});

const Company = module.exports = mongoose.model('Company', CompanySchema, 'company');

// ---------------------------------Start-------------------------------------------
// Function      : Allcompanies
// Params        : 
// Returns       : 
// Author        : sudha
// Date          : 28-12-2017
// Last Modified : 
// Desc          : all companies 


module.exports.getAllcompanies = function(callback){
    Company.find({},callback);
   
}
// -----------------------------------End------------------------------------------
// ---------------------------------Start-------------------------------------------
// Function      : Allsubcompanies
// Params        : 
// Returns       : 
// Author        : sudha
// Date          : 29-12-2017
// Last Modified : 
// Desc          : all subscribedcompanies 


module.exports.getAllsubcompanies = function(callback){
    Company.find({cmp_status:'Subscribed'},callback);
   
}
// -----------------------------------End------------------------------------------
// ---------------------------------Start-------------------------------------------
// Function      : Allsubactivecompanies
// Params        : 
// Returns       : 
// Author        : sudha
// Date          : 03-01-2018
// Last Modified : 
// Desc          : all subscribed activecompanies 


module.exports.getAllsubactivecompanies = function(callback){
    Company.find({cmp_status:'Subscribed',block_status:false,delete_status:false},callback);
   
}
// -----------------------------------End------------------------------------------
// ---------------------------------Start-------------------------------------------
// Function      : Allsubblockcompanies
// Params        : 
// Returns       : 
// Author        : sudha
// Date          : 03-01-2018
// Last Modified : 
// Desc          : all subscribed blockcompanies 


module.exports.getAllsubblockcompanies = function(callback){
    Company.find({cmp_status:'Subscribed',block_status:true,delete_status:false},callback);
   
}
// -----------------------------------End------------------------------------------
// ---------------------------------Start-------------------------------------------
// Function      : Allsubdeletecompanies
// Params        : 
// Returns       : 
// Author        : sudha
// Date          : 03-01-2018
// Last Modified : 
// Desc          : all subscribed deletecompanies 


module.exports.getAllsubdeletecompanies = function(callback){
    Company.find({cmp_status:'Subscribed',delete_status:true},callback);
   
}
// -----------------------------------End------------------------------------------
// ---------------------------------Start-------------------------------------------
// Function      : Alltrialcompanies
// Params        : 
// Returns       : 
// Author        : sudha
// Date          : 29-12-2017
// Last Modified : 
// Desc          : all trailcompanies


module.exports.getAlltrialcompanies = function(callback){
    Company.find({cmp_status:'Trail'},callback);
   
}
// -----------------------------------End------------------------------------------
// ---------------------------------Start-------------------------------------------
// Function      : Alltrialactivecompanies
// Params        : 
// Returns       : 
// Author        : sudha
// Date          : 03-01-2018
// Last Modified : 
// Desc          : all trial activecompanies 


module.exports.getAlltrialactivecompanies = function(callback){
    Company.find({cmp_status:'Trail',block_status:false,delete_status:false},callback);
   
}
// -----------------------------------End------------------------------------------
// ---------------------------------Start-------------------------------------------
// Function      : Alltrialblockcompanies
// Params        : 
// Returns       : 
// Author        : sudha
// Date          : 03-01-2018
// Last Modified : 
// Desc          : all trial blockcompanies 


module.exports.getAlltrialblockcompanies = function(callback){
    Company.find({cmp_status:'Trail',block_status:true,delete_status:false},callback);
   
}
// -----------------------------------End------------------------------------------
// ---------------------------------Start-------------------------------------------
// Function      : Alltrialdeletecompanies
// Params        : 
// Returns       : 
// Author        : sudha
// Date          : 03-01-2018
// Last Modified : 
// Desc          : all trial deletecompanies 


module.exports.getAlltrialdeletecompanies = function(callback){
    Company.find({cmp_status:'Trail',delete_status:true},callback);
   
}
// -----------------------------------End------------------------------------------
// ---------------------------------Start-------------------------------------------
// Function      : Allexpiredcompanies
// Params        : 
// Returns       : 
// Author        : sudha
// Date          : 29-12-2017
// Last Modified : 
// Desc          :all Expiredcompanies


module.exports.getAllexpiredcompanies = function(callback){
    Company.find({cmp_status:'Expired'},callback);
   
}
// -----------------------------------End------------------------------------------
// ---------------------------------Start-------------------------------------------
// Function      : Allexpiredactivecompanies
// Params        : 
// Returns       : 
// Author        : sudha
// Date          : 03-01-2018
// Last Modified : 
// Desc          : all expired activecompanies 


module.exports.getAllexpiredactivecompanies = function(callback){
    Company.find({cmp_status:'Expired',block_status:false,delete_status:false},callback);
   
}
// -----------------------------------End------------------------------------------
// ---------------------------------Start-------------------------------------------
// Function      : Allexpiredblockcompanies
// Params        : 
// Returns       : 
// Author        : sudha
// Date          : 03-01-2018
// Last Modified : 
// Desc          : all expired blockcompanies 


module.exports.getAllexpiredblockcompanies = function(callback){
    Company.find({cmp_status:'Expired',block_status:true,delete_status:false},callback);
   
}
// -----------------------------------End------------------------------------------
// ---------------------------------Start-------------------------------------------
// Function      : Allexpireddeletecompanies
// Params        : 
// Returns       : 
// Author        : sudha
// Date          : 03-01-2018
// Last Modified : 
// Desc          : all expired deletecompanies 


module.exports.getAllexpireddeletecompanies = function(callback){
    Company.find({cmp_status:'Expired',delete_status:true},callback);
   
}
// -----------------------------------End------------------------------------------
// ---------------------------------Start-------------------------------------------
// Function      : Allnotverficompanies
// Params        : 
// Returns       : 
// Author        : sudha
// Date          : 29-12-2017
// Last Modified : 
// Desc          :all Not Verifiedcompanies
//
module.exports.getAllnotverficompanies = function(callback){
    Company.find({cmp_status:'Not Verified'},callback);
   
}
// -----------------------------------End------------------------------------------
// ---------------------------------Start-------------------------------------------
// Function      : Allnotverfiactivecompanies
// Params        : 
// Returns       : 
// Author        : sudha
// Date          : 03-01-2018
// Last Modified : 
// Desc          : all notverfied activecompanies 


module.exports.getAllnotverfiactivecompanies = function(callback){
    Company.find({cmp_status:'Not Verified',block_status:false,delete_status:false},callback);
   
}
// -----------------------------------End------------------------------------------
// ---------------------------------Start-------------------------------------------
// Function      : Allnotverfiblockcompanies
// Params        : 
// Returns       : 
// Author        : sudha
// Date          : 03-01-2018
// Last Modified : 
// Desc          : all notverfied blockcompanies 


module.exports.getAllnotverfiblockcompanies = function(callback){
    Company.find({cmp_status:'Not Verified',block_status:true,delete_status:false},callback);
   
}
// -----------------------------------End------------------------------------------
// ---------------------------------Start-------------------------------------------
// Function      : Allnotverfideletecompanies
// Params        : 
// Returns       : 
// Author        : sudha
// Date          : 03-01-2018
// Last Modified : 
// Desc          : all notverfied deletecompanies 


module.exports.getAllnotverfideletecompanies = function(callback){
    Company.find({cmp_status:'Not Verified',delete_status:true},callback);
   
}
// -----------------------------------End------------------------------------------
// ---------------------------------Start-------------------------------------------
// Function      : Allactivecompanies
// Params        : 
// Returns       : 
// Author        : sudha
// Date          : 29-12-2017
// Last Modified : 
// Desc          : all active companies

module.exports.getAllactivecompanies = function(callback){
    Company.find({block_status:false,delete_status:false},callback);
   
}
// -----------------------------------End------------------------------------------
// ---------------------------------Start-------------------------------------------
// Function      : Allblockedcompanies
// Params        : 
// Returns       : 
// Author        : sudha
// Date          : 29-12-2017
// Last Modified : 
// Desc          : all blocked companies

module.exports.getAllblockedcompanies = function(callback){
    Company.find({block_status:true,delete_status:false},callback);
   
}
// -----------------------------------End------------------------------------------
// ---------------------------------Start-------------------------------------------
// Function      : Alldeletedcompanies
// Params        : 
// Returns       : 
// Author        : sudha
// Date          : 29-12-2017
// Last Modified : 
// Desc          : all deleted companies

module.exports.getAlldeletedcompanies = function(callback){
    Company.find({delete_status:true},callback);
   
}
// -----------------------------------End------------------------------------------
// ---------------------------------Start-------------------------------------------
// Function      : deleteCompany
// Params        : company id
// Returns       : 
// Author        : sudha
// Date          : 29-12-2017
// Last Modified : 
// Desc          : delete company

module.exports.deleteCompany = function(id,callback){
    Company.findByIdAndUpdate(id,{delete_status:true},callback);
}
// -----------------------------------End------------------------------------------
// ---------------------------------Start-------------------------------------------
// Function      : blockCompany
// Params        : company id
// Returns       : 
// Author        : sudha
// Date          : 29-12-2017
// Last Modified : 
// Desc          : block company

module.exports.blockCompany = function(id,callback){
    Company.findByIdAndUpdate(id,{block_status:true},callback);
}
// -----------------------------------End------------------------------------------
// ---------------------------------Start-------------------------------------------
// Function      : blockCompany
// Params        : company id
// Returns       : 
// Author        : sudha
// Date          : 29-12-2017
// Last Modified : 
// Desc          : unblock company

module.exports.unblockCompany = function(id,callback){
    Company.findByIdAndUpdate(id,{block_status:false},callback);
}
// -----------------------------------End------------------------------------------
 // ---------------------------------Start-------------------------------------------
// Function      : admindashboard
// Params        : 
// Returns       : 
// Author        : sudha
// Date          : 04-01-2018
// Last Modified : 
// Desc          : admindashboardchart1
//

module.exports.getAdminchart1notverified = function(callback){
    Company.count({cmp_status:"Not Verified"},callback);
 
}
module.exports.getAdminchart1Trail = function(callback){
    Company.count({cmp_status:"Trail"},callback);
 
}
module.exports.getAdminchart1Subscribed = function(callback){
    Company.count({cmp_status:"Subscribed"},callback);
 
}

module.exports.getAdminchart1Expired = function(callback){
    Company.count({cmp_status:"Expired"},callback);
 
}
// -----------------------------------End------------------------------------------