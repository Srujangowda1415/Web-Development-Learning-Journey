import express from 'express';
import {dirname} from 'path';
import path from 'path';
import bodyParser from 'body-parser';

const __dirname=path.dirname(fileURLToPath(import.meta.url))

// const app=express()
// const port=5300
// var bandName=""

// app.use(bodyParser.urlencoded({extended:true}))

// function bandNameGenerator(req,res,next){
//     console.log(req.body)
//     bandName=req.body('name')+req.body('birthplace')
// }

// app.get('/',(req,res)=>{
//     res.sendFile(__dirname+"/public/bnwebp.html")
// })

// app.post("/submit",(req,res)=>{
//     res.send
// })

// app.listen(port,()=>{
//     console.log("listening")
// })
// const express = require('express');
// const bodyParser = require('body-parser');

const app = express();
const port = 5300;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/bnwebp.html');
});

app.post('/submit', (req, res) => {
    const name = req.body.name;
    const birthplace = req.body.birthplace;

    // Implement your band name generation logic here
    const bandName = `${name}'s ${birthplace} Band`;

    // Send the generated band name back to the client
    res.send(`Your band name is: ${bandName}`);
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});