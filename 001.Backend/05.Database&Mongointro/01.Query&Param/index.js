const express = require('express');
const fs = require('fs');
const timeLogger = require('./timelogger');
const { logger } = require("./logger");





let app = express(); //creating the server


//here we'll write middleware (just a function bw req and res)
app.use(timeLogger);  //created a module for making the server file neet and clean (works well when you debug)
app.use(logger);


app.get("/home", (req, res) => {   //Achiving dynamic responses using query in Api => localhost:9000/home?city=Delhi 
    const data = {
        "Chennai": "20C",
        "Delhi": "40C",
        "Jharkhand": "30C"
    }  //db.json
    console.log("Home Page", req.query);    //dynamic request with query and using this in same route we can send the dynamic responses ... what do you think??
    const { city } = req.query;  //concept of destructuring    key name must be same as here you declared or it will take undefined bcs there is no such key present in the req body 
    const temp = data[city]; //temp varable for holding the value of that city's temp 
    // res.end(`This dynamic res will contain details about ${city} weather`);
    res.end(`the weather of ${city} is  ${temp} `);
}); 


app.get("/students/:student_id",(req,res)=>{ //Achiving dynamic responses using params(parameter) in Api  => localhost:9000/students/MCRBS580078

const data={
    "MCRBS580075" : "6.5scgpa",
    "MCRBS580076" : "4.5scgpa",
    "MCRBS580077" : "2.5scgpa",
    "MCRBS580078" : "9.5scgpa",
    "MCRBS580079" : "8.5scgpa",
    "MCRBS580080" : "7.5scgpa"
}
    console.log(req.params); 
    const {student_id} = req.params; 
    console.log(student_id); 
let result = data[student_id]; 

    res.end(`The SCGPA of ${student_id} is ${result}`); 
})

// what is the diff b/w ?param and query ??? while using params we have to creat a specific routes but in query(within same route we can handle all types of queries...) we dont need it (see /:student_id or may be there was /:course_id and so on.... )




app.listen(9000, () => {
    console.log("server is live at 9000");
})