var http = require('http')
var fs = require('fs')
var url = require('url')

// 서버 생성
http.createServer( function(request, response){
    var pathname = url.parse(request.url).pathname;

    console.log("Request for "+ pathname + " received.");

    // 파일 이름이 비어있으면 index.html로 자동 이동
    if(pathname == "/") {
        pathname = "/index.html";
    }

    // 파일 읽기
    fs.readFile(pathname.substr(1), function(err, data){
        if (err){
            console.log(err);
            response.writeHead(404, {'Content-Type':'text/html'});
        } else {
            response.writeHead(200, {'Content-Type' : 'text/html'});
            response.write(data.toString());
        }
        response.end();
    })
}).listen(8081);


console.log("Server running at http://127.0.0.1:8081/");
