const prompt = require("prompt-sync")();

// count= input.length
// minusCount=250-count
// // console.log("You have written "+count+" characters, you have "+minusCount+" characters left")
// finalOutput=input.slice(0,11)

// // console.log(finalOutput)
// // you need to code a thing which slices all the characters after 250...
// // but 250 mat bana test nahi kar payega lets create something which takes only 10 characters..

let name=prompt("Enter your Name here....  ")
let letter1=name.slice(0,1)
let restName=name.slice(1,name.length)
let capletter1=letter1.toUpperCase()
let capRestName=restName.toLowerCase()

console.log("Hello,"+capletter1+capRestName)
