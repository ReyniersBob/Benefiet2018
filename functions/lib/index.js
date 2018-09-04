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
        html: '',
        attachments: [{
                filename: 'Logo.png',
                filePath: 'Logo.png',
                cid: 'logo'
            }]
    };
    // Building Email message.
    mailOptions.subject = 'Benefiet 4 Lyme reservatie!';
    // noinspection TsLint
    mailOptions.html =
        '<div style="position:absolute; text-align: center; background-color: #FCF6D9; padding: 50px; width: 400px; margin: 0 auto;" >' + '<img id="logo" src="cid:logo" style="position:relative; height: 50px; width: 100px; top:0px; left:0px; background-color: #151515; display: inline-block;">  </img>' +
            '<p style="position:relative; font-size: 18px; top: 0px; display: inline-block; padding: 10px;"> Beste ' + val.naam +
            ', bedankt voor je reservatie. <br /> ' +
            'Wij hebben het volgende genoteerd: ' + '</p>' +
            '<p style="position:relative; font-size: 16px; text-align: left; display: inline-block; line-height: 120%; padding: 10px;">' + 'Totaal aantal personen ' + val.totaalPersonen +
            '<br /> val.dag' + ' om ' + val.uur +
            '<br />Aantal veggie ' + val.aantalVeg +
            '<br />Aantal kinderen ' + val.aantalKinderen +
            '<br />Aantal spaghetti ' + val.aantalSpaghetti +
            '<br />Totaal prijs e ' + val.totaalPrijs + '</p>' +
            '<p style="position: relative; font-size: 18px;">Vriendelijke groeten <br />Benefiet4Lyme</p>' +
            '</div>';
    try {
        mailTransport.sendMail(mailOptions);
        console.log(email);
    }
    catch (error) {
        console.error('There was an error while sending the email:', error);
    }
    return null;
});
//# sourceMappingURL=index.js.map