const net = require('net');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  
const destinationPort = 8000;

const socket = net.createConnection({host:'127.0.0.1',port:destinationPort,localPort:3002,localAddress: '127.0.0.1'},function(){
    console.log('client connected to server [CLIENT] ');
    console.log(socket.address(),'*****','server address is ',socket.remoteAddress,socket.remotePort);
    readline.question(`enter the input`, (input) => {
        socket.write(input);
    });
});
socket.on('data',function(chunk){
    console.log('received data on client side [CLIENT]',chunk.toString());
    readline.question(`enter the input`, (input) => {
        socket.write(input);
        // socket.end();
    });
});
socket.on('end',function(){
    console.log('connection ended by server [CLIENT]');
});

socket.on('error',function(error){
    if(error.code === 'ECONNRESET'){
        console.log('server disconnected');
        return;
    }
    console.log('error at client side',error);
 });