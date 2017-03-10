// just a simple sample 

var readStream = fs.createReadStream('filepath');
    var size = fs.statSync('filepath').size;
var map = {
    bucket: 'bucketName', //桶名
    key: 'objectName', //对象名
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