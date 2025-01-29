const express = require('express');
const { connection, UserModel , HeroModel } = require("./db")

const app = express()
app.use(express.json())



app.get("/", (req, res) => {
    res.send("Home Page");
})


//CREATE
app.post("/adduser", async (req, res) => {
    const data = req.body;
    try {
        const user = UserModel(req.body);
        await user.save();
        res.send("Added the new user \n" + JSON.stringify(data)); //data was in parsed format[object Object]
    } catch (err) {
        res.send(err);
    }
})

app.post("/addhero", async (req, res) => {
    const data = req.body;
    try {
        const hero = HeroModel(req.body);
        await hero.save();
        res.send("Added the new hero \n" + JSON.stringify(data)); //data was in parsed format[object Object]
    } catch (err) {
        res.send(err);
    }
})




//READ
app.get("/users", async(req, res) => {
       
    const query = req.query;  //you can't use distructor when there is more than one query
    console.log(query);

    try{
        const users = await UserModel.find(query) ;//{is_married:`${query}` previously we used this-think logically  
        res.send(users);
    }catch(err){
res.send(err); 
    } 
//for practice : can try sorting the data in the basis of req.query wrt. age   
})



//Update
app.patch("/updateuser/:id",async (req,res)=>{
    const {id} =req.params;  //you can use distructor bcs here only one params is passed
console.log(id)
try{
await UserModel.findByIdAndUpdate({ _id:id} , req.body)// ({takes"filter"},"update stuff")
res.send("data Updated"); 
}catch(err){
res.send(err); 
}
})




//DELETE
app.delete("/deleteuser/:id",async(req,res)=>{

    const {id}=req.params
    try{
  await UserModel.findByIdAndDelete({ _id:id})//({takes"filter"})
res.send("UserDeleted"); 
    }catch(err){
 res.send(err); 
    }
})







//as long as my server is running it should be connect to the db
app.listen(4500, async () => {
    try {
        await connection
        console.log("connected to the database");
    } catch (err) {

        console.log(err);
        console.log("Something went wrong while connecting to the db");
    }

    console.log("server is live at port 4500")
})

