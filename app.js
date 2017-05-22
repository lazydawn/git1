// Module dependencies
var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');
var dotenv = require('dotenv').config();
var serveStatic = require('serve-static');

var passport = require('passport');
var passportConfig = require('./config/passport');
var expressValidator = require('express-validator');
var session = require('express-session');

// Create Express server.
var app = express();

// Connect to MongoDB.
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on('error', function(){
  console.log('MongoDB connection error. ');
  process.exit();
});

// View engine setup.
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Express configuration.
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist')));
app.use(serveStatic(path.join(__dirname, 'dist/images/icons')));
app.use(function(err,req,res,next){
    if(err.name == 'UnauthorizedError'){
       res.status(401);
       res.json({message: err.name + ":" + err.message })

    }

});
app.use(expressValidator());
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: process.env.SESSION_SECRET,
  cookie: {
    maxAge: 60000
  }
}));
app.use(passport.initialize());
app.use(passport.session());

var routes = require('./routes');
app.use('/', routes);

module.exports = app;
