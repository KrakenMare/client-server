import express from 'express'
import path from 'path'
import logger from 'morgan'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'

const app = express()

app.set('json spaces', 40);
app.use(express.static(path.join(__dirname, 'build')));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/client', function (req, res) {
    res.sendFile(path.join(__dirname + '/VotrClient.swf'));
  });
  
  
  
  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
  
  app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });
  
  // error handler
  app.use(function(err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
      res.status(err.status || 500);
    res.send('Unable to access!');
  
  });
  
  app.listen(8080, function () {
    console.log('Server is on port 8080')
  })