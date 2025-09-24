const nodemailer = require("nodemailer");

// Create a test account or replace with real credentials.
const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "vivian65@ethereal.email",
    pass: "teSd29gJ66THzkYV8P",
  },
});

// Wrap in an async IIFE so we can use await.
const sendEmail = async (to, subject, html) => {
  const testAccount = await nodemailer.createTestAccount();
  const info = await transporter.sendMail({
    from: `"Code Duniya" <${testAccount.user}>`,
    to,
    subject,
    html,
  });

  let testUrl = nodemailer.getTestMessageUrl(info);
  console.log("Preview URL: ", testUrl);
};

module.exports = sendEmail;
