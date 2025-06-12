const express=require('express')
const UserModel = require('../Models/User.Model')
const UserRouter=express.Router() 
const saveRedirectUrl=require('../Middlewares/saveRedirectUrl.middleware.js')
const passport=require('passport')

//get request for signup form 
UserRouter.get('/signup',(req,res)=>{
    res.render('user/signup.ejs')
})
//post request for signup 
UserRouter.post('/signup',async(req,res)=>{
    try{
         const {username,email,location,category,password}=req.body 
         const newUser=new UserModel({username,email,location,category})
         const userRegister=await UserModel.register(newUser,password)
         
         console.log('user registered successfully',userRegister)

         res.login(userRegister,(err)=>{
            if(err) return next(err)
            res.redirect('/')
         })
         req.flash('success','welcome to Agrimart Family')
    }catch(err){
         req.flash('error','user already registered')
         res.redirect('/signup')
    }
})

//get request for login form
UserRouter.get('/login',(req,res)=>{
    res.render('user/login.ejs')
})
//post request for login
UserRouter.post('/login',saveRedirectUrl,passport.authenticated('local',{failureRedirect:'/login',failureFlash:true}),(req,res)=>{
    req.flash('success','welcome back to Agrimart')
    res.redirect(req.session.redirectUrl || '/')
})

//get request for logout 
UserRouter.get('/logout',(req,res)=>{
    req.logout((err)=>{
        if(err){
            return next(err)
        }else{
            req.flash('success','logged out successfully')
            res.redirect('/')
        }
    })
})

UserRouter.delete('/remove',async(req,res)=>{
    try{
        const {productId}=req.body 
        const userId=req.user._id 

        await UserModel.updateOne(
            {id:userId},
            {$pull:{cart:{productId:productId}}}
        )
    }catch(err){
        console.error(err)
        res.status(500).json({message:'failed to remove item '})
    }
})

module.exports=UserRouter