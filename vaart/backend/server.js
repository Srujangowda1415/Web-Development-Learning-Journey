const express = require('express');
const http = require('http');
const sequelize = require('./config/db');
const cors = require('cors');
const socketIo = require('socket.io');
require('dotenv').config();
const authRoutes = require('./routes/authRoutes');  
const messageRoutes = require('./routes/messageRoutes');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, { cors: { origin: '*' } });

app.use(express.json());
app.use(cors());

app.use('/api/auth', authRoutes);
app.use('/api', messageRoutes);

require('./socket')(io);

// Sync database
sequelize.sync({ alter: true }).then(() => {
  console.log('✅ Database synced');
  server.listen(5010, () => console.log('🚀 Server running on port 5000'));
});
