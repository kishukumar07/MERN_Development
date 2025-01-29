//we have created this file just for better structure 
const mongoose = require('mongoose');  
const { version } = require('os');
const dotenv = require('dotenv');
dotenv.config(); //to use the env file

// const connection = mongoose.connect("mongodb://127.0.0.1:27017/expressDB"); //mongodb
const connection = mongoose.connect(process.env.mongoURL);//mongodb atlas



//user's schema
const userschema =mongoose.Schema({
    name:{type:String , required:true}, 
    age :{type:Number,required:true}, 
    is_married:{type:Boolean, required:true},
    city:{type:String, required:true}
},{
    versionKey:false
})


//user's model
const UserModel = mongoose.model("user",userschema); 


//superhero's schema
const superschema =mongoose.Schema({
    name:{type:String , required:true}, 
    age :{type:Number,required:true}, 
},{
    versionKey:false
})

//user's model
const HeroModel = mongoose.model("hero",superschema); 





module.exports={
    connection ,
    UserModel ,
    HeroModel,
}

