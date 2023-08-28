const socketIO = require('socket.io');

function startWebSocket(server) {
    const io = socketIO(server);


  io.on('connection', (socket) => {
    // Handle WebSocket connection events, such as 'connect', 'disconnect', etc.
    // Implement event listeners for various WebSocket events
    
    socket.on('event', (data) => {
      // Handle WebSocket event
    });

    
  });


};

module.exports = { startWebSocket }

