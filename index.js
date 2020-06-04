const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req, res)=> {
    if (req.url === "/") {
        fs.readFile(path.join(__dirname, 'publiic', 'index.html'), (err, data) => {
            if (err) {
                throw err
            }
            res.writeHead(200, {
                "Content-type": "text/html"
            })
            res.end(data)
        })
    } else if (req.url === "/contact") {
        fs.readFile(path.join(__dirname, 'publiic', 'contact.html'), (err, data) => {
            if (err) {
                throw err
            }
            res.writeHead(200, {
                "Content-type": "text/html"
            })
            res.end(data)
        })
    }


server.listen(3000, ()=>{
    console.log('server has been started...')
})