const express = require('express');
const { connection, UserModel } = require("./db")

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




//READ
app.get("/users", async (req, res) => {
    try{
        const users = await UserModel.find();
        res.send(users);
    }catch(err){
res.send(err); 
    } 
})



//Update





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

