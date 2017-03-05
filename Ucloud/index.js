var request = require('request');
var fs = require('fs');
var crypto = require('crypto');
var utf8 = require('utf8');
var util = require('util');


Base64 = function(content) {
	return new Buffer(content).toString('base64');
}

HmacSha1 = function(secretKey, content) {
	var hmac = crypto.createHmac('sha1', secretKey);
	hmac.update(content);
	return hmac.digest();
}



var UCloudPublicKey = "mrLzrKcvE+GMrYFyke/qOY8SYPq6ikflrJ/w4IMx17QTgB6Uc8tdtQ==";
var UCloudPrivateKey = "f0f1f1a6ecf29470b3c89dea0fcd24c0b37b2ae7";
var HTTPVerb = "PUT";
var ContentMD5 = "";
var ContentType = "image/jpeg";
var MyDate = "";
var CanonicalizedUCloudHeaders = "";
var bucket = "njk3j2.cn-sh2.ufileos.com";
var key = "ustorage";
var CanonicalizedResource = "/" + bucket + "/" + key;
var StringToSign =  HTTPVerb + "\n" + ContentMD5 + "\n" + ContentType + "\n" + MyDate + "\n" + 
	CanonicalizedUCloudHeaders +
	CanonicalizedResource;
console.log(StringToSign);
var Signature = Base64(HmacSha1(UCloudPrivateKey, StringToSign));
var Authorization = "UCloud" + " " + UCloudPublicKey + ":" + Signature;
console.log("Authorization: " + Authorization);


var urlstr = 'http://' + bucket + '.ufile.ucloud.cn/' + key;
var options = {
	url: urlstr,
	method: 'PUT',
	headers:{
		'Authorization': Authorization,
		'Content-Length': 10000
	}
};

function callback(err, response, body) {
	if (err) {
		return console.error("upload failed:", err);
	}
	console.log(response.caseless);
	console.log(body);

}


var pic_url ="http://ppe.oss-cn-shenzhen.aliyuncs.com/collections/36/1/thumb.jpg";

request(pic_url).pipe(request.put(options, callback));



