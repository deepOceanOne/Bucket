// just a simple sample 
var fs = require('fs');
// init operation 
var NosClient = require('nos-node-sdk');
var nosclient = new NosClient();
nosclient.setAccessId('5b70e6e33f0844488e63e670862ab85e');
nosclient.setSecretKey('be51ffce06f948b5964db5e5f35e1357');
nosclient.setEndpoint('nos-eastchina1.126.net');
nosclient.setPort('80');

var readStream = fs.createReadStream('./test_file1.jpg');
    var size = fs.statSync('./test_file1.jpg').size;
var map = {
    bucket: 'from-wechat', //桶名
    key: 'test_file1.jpg', //对象名
    body: readStream, //上传的流
    length: size //流的长度
};
var cb = function(result) {
    console.log(result);
};

try {
    nosclient.put_object_stream(map, cb);
}
    catch(err) {
    console.log("Failed with code:" + err.code);
}