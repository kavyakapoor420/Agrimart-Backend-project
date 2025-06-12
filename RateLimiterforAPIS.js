const express=require('express')
const app=express() 

const rateLimit=require('express-rate-limit')

app.use(express.json())

//rate limiting middleware
const blogLimiter=rateLimit({
    windowMs:1*60*1000,//1 minute,
    max:3,
    message:{
        status:429,
        message:'too many request, please try again after 1 minute'
    }
})

let blogPost=[
    {
        id:1,
        title:'Blog Post 1',
        content:'This is the content of blog post 1'
    },
    {
        id:2,
        title:'Blog Post 2',
        content:'This is the content of blog post 2'
    },
    {
        id:3,
        title:'Blog Post 3',
        content:'This is the content of blog post 3'
    }
]

//route to get all blog posts protected by rate limiting
app.get('/api/blogs',blogLimiter,(req,res)=>{
    res.json(blogPost)
})

app.post('/api/blogs',blogLimiter,(req,res)=>{
    const {title,content}=req.body ;
    if(!title || !content){
        return res.status(400).json({message:'title contente are missing'})
    }
    const newBlog={
        id:blogPost.length+1,
        title,
        content
    }
    blogPost.push(newBlog)
    res.status(201).json({message:'blog post created successfully ',blog:newBlog})
})

const port=3000;

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)    
})