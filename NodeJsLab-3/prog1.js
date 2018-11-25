//npm i yargs --save
//node prog1.js --name Jan --lastname Nowak
const yargs = require('yargs')
const fs = require('fs')
const obj = {
    name: yargs.argv['name'],
    lastname: yargs.argv['lastname']
    };
fs.writeFile('prog1_output.txt', JSON.stringify(obj), () => {
    console.log('Parameter values saved to file')
})