const express= require("express")
const path = require ("path")
const app=express()
const port=5001

app.get('/',(req,res) =>{
    res.sendFile(path.join(__dirname,'index.html'))
})

app.get('/about',(req,res) =>{
    res.sendFile(path.join(__dirname,'about.html'))
})

app.listen(port,() =>{
    console.log(`Example app is now listening on port ${port}`)
})