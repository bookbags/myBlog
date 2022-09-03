const mongoose = require("mongoose");
const globalSettingSchema = new mongoose.Schema({
    avatar: String,
    siteTitle: String,
    github: String,
    qq: String,
    qqQrCode:  String,
    weixin: String,
    weixinQrCode:String,
    mail: String,
    icp: String,
    githubName: String,
    favicon: String,
});

const globalSettingModel = mongoose.model("globalSettingModel", globalSettingSchema);
module.exports = globalSettingModel;