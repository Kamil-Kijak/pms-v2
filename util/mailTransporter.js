const nodemailer = require("nodemailer");
const config = require("./config");

const transporter = nodemailer.createTransport({
  host:config.mailHost,
  port:config.mailPort,
  secure:true,
  auth: {
    user: config.mailUser,
    pass: config.mailPassword
  }
});

module.exports = transporter;