const mongoose=require('mongoose')

const homeSchema=new mongoose.Schema({
     title:{
        type:String,
        required:true,
     },
     description:{
        type:String,
        required:true,
     },
     url:{
        type:String,
        required:true,
     }
})

const HomeModel=mongoose.model("HomeModel",homeSchema)

module.exports=HomeModel