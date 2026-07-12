import express from "express";
const app = express();
import {Server} from "socket.io";
import http from "http";
import path from "path";
import type { Request, Response } from "express";
import type { Socket } from "dgram";




interface ClientToServerEvents{
    "room-join" : (roomId : string) => void;
    "send-to-room" : ( data : { msg : string}) =>void;
}
interface ServerToClientEvents{
    "welcome" : (msg : string) => void;
    "send-to-room" : (data : {msg : string}) => void;
}
interface InterServerData{ };

interface SocketData{
    roomId : string
}
const server = http.createServer(app);
const io = new Server<ClientToServerEvents, ServerToClientEvents, InterServerData, SocketData>(server);


app.get('/', (req : Request, res : Response)=>{
    console.log("done");
    res.send("good stuff");
});

import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get('/client1', (req : Request, res : Response)=>{
    res.sendFile(path.join(__dirname, "public","client.html"));
})
io.on("connection",(socket)=>{
    console.log("connected hai ji socket" , socket.id);
    
    socket.on("room-join", (roomId)=>{
        socket.data.roomId = roomId;
        socket.join(roomId);
        console.log(socket.data.roomId);
        socket.emit("welcome", "welcome ji " + socket.id);
    })
})
 
server.listen(3000, ()=>{
    console.log("running @3000");
})