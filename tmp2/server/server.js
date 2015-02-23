var express = require('express');
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var app = express();
var config = require('./config/config')[env];
require('./config/express')(app, config);
require('./config/mongoose')(config);
require('./config/passport')();
require('./config/routes')(app);
process.on('uncaughtException', function (err) {
  console.log('Error server');
  console.log(err);
});
app.listen(config.port);
console.log('Root path: ' + config.rootPath);
console.log('Listening on port: ' + config.port + ' ...');