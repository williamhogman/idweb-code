var ws = require("nodejs-websocket");
var buffer = [];
var PLAYBACK = 20;

var broadcast = function(message) {
    if(buffer.length >= PLAYBACK) {
        buffer.shift();
    }
    buffer.push(message);
    server.connections.forEach(function(c){
        c.sendText(message);
    });
};

var server = ws.createServer(function(conn) {
    var ip = conn.headers["x-real-ip"] || conn.socket.remoteAddress;
    // Send the backlog
    buffer.forEach(function(x){
        conn.sendText(x);
    });

    conn.on("text", function (str) {
        var trm = str.trim();
        if(trm === "") {
            return;
        }
        broadcast(ip + ': ' + trm + "\n");
    });
}).listen(8801);

setInterval(function(){
    if(server.connections.length > 0) {
        broadcast("Robot: This is a test!");
    }
}, 10000);
