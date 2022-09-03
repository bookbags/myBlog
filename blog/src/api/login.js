import request from "@/utils/request.js";
export async function login(data) {
    return await request({url: "/api/login", method: "post", data})
}
export async function regist(data) {
    return await request({url: "/api/login/regist", method: "post", data})
}