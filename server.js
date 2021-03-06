// modules =================================================
require('dotenv').config();
var express = require('express');
var favicon = require('serve-favicon');
var path = require('path');
var validator = require('express-validator');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
// var mongoose = require('mongoose');
var multer = require('multer');
var passport = require('passport');
var cookieParser = require('cookie-parser');
var session = require('express-session');

// configuration ===========================================
// config files
// var db = require('./config/db');

// set our port
var port = process.env.PORT || 3000;

// connect to our mongoDB database
// mongoose.connect(process.env.MONGODB_URI || db.url);
// mongoose.connect(process.env.MONGODB_URL || db.url);

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// get all data/stuff of the body (POST) parameters
// parse application/json
app.use(bodyParser.json());

// parse application/vnd.api+json as json
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));
multer();
app.use(session({
  secret: 'this is the secret',
  resave: true,
  saveUninitialized: true
}));
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());
app.use(validator());

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public'));

// routes ==================================================
require('./app/routes')(app); // configure our routes

// start app ===============================================
// startup our app at http://localhost:3000
app.listen(port);
console.log('Server is running on port ' + port);

// expose app
exports = module.exports = app;
