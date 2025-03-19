const Message = require('./models/Message');

module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log('🔗 User Connected');

    socket.on('sendMessage', async (data) => {
      const message = await Message.create({ sender: data.sender, content: data.content });
      io.emit('receiveMessage', message);
    });

    socket.on('disconnect', () => {
      console.log('❌ User Disconnected');
    });
  });
};
