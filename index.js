const WebSocket = require('ws');

// Create a WebSocket server
const wss = new WebSocket.Server({ port: 2003 });

// Event listener for when a client connects to the server
wss.on('connection', function connection(ws) {
  console.log('A new client connected');

  // Event listener for when a message is received from a client
  ws.on('message', function incoming(message) {
    console.log('Received:', message);
  });

  // Send a message to the client
  ws.send('Hello, client! Welcome to the WebSocket server.');
});

console.log('WebSocket server started on port 8080');
