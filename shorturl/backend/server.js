import express from "express";
import cors from "cors";
import { nanoid } from "nanoid";

const app = express();
const PORT = 5002;

app.use(express.json());
app.use(cors());

const urlMap = new Map(); // In-memory storage (No DB required)

app.post("/shorten", (req, res) => {
    const { url } = req.body;
    if (!url) return res.status(400).json({ error: "URL is required" });

    const shortId = nanoid(6);
    urlMap.set(shortId, url);

    res.json({ shortUrl: `http://localhost:5002/${shortId}` });
});

app.get("/:shortId", (req, res) => {
    const originalUrl = urlMap.get(req.params.shortId);
    if (originalUrl) {
        res.redirect(originalUrl);
    } else {
        res.status(404).json({ error: "URL not found" });
    }
});

app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
