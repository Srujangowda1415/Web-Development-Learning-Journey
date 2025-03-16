const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // ✅ Add this to parse JSON request bodies

let teaData = [];
let nextId = 1;

// POST route to add a new tea
app.post('/teas', (req, res) => {
    const { name, type, origin, price } = req.body;
    
    if (!name || !type || !origin || price === undefined) {
        return res.status(400).json({ error: "Missing required tea fields" });
    }

    const newTea = { id: nextId++, name, type, origin, price };
    teaData.push(newTea);
    
    res.status(201).json(newTea);
});

// GET route for root
app.get('/', (req, res) => {
    res.send('Hello, World! Welcome to the Tea API 🍵');
});

// GET route to fetch all teas
app.get('/teas', (req, res) => {
    res.json(teaData);
});

// Start the server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
