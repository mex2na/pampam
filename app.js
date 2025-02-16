var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// affectation  des routes
app.use('/', indexRouter);
app.use('/users', usersRouter);








// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  const errorMessage = err.message;
  const error = req.app.get('env') === 'development' ? err : {};

  // send error as JSON
  res.status(err.status || 500);
  res.json({
    message: errorMessage,
    error: error
  });
});

module.exports = app;
