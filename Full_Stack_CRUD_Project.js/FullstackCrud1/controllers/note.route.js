const express=require('express'); 
const noteRouter =express.Router()

const Notemodel=require('../model/note.model')


noteRouter.post("/create",async(req,res)=>{
//logic
// let data=req.body; 

 try{
    let note =  new Notemodel(req.body)
    await note.save()
res.status(200).send({"msg":"New Note has been Added!!"}) 
} catch(err){
    res.status(400).send({"err": err.message });
   }
})


noteRouter.get("/",(req,res)=>{
    //logic

})

noteRouter.patch("/update/:noteID",(req,res)=>{
   //logic 
}) 

 
noteRouter.delete("/delete/:noteID",(req,res)=>{
    //logic
})


module.exports={
    noteRouter
}