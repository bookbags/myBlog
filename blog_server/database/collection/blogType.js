const mongoose = require("mongoose");
const blogTypeSchema = new mongoose.Schema({
    name:String,
    articleCount:Number,
});

const blogTypeModel = mongoose.model("blogType", blogTypeSchema);
module.exports = blogTypeModel;