//we have created this file just for better structure 
const mongoose = require('mongoose');  
const { version } = require('os');
const connection = mongoose.connect("mongodb://127.0.0.1:27017/expressDB");




const userschema =mongoose.Schema({
    name:{type:String , required:true}, 
    age :{type:Number,required:true}, 
    is_married:{type:Boolean, required:true},
    city:{type:String, required:true}
},{
    versionKey:false
})



const UserModel = mongoose.model("user",userschema); 


module.exports={
    connection ,
    UserModel
}

