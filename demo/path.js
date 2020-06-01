const path = require('path')

console.log('file name: ', path.basename(__filename))
console.log('dir name: ', path.dirname(__filename))
console.log('extname name: ', path.extname(__filename))
console.log('parse: ', path.parse(__filename).name)