//stream
//从文件流读取文本内容的示例
"use strict";
var fs = require("fs");

//打开一个流:
var rs = fs.createReadStream("sample.txt","UTF-8");

//data事件表示流的数据已经可以读取了，
//data事件可能发生多次,每次传递的chunk是流的一部分数据
rs.on("data",function(chunk){
	console.log("DATA:");
	console.log(chunk);
});

//end事件表示流已经到末尾了，没有数据可以读取了
rs.on("end",function(){
	console.log("END");
});

//error事件表示出错了
rs.on("error",function(err){
	console.log("ERROR:"+err);
});

//以流的形式写入文件,只需要不断调用write()方法，最后以end()结束
"use strict";
var fs = require("fs");
var ws1 = fs.createWriteStream("output1.txt","UTF-8");
ws1.write("使用stream写入文本数据......\n");
ws1.write("END......");
ws1.end();

var ws2 = fs.createWriteStream("output2.txt","UTF-8");
ws2.write(new Buffer("使用stream写入二进制数据","UTF-8"));
ws2.write(new Buffer("END.","UTF-8"));
ws2.end();
//所有可以读取数据的流都继承自stream.Readable,所有可以写入的流都能继承自stream.Writable

//pipe
//一个Readable流和一个Writable流串起来后，所有的数据自动从Readable流进入Writable流，这种操作叫pipe。
//复制文件
"use strict";
var fs = require("fs");

var rs = fs.createReadStream("sample.txt","UTF-8");
var ws = fs.createWriteStream("copied.txt","UTF-8");

rs.pipe(ws);


//默认情况下，当Readable流的数据读取完毕，end事件触发后，将自动关闭Writable流。
//如果我们不希望自动关闭Writable流，需要传入参数rs.pipe(ws,{end:false});
