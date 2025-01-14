const http = require("http")
const fs =require("fs")

const server = http.createServer((req,res)=>{
    if(req.url==="/data"){
        try{
          const data =fs.readFileSync("./data.json","utf-8")
          res.end(data)
        }catch(err){
 res.end(err) 
        }
    }

})


server.listen(4500,()=>{
console.log("server is running at port 4500"); 
})