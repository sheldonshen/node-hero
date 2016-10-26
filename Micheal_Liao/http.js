//HTTP协议
//HTTP服务器
"use strict";
//导入HTTPM模块
var http = require("http");

//创建HTTP server,并传入回调函数
var server = http.createServer(function(request,response){
    //回调函数接收request和response对象
    //获得http请求的method和url
    console.log(request.method +":"+request.url);
    //将http响应200写入response,同时设置Content-Type:text/html;
    response.writeHead(200,{"Content-Type":"text/html"});
    //将http响应的HTML写入response：
    response.end("<h1>Hello world!</h1>");	
});

//让服务器监听9999端口
server.listen(9999);

console.log("server is running at http://127.0.0.1:9999/");

//文件服务器

"use strict";
var url = require("url");//解析URL需要用到Node.js提供的url模块
console.log(url.parse("http://user:pass@host.com:8080/path/to/file?query=string#hash"));

//处理本地文件目录需要使用node.js提供的path模块，他可以方便的构造目录

var path = require("path");

//解析当前目录:
var workDir = path.resolve(".");
console.log(workDir);
//组合完整的路径
var filePath = path.join(workDir,'pub','index.html');
console.log(filePath); 
