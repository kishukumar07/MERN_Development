const express = require('express');
const connection = require('./db');
const dotenv=require('dotenv'); 
dotenv.config(); 

const {userRouter} =require('./controllers/User.routes')
const jwt = require('jsonwebtoken');


const {auth} =require('./middleware/authmiddleware') //importing



const app = express();

app.use(express.json());// Middleware to parse JSON requests

const port = process.env.port; // Default port

app.use('/users',userRouter);



//Not authorised :public
app.get('/',(req,res)=>{
    res.end("Home page"); 
})
app.get('/contacts',(req,res)=>{
    res.end("Contact page"); 
})

app.get('/about',(req,res)=>{
    res.end("about page"); 
})




//AUTHORISED :Protected (bfr entering ,you need to login)

app.use(auth)//using middleware here for below acessing the procted routes

app.get('/series',(req,res)=>{

   /*  
     const token=req.headers.authorization.split(" ")[1];//if sending token as "bearer token" we have to handel like this 
jwt.verify(token, 'masai', function(err, decoded) {  //this thing must be used ase malware -auth 
   if(decoded){
    res.status(200).send("series data"); 
   }else{
    res.status(400).send({"err":err.message}); 
   }
  });
*/
//In place of the above code we created a malware auth

res.status(200).send("Movie data"); 

})


app.get('/movie',(req,res)=>{
    
/*
    const token=req.headers.authorization; //dont need to destructure now
    jwt.verify(token, 'masai', function(err, decoded) {
       if(decoded){
        res.status(200).send("movie data"); 
       }else{
        res.status(400).send({"err":err.message}); 
       }
      });
*/ 
//in place of  above code we created auth malware
 res.status(200).send("Movie data")


})

  


app.listen(port,  async() => {
    try {
          await connection
        console.log(" Server connected to db")
    } catch (err) {
        console.log(err);
        console.log("err Occured at db connection");  
    }
    console.log(`Server is running on port ${port}`);
});

