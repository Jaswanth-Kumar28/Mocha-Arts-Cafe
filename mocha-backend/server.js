const express = require("express");
const cors = require("cors");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize Firebase Admin SDK
try {
  const serviceAccount = require("./firebaseKey.json");
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
  console.log("Firebase Admin SDK initialized successfully");
} catch (error) {
  console.error("Firebase Admin initialization error:", error.message);
}

const db = admin.firestore();

// Setup Nodemailer Transporter
const smtpUser = process.env.SMTP_USER || process.env.OWNER_EMAIL;
const smtpPass = process.env.SMTP_PASS || process.env.OWNER_APP_PASS;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: smtpUser,
    pass: smtpPass
  }
});

// Verify email configuration on startup
transporter.verify((error, success) => {
  if (error) {
    console.error("Nodemailer configuration error:", error.message);
  } else {
    console.log("Nodemailer is ready to send emails");
  }
});

// Root endpoint for status check
app.get("/", (req, res) => {
  res.send("Mocha Arts Cafe Backend is running!");
});

// Contact form API endpoint
app.post("/api/contact", async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields: name, email, message" });
  }

  try {
    // 1. Save to Firestore under 'messages' collection
    const docRef = await db.collection("messages").add({
      name,
      email,
      phone: phone || "",
      message,
      status: "new",
      createdAt: admin.firestore.FieldValue.serverTimestamp()
    });

    // 2. Send email to owner
    const mailOptions = {
      from: `"Mocha Arts Cafe Website" <${smtpUser}>`,
      to: `${process.env.OWNER_EMAIL}, mochaartcafe.9@gmail.com`,
      subject: `New Contact Form Message from ${name}`,
      text: `You have received a new message from the contact form on your website:\n\n` +
            `Name: ${name}\n` +
            `Email: ${email}\n` +
            `Phone: ${phone || "N/A"}\n\n` +
            `Message:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; line-height: 1.6; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px;">
          <h2 style="color: #6f4e37; border-bottom: 2px solid #6f4e37; padding-bottom: 10px; margin-top: 0;">New Contact Message</h2>
          <p>You have received a new contact submission from the Mocha Arts Cafe website:</p>
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; width: 120px; background-color: #f9f9f9;">Name:</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; background-color: #f9f9f9;">Email:</td>
              <td style="padding: 10px; border: 1px solid #ddd;"><a href="mailto:${email}" style="color: #6f4e37; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; background-color: #f9f9f9;">Phone:</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${phone || "N/A"}</td>
            </tr>
          </table>
          <h3 style="color: #6f4e37; margin-top: 20px; margin-bottom: 10px;">Message:</h3>
          <div style="padding: 15px; background-color: #f5f5f5; border-left: 4px solid #6f4e37; font-style: italic; border-radius: 4px; white-space: pre-wrap;">${message}</div>
          <hr style="border: 0; border-top: 1px solid #e0e0e0; margin-top: 25px;">
          <p style="font-size: 12px; color: #888; text-align: center; margin-bottom: 0;">This email was sent automatically from Mocha Arts Cafe's backend service.</p>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);
    console.log(`Successfully processed contact message for ${name}. Firestore Doc ID: ${docRef.id}`);

    res.status(200).json({ success: true, id: docRef.id });
  } catch (error) {
    console.error("Error processing contact message:", error);
    res.status(500).json({ error: "Failed to process contact message: " + error.message });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
