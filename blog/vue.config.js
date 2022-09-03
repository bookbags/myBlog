module.exports = {
    devServer:{
        port: 80,
        proxy:{ //代理
            "/api": {
                target: "http://localhost:8000"
            },
            "/img":{
                target: "http://localhost:8000"
            }
        }
    }
}