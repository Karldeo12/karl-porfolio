// ==============================
// IMPORTS & SETUP
// ==============================
const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const fs = require("fs");
const https = require("https");
const selfsigned = require("selfsigned");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);

// ==============================
// AUTO-GENERATE SSL CERTIFICATE
// ==============================
if (!fs.existsSync("server.key") || !fs.existsSync("server.cert")) {
  console.log("🔐 Generating self-signed SSL certificate...");
  const attrs = [{ name: "commonName", value: "localhost" }];
  const pems = selfsigned.generate(attrs, { days: 365 });
  fs.writeFileSync("server.key", pems.private);
  fs.writeFileSync("server.cert", pems.cert);
  console.log("✅ Certificate generated successfully!");
}

const sslOptions = {
  key: fs.readFileSync("server.key"),
  cert: fs.readFileSync("server.cert"),
};

// ==============================
// NODEMAILER SETUP
// ==============================
console.log("📧 EMAIL_USER:", process.env.EMAIL_USER);
console.log("🔑 EMAIL_PASS:", process.env.EMAIL_PASS ? "Loaded ✅" : "Missing ❌");

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.error("❌ Email transport error:", error);
  } else {
    console.log("✅ Ready to send emails");
  }
});

// ==============================
// ROUTES
// ==============================
router.post("/contact", (req, res) => {
  const name = `${req.body.firstName} ${req.body.lastName}`;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;

  const mail = {
    from: name,
    to: process.env.EMAIL_USER, // 👈 sends to your own email
    subject: "Portfolio Contact Form Submission",
    html: `
      <h3>New Contact Form Submission</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      console.error("❌ Error sending mail:", error);
      res.json({ code: 500, status: "Message failed to send." });
    } else {
      console.log("📨 Message sent successfully!");
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});

// ==============================
// START HTTPS SERVER
// ==============================
https.createServer(sslOptions, app).listen(5000, () => {
  console.log("🚀 HTTPS Server Running on https://localhost:5000");
});
