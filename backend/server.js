// backend/server.js
require('dotenv').config();
const express = require('express');
const serverless = require('serverless-http');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const router = express.Router();

router.use(cors());
router.use(express.json());

router.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT, 10),
    secure: true, // Use true for port 465
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const colors = {
    background: "#f9fafb",
    text: "#4b5563",
    primary: "#121212", // Dark theme for Rootenzy
  };

  const logoUrl = 'https://i.imgur.com/your-logo-url.png'; // Replace with a direct link to your logo

  const mailOptions = {
    from: `"Rootenzy Website" <${process.env.SMTP_USER}>`,
    to: process.env.RECIPIENT_EMAIL,
    subject: `New Lead from ${name}!`,
    html: `
      <body style="margin: 0; padding: 0; font-family: 'Poppins', sans-serif; background-color: ${colors.background};">
        <table align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="border-collapse: collapse; margin-top: 20px; box-shadow: 0 10px 30px -10px rgba(0,0,0,0.1);">
          <tr>
            <td align="center" style="background-color: ${colors.primary}; padding: 20px 0;">
              <h1 style="color: #ffffff; font-size: 24px; margin: 10px 0 0 0;">New Lead Notification</h1>
            </td>
          </tr>
          <tr>
            <td bgcolor="#ffffff" style="padding: 40px 30px;">
              <h2 style="color: ${colors.primary}; margin-top: 0;">You have a new submission from your website.</h2>
              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;">
                <tr style="border-bottom: 1px solid #eeeeee;"><td style="padding: 12px 0; color: ${colors.text}; font-weight: 600;">Name:</td><td style="padding: 12px 0; color: ${colors.primary};">${name}</td></tr>
                <tr style="border-bottom: 1px solid #eeeeee;"><td style="padding: 12px 0; color: ${colors.text}; font-weight: 600;">Email Address:</td><td style="padding: 12px 0; color: ${colors.primary};"><a href="mailto:${email}" style="color: ${colors.primary}; text-decoration: none;">${email}</a></td></tr>
              </table>
              <h3 style="color: ${colors.primary}; margin-top: 20px; border-bottom: 1px solid #eeeeee; padding-bottom: 10px;">Message:</h3>
              <p style="color: ${colors.text}; line-height: 1.6;">${message}</p>
            </td>
          </tr>
          <tr>
            <td bgcolor="#ffffff" style="padding: 0 30px 40px 30px;" align="center">
                <a href="mailto:${email}" style="background-color: ${colors.primary}; color: #ffffff; padding: 15px 25px; text-decoration: none; border-radius: 8px; font-weight: 600; display: inline-block;">
                    Reply to ${name}
                </a>
            </td>
          </tr>
          <tr>
            <td bgcolor="#f9fafb" style="padding: 20px 30px;">
              <p style="margin: 0; color: #9ca3af; font-size: 12px; text-align: center;">
                This is an automated notification from the Rootenzy website. &copy; ${new Date().getFullYear()} Rootenzy.
              </p>
            </td>
          </tr>
        </table>
      </body>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: 'Email sent successfully!' });
  } catch (error) {
    console.error('Email sending error:', error);
    return res.status(500).json({ error: 'Failed to send email.' });
  }
});

app.use('/api/', router);

module.exports.handler = serverless(app);