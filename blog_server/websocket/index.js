const socketIdList = [];
module.exports = function(io){
    io.on("connection", (socket)=>{
        socketIdList.push(socket.id);
        console.log("websocket 连接");
    });
}