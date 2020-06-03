const http = require('http')

http.createServer((req, res)=> {
    res.end('hello NodeJS server')
})

server.listen(3000, ()=>{
    console.log('server has been started...')
})