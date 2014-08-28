var http = require('http');
var fs = require('fs');
// source: http://stackoverflow.com/a/9081436
function getUserHome() {
    return process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'];
}
var shaderFilePath = getUserHome() + '/myShaderToy.vert';
http.createServer(function (request, response) {
    response.writeHead(200, {
        'Content-Type': 'text/plain',
        'Access-Control-Allow-Origin' : '*'
    });
    fs.watch(shaderFilePath, { persistent: true }, function(event, filename) {
	if (event == 'change') {
	    var shader = fs.readFileSync(shaderFilePath);
	    response.end(shader);
	}
    });
}).listen(1234);
