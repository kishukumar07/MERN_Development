// Express is an external module so we have to install it "npm i express(the http were internal module and we dont need to install it ) ofcourse we have to aquire both for usage
const fs =require('fs'); 
const express =require('express'); 


const app = express() //for using express we have to call it like a function calling  and watever it will return will contains all methods (crud)




app.use(express.json()) //using middleware

//learning how to use get method 
app.get("/home",(req,res)=>{ 
res.end("hello")
}) //made a get request 


//learning how to use post method
app.post("/adddata",(req,res)=>{
         console.log(req.body)  //checking the data not in chunck  it will still show undefined now  bcs we are pasing json data so we need a middleware for consoling the data will learn about middleware see line 6  (youll get data in form of object  )
    res.send("data is added")  //same as res.end -used for getting data
})




//getting a data from db and sending it to ui 
app.get("/students",(req,res)=>{
    const data = JSON.parse(fs.readFileSync("./db.json","utf-8"))
    console.log(data ); 
    res.send(data.students)
})

//posting  a data from postman  to db 
app.post("/students",(req,res)=>{
 
    // console.log(req.body); //here is our data that we are sending 
    const data = JSON.parse(fs.readFileSync("./db.json","utf-8"))
    data.students.push(req.body)
    console.log(data); //now we just have to rewriteour db.json file thats it my boy ; 
    fs.writeFileSync("./db.json",JSON.stringify(data))

    res.send("data is added") ; //giving a signal that all well 
})


app.listen("9000",()=>{
    console.log("listening at port 9000")
})