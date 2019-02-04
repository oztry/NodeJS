// node app --help
// node app display
// node app display --complete=false
// node app display --complete=false --group=test
// node app display --group=another --complete=false
// node app add --id=1 --task=test --group=test
// node app delete --id 1
// node app complete --id 1
// node app upload
// node app download
// {"list": []} - initial state of JSON Object

const yargs = require("yargs");

const commands = require("./commands");
commands.forEach(command => yargs.command(command));

// init parsing args...
yargs.argv;
