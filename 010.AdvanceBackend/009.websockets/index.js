//server side code....
import { WebSocketServer } from 'ws';


const wsServer = new WebSocketServer({ port: 9000 }) //created a websocket server..

wsServer.on('connection', (socket) => {
    // console.log(socket)//the details of client 

    //how we'll see the msg here .. which is sended from client side
    socket.on('message', (msg) => {
        console.log(msg.toString()); //will print the msg in buffer format ...
    });

    socket.send('hey im server') //sending msg from server to client   
    //can send the msg using interval setInterval 

// setInterval(()=>{
//     socket.send('hey im server'); 
// },1000) //1 sec    



})