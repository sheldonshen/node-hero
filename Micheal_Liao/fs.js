//Node.js内置的fs模块就是文件系统模块,负责读写文件
//fs模块同时提供了异步和同步的方法

//异步方法
//$.getJSON('http://example.com/ajax', function (data) {
//    console.log('IO结果返回后执行...');
//});
//console.log('不等待IO结果直接执行后续代码...');

//而同步的IO操作则需要等待函数返回
//根据网络耗时，函数将执行几十毫秒~几秒不等:
//var data = getJSONSync('http://example.com/ajax');
//同步操作的好处是代码简单,缺点是程序将等待IO操作,在等待时间内,无法响应其他任何事件
//而异步读取不用等待IO操作,但代码较麻烦


//异步读取文件
"use strict";
var fs = require("fs");
//读取文本文件
fs.readFile("sample.txt",'utf-8',function(err,data){//err代表错误信息,data代表结果//这也是Node.js标准的回调函数
	if(err){
		console.log("reading file error");
		console.log(err);
	}else{
		console.log("reading file success");
		console.log(data);
	}
});
console.log("async reading file");

//读取图片文件
"use strict";
var fs = require("fs");
fs.readFile("Capture.PNG",function(err,data){
	if(err){
		console.log(err);
	}else{
		//console.log(data);
		//Buffer--> String
		var text =data.toString();
		console.log(text);
		//String-->Buffer
		var buf = new Buffer(text,'utf-8');
		console.log(buf);
		console.log(data.length+" bytes");
	}
});

//同步读取文件
"use strict";
var fs = require("fs");
try{
   var data = fs.readFileSync("sample.txt","utf-8");
   console.log("sync reading file data:");	
}catch(err){
	console.log("catch " + err);
}

//写文件
"use strict";
var fs = require("fs");
var data = "Hello,Node.js and express and KOA";
fs.writeFile("output.txt",data,function(err){
	if(err){
		console.log(err);
	}else{
		console.log("wirte file ok!");
	}
});
console.log("writing file async");//异步写文件

//同步写文件
"use strict";
var fs = require("fs");
var data = "Hello.node.js from sync writing";
fs.writeFileSync("output.txt",data);

//stat


//异步还是同步
