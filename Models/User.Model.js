const mongoose=require('mongoose')
const passportLocalMongoose=require('passport-local-mongoose')

const userSchema=new mongoose.Schema({
    googleId:{
        type:String
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    //we dont have to addd password filed here beacuse passport-local-mongoose will add it automatically
    location:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        enum:['farmer', 'buyer'],
        required:true 
    },
    cart:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"ProductModel",
        default:[]
    }]
})

userSchema.plugin(passportLocalMongoose)

const UserModel=mongoose.model("UserModel",userSchema)

module.exports=UserModel 