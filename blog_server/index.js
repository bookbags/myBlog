const express = require("express");
const http = require("http");
const globalRouter = require("./router/globalSetting");
const blogTypeRouter = require("./router/blogType");
const blogRouter = require('./router/blog');
const imgPath = "D:\\study";
const app = express();
const socketIo = require("socket.io");
const websocket = require("./websocket");

const server = http.createServer(app);
const io = socketIo(server);
//处理websocket消息
//websocket(io);
io.on("connection", (socket)=>{
    console.log("连接");
    socket.on("data", (socketId, msg)=>{
        console.log(socketId, msg);
    });
    socket.on("error", (err)=>{
        console.log(err);
    });
    socket.on("close", ()=>{
        console.log('关闭');
    })
})
app.use((req, res, next)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
});
app.use((req, res, next)=>{console.log("请求路径为", req.path);next()});
app.use(express.static(imgPath));
app.use("/api/setting", globalRouter);
app.use("/api/blogtype", blogTypeRouter);
app.use("/api/blog", blogRouter);

const port = 8000;
server.listen(port, ()=>{
    console.log("服务器启动, 监听端口", port);
});