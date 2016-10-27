//文件操作
var fs = require("fs");
function copy(src,des){
	fs.writeFileSync(des,fs.readFileSync(src));
}

function main(argv){
	copy(argv[0],argv[1]);
}

//print process.argv 
/*process.argv.forEach((val,index,array)=>{//es6新增特性：arrow function
	console.log(`${index}:${val}`);//es6新增特性:template string
});*/

main(process.argv.slice(2));

/*process是一个全局变量，可通过process.argv获得命令行参数。
由于argv[0]固定等于NodeJS执行程序的绝对路径，
argv[1]固定等于主模块的绝对路径，
因此第一个命令行参数从argv[2]这个位置开始*/

/*var fs = require('fs');

function copy(src, dst) {
    fs.writeFileSync(dst, fs.readFileSync(src));
}

function main(argv) {
    copy(argv[0], argv[1]);
}

main(process.argv.slice(2));*/



//copyLargeFile
/*上边的程序拷贝一些小文件没啥问题，但这种一次性把所有文件内容都读取到内存中后再一次性写入磁盘的方式不适合拷贝大文件，
内存会爆仓。对于大文件，我们只能读一点写一点，直到完成拷贝。因此上边的程序需要改造如下*/

var fs = require("fs");

function copy(src,dest){
	fs.createReadStream(src).pipe(fs.createWriteStream(dest));
}

function main(argv){
	copy(argv[0],argv[1]);
}

main(process.argv.slice(2));

//Buffer:数据块

//Buffer:stream of binary data
/*var bin = new Buffer([0x68, 0x65, 0x6c, 0x6c, 0x6f]);
var sub = bin.slice(2);
console.log("sub=["+sub+"]");
sub[0]=0x65;//把原buffer也修改了
console.log(bin);//[0x68, 0x65, 0x65, 0x6c, 0x6f]*/

var bin = new Buffer([0x68, 0x65, 0x6c, 0x6c, 0x6f]);
var dup = new Buffer(bin.length);
bin.copy(dup);
dup[0]=0x48;
console.log(bin);
console.log(dup);
//总之,Buffer将js的数据处理能力从字符串扩展到了任意二进制数据
