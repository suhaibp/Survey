const nodemailer = require('nodemailer');
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "mean.symptots@gmail.com", // generated ethereal user
        pass: "Symptots@2017"  // generated ethereal password
    }
});

module.exports.sendVerificationMail = function(email, contact_name, password, verification_link){
    nodemailer.createTestAccount((err, account) => {
        
            // create reusable transporter object using the default SMTP transport
        
            // setup email data with unicode symbols
            let mailOptions = {
                from: 'mean.symptots@gmail.com', // sender address
                to: email, // list of receivers
                subject: 'Please log in to your account', // Subject line
                text: '', 
                html: '<b><h3>Hi '+contact_name+', </h3><br/>We’re excited to get you started using Survey! You’re on your way to being fully set up, but first, you must finish your account verification by clicking the below link:<br/>Username:'+email+' <br/>Password:'+password+' <br/>Verification Link:</a> http://localhost:3000/email-verification/'+verification_link+'</a><br/> Thank You!</b>' // html body
            };
        
            // send mail with defined transport object
            transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            });
    });
}