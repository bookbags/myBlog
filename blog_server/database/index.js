require("./connect");
const blogModel = require("./collection/blog");
const blogTypeModel = require("./collection/blogType");
const globalSettingModel = require("./collection/globalSetting");
const userModel = require("./collection/user.js");

module.exports = {
    blogModel,blogTypeModel, globalSettingModel,userModel
}