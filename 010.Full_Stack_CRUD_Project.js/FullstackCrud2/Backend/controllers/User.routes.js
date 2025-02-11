const express = require('express');
const userRouter = express.Router();
const Usermodel = require('../model/user.model')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');



userRouter.get('/', (req, res) => {
    res.end("USERS PATH");
})


userRouter.post('/register', async (req, res) => { //check async??
    
    const { email, pass, name, age } = req.body //try validation here
    
try {

    if (!email || !pass || !name || !age) {  //error handeling for validation
        return res.status(400).send({ "err":"All fields are required!email || !pass || !name || !age" });
    }

        bcrypt.hash(pass, 5, async (err, hash) => {
            //hash is your hashed pass now
            const user = new Usermodel({ email, name, age, pass: hash });
            await user.save();
            res.status(200).send({ "msg": "New user has been registered" }); //standard way of sending res with status.code
        });
    } catch (err) {
        res.status(400).send({ "err": err.message });
    }

});







userRouter.post('/login', async (req, res) => {   //authenticationPart logic here 
    const { email, pass } = req.body;  //first you will take the email and pass from frontend /(postman)
    try {
        const user = await Usermodel.findOne({ email });
        if (user) { //authentication
            bcrypt.compare(pass, user.pass, (err, result) => {
                if (result) {
                    var token = jwt.sign({authorID:user._id,author:user.name }, 'masai');//jwt usage~generating random token (authorisation) weneed to verfy the token in protected routes also in way to acess it ~also verified by jwt    //payload -course:backend will be changed to { authorID:user._id }
                    res.status(200).send({ 'msg': "Login Sucessful", "token": token });   //one the user authenticated at that point of time we'll generate and asign the token to the clint
                } else {
                    res.status(200).send({ "msg": "Wrong Credentials" });
                }
            });
        } else {
            res.status(200).send({ "msg": "Wrong Credentials" });
        }
    } catch (err) {
        res.status(400).send({ "err": err.message });
    }
});







module.exports = { userRouter }