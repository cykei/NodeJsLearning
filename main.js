var http = require("http");
http.createServer(function(request, response){
    // HTTP 헤더 전송 - HTTP Status , Content Type
    response.writeHead(200, {'Content-Type' : 'text/pain'});

    // Response Body에 보내는 내용
    response.end("Hello World\n");
}).listen(8081);

console.log("Server running at http://127.0.0.1:8001");