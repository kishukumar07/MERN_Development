const fs = require('fs');

usage 
  fs.readFile("./text.txt",{encoding:"utf-8"} ,(err, data) => { //{encoding:"utf-8"} /"utf-8"
    if (err) {
        console.log("error occured");
    }
    else {
        console.log(data);
    }
});
console.log("byy!!"); 


the above code behaves async  will resolve promise




 let data = fs.readFileSync("./text.txt","utf-8");
console.log(data); 
 console.log("byy!!"); 


// the above code behaves sync didnt return any promise  we stored data 