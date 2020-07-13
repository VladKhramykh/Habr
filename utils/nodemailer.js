const mailer = require('nodemailer');
const configGmail = require('../config/keys').nodemailer.gmail;
const htmlTemplate = require('./emailHtmlTempalte/htmlTemplate');

const transport = mailer.createTransport(configGmail);

const mailOptions = {
    from: 'tipa_habr@gmail.com',
    to: 'to@gmail.com',
    subject: '[TipaHabr]Please, confirm your email',
    html: '<h1>Tempate</h1>'
};

module.exports.activate = (user) => {
    mailOptions.to = user.email;
    mailOptions.html = htmlTemplate.activateAccount(user);
    transport.sendMail(mailOptions, function (err, info) {
        if(err)
            console.log(err);
        else
            console.log(info);
    });
};
