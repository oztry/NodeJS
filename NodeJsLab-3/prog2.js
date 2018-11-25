const fs = require('fs')
fs.readFile('prog1_output.txt', 'utf8', function(err, data){
    if(err)
        console.log('File cannot be opened')
    else
        GetLastname(data)
})

let GetLastname = (data) => {
    let obj = JSON.parse(data)
    if (obj.lastname) 
        console.log(obj.lastname)
    else
        console.log('Invalid data passed from file')
}