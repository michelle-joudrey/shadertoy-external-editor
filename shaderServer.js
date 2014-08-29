var shaderFilePath = getUserHome() + '/myShaderToy.vert';
var sslKeyPath = getUserHome() + '/localhost-key.pem';
var sslKeyCertPath = getUserHome() + '/localhost-key-cert.pem';

var fs = require('fs');

var options = {
    key:  fs.readFileSync(sslKeyPath),
    cert: fs.readFileSync(sslKeyCertPath)
};

var app = require('https').createServer(options)
var io = require('socket.io')(app);

// source: http://stackoverflow.com/a/9081436
function getUserHome() {
    return process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'];
}

// source: http://stackoverflow.com/a/110588580
function ab2str(buf) {
    return String.fromCharCode.apply(null, new Uint16Array(buf));
}

fs.watch(shaderFilePath, { persistent: true }, function(event, filename) {
    if (event == 'change') {
	shaderUpdated();
    }
});

function shaderUpdated() {
    var shader = fs.readFileSync(shaderFilePath);
    var shaderText = ab2str(shader);
    io.emit('shaderUpdate', shaderText);
    console.log('Updated shader');
}

app.listen(1234);
console.log('Awaiting connection');
io.on('connection', function (socket) {
    console.log('Client connected');
    shaderUpdated();
    socket.on('disconnect', function () {
	console.log('Client disconnected');
    });
});
