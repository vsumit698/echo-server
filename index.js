var http = require('http');
http.createServer(function(request,response){
 response.writeHead(200,{
  'Access-Control-Allow-Origin': '*'
});
 var body = [];
 
 request.on('data',function(BufferMessage){
  //  response.write(BufferMessage);
    body.push(BufferMessage);
    console.log(BufferMessage.toString());
 });
 request.on('end',function(){
    response.end(Buffer.concat(body).toString());
 });
 }).listen(8080);