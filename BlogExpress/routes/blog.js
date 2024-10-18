const express=require('express')
const router=express.Router()
const path=require('path')
const blog=require('../data/blogs.js')

router.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,'../templates/index.html'))
})

router.get('/blog',(req,res) => {
    // blogs.array.forEach(element => {
    //     console.log(element.title)
    // });

    res.sendFile(path.join(__dirname,'../templates/blogHome.html'))
   
})

router.get('/blogpost/:slug',(req,res) => {
    // blogs.array.forEach(element => {
    //     console.log(element.title)
    // });
    myBlog=blogs.filter((e) =>{
        return e.slug==req.params.slug
    })
    console.log(myBlog)

    res.sendFile(path.join(__dirname,'../templates/blogPage.html'))
   
})

module.exports=router