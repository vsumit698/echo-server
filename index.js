var net = require('net');

var server = net.createServer();
const port = 8000;
// starts listens to port 8000
server.listen(port,function(){
   console.log('server starts listening on port',port);
});

server.on('connection',function(socket){
   // each socket is dedicated to specific client
   // socket.write('client connected to server [SERVER] ');
   console.log(socket.address(),'at server side',socket.remoteAddress,socket.remotePort);
   server.getConnections((err,count)=>{
      console.log('all Connectios',count);
   });
   socket.on('data',function(chunk){
      console.log('received data',chunk.toString()+'[SERVER]');
      socket.write(chunk.toString());
   });

   socket.on('end',function(){
      console.log('connection ended by client [SERVER]');
   });

   socket.on('error',function(error){
      console.log('error at server side',error);
   });

})
