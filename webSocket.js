var http=require('http');
var fs=require('fs');
var io=require('socket.io');
var documentRoot='C:/Users/ghrwork/Desktop/html5/webSocket'; 
var  httpServer=http.createServer(function(req,res){
	console.log('someone come in');
var url=req.url;
var fileUrl=documentRoot+url;//得到文件的路径
console.log(fileUrl);
fs.readFile(fileUrl,function(err,data){

if(err){
	res.writeHeader(404,{'content-type':'text/html;charset="utf-8"'});
	res.write('The page is taken away by ET');
	res.end();
}
else{
	res.writeHeader(200,{'content-type':'text/html;charset="urf-8"'});
	res.write(data);
	res.end();
}
});
}).listen(8888);


var socket=io.listen(httpServer);
socket.sockets.on('connection',function(socket){
socket.emit('hello','welcome to mcode!')

socket.on('broadMsg',function(data){
	console.log(data);
socket.broadcast.emit('broad',data);
});

});