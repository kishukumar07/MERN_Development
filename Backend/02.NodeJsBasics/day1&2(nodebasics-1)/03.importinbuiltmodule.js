// const os =require("os"); 
// console.log(os);
// console.log(os.cpus());
// console.log(os.cpus()[0]);
// console.log(os.freemem())//bytes


//file System module 
// const fs =require("fs"); 

// const fs =require("fs");  //To use the callback and sync APIs:
// const fs = require('node:fs/promises');   //To use the promise-based APIs:
// console.log(fs.open()); 


const { createHmac } = require('node:crypto');
const secret = 'i have no coins';
const hash = createHmac('sha256', secret)
               .update('I love Cryptocurrency')
               .digest('hex');
console.log(hash);
// Prints:
//   c0fa1bc00531bd78ef38c628449c5102aeabd49b5dc3a2a516ea6ea959d6658e