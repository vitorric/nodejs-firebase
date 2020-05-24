const express = require('express'),
  bodyParser = require('body-parser'),
  app = express();

app.use(
  bodyParser.json({ limit: '1000MB' }),
  bodyParser.urlencoded({ extended: true })
);

app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Headers', 'Content-type, Accept, Authorization');

  console.log('IP: ', req.connection.remoteAddress);

  next();
});

require('./src/routes')(app);

app.set('port', 3000);

app.listen(app.get('port'), () => {
  console.log('Server running on port %d', app.get('port'));
});
