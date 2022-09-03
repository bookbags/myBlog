const {userModel} = require("../database");

const router = require("express").Router();
const sendData = require("../modules/resInfo");

//用户登录
router.post("/", async (req, res)=>{
    const {userName, password} = req.body;
    const user = await userModel.findOne({userName, password});
    console.log(userName, password, user);
    if(!user){
        res.send(sendData(400, "用户名或者密码错误", ""));
    }else{
        res.cookie("token", userName);
        res.send(sendData(200, "登陆成功", ""));
    }
});
//用户注册
router.post("/regist", async(req, res)=>{
    const {userName, password} = req.body;
    const user = await userModel.findOne({userName});
    console.log(userName, password, user);
    if(user){
        res.send(sendData(400, "用户名已存在", ""));
    }else{
        await userModel.create({userName, password});
        res.send(sendData(200, "注册成功", ""));
    }
});
module.exports = router;


