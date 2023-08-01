const WebSocket = require('ws') 
var http = require('http');
var fs = require('fs');


var httpserver = http.createServer(function(request, response) 
{
  if(request.url=="/")
  {
    fs.readFile("./files/index.html",(err,data)=>{
        response.write(data)
        response.end();
    })
  }
}).listen(8000, function() {
    console.log((new Date()) + 
      ' Server running on: 8000 ');
});
const wss=new WebSocket.Server({server:httpserver})
wss.on("connection",(clientws)=>{
  clientws.send("Hello Client")
  clientws.on("message",(msg)=>{
    console.log("Received "+msg)
    clientws.send("Received "+ msg)
  })
})