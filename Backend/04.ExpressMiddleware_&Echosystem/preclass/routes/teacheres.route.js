const {Router} = require ("express")


const  teachers = Router(); 

// crud operation for students 
teachers.post("/create",(req,res)=>{
    res.send("create"); 
})

teachers.put("/update",(req,res)=>{
    res.send("update"); 
})

teachers.get("/get",(req,res)=>{
    res.send(" teachersget"); 
})

teachers.delete("/delete",(req,res)=>{
    res.send("delete"); 
})
  //now the teachers is acting as a server itself (but its not a server its just a router)


  module.exports = teachers ; 