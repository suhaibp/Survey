

const express = require('express');
const app = express();
const JwtStrategy = require('passport-jwt').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const Company = require('./../model/company');
const config = require('./database');
const passport = require('passport');
var configAuth = require('./auth');
// var session = require('express-session');

module.exports = function(passport){
  let opts = {};
//   opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
  opts.secretOrKey = config.secret;
  
  passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
    // console.log(jwt_payload);
    // console.log("here");
    Company.getCompanyById(jwt_payload._id, (err, company) => {
      if(err){
        return done(err, false);
      }

      if(company){
        return done(null, company);
      } else {
        return done(null, false);
      }
    });
  }));

  passport.serializeUser(function(company, done) {
    done(null, company.id);
});

// used to deserialize the company
passport.deserializeUser(function(id, done) {
    Company.findById(id, function(err, company) {
        done(err, company);
    });
});

// -----------------------------------FB------------------------------------------------------------------------------------------------------------------------------------------
  passport.use(new FacebookStrategy({
    clientID: configAuth.facebookAuth.clientID,
    clientSecret: configAuth.facebookAuth.clientSecret,
    callbackURL: configAuth.facebookAuth.callbackURL,
    profileFields: configAuth.facebookAuth.profileFields
  },
  function(req, token, refreshToken, profile, done) {
    process.nextTick(function() {
        // if(!req.company){
            // Company.findOne({ 'facebook.id' : profile.id }, function(err, company) {
            Company.findOne({ 'contact_person_email' : profile.emails[0].value }, function(err, company) {
                if (err)
                    return done(err);
                if (company.block_status == false && company.delete_status ==false) {
                    company.facebook.id    = profile.id;
                    company.facebook.token = token;
                    company.facebook.name  = profile.displayName;
                    company.facebook.email = profile.emails[0].value;
                    if(company.cmp_status == "Not Verified"){
                        company.cmp_status = "Trail"; 
                    }
                    company.save(function(err) {
                    if (err)
                        throw err;
                    return done(null, company);
                    });
                }else if(company.block_status == true || company.delete_status ==true){
                    return done(err);
                } else {
                          var newCompany            = new Company();
                          newCompany.facebook.id    = profile.id; // set the users facebook id                   
                          newCompany.facebook.token = token; // we will save the token that facebook provides to the company                    
                          newCompany.facebook.name  = profile.name.givenName; // look at the passport company profile to see how names are returned
                          newCompany.facebook.email = profile.emails[0].value; // facebook can return multiple emails so we'll take the first
                          newCompany.contact_person_fname = profile.name.givenName;
                          newCompany.contact_person_email = profile.emails[0].value;
                          newCompany.cmp_status = "Trail";
                          newCompany.save(function(err) {
                              if (err)
                                  throw err;
                                   return done(null, newCompany);
                          });
                      }
                  });
    });
      
  }));
  
// ------------------------------End of fb strategy-------------------------------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------google startegy----------------------------------------------------------------------------------------------

    passport.use(new GoogleStrategy({
        clientID: configAuth.googleAuth.clientID,
        clientSecret:configAuth.googleAuth.clientSecret,
        callbackURL: configAuth.googleAuth.callbackURL,
    },
    function(req, token, refreshToken, profile, done) {
        process.nextTick(function() {
            // if(!req.company){
                        // try to find the company based on their google id
                        Company.findOne({ 'contact_person_email' : profile.emails[0].value }, function(err, company) {
                            if (err)
                                return done(err);
            
                            if(company.block_status == false && company.delete_status ==false) {
                                // if a company is found, log them in
                                company.google.id    = profile.id;
                                company.google.token = token;
                                company.google.name  = profile.displayName;
                                company.google.email = profile.emails[0].value;
                                if(company.cmp_status == "Not Verified"){
                                       company.cmp_status = "Trail"; 
                                }
                                company.save(function(err) {
                                if (err)
                                    throw err;
                                return done(null, company);
                                });
                                // return done(null, company);
                            }else if(company.block_status == true || company.delete_status ==true){
                                return done(err);
                            } else {
                                // if the company isnt in our database, create a new company
                                var newCompany          = new Company();
            
                                // set all of the relevant information
                                newCompany.google.id    = profile.id;
                                newCompany.google.token = token;
                                newCompany.google.name  = profile.displayName;
                                newCompany.google.email = profile.emails[0].value; // pull the first email
                                newCompany.contact_person_fname = profile.name.givenName;
                                newCompany.contact_person_lname = profile.name.familyName;
                                newCompany.contact_person_email = profile.emails[0].value;
                                newCompany.cmp_status = "Trail";
                                // save the company
                                newCompany.save(function(err) {
                                    if (err)
                                        throw err;
                                    return done(null, newCompany);
                                });
                            }
                        });
                    });
            
    }
    ));
// ----------------------------------------------------------------------end of google strategy-----------------------------------------------------------------------------------------
}
