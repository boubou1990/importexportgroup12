var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
//var routes = require('./routes/index');
var users = require('./routes/users');
var level = require('level');
var db = level('./mydb');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', routes);
app.use('/users', users);

app.get('/', function(req, res) {
  res.render('form');
});

app.get('/identification', function(req, res) {
  res.render('identification');
});

//module.exports=db;
 /* POST contact page (submit). Ces valeurs seront transmises dans la base de données*/
//  app.post('/', function(req, res) {
// db.put(
// req.body.username,
// req.body.password,
// req.body.lastname,
// req.body.email,
// function(err) {
//     if (err) return res.json(500, err);
//     return res.json(200);
//   });
// });

app.post('/', function(req, res) {
db.put(req.body.username,'username');
db.put(req.body.password,'password');
db.put(req.body.lastname,'lastname');
db.put(req.body.email,'email');
res.json (req.body.username, req.body.password,req.body.lastname,req.body.email);
});

app.get('/signup:id', function(req, res) {
db.get(req.body.username,'username');
    if (err) return res.json(500, err);
    return res.json(200,user);
  });
});

var server = app.listen(3000,'127.0.0.1', function(req, res){

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
