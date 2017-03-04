
var fs = require('fs');
var http = require('http');

var QingStor = require('qingstor-sdk').QingStor;
var config = require('qingstor-sdk').Config('SINGMHOWMWATLOXUTWDK','I5elkSzxWLOt16czUtErvgXDiC29ubhRc0Ox0RBB');
var service = new QingStor(config);

var urllib = require('urllib');

urllib.request('http://ppe.oss-cn-shenzhen.aliyuncs.com/collections/35/8/thumb.jpg').then(function (result) {
  // result: {data: buffer, res: response object}
  console.log('-------------------------');
  console.log('-------------------------');

  console.log('body size is : '+result.data.length);
  console.log('-------------------------');
  console.log('-------------------------');
 			var test_bucket = service.Bucket('test-bucket767687766','pek3a');
			test_bucket.putObject('test_file4.jpg',{
				'body':result.data,
			},function(err,data){
				// console.log(data);
			});

 }).catch(function (err) {
  console.error(err);
});

/*

 var test_bucket = service.Bucket('test-bucket767687766','pek3a');
			test_bucket.putObject('test_file4.jpg',{
				'body':getfunc('http://ppe.oss-cn-shenzhen.aliyuncs.com/collections/35/8/thumb.jpg'),
			},function(err,data){
				// console.log(data);
			});

*/
