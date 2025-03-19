const Message = require('../models/Message');

exports.getMessages = async (req, res) => {
  try {
    const messages = await Message.findAll({ order: [['timestamp', 'ASC']] });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching messages' });
  }
};
