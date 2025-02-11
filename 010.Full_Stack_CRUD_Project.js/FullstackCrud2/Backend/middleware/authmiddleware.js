const jwt = require('jsonwebtoken');


auth = (req, res, next) => {

        const token = req.headers.authorization; //removing .split(" ")[1] from here cause : readme.md 3rd point 

    if (token) { //if token is there lets decode and verify

        try{ //we removed callback so this handling error with try catch 
            const decodedtoken = jwt.verify(token.split(" ")[1], 'masai');  //added .split(" ")[1] will be if token is there  (err handled)
               if(decodedtoken){ 

                // console.log(decodedtoken)//we got author id that we passed while login 
                req.body.authorID=decodedtoken.authorID
                req.body.author=decodedtoken.author //manupulationg the req body 
                
                //for seeing where the payload is??
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