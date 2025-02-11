
const timeLogger = (req, res, next) => {
    // console.log("Hello from Timelogger middleware!!")
    let startTime =new Date().getTime(); //time before routing
    next();
    let endTime =new Date().getTime(); //time after routing 
 console.log(`${endTime-startTime}ms`);     
}

module.exports = timeLogger; 