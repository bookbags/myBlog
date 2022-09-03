const router = require("express").Router();
const sendData = require("../modules/resInfo");
const {globalSettingModel} = require("../database");
router.get("/", async(req, res)=>{
    const result = await globalSettingModel.find();
    res.send(sendData(200, "success", result[0]));
});

module.exports = router;