const mongoose=require('mongoose')

const productSchema=new mongoose.Schema({

    title:{
        type:String,
        required:true    
    },
    image:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true ,
    },
    quantity:{
        type:Number,
        required:true,
        default:1
    },
    location:{
        type:String,
        required:true
    },
    category:{
        type:String,
        enum:['Fruits and Vegetables','Legumes and Oil Seeds','Cereals and Grains','Livestock and Plantation','Cash crops','Spices'],
        required:true
    },
    geometry:{
        type:{
            type:String, //dont do `{location:{type:string}}`
            enum:['Point'], //location.type must be 'Point
            required:true
        },
        coordinate:{
            type:[Number] //longitude, latitude
            //longitude first, then latitude
            //so it will be [longitude, latitude]
            , //array of numbers
            required:true
        }
    }

})


const ProductModel=mongoose.model("ProductModel",productSchema)

module.exports=ProductModel