import= require ('./lib/import')
db =require ('./lib/db');
client=db('./db');
var argv = require('minimist')(process.argv.slice(2));
console.dir(argv);

fs.createReadStream('sample!csv').pipe.import(client)
