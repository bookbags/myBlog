const blogTypeModel = require("../collection/blogType");
const blogModel = require("../collection/blog");
const fs = require("fs/promises");
const blogDir = "D:\\Web\\article";
const path = require("path");

async function readBlog(dirPath) {
    const pathObj = {};
    const pathContent = await fs.readdir(dirPath);
    for (let dir of pathContent) {
        const newPath = path.resolve(dirPath, dir);
        if ((await fs.stat(newPath)).isFile()) {
            pathObj[dir] = await analyzeBlog(newPath);
        } else {
            pathObj[dir] = await readBlog(newPath);
        }
    }
    return pathObj;
};
async function analyzeBlog(blogPath) {
    const blogContent = await fs.readFile(blogPath, "utf-8");
    return blogContent;
};
(async () => {
    const result = await readBlog(blogDir);
    const blogType = Object.keys(result);
    for (let type of blogType) {
        const articleNames = Object.keys(result[type]);
        await blogTypeModel.create({name: type, articleCount: articleNames.length});
        for (let name of articleNames) {
            await blogModel.create({
                title: path.basename(name, ".md"),
                category: {
                    name: type
                },
                scanNumber: 0,
                commentNumber: 0,
                description: "",
                createDate: Date.now(),
                htmlContent: result[type][name],
                thumb: ""
            })
        }
    }
    console.log("blog and blogType init successful");
})();