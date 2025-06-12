const mongoose=require("mongoose")
const products=require('./ProductData.js')
const initHomeData=require('./HomeData.js')
const ProductModel = require("../Models/Product.Model")
const HomeModel = require("../Models/Home.Model")


async function connectDB(){
    await mongoose.connect('mongodb://localhost:27017/AgriMart')
}

connectDB().then(()=>{
    console.log('connected to mongodb')
}).catch((err)=>{
    console.log("error connecting to mongodb",err)
})


//product data initialization
const initProductDB=async()=>{
    await ProductModel.insertMany(products)
    console.log("data inserted into ProductModel")
}

initProductDB().then(()=>{
    console.log("Product data initialized successfully")
}
).catch((err)=>{
    console.log("error initializing Product data",err)
})
//home data initialization
const initHomeDB=async()=>{
    await HomeModel.insertMany(initHomeData.data)
    console.log("data inserted into HomeModel")
}
initHomeDB().then(()=>{
    console.log("Home data initialized successfully")
}
).catch((err)=>{
    console.log("error initializing Home data",err)
})