const express=require('express');
const UserModel = require('../Models/User.Model');
const HomeRouter=express.Router() 
const initSchema = require('../init/HomeData.js');
const product=require('../init/ProductData.js')



router.get("/",async(req,res) => {
    let all_image = await initSchema.find({});
    let spiceList = await product.find({category:"Spices"});
    let cashCrop = await product.find({category:"Cash crops"});
    let liveStock = await product.find({category:"Livestock and Plantation"});
    let cereal = await product.find({category:"Cereals and Grains"})
    let legumes = await product.find({category:"Legumes and Oil Seeds"});
    let fruits = await product.find({category:"Fruits and Vegetables"})
    res.render("./listing/home",{all_image, spiceList,cashCrop,liveStock,cereal,legumes,fruits});
})



//acces cart section
HomeRouter.get('/cart',async (req,res)=>{
    let userID=req.user._id ;
    let user=await UserModel.findById(userID).populate('cart')
    res.render('./listing/cart.ejs',{user})
})

//delete route for cart 
HomeRouter.delete('/cart/delete/:productId',async(req,res)=>{
    try{
         let userId=req.user._id ;
         let user=await UserModel.findById(userId).populate('cart')
         let productId=req.params.productId ;

         //more robuts check for product existence
         //const initailCount=user.cart.length ;
         user.cart=user.cart.filter(product=>product._id.toString()!==productId)
          if(user.cart.length===UserModel.initialCount){
            return res.status(404).json({message:'product not found in cart '})
          }
          await user.save() 
          res.status(200).json({message:'product not found from cart'})

    }catch(err){
          console.error('error',err)
          res.status(500).json({message:'error deleting product from cart'})
    }
})

module.exports=HomeRouter 