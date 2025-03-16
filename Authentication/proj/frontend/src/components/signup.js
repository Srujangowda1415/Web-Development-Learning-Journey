import React, { useState } from "react";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await fetch("http://localhost:5005/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("Response from server:", data);

      if (response.ok) {
        alert("Signup successful!");
      } else {
        alert("Signup failed: " + data.message);
      }
    } catch (error) {
      console.error("Signup error:", error);
      alert("Error signing up");
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.heading}>Sign Up</h2>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
          style={styles.input}
        />
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
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;

// Dark Theme Styles
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#121212", // Dark background
  },
  form: {
    maxWidth: "400px",
    width: "100%",
    padding: "30px",
    border: "1px solid #333", // Darker border
    borderRadius: "10px",
    backgroundColor: "#1e1e1e", // Dark form background
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)", // Darker shadow
  },
  heading: {
    marginBottom: "20px",
    fontSize: "24px",
    fontWeight: "600",
    color: "#fff", // White text
    textAlign: "center",
  },
  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    border: "1px solid #444", // Darker border
    borderRadius: "6px",
    fontSize: "16px",
    outline: "none",
    backgroundColor: "#2a2a2a", // Dark input background
    color: "#fff", // White text
    transition: "border-color 0.3s ease",
  },
  button: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#007bff", // Blue button
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
};