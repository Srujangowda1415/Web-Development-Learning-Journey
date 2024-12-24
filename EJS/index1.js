import express from 'express'

const app=express()
const port=3000

app.get('/',(req,res) =>{
    const today= new Date()
    let day=today.getDay()

    let type=' a weekday'
    let adv='its time to work hard'

    if (day===0 || day===6){
        type=' a weekend'
        adv=' its time to have fun'
    }

    res.render('index.ejs',{
        dayType:type,
        advice:adv
    })
})
app.listen(port,()=>{
    console.log("app is listening")
})