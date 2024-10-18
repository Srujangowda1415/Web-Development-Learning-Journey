const express=require("express")
const path=require("path")
const app=express()
const port=3001
var hello= require('express-handlebars')

app.engine('handlebars', hello());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use('/',require(path.join(__dirname,'routes/blog.js')))

app.listen(port,() =>{
    console.log(`Blog App is now listening on port ${port}`)
})