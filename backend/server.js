// backend/server.js
require('dotenv').config();
const express = require('express');
const serverless = require('serverless-http'); // <-- Add this
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const router = express.Router(); // <-- Use an Express Router

// --- Middleware (applied to the router) ---
router.use(cors());
router.use(express.json());

// --- API Endpoint (on the router) ---
router.post('/contact', async (req, res) => {
  // ... keep the exact same email sending logic from before ...
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT, 10),
    secure: process.env.SMTP_PORT == 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: process.env.RECIPIENT_EMAIL,
    subject: `New Contact Form Submission from ${name}`,
    html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
  };
  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email.' });
  }
});

// --- Mount the router on the /api path ---
app.use('/api/', router);

// --- Export the handler for Netlify ---
module.exports.handler = serverless(app);