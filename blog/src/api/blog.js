import request from "@/utils/request.js";
export async function getAllBlog(params) {
    return await request({url: "/api/blog", method: "get",params})
}
export async function getBlogDetail(id){
    return await request({url: "/api/blog/"+id, method:"get"});
}