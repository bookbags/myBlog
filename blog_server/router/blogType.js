const router = require("express").Router();
const sendData = require("../modules/resInfo");
const {blogTypeModel} = require("../database");
router.get("/", async(req, res)=>{
    const result = await blogTypeModel.find();
    res.send(sendData(200, "success", result));
});

module.exports = router;