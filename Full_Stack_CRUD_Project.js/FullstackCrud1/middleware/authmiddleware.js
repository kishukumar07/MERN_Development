const jwt = require('jsonwebtoken');




auth = (req, res, next) => {

    const token = req.headers.authorization.split(" ")[1];

    if (token) { //if token is there lets decode and verify
        try{ //we removed callback so this handling error with try catch 
            const decodedtoken = jwt.verify(token, 'masai');
               if(decodedtoken){
                next(); 
               }else{
                res.send({"msg":"please LOGIN!!"})   //if there is token but nt decodedtoken mean token malfunctioned so please login 
               }
        }catch(err){
           res.send({"err":err.message})  
        }
    }else{
        res.send({"msg":"please LOGIN!!"})  //if there no  token mean the user is not logged in yet now 
    }

}


module.exports = { 
    auth
 } //exporting the auth middleware