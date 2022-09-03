const router = require("express").Router();
const sendData = require("../modules/resInfo");
const {blogModel} = require("../database");
const marked = require("marked");
router.get("/", async (req, res) => {
    const {
        page = 1,
        limit = 10
    } = req.query;
    console.log(page, limit);
    const total = await blogModel
        .find()
        .count();
    const result = await blogModel
        .find()
        .skip((page - 1) * limit)
        .limit(limit)
        .select("-htmlContent");
    res.send(sendData(200, "success", {total, rows: result}));
});
router.get("/:id", async (req, res) => {
    const result = (await blogModel.findOne({_id: req.params.id})).toObject();
    result.htmlContent = marked.marked(result.htmlContent);
    result.menu = analyzeMenu(result.htmlContent);
    res.send(sendData(200, "success", result));
})

module.exports = router;

function analyzeMenu(html) {
    const menu = /(?<=h[\d]\s+id=")([\w\W]+?)(?=")/g;
    return html
        .match(menu)
        .map(item => ({
            name : item,
            id: item
        }));
}