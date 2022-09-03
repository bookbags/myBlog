const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/localBlog").then(()=>{
    console.log("连接成功");
});
