//crypto
//Nodejs用C/C++实现这些算法后，通过cypto这个模块暴露为JavaScript接口，这样用起来方便，运行速度也快

//MD5和SHA1
const crypto = require("crypto");

const hash = crypto.createHash("md5");

//可任意多次调用update()
hash.update("Hello,world!");
hash.update("Hello,nodejs!");

console.log(hash.digest("hex"));

//Hmac
//const crypto = require("crypto");
const hmac = crypto.createHmac("sha256","secret-key");
hmac.update("hello,world!");
hmac.update("Hello,nodejs!");

console.log(hmac.digest("hex"));

//AES

//Diffie-Hellman
