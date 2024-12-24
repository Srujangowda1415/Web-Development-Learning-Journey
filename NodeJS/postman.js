import express from 'express';
const app=express()
const port=3000

app.get("/",(req,res)=>{
    res.send("Hello")
}
)

app.post("/register",(req,res)=>{
    res.sendStatus(201)
})

app.put("/user",(req,res)=>{
    res.sendStatus(200)
})

app.patch("/user",(req,res)=>{
    res.sendStatus(200)
})

app.delete("/user",(req,res)=>{
    res.sendStatus(200)
})


app.listen(port,()=>{
    console.log('server listening')
})