const express=require('express')
const mongoose=require('mongoose')
const path=require('path')

const app=express() 

//all middlewares 
app.use(express.json())
app.use(express.urlencoded({extended:true}))


//connecting to mongodb
async function connectDB(){
    await mongoose.connect('mongodb://localhost:27017/AgriMart')
}

connectDB().then(()=>{
    console.log('connected to mongodb')
}).catch((err)=>{
    console.log('error connecting to mongodb:', err)
})


app.listen(3000,()=>{
    console.log("server is running on port 3000")
})