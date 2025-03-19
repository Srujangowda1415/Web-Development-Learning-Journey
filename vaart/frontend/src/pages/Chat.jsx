import { useState, useEffect } from "react";
import { Box, Container } from "@mui/material";
import Navbar from "../components/Navbar";
import ChatWindow from "../components/ChatWindow";
import MessageInput from "../components/MessageInput";
import Sidebar from "../components/Sidebar";
import io from "socket.io-client";
import axios from "../utils/api";

const socket = io(import.meta.env.VITE_API_URL); // Connect to backend WebSocket

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    socket.on("message", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    socket.on("userList", (userList) => {
      setUsers(userList);
    });

    return () => {
      socket.off("message");
      socket.off("userList");
    };
  }, []);

  const sendMessage = (messageText) => {
    const message = { user: "You", text: messageText };
    socket.emit("sendMessage", message);
    setMessages((prev) => [...prev, message]);
  };

  return (
    <Container maxWidth="md">
      <Navbar />
      <Box sx={{ display: "flex", mt: 2 }}>
        <Sidebar users={users} />
        <Box sx={{ flexGrow: 1, p: 2 }}>
          <ChatWindow messages={messages} />
          <MessageInput onSend={sendMessage} />
        </Box>
      </Box>
    </Container>
  );
}
