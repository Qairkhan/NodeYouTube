const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req, res)=> {
    res.end('<h1>hello NodeJS server</h1>')
})

server.listen(3000, ()=>{
    console.log('server has been started...')
})