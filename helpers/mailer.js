'use strict'

const nodemailer = require('nodemailer');
require('dotenv').config()

function sendMails (target, subject, message){

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.mailuser,
          pass: process.env.mailpass 
        }
      });
    
    const mailOptions = {
        from: 'excavadm@gmail.com',
        to: `e7nov12@gmail.com`,
        subject: subject,
        text: message
    };
    
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    })

}

module.exports = sendMails;
