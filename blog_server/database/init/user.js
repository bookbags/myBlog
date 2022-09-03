const userModel = require("../collection/user.js");

(async () => {
    await userModel.create({
        userName: "bookbag",
        password: "123456"
    });
    console.log("user 初始化完成");
})();