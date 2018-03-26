let config = {
    mongodb: "mongodb://localhost:27017/indieverse",
    port: (process.env.PORT || 8080),
}
config.server = "http://localhost:" + config.port

module.exports = config;