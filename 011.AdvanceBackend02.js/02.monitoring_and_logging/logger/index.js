import express from 'express';
import { transports, format, transport } from 'winston';
import expressWinston from 'express-winston';



const app = express();


app.use(expressWinston.logger({
    transports: [
        new transports.File({
            level: 'error',
            filename: 'errorlogs.log'
        })
//we can add as many  transports we wants ...
    ]

}));






















