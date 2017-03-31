var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');
var open = require('open');
var port = 3000;

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

io.on('connection', function(socket){
  console.log('connection made');

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

http.listen(port, function(){
  console.log('listening on port: ' + port);
  open('http://localhost:' + port)
});

