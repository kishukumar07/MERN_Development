const mongoose =require('mongoose'); 


const noteSchema= mongoose.Schema({
   tittle:{type:String , required :true},
    body:{type:String ,required:true},
    author:{type:String , required :true},  //added for relationship 
    authorID:{type:String , required :true},
    category:{type:String , required :true}
},{
    versionKey:false
})


const Notemodel=mongoose.model("note",noteSchema)


module.exports=Notemodel