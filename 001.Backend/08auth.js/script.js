const express = require('express');
const connection = require('./db');
const dotenv=require('dotenv'); 
dotenv.config(); 

const {userRouter} =require('./controllers/User.routes')
const jwt = require('jsonwebtoken');



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
app.get('/series',(req,res)=>{

     // verify a token symmetric
     const {token}=req.query; 
jwt.verify(token, 'masai', function(err, decoded) {
   if(decoded){
    res.status(200).send("series data"); 
   }else{
    res.status(400).send({"err":err.message}); 
   }
  });

    // if(req.query.token==="abc123"){
    //     res.end("Series Data"); 
    // }
    // else{
    //     res.end("Please login First!!")
    // }
   
})


app.get('/movie',(req,res)=>{
    // if(req.query.token==="abc123"){
    //     res.end("Movie Data"); 
    // }
    // else{
    //     res.end("Please login First!!")
    // }

    const {token}=req.query; 
    jwt.verify(token, 'masai', function(err, decoded) {
       if(decoded){
        res.status(200).send("movie data"); 
       }else{
        res.status(400).send({"err":err.message}); 
       }
      });
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

