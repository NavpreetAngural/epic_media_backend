// utils/mailer.js
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.USER,
    pass: process.env.PASSWORD,
  },
});

const sendMail = async (to, subject, text) => {
  await transporter.sendMail({
    from: process.env.USER,
    to,
    subject,
    text,
  });
};

module.exports = sendMail;
