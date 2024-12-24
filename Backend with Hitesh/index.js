const express = require('express')
require('dotenv').config()
// toh kya karna hai? 
// >>>>>add more webpages
// >>>>git karke web deploy kar
// uske baa
// 3890180624
// VA0279041237
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/hello',(req,res) =>{
    res.send("Hello Abhay! this is my hello page")
})

app.get('/bye',(req,res) =>{
    res.send("Hello Abhay! this is my bye bye page")
})
app.get('/hello',(req,res) =>{
    res.send("Hello Abhay! this is my hello page")
})
app.get('/wyd',(req,res) =>{
    res.send("Hello Abhay! or fir? aaj kya plan?")
})


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
