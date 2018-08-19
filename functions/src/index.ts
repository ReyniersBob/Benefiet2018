'use strict';
const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
const nodemailer = require('nodemailer');
// Configure the email transport using the default SMTP transport and a GMail account.
// For other types of transports such as Sendgrid see https://nodemailer.com/transports/set
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});

exports.sendEmailConfirmation = functions.database.ref('/bestelling/{uid}').onWrite((change, event) => {
  const val = change.after.val();
  const email = val.email;
  console.log(val);
  const mailOptions = {
    from: '"Benefiet4Lyme 2018." <noreply@firebase.com>',
    to: email,
    subject: '',
    text: ''
  };
  // Building Email message.
  mailOptions.subject = 'Benefiet 4 Lyme reservatie!';
  mailOptions.text = 'Bedankt voor je reservatie: ' + val.totaalPersonen + ' personen ' + val.dag + ' om ' + val.uur + ', ' + val.aantalVeg + ' veggie, ' + val.aantalKinderen + ' kinderen, ' + val.aantalSpaghetti + ' spaghetti';
  try {
    mailTransport.sendMail(mailOptions);
    console.log(email);
  } catch (error) {
    console.error('There was an error while sending the email:', error);
  }
  return null;
});
