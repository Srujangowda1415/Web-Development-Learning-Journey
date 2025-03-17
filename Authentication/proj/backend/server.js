const express = require("express");
const mysql = require("mysql2/promise");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

const session = require("express-session");
app.use(
  session({
    secret: "your_secret_key", // Change this to a strong secret in production
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, // Set to true if using HTTPS
  })
);

app.use(passport.initialize());
app.use(passport.session()); // Enable session support for Passport

// Database Connection
const db = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASS || "NewStrongPassword",
  database: process.env.DB_NAME || "auth",
});

// JWT Secret Key
const SECRET_KEY = "your_jwt_secret"; // Change this in production!

// Nodemailer Transporter Setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Passport Google OAuth Strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const email = profile.emails[0].value;
        const [users] = await db.query("SELECT * FROM users WHERE email = ?", [email]);

        if (users.length === 0) {
          await db.query("INSERT INTO users (first_name, last_name, email, username) VALUES (?, ?, ?, ?)", [
            profile.name.givenName,
            profile.name.familyName,
            email,
            profile.displayName,
          ]);
        }
        return done(null, profile);
      } catch (err) {
        return done(err, null);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

// Google Auth Routes
app.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));

app.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  async (req, res) => {
    if (!req.user) {
      return res.status(400).json({ message: "Google authentication failed" });
    }

    // Get the user's email
    const userEmail = req.user.emails[0].value;
    console.log("Google Login Successful for:", userEmail); // Log in backend

    // Generate JWT token for session
    const token = jwt.sign({ email: userEmail }, SECRET_KEY, { expiresIn: "1h" });

    // Send token to frontend
    res.redirect(`/auth/success?token=${token}&email=${userEmail}`);

  }
);

// User Signup
app.post("/signup", async (req, res) => {
  const { firstName, lastName, username, email, password } = req.body;

  try {
    console.log("Signup request received:", req.body);
    const hashedPassword = await bcrypt.hash(password, 10);

    await db.query(
      "INSERT INTO users (first_name, last_name, username, email, password) VALUES (?, ?, ?, ?, ?)",
      [firstName, lastName, username, email, hashedPassword]
    );

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Signup Successful",
      text: `Welcome ${firstName}! Your account has been created.`,
    });

    res.json({ message: "User registered successfully" });
  } catch (err) {
    console.error("Signup error:", err);
    res.status(500).json({ error: "Error signing up" });
  }
});

// User Login
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    console.log("Login request received:", req.body);
    const [users] = await db.query("SELECT * FROM users WHERE email = ?", [email]);

    if (users.length === 0) {
      return res.status(400).json({ error: "User not found" });
    }

    const user = users[0];
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ error: "Invalid password", prompt: "alert('Wrong password!')" });
    }

    res.json({ message: "Login successful", user });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ error: "Error logging in" });
  }
});

// Forgot Password - Send Reset Link
app.post("/forgot-password", async (req, res) => {
  const { email } = req.body;

  try {
    console.log("Forgot password request received for:", email);
    const [users] = await db.query("SELECT * FROM users WHERE email = ?", [email]);
    if (users.length === 0) {
      return res.status(400).json({ error: "User not found" });
    }

    const resetToken = jwt.sign({ email }, SECRET_KEY, { expiresIn: "1h" });
    const resetLink = `http://localhost:3000/reset-password?token=${resetToken}`;

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Password Reset Request",
      text: `Hello Srujan! You can reset your password by clicking on the link below:\n${resetLink}`,
    });

    res.json({ message: "Reset link sent to email" });
  } catch (err) {
    console.error("Error sending email:", err);
    res.status(500).json({ error: "Error sending reset link" });
  }
});

app.get("/auth/success", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Success</title>
        <script>
          setTimeout(() => {
            const urlParams = new URLSearchParams(window.location.search);
            const token = urlParams.get('token');
            const email = urlParams.get('email');
            window.location.href = \`http://localhost:3000/dashboard?token=\${token}&email=\${email}\`;
          }, 3000);
        </script>
      </head>
      <body style="display: flex; justify-content: center; align-items: center; height: 100vh; background-color: #f3f3f3;">
        <h1 style="font-size: 3rem; font-weight: bold; color: green;">Google Auth Successful</h1>
      </body>
    </html>
  `);
});


// Start Server
app.listen(5005, () => {
  console.log("🚀 Server running on http://localhost:5005");
});
