const express = require('express');
const { getMessages } = require('../controllers/messageController');
const { verifyToken } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/messages', verifyToken, getMessages);

module.exports = router;
