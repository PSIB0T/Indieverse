let port = (process.env.PORT || 8080)
let config = {
    mongodb: "mongodb://localhost:27017/indieverse",
    port,
    server: "http://localhost:" + port
}

module.exports = config;