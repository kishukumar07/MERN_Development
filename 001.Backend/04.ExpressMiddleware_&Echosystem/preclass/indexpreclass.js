
const express =require("express"); 

const teachersRoutes =require("./routes/teacheres.route"); 
const studentsRoutes =require("./routes/students.route"); 


const app = express(); 

//for data purpose 
app.use((req,res,next)=>{
    console.log("Got request ",req.query);  //you have the acess to entire req and response   //you have to write this before route calling to make it work  

    if(!req.query.apiKey){
        return res.status(401).send("No API Key provided"); 
    }
    next(); 
}); 



app.get("/",(req,res)=>{
    res.send("hello"); 
}); 

app.use("/teachers", teachersRoutes);  //creating a middleware (not acctuall middleware) but   _it will make main file very  very clear
app.use("/students", studentsRoutes);  //creating a middle ware   (not acctuall middleware) but   _it will make main file very  very clear


app.listen(8000,()=>{
    console.log("server started"); 
}); //this is server app 





//so we have learnt two types of middle waretoday
 //  app.use(express.json()); 
//  app.use(express.urlencoded({extended: true})); 
