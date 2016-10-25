//hello.js
//在Node环境中,一个js文件就称之为一个模块(Module)
//"use strict";//始终使用严格模式
//console.log("hello world!");
"use strict";
var s="Hello";
function greet(name){
	console.log(s+","+name+"!");
}
//把函数greet作为模块的输出暴露出去，这样其他模块就可以使用greet函数了
module.exports=greet;
//结论:
//要在模块中对外输出变量（可以是任意的对象,数组,函数等等）
//module.exports=variable
//hello.js

//main.js
"use strict";
//引入hello模块（不要忘了写相对路径）
var greet = require("./hello");//require函数由Node提供,引入其他模块的输出对象
//var greet = require("hello");//只写模块名,则Node会依次在内置模块，全局模块和当前模块下查找hello.js
console.log(greet);
console.log(typeof greet);

var s = "sheldonshen";
greet(s);

//CommonJS规范
//这种模块加载机制被称为CommonJS规范

//深入理解模块机制
//JavaScript语言本身并没有一种模块机制来保证不同模块可以使用相同的变量名?
//Node.js加载了hello.js后，它可以把代码包装一下，变成这样执行
(function () {
    // 读取的hello.js代码:
    var s = 'Hello';
    var name = 'world';

    console.log(s + ' ' + name + '!');
    // hello.js代码结束
})();
//这样一来，原来的全局变量s现在变成了匿名函数内部的局部变量
//所以，Node利用JavaScript的函数式编程的特性，轻而易举地实现了模块的隔离

//main.js
