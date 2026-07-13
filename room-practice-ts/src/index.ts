import express from "express";
const app = express();
import {Server} from "socket.io";
import http from "http";
import path from "path";
import type { Request, Response } from "express";

const server = http.createServer(app);
const io = new Server<ClientToServerEvents, ServerToClientEvents, InterServerData, SocketData>(server);

// Socket.IO has no idea what events exist in your app. So when you write socket.emit("welcome", ...)
// — TypeScript can't help you. Wrong event name, wrong payload shape, wrong argument count — 
// all silently allowed. You only find out something's wrong at runtime when nothing works.
// You're telling Socket.IO: "here is the exact contract of every event in this app.
// " Now the Server class internally uses those interfaces to type every socket it creates. So when you write socket.emit(...)
//  inside io.on("connection", socket => {...}) — TypeScript already knows socket can only emit ServerToClientEvents,
//   and can only receive ClientToServerEvents.
// Wrong event name → red line immediately. Wrong payload shape → red line immediately. Before you even run the server.


interface ClientToServerEvents{
    "room-join" : (roomId : string) => void;
    "send-to-room" : ( data : { msg : string}) =>void;
}

interface ServerToClientEvents{
    "welcome" : (data : {msg : string, from : string}) => void;
    "send-to-room" : (data : {msg : string,
        from : string
    }) => void;
}

interface InterServerData{ };

interface SocketData{
    roomId : string
}


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

        socket.emit("welcome",{
             msg : "hey ji welcome",
             from : socket.id
            }
        );

    })
    socket.on("send-to-room", (data)=>{
        io.to(socket.data.roomId).emit("send-to-room", {msg: data.msg , from : socket.id});
    })
    
})
 
server.listen(3000, ()=>{
    console.log("running @3000");
})