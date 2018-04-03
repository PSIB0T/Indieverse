const port = (process.env.PORT || 8080)
export let config = {
    mongodb: 'mongodb://localhost:27017/indieverse',
    port,
    server: 'http://localhost:' + port,
    profileId: '5abce438c7025b23a59e0c8d'
}
