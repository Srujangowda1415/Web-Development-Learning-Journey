import { Box, Paper, Typography } from "@mui/material";

export default function ChatWindow({ messages }) {
  return (
    <Paper sx={{ height: "70vh", overflowY: "auto", p: 2 }}>
      {messages.length > 0 ? (
        messages.map((msg, index) => (
          <Box key={index} sx={{ mb: 1, p: 1, bgcolor: "whitesmoke", borderRadius: 1 }}>
            <Typography variant="subtitle2" color="primary">
              {msg.user}
            </Typography>
            <Typography variant="body1">{msg.text}</Typography>
          </Box>
        ))
      ) : (
        <Typography variant="body1" color="textSecondary">
          No messages yet...
        </Typography>
      )}
    </Paper>
  );
}
