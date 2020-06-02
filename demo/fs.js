const fs = require('fs')
const path = require('path')
fs.mkdir(path.join(__dirname, "test"), (err)=>{
    if (err) {
        throw err
    }
    console.log("new folder")
})

const filePath = path.join (__dirname, 'text', 'text.txt')
fs.writeFile(filePath, "Hello nodeJS", (err)=> {
    if (err){
        throw err
    }
    console.log("file created")
})

fs.appendFile(filePath, "\nHello nodeJS again", (err)=> {
    if (err){
        throw err
    }
    console.log("file created")
})