const http = require('http')
const fs = require('fs')
const path = require('path')
const express = require('express')

// const server = http.createServer((req, res)=> {
//     if (req.url === "/") {
//         fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
//             if (err) {
//                 throw err
//             }
//             res.writeHead(200, {
//                 "Content-type": "text/html"
//             })
//             res.end(data)
//         })
//     } else if (req.url === "/contact") {
//         fs.readFile(path.join(__dirname, 'public', 'contact.html'), (err, data) => {
//             if (err) {
//                 throw err
//             }
//             res.writeHead(200, {
//                 "Content-type": "text/html"
//             })
//             res.end(data)
//         })
//     }
// })

// let filePath = path.join(__dirname, "public", req.url === '/' ? 'index.html' : req.url)
// const ext = path.extname(filePath)
// if (!ext) {
//     filePath += '.html'
// }
// fs.readFile(filePath, (err, contents) => {
//     if (err) {
//         fs.readFile(path.join(__dirname, 'public', 'error.html'), (err, data) => {
//             if(err) {
//                 res.writeHead(500)
//                 res.end('Error')
//             } else {
//                 res.writeHead(200, {
//                     'Content-type' : 'text/html'
//                 })
//                 res.end(data)
//             }
//         })
//     } else {
//         res.writeHead(200, {
//             'Content-type' : 'text/html'
//         })
//         res.end(contents)
//     }
// })
// })


// server.listen(3000, ()=>{
//     console.log('server has been started...')
// })

// function test () {
//     console.log('Hi');
// }
// test();

// function call(func) {
// func();
// };

// let testtest = function() {
// console.log("just hi")
// };

// call(testtest);

// testtest();

// var file_reader = fs.readFileSync('text.txt', 'utf8');
// console.log(file_reader)

// var server = http.createServer(function(req, res) {
//     res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
//     var obj = {
//         model: 'Tesla model x',
//         speed: '350',
//         wheels: '6'
//     };
//     res.end(JSON.stringify(obj));
// });

// server.listen(3000, '127.0.0.1')

const app = express();

app.get('/', function(req, res){
    res.send('This is home')
});
app.get('/news', function(req, res){
    res.send('This is news')
});
app.get('/news/:name/:tag', function(req, res){
    res.send('ID is - ' + req.params.name + req.params.tag)
});

app.listen(3000);