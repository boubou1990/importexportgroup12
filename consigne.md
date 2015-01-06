#node

signin form:accept username/email
signup form: username, email, pwd, firstname, lastname, server+client? valid
import/export csv json
Ajx request to communicate with the server only one url for the screens
Utilisation de cookies

#create 2 command, import/export './bin/import' et './bin/export'
Each command take 2 options, "--help" and "--format"

"#import"
./bin/import --help
import  [--help] [--format{name}] output
introduction message
help     print this message
format {name}   one of CSV(default)/JSON
output imported file

leveldb schema
user namespace
key "users:#{username}:#{propriete}"
properties:"lastname", "firstname", "email", "password"

 layout
 /.gitignore
 /package.json(name, versions, dependencies)
 /.npmignore
 /bin/start
 /bin/import
 /bin/export
 /db/.gitignore
 /lib
 /LICENCE
 /readMe mettre email des contributeurs
 /tests

 web
 /GET return html
 /USER get JSON object representing the user or null of not logged in
 /user/signing POST  send username/pwd return user object /val
 /user/signup POST send user prop return user object /val

 On peut utiliser minimist
 import must implement the streamReadable class. Here's an example on how to use the import module

 import= require ('./lib/import')
 db =require ('./lib/db');
 client=db('./db');

fs.createReadStream('sample!;csv').pipe.import(client)

Export must implement the streamWritable class

export= require ('./lib/import')
db =require ('./lib/db');
client db('./db');

fs.createWriteStream('sample!;csv').pipe.import(client)

minimist[]
