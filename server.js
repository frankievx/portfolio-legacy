var express = require('express');
var http = require('http');

const app = new express();
const server = new http.Server(app);

app.use(express.static(__dirname));

var config = {
	port: 8000,
	host: 'localhost'
}

server.listen(config.port, (err) => {
  if (err) {
    console.error(err);
  }
  console.info('==> 💻  Open http://%s:%s in a browser to view the app.', config.host, config.port);
});