var express = require('express');
var stormpath = require('express-stormpath');

var app = express();
var apiFile = __dirname + '/apiKey-1VKB8E8PJD02FD9WDJDUGFCBE.properties';
app.use(stormpath.init(app, {
    apiKeyFile: apiFile,
    application: 'https://api.stormpath.com/v1/applications/2ivkL1zYimlC6d2SUK60C0',
    secretKey: 'some_long_random_string',
}));

app.get('/', function(req, res) {
  res.send('home page!');
});
 
app.get('/secret', stormpath.loginRequired, function(req, res) {
  res.send('secret page!');
});

app.listen(3000);