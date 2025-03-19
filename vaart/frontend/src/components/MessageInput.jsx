import { Box, TextField, Button } from "@mui/material";
import { useState } from "react";

export default function MessageInput({ onSend }) {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      onSend(message);
      setMessage("");
    }
  };

  return (
    <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
      <TextField
        fullWidth
        variant="outlined"
        label="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button variant="contained" onClick={handleSend}>
        Send
      </Button>
    </Box>
  );
}
