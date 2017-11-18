var express = require('express');
var proxy = require("http-proxy-middleware");
var http = require("http");

var server = express();
server.use(express.static(__dirname + '/app'));
server.use("/", proxy({target: 'http://10.16.56.78:8000', changeOrigin: true}));

var httpServer = http.createServer(server);
httpServer.listen(9000);