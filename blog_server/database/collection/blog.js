const mongoose = require("mongoose");
const blogSchema = new mongoose.Schema({
    title:String,
    category:{
        name: String
    },
    scanNumber:Number,
    commentNumber: Number,
    description: String,
    createDate: Date,
    htmlContent: String,
    thumb: String

});

const blogModel = mongoose.model("blog", blogSchema);
module.exports = blogModel;