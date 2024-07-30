const fs = require('fs-extra')

var data = JSON.parse(fs.readFileSync(__dirname +  '/assets/js/aaq.json','utf8'))

console.log(data.data.length)