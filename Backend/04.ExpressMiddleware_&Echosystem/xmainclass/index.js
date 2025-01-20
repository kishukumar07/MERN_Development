const express = require('express');
const fs = require('fs');
const timeLogger =require('./timelogger'); 
const {logger} =require("./logger"); 


let app = express(); //creating the server


//here we'll write middleware (just a function bw req and res)
app.use(timeLogger);  //created a module for making the server file neet and clean (works well when you debug)
app.use(logger); 


app.get("/home", (req, res) => {
    const data= fs.readFileSync("./db.json","utf-8");  //reding the db
    // console.log("Home Page");
    res.end(data);
})

app.put("/about", (req, res) => {
    console.log("About page")
    res.end("about page");
})

app.patch("/contact", (req, res) => {
    console.log("Contact Page")
    res.end("patched the  contact");
})

app.delete("/data", (req, res) => {
    console.log("data Page")
    res.end("data deleted");
})

app.listen(9000, () => {
    console.log("server is live at 9000");
})