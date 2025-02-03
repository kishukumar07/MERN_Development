const express = require('express');
const userRouter = express.Router();
const Usermodel = require('../model/user.model')
const jwt = require('jsonwebtoken');


userRouter.get('/', (req, res) => {
    res.end("USERS PATH");
})


userRouter.post('/register', async (req, res) => {
    try {
        const user = new Usermodel(req.body);
        await user.save();
        res.status(200).send({ "msg": "New user has been registered"}); //standard way of sending res with status.code
    } catch (err) {
        res.status(400).send({ "err": err.message });
    }
});




userRouter.post('/login', async (req, res) => {   //authenticationPart logic here 
const{email,pass}=req.body;  //first you will take the email and pass from frontend /(postman)
try{
    const user = await  Usermodel.findOne({email,pass});  //finding the data related to the given email & pass if it is present in db   {email:emai,pass:passl}==={email,pass} by~ex6
  //findOne will return obj only & if nothing matches there will be null but find will return obj inside array     and if nothing matches there will be  an empty array [] SO lets put some logic here...
if(user){ //authentication
    var token = jwt.sign({ course: 'backend' }, 'masai');//jwt usage~generating random token (authorisation) weneed to verfy the token in protected routes also in way to acess it ~also verified by jwt 

   res.status(200).send({'msg':"Login Sucessful","token":token});   //one the user authenticated at that point of time we'll generate and asign the token to the clint
 
}else{
res.status(200).send({"msg":"Wrong Credentials"}); 
}
}catch(err){
    res.status(400).send({ "err": err.message });
}


});







module.exports = { userRouter }