var http = require ("http"), fs = require("fs");
var html = fs.readFileSync("./index.html")
var AWS = require("aws-sdk")
var uuid = require("node-uuid")
var cidrblock = {CidrBlock: "172.16.0.0/16"}

http.createServer(function(req,res) 
{
	res.write(html);
	ec2.createVpc(cidrblock, function(err, data)
	{
		if (err) console.log(err,err.stack);
		else	console.log(data);	
	});
	res.end();
}).listen(8080);