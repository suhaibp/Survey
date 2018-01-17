const mongoose = require("mongoose");
const config = require("../config/database");
const bcrypt = require("bcryptjs");
var Schema = mongoose.Schema;

const UserSchema = mongoose.Schema({
    name : {
        type : String,
        require : true,
    },
    password : {
        type : String,
        require : true,
    },
    email : {
        type : String,
        require : true,
    },
    role : {
        type : String,
        default : "user",
    },
    block_request : [{
       
        companies : [{
            company_id : {
                type : Schema.ObjectId,
            },
            organization : {
                type : String,
            },            

            email : {
                type : String,
            },
            comp_is_viewed : {
                type : Boolean,
                default : false,
            },
            is_viewed : {
                type : Boolean,
                default : false,
            },
            reason : {
                type : String
            },
            date : {
                type : Date,
            }
        }],
        action_status : {
            type : String,
            default : "Pending"
            //  Accepted, Rejected
        }
    
    }],
        delete_status : { 
            type: Boolean, 
            default: false 
        },
        block_status : { 
            type: Boolean, 
            default: false 
        },
});

const User = module.exports = mongoose.model('User', UserSchema, 'user');
// ---------------------------------Start-------------------------------------------
// Function      : all users
// Params        : 
// Returns       : 
// Author        : sudha
// Date          : 29-12-2017
// Last Modified : 
// Desc          : all users
//
module.exports.getAllusers = function(callback){
    User.find({},callback);
   
}
// -----------------------------------End------------------------------------------
// ---------------------------------Start-------------------------------------------
// Function      : all active users
// Params        : 
// Returns       : 
// Author        : sudha
// Date          : 29-12-2017
// Last Modified : 
// Desc          : all active users
//
module.exports.getAllactiveusers = function(callback){
    User.find({block_status:false,delete_status:false},callback);
   
}
// -----------------------------------End------------------------------------------
// ---------------------------------Start-------------------------------------------
// Function      : all blocked users
// Params        : 
// Returns       : 
// Author        : sudha
// Date          : 29-12-2017
// Last Modified : 
// Desc          : all blocked users
//
module.exports.getAllblockusers = function(callback){
    User.find({block_status:true,delete_status:false},callback);
   
}
// -----------------------------------End------------------------------------------
// ---------------------------------Start-------------------------------------------
// Function      : all delete users
// Params        : 
// Returns       : 
// Author        : sudha
// Date          : 29-12-2017
// Last Modified : 
// Desc          : all delete users
//
module.exports.getAlldeleteusers = function(callback){
    User.find({delete_status:true},callback);
   
}
// -----------------------------------End------------------------------------------
// ---------------------------------Start-------------------------------------------
// Function      : all pending request users
// Params        : 
// Returns       : 
// Author        : sudha
// Date          : 29-12-2017
// Last Modified : 01-01-2018
// Desc          : all pending request users
//
module.exports.getAllrequestusers = function(callback){
  
    User.find({block_request:{$elemMatch : { action_status:'Pending'}  }},callback);
 
}
// -----------------------------------End------------------------------------------

// ---------------------------------Start-------------------------------------------
// Function      : deleteUser
// Params        :  id
// Returns       : 
// Author        : sudha
// Date          : 29-12-2017
// Last Modified : 
// Desc          : delete User

module.exports.deleteUser = function(id,callback){
    User.findOneAndUpdate({email: id},{delete_status:'true'},callback);
}
// -----------------------------------End------------------------------------------
// ---------------------------------Start-------------------------------------------
// Function      : blockUser
// Params        :  id
// Returns       : 
// Author        : sudha
// Date          : 29-12-2017
// Last Modified : 
// Desc          : block User

module.exports.blockUser = function(id,callback){
    User.findOneAndUpdate({email: id}, {$set:{block_status:true}},callback);
  
}
// -----------------------------------End------------------------------------------
// ---------------------------------Start-------------------------------------------
// Function      : blockUser
// Params        :  id
// Returns       : 
// Author        : sudha
// Date          : 29-12-2017
// Last Modified : 
// Desc          : unblock User

module.exports.unblockUser = function(id,callback){
    User.findOneAndUpdate({email: id},{block_status:'false'},callback);
}
// -----------------------------------End------------------------------------------
// ---------------------------------Start-------------------------------------------
// Function      : requestUser
// Params        :  id
// Returns       : 
// Author        : sudha
// Date          : 01-01-2018{block_request:{action_status:'Rejected'}}
// Last Modified : 03-01-2018
// Desc          : request User 

module.exports.rejectUser = function(id,callback){
   // console.log(id);
    User.update(
        {"email":id,"block_request.action_status": "Pending" }, 
        { "$set": { "block_request.$.action_status": "Rejected" }},{multi:true},
        callback);
}
// -----------------------------------End------------------------------------------
// ---------------------------------Start-------------------------------------------
// Function      : requestUser
// Params        :  id
// Returns       : 
// Author        : sudha
// Date          : 03-01-2018{block_request:{action_status:'Rejected'}}
// Last Modified : 
// Desc          : request User block_request.length-1

module.exports.acceptUser = function(id,callback){
   // console.log(id);
    User.update(
        {"email":id,"block_request.action_status": "Pending" }, 
        { "$set": { "block_request.$.action_status": "Accepted",block_status:'true' }},{multi:true},
        callback);
}
// -----------------------------------End------------------------------------------
// ---------------------------------Start-------------------------------------------
// Function      : requestUser
// Params        :  
// Returns       : 
// Author        : sudha
// Date          : 02-01-2018
// Last Modified : 
// Desc          : request companies

module.exports.getAdminnotification = function(callback){
    User.find({},{"name":1,"email":1,block_request:{$elemMatch : {  action_status:'Pending'}  }
  
},callback);
 
}
// -----------------------------------End------------------------------------------


module.exports.addUser = function(newUser,callback){
    bcrypt.genSalt(10,(err, salt)=>{
        bcrypt.hash(newUser.password,salt,(err, hash) =>{
            if(err) throw err;
            newUser.password = hash;
            newUser.save(callback);
        })
    })
}

module.exports.comparePassword = function(candPass,hash,callback){
    bcrypt.compare(candPass,hash, (err, isMatch)=>{
        if(err) throw err;
        callback(null,isMatch);
    })
}





