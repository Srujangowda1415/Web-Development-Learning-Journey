import { useState } from "react";
import { TextField, Button, Box, Typography, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "../utils/api";

export default function Register() {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    try {
      await axios.post("/auth/register", user);
      navigate("/login"); // Redirect to login after successful registration
    } catch (error) {
      console.error("Registration failed", error);
    }
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 10 }}>
      <Paper sx={{ p: 3, width: 300 }}>
        <Typography variant="h5" gutterBottom>
          Register
        </Typography>
        <TextField fullWidth label="Name" name="name" margin="normal" onChange={handleChange} />
        <TextField fullWidth label="Email" name="email" margin="normal" onChange={handleChange} />
        <TextField fullWidth label="Password" type="password" name="password" margin="normal" onChange={handleChange} />
        <Button variant="contained" fullWidth sx={{ mt: 2 }} onClick={handleRegister}>
          Register
        </Button>
      </Paper>
    </Box>
  );
}
