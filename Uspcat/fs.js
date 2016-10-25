var fs = require("fs");
fs.readFile("file.txt","UTF-8",function(err,data){
    if(err){
    	console.log(err);
    }else{
    	console.log(data);
    }
});
console.log("read file done!");


var fs = require("fs");
var data = fs.readFileSync("file.txt",'UTF-8');
console.log("data="+data);
console.log("read file done");
