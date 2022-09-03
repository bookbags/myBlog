require("./connect");
const blogModel = require("./collection/blog");
const blogTypeModel = require("./collection/blogType");
const globalSettingModel = require("./collection/globalSetting");

module.exports = {
    blogModel,blogTypeModel, globalSettingModel
}