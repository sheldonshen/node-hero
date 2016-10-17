var http = require("http");
http.createServer(function(req,res){
	res.writeHead("200",{"Content-Type":"text/html"});
	res.write("<h1>nodejs server </h1>");
	res.end("<p>PCAT</p>");
}).listen(3000);
console.log("HTTP Server is listening at port 3000");
