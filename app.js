var express = require('express');
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();
var indexRouter = require('./server/routes/index.js');
var apiRouter = require('./server/routes/api/data.js');

app.use(morgan('dev'));

app.use(express.static( 'client/'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

mongoose.connect( process.env.MONGOLAB_URI || "mongodb://localhost/meanAPI" );

app.use('/', indexRouter);
app.use('/api/data', apiRouter);

var port = process.env.PORT || 3000;

app.listen(port, function(){
  console.log('listening on port '+port);
});
