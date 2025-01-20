const fs = require('fs'); 


const logger=(req,res, next)=>{
    // console.log("Hello from logger middleware!!")
// console.log(req); 
fs.appendFileSync("./logs.txt",`Route : ${req.url} , Method: ${req.method} ,Time: ${Date()} \n`); 
console.log("logger records added")
    next(); 

}
module.exports ={logger};  