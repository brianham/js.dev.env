module.exports = SocketServer;

const SocketIo = require('socket.io');

// Combination Constructor/Prototype Pattern
function SocketServer() {
    this.server = {};
}

SocketServer.prototype = {

    constructor: SocketServer,

    initialize: function(port) {
        try {

            this.server = new SocketIo();
            this.server.on('connection', this._onConnection);
            this.server.listen(port);

            console.log(`server: listening on port: ${port}`);

        } catch(error) {
            console.log(`server: error: ${error}`);
        }
    },

    sendMessage: function (message) {
        this.server.emit(message);
    },

    _onConnection(socket) {

        try {

            console.log(`server: client connection made`);

            socket.on('disconnect', (socket) => {
                // socket.disconnect() ???
                console.log(`server: client disconnected`);
            });

            //socket.on('message', { "handshake": "test"});

        } catch(error) {
            console.log(`server: error: ${error}`);
        }
    }
}


