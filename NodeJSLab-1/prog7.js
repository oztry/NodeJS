let math = require('./myMath')

if (process.argv.length != 5)
{
    console.log('Wrong number of parameters. Should be 3. Example: 1 2 add')
    process.exit()
}

let firstNum = +process.argv[2]
let secondNum = +process.argv[3]
let operation = process.argv[4]

try {
    console.log(math[operation](firstNum, secondNum))
}
catch(error) {
    console.log('Wrong operator. Proper operators are: add, substract.')
}

