const express = require('express');
const http = require('http');
const url = require('url');

const app = express();

app.use(express.static(__dirname + '/web/'))

app.get('/index.html', function (req, res) {
  var options = {
    root: __dirname + '/app/',
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  };
  res.sendFile('index.html', options);
});

const server = http.createServer(app);

server.listen(8080, function listening() {
  console.log('Listening on %d', server.address().port);
});
