const express = require('express');
const connection = require('./db');
const dotenv = require('dotenv');
dotenv.config();
const { userRouter } = require('./controllers/User.routes')
const { auth } = require('./middleware/authmiddleware')
const { noteRouter } = require('./controllers/note.route');
const cors=require('cors'); 
const app = express();


app.use(express.json());// Middleware to parse JSON requests

app.use(cors())


const port = process.env.port; // Default port

//Public Route -anyone can acess it 
app.use('/users', userRouter);

//AUTHORISED :Protected-Route -you need to login and authorized to acess 
app.use(auth)

app.use('/notes', noteRouter);


app.listen(port, async () => {
    try {
        await connection
        console.log(" Server connected to db")
    } catch (err) {
        console.log(err);
        console.log("err Occured at db connection");
    }
    console.log(`Server is running on port ${port}`);
});

