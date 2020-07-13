const WebSocketServer = require('ws');

const wss = new WebSocketServer.Server({
    port: 4000
});

wss.on('connection', function (ws) {
    let size = wss.clients.size;
    wss.clients.forEach((client)=>{
        if(client.readyState === WebSocket.OPEN){
            client.send(size);
        }
    });
});

wss.on('close', function () {
    let size = wss.clients.size;
    wss.clients.forEach((client)=>{
        if(client.readyState === WebSocket.OPEN){
            client.send(size);
        }
    });
});


