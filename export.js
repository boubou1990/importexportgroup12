export= require ('./lib/import')
db =require ('./lib/db');
client=db('./db');

fs.createWriteStream('sample!csv').pipe.import(client)
