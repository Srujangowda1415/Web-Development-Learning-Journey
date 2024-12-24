import express from "express";
import {dirname} from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import morgan from "morgan";

const __dirname=dirname(fileURLToPath(import.meta.url))

const app=express()
const port=5200

function logger(req,res,next){
    console.log("Request method:",req.method)
    next()
}


app.use(bodyParser.urlencoded({extended:true}))
app.use(morgan("tiny"))
app.use(logger)
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/public/index.html")
})

app.post("/submit",(req,res)=>{
    console.log(req.body)
})
// we were making a diy middleware which logs requests
app.listen(port,()=>{
    console.log("i am listening")
})
