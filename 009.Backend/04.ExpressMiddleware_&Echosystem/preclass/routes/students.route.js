const {Router} =require("express"); 

const students =Router(); 


// crud operation for students 
students.post("/create",(req,res)=>{
    res.send("create"); 
})

students.put("/update",(req,res)=>{
    res.send("update"); 
})

students.get("/get",(req,res)=>{
    res.send(" students get"); 
})

students.delete("/delete",(req,res)=>{
    res.send("delete"); 
})


module.exports = students ; 