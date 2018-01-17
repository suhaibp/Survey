const mongoose = require("mongoose");
const config = require("../config/database");
var Schema = mongoose.Schema;

const OrgTypeSchema = mongoose.Schema({
    name : {
        type : String,
        require : true,
    },
});

const OrgType = module.exports = mongoose.model('OrgType', OrgTypeSchema, 'organization_type');