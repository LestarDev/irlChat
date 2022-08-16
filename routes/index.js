var express = require('express');
var router = express.Router();
const s = require('socket.io');

import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const port = process.env.PORT || 3700;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var midPort = app.listen(port, function () {
  console.log('Node.js listening on port ' + port);
})

const httpServer = createServer();
const io = new Server(httpServer, {});
io.on("connection", (socket) => {
  sockets.on('connection', function (socket) {
    socket.emit('message', { message: 'Welcome to the Real Time Web Chat' });
    socket.on('send', function (data) {
      io.sockets.emit('message', data);
  })});
});

httpServer.listen(3000);

module.exports = router;
