import express from "express";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const app = express();
const port = 3001;
app.use(express.static("public"));

app.get("/",  (req, res) => {
    res.sendFile(__dirname + "/views/index1.html")
});

app.get("/dict",  (req, res) => {
    res.sendFile(__dirname + "/views/index2.html")
});

app.listen(process.env.PORT ||port, () => {
    console.log(`Server running on port: ${port}`);
  });