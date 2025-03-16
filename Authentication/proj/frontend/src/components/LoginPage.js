import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
        // Store token in localStorage/sessionStorage (for JWT)
        localStorage.setItem("token", data.token);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      // Replace with your Google OAuth logic
      alert("Google Sign-In is not implemented yet.");
    } catch (error) {
      console.error("Error with Google Sign-In:", error);
    }
  };

  return (
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

      <button onClick={handleGoogleSignIn} style={styles.googleButton}>
        Sign in with Google
      </button>

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
  googleButton: {
    width: "100%",
    maxWidth: "400px",
    padding: "12px",
    backgroundColor: "#db4437",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    marginTop: "10px",
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
};