// import the server and start it
const server = require('./api/server')

server.listen(5000, ()=>{
    console.log('server is listening on 5000')
})