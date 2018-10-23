let math = require('./myMath')

if (process.argv.length > 2)
{
    let args = [];
    for(var i=2;i<process.argv.length;i++){
             args.push(+process.argv[i])
    }

    console.log(args)
    console.log(math.add(...args))
}