const express = require("express");
const http = require("http");
const app = express();
const imgPath = "D:\\study";

//处理路由
const globalRouter = require("./router/globalSetting");
const blogTypeRouter = require("./router/blogType");
const blogRouter = require('./router/blog');
const loginRouter = require("./router/login");

//websocket
const socketIo = require("socket.io");
const websocket = require("./websocket");

//优雅的处理cookie
const cookieParser = require("cookie-parser");

const server = http.createServer(app);
const io = socketIo(server);

//处理websocket消息
websocket(io);

//会自动解析cookie，保存到req.cookie中，
//在res中写入cookie方法，cookie(key, value, {});
app.use(cookieParser());

//允许跨域请求
app.use((req, res, next)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
});
app.use((req, res, next)=>{console.log("请求路径为", req.path);next()});
//获取请求体中的数据，保存在req.body 中
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static(imgPath));
app.use("/api/setting", globalRouter);
app.use("/api/blogtype", blogTypeRouter);
app.use("/api/blog", blogRouter);
app.use("/api/login", loginRouter);

const port = 8000;
server.listen(port, ()=>{
    console.log("服务器启动, 监听端口", port);
});