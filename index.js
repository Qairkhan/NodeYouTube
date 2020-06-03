const http = require('http')

http.createServer((req, res)=> {
    res.end('hello NodeJS server')
})