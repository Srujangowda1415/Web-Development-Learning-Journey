import express from "express";
const app=express()
const port=3000;

app.get("/",(req,res) =>{
    res.send("Hello World!") //isme html daal sakte hai or shayad isme hi webpages likhenge react ke
})
app.get("/about",(req,res) =>{
    res.send(" ")
})
app.listen(port,() =>{
    console.log(`Your server is now up and running at port ${port}`)
})
