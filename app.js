require('dotenv').config(); 
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var artifactsRouter = require('./routes/artifacts'); 
var gridRouter = require('./routes/grid');
var pickRouter = require('./routes/pick');

const mongoose = require('mongoose');

const connectionString = process.env.MONGO_CON;
mongoose.connect(connectionString);

// Get the default connection
const db = mongoose.connection;

// Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function(){
    console.log("Connection to DB succeeded");
});


var app = express();
var resourceRouter = require('./routes/resource'); // Import the resource routes

// Other middleware and configurations

// Use the resource routes for all /resource endpoints
app.use('/resource', resourceRouter);




// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json()); 
app.use(express.urlencoded({ extended: false })); 
app.use(cookieParser());  
app.use(express.static(path.join(__dirname, 'public')));
app.use('/artifacts', artifactsRouter); 
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/grid', gridRouter);
app.use('/randomitem', pickRouter);



const Artifact = require("./models/artifact");

async function recreateDB(){
    // Delete everything in the collection
    await Artifact.deleteMany();

    // Create new instances
    let instance1 = new Artifact({ artifactName: "Ancient Vase", origin: "Greece", age: 2300 });
    let instance2 = new Artifact({ artifactName: "Roman Coin", origin: "Rome", age: 1900 });
    let instance3 = new Artifact({ artifactName: "Egyptian Statue", origin: "Egypt", age: 3200 });

    // Save instances
    instance1.save().then(doc => {
        console.log("First object saved:", doc);
    }).catch(err => {
        console.error(err);
    });

    instance2.save().then(doc => {
        console.log("Second object saved:", doc);
    }).catch(err => {
        console.error(err);
    });

    instance3.save().then(doc => {
        console.log("Third object saved:", doc);
    }).catch(err => {
        console.error(err);
    });
}

// Seed database if necessary
let reseed = true;
if (reseed) { recreateDB(); }

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// Start the server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
module.exports = app;
