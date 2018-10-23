const fs = require('fs')
const os = require('os')
console.log(os.userInfo().username)
fs.writeFile('output.txt', os.userInfo().username, () => {})
fs.writeFileSync('outputSync.txt', os.userInfo().username)
fs.appendFile('outputSync.txt', '\n' + os.hostname(), () => {})

let name = fs.readFileSync('outputSync.txt', 'utf8')
console.log(name)

fs.readFile('output.txt', 'utf8', function(err, data){
    if(err)
        console.log(err)
    else
        console.log(data)
})

