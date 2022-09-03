import request from "@/utils/request.js";
export default async function getGlobalApi() {
    return await request({url: "/api/setting", method: "get"})
}