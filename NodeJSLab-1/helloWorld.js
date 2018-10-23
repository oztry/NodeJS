// for(var i=0;i<process.argv.length;i++){
//     console.log(process.argv[i]);
//   }
console.log(process.argv.length)
if (process.argv.length > 2)
    console.log('Hello ' + process.argv[2])
else
    console.log('Hello world!')