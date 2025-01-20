const http = require("http")
const fs = require("fs")

const server = http.createServer((req, res) => {
  if (req.url === "/data") {  //this is get request by default 
     
    try {
      const data = fs.readFileSync("./data.json", "utf-8")
      res.end(data)
    } catch (err) {
      res.end(err)
    }
  }  
  //making a post request  --at backend willnot come to local host only get request will come to the localhost(ui) it not frontend  -for other request except get you should prefer postman

  else if (req.url==="/adddata" && req.method =="POST"){
    /* console.log(req.body ,"data") //work only for express - all the data we are posting using postman in this route wil present inside req.body -without express you can see it is consoling undefined  (whatever data we are posting with http method using postman is comming in chuncks so it is getting undefined) and for this we have to use events here 
     */

    /*
  let datastructure=""; //for storing data
  req.on("data",(chunck)=>{  //using data event for getting data in chunck
      datastructure+=chunck;   //storing chunck data in datastructure
  })
 req.on("end",()=>{
   console.log(datastructure)
 }) //using .on with end event for consoling  data in chunks (we cant console  the whole data  at once thats why )   //we can do the all thing with express in easier way as compare to http way    and this is the not the best way to use this code again and again just for passing the data ... from postman to backend   so lets  learn a way  of express 
*/

      res.end("hello") 

    }
})


server.listen(4500, () => {
  console.log("server is running at port 4500");
})