import= require ('./lib/import')
db =require ('./lib/db');
client=db('./db');

fs.createReadStream('sample!csv').pipe.import(client)
