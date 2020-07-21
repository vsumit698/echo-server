const net = require('net');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  
const port = 8000;
const socket = net.createConnection({port:port,localPort:3050,localAddress: '127.0.0.1'},function(){
    console.log('client connected to server [CLIENT] ');
    console.log(socket.address(),'*****','server address is ',socket.remoteAddress,socket.remotePort);
    readline.question(`enter the input`, (input) => {
        socket.write(input)
    });
});
socket.on('data',function(chunk){
    console.log('received data on client side [CLIENT]',chunk.toString());
    readline.question(`enter the input`, (input) => {
        socket.write(input)
    });
});
socket.on('end',function(){
    console.log('connection ended by server [CLIENT]');
 })