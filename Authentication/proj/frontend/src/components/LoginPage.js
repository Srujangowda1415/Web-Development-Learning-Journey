import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

const GOOGLE_CLIENT_ID = "1095775181628-t9lp2ruuhmc24pd00op0rp5jstqoelvg.apps.googleusercontent.com"; // Replace with your actual Client ID

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false); // Loading state for Google OAuth
  const location = useLocation();
  const navigate = useNavigate();

  // Handle query parameters for Google OAuth redirection
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get("token");
    const email = queryParams.get("email");

    if (token && email) {
      console.log("User logged in:", email); // Log user email
      alert(`Google Login Successful! Welcome, ${email}`);
      localStorage.setItem("token", token);
      window.history.replaceState({}, document.title, "/dashboard"); // Clean URL
      navigate("/dashboard"); // Redirect to dashboard
    }
  }, [location, navigate]);

  // Handle email/password form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle email/password form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5005/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Login successful!");
        localStorage.setItem("token", data.token);
        navigate("/dashboard"); // Redirect to dashboard
      } else {
        alert(data.error || "Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      alert("An error occurred. Please try again.");
    }
  };

  // Handle Google OAuth success
  const handleGoogleSuccess = () => {
    setLoading(true); // Show loading state
    window.location.href = "http://localhost:5005/auth/google"; // Redirect to backend
  };

  // Handle Google OAuth failure
  const handleGoogleFailure = () => {
    alert("Google Sign-In Failed");
    setLoading(false); // Reset loading state
  };

  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Login</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <button type="submit" style={styles.button}>
            Login
          </button>
        </form>

        <p style={styles.divider}>or</p>

        {/* Google Login Button */}
        <GoogleLogin
          onSuccess={handleGoogleSuccess}
          onError={handleGoogleFailure}
        />

        {/* Loading state for Google OAuth */}
        {loading && <p style={styles.loading}>Redirecting to Google...</p>}

        {/* Navigation Links */}
        <div style={styles.links}>
          <Link to="/signup" style={styles.link}>
            Sign Up
          </Link>
          <span style={styles.linkSeparator}>|</span>
          <Link to="/forgot-password" style={styles.link}>
            Forgot Password?
          </Link>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default LoginPage;

// Styles
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    backgroundColor: "#121212",
    color: "#fff",
    padding: "20px",
  },
  heading: {
    fontSize: "24px",
    fontWeight: "600",
    marginBottom: "20px",
  },
  form: {
    width: "100%",
    maxWidth: "400px",
  },
  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    border: "1px solid #444",
    borderRadius: "6px",
    backgroundColor: "#2a2a2a",
    color: "#fff",
    fontSize: "16px",
    outline: "none",
    transition: "border-color 0.3s ease",
  },
  button: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  divider: {
    color: "#bbb",
    margin: "10px 0",
  },
  links: {
    marginTop: "15px",
    textAlign: "center",
  },
  link: {
    color: "#bbb",
    textDecoration: "none",
    fontSize: "14px",
    transition: "color 0.3s ease",
  },
  linkSeparator: {
    color: "#bbb",
    margin: "0 10px",
  },
  loading: {
    color: "#bbb",
    marginTop: "10px",
  },
};