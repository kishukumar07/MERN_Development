import express from 'express';
import pkg from 'winston';
const { transports, format, transport } =pkg;
import expressWinston from 'express-winston';



const app = express();


app.use(expressWinston.logger({

    //transports are basically where we log(record )the logs ...
    transports: [
        new transports.File({
            level: 'error',
            filename: 'errorlogs.log'
        }),
        //we can add as many  transports we wants ...
        new transports.File({
            level: 'info',
            filename: 'infologs.log'
        })
    ],
    //format :how u want the data 
    format: format.combine(
        format.json(),
        format.prettyPrint(),
        format.timestamp()
    )
}) //thats it we have aded the logger 
);




app.get('/',(req,res)=>{

    res.send('hii this niket logger'); 

})



app.listen(8080,()=>{
    console.log('server is started at 8080')
}); 










