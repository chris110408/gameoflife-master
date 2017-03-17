var http = require('http');
const path = require('path');
const webpack = require('webpack');
const express = require('express');
const config = require('../webpack.config.dev.js');








import dummyData from './dummyData';
import serverConfig from './config';

const app = express();



app.use(express.static('public'))

global.navigator = global.navigator || {};
global.navigator.userAgent = global.navigator.userAgent || 'all';

const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath
}));
app.use(require('webpack-hot-middleware')(compiler));




app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../index.html'));
});

var server = http.createServer(app);




server.listen(8000, function(err) {
  if (err) {
    return console.error(err);
  }

  console.log('Listening at http://localhost:8000/');
});

