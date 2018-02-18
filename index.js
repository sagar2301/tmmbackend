var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
io.set('origins', '*:*');

io.on('connection', function(socket){
  socket.on('message', function(msgData){
  	console.log(msgData);
    io.emit(msgData.tag, msgData.msg);
  });
});

http.listen(process.env.PORT, function(){
  console.log('listening on *:3000');
});
