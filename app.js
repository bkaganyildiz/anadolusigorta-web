var express = require('express');
var proxy = require("http-proxy-middleware");
var http = require("http");

var server = express();
server.use(express.static(__dirname + '/app'));
server.use("/api", proxy({target: 'http://localhost:8000', changeOrigin: true}));

var httpServer = http.createServer(server);
httpServer.listen(9000);