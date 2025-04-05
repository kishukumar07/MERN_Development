import express from 'express';
import pkg from 'winston';
const { transports, format } = pkg;
import expressWinston from 'express-winston';

const app = express();

// Request logger
app.use(expressWinston.logger({
    transports: [
        new transports.File({
            level: 'info',
            filename: 'infologs.log'
        })
    ],
    format: format.combine(
        format.json(),
        format.prettyPrint(),
        format.timestamp()
    )
}));



// Your normal routes
app.get('/', (req, res) => {
    res.send('Hi this is Niket logger');
});

app.get('/err', (req, res, next) => {
    next(new Error('This is an error'));
});



// Error logger (this will catch errors passed to `next()`)
// 👇 Error logger (MUST come after routes)
app.use(expressWinston.errorLogger({
    transports: [
        new transports.File({
            level: 'error',
            filename: 'errorlogs.log'
        })
    ],
    format: format.combine(
        format.json(),
        format.prettyPrint(),
        format.timestamp()
    )
}));


// Default error handler (optional but recommended)
app.use((err, req, res, next) => {
        res.status(500).send('Something went wrong!');
    });
    
app.listen(8080, () => {
    console.log('Server is started at 8080');
});
