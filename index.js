import express from "express";
import http from "http";
import {Server} from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

//Socket
io.on("connection", (socket)=>{
    socket.on('userMessage',(message)=>{
        io.emit("message", message)
    })
});

app.use(express.static("public"));

app.get("/",(req,res)=>{
    return res.sendFile("/index.html")
})

server.listen(80,()=>{
    console.log(`server is running.`)
})