const mongoose =require('mongoose'); 

const userSchema= mongoose.Schema({
   "name":{type:String , required :true},
    "email":{type:String ,required:true},
    "pass":{type:String , required :true},
    "age":{type:Number, required :true}
},{
    versionKey:false
})


const Usermodel=mongoose.model("user",userSchema)


module.exports=Usermodel