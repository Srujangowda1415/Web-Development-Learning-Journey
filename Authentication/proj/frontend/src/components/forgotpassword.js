import React, { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);
    setError(null);
    
    try {
      const response = await fetch("http://localhost:5005/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage("Password reset link sent to your email.");
      } else {
        setError(data.error || "Something went wrong. Try again.");
      }
    } catch (err) {
      setError("Failed to connect to server. Try again later.");
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "#121212", color: "#fff" }}>
      <form onSubmit={handleSubmit} style={{ maxWidth: "400px", padding: "20px", borderRadius: "8px", backgroundColor: "#1e1e1e", boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.1)" }}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Forgot Password</h2>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ width: "100%", padding: "10px", marginBottom: "10px", borderRadius: "4px", border: "none", backgroundColor: "#333", color: "#fff" }}
        />
        <button type="submit" style={{ width: "100%", padding: "10px", borderRadius: "4px", border: "none", backgroundColor: "#00b894", color: "#fff", cursor: "pointer" }}>Send Reset Link</button>
        {message && <p style={{ color: "#00b894", textAlign: "center", marginTop: "10px" }}>{message}</p>}
        {error && <p style={{ color: "#ff7675", textAlign: "center", marginTop: "10px" }}>{error}</p>}
      </form>
    </div>
  );
};

export default ForgotPassword;
