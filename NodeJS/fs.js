const fs= require("fs");

// fs.writeFile("message.txt","Hello Cutie!",err => {
//     if (err){
//         console.log("Error aa gaya bhai")
//     }
//     else{
//         console.log("file create ho gayi bhai")
//     }
// })

fs.readFile("message.txt","utf8",(err,data)=>{
    if (err){
        console.log("error aa gaya bhai")
    }
    else{
        console.log(data)
    }
})